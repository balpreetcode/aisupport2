import { prisma } from '../../config/database';
import * as conversationService from '../conversation.service';
import { getNextFromQueue, markAssigned } from './queue';
import { emitToConversation, emitToUser } from '../../socket';

type AgentAvailability = 'online' | 'busy' | 'away' | 'offline';

interface AgentStatus {
  userId: string;
  availability: AgentAvailability;
  maxConcurrent: number;
  currentCount: number;
}

/**
 * Find available agent and assign conversation
 */
export async function assignToAvailableAgent(conversationId: string): Promise<string | null> {
  const agent = await findAvailableAgent();

  if (!agent) {
    return null;
  }

  // Assign conversation
  await conversationService.assignConversation(conversationId, agent.userId);

  // Update agent count
  await incrementAgentCount(agent.userId);

  // Mark as assigned in queue
  await markAssigned(conversationId);

  // Notify agent
  emitToUser(agent.userId, 'conversation:assigned', { conversationId });

  // Notify customer
  emitToConversation(conversationId, 'conversation:assigned', {
    conversationId,
    agentId: agent.userId,
  });

  return agent.userId;
}

/**
 * Find an available agent
 */
async function findAvailableAgent(): Promise<AgentStatus | null> {
  const agent = await prisma.agentStatus.findFirst({
    where: {
      availability: 'online',
      currentCount: { lt: prisma.agentStatus.fields.maxConcurrent },
      user: { status: 'active', role: { in: ['agent', 'supervisor'] } },
    },
    orderBy: { currentCount: 'asc' },
  });

  if (!agent) return null;

  return {
    userId: agent.userId,
    availability: agent.availability as AgentAvailability,
    maxConcurrent: agent.maxConcurrent,
    currentCount: agent.currentCount,
  };
}

/**
 * Update agent availability
 */
export async function updateAgentAvailability(
  userId: string,
  availability: AgentAvailability
): Promise<void> {
  await prisma.agentStatus.upsert({
    where: { userId },
    update: { availability, lastActivityAt: new Date() },
    create: { userId, availability },
  });

  // If coming online, try to assign waiting conversations
  if (availability === 'online') {
    await processQueue();
  }
}

/**
 * Get agent status
 */
export async function getAgentStatus(userId: string): Promise<AgentStatus | null> {
  const status = await prisma.agentStatus.findUnique({
    where: { userId },
  });

  if (!status) return null;

  return {
    userId: status.userId,
    availability: status.availability as AgentAvailability,
    maxConcurrent: status.maxConcurrent,
    currentCount: status.currentCount,
  };
}

/**
 * Increment agent's current conversation count
 */
async function incrementAgentCount(userId: string): Promise<void> {
  await prisma.agentStatus.update({
    where: { userId },
    data: { currentCount: { increment: 1 } },
  });
}

/**
 * Decrement agent's current conversation count
 */
export async function decrementAgentCount(userId: string): Promise<void> {
  await prisma.agentStatus.update({
    where: { userId },
    data: { currentCount: { decrement: 1 } },
  });
}

/**
 * Process queue and assign to available agents
 */
export async function processQueue(): Promise<void> {
  let assigned = true;

  while (assigned) {
    const next = await getNextFromQueue();
    if (!next) break;

    const agentId = await assignToAvailableAgent(next.conversationId);
    assigned = agentId !== null;
  }
}

/**
 * List online agents
 */
export async function listOnlineAgents() {
  return prisma.agentStatus.findMany({
    where: { availability: { in: ['online', 'busy'] } },
    include: { user: { select: { id: true, name: true, email: true, role: true, teamId: true } } },
  });
}
