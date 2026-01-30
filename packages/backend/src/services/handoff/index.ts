import type { EscalationReason, Message } from '@ai-support/shared';
import * as conversationService from '../conversation.service';
import * as messageService from '../message.service';
import { addToQueue, getQueuePosition, getQueueStats } from './queue';
import { assignToAvailableAgent, updateAgentAvailability, processQueue } from './routing';
import { emitToConversation } from '../../socket';

export { updateAgentAvailability, getAgentStatus, listOnlineAgents, decrementAgentCount } from './routing';
export { getQueueStats, getQueuePosition } from './queue';

/**
 * Escalate conversation to human agent
 */
export async function escalateConversation(
  conversationId: string,
  reason: EscalationReason,
  aiSummary?: string
): Promise<{ queued: boolean; position?: number; agentId?: string }> {
  // Update conversation status to waiting
  await conversationService.updateConversation(conversationId, {
    status: 'waiting',
    metadata: {
      escalationReason: reason,
      escalatedAt: new Date().toISOString(),
      aiSummary,
    },
  });

  // Add to queue
  const queueEntry = await addToQueue(conversationId, reason);

  // Try immediate assignment
  const agentId = await assignToAvailableAgent(conversationId);

  if (agentId) {
    return { queued: false, agentId };
  }

  // Get queue position for customer
  const position = await getQueuePosition(conversationId);

  // Send queue notification to customer
  emitToConversation(conversationId, 'queue:position', {
    conversationId,
    position,
    estimatedWait: queueEntry.estimatedWait,
  });

  return { queued: true, position: position ?? undefined };
}

/**
 * Generate AI summary of conversation for handoff
 */
export async function generateHandoffSummary(conversationId: string): Promise<string> {
  const messages = await messageService.getMessagesForConversation(conversationId, { limit: 20 });

  if (messages.data.length === 0) {
    return 'No messages in conversation.';
  }

  // Build simple summary
  const customerMessages = messages.data.filter((m) => m.senderType === 'customer');
  const lastCustomerMessage = customerMessages[customerMessages.length - 1];

  const metadata = messages.data
    .filter((m) => m.metadata && (m.metadata as Record<string, unknown>).intent)
    .map((m) => (m.metadata as Record<string, unknown>).intent);

  const intents = [...new Set(metadata)];

  return `Customer inquiry about: ${intents.join(', ') || 'general support'}. Last message: "${lastCustomerMessage?.content || 'N/A'}". Total messages: ${messages.data.length}.`;
}

/**
 * Transfer conversation to another agent
 */
export async function transferConversation(
  conversationId: string,
  toAgentId: string,
  fromAgentId: string,
  note?: string
): Promise<void> {
  // Update assignment
  await conversationService.assignConversation(conversationId, toAgentId);

  // Create system message about transfer
  await messageService.createMessage({
    conversationId,
    senderType: 'system',
    senderId: null,
    content: `Conversation transferred${note ? `: ${note}` : '.'}`,
    type: 'system',
  });

  // Notify new agent
  emitToConversation(conversationId, 'conversation:transferred', {
    conversationId,
    toAgentId,
    fromAgentId,
  });
}

/**
 * Resolve conversation
 */
export async function resolveConversation(
  conversationId: string,
  agentId: string,
  resolution?: string
): Promise<void> {
  await conversationService.resolveConversation(conversationId);

  // Add resolution note if provided
  if (resolution) {
    await messageService.createMessage({
      conversationId,
      senderType: 'system',
      senderId: agentId,
      content: `Resolved: ${resolution}`,
      type: 'system',
    });
  }

  // Decrement agent count
  const { decrementAgentCount } = await import('./routing');
  await decrementAgentCount(agentId);

  // Process queue to assign waiting conversations
  await processQueue();
}
