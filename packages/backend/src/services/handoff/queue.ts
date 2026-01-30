import { prisma } from '../../config/database';
import type { EscalationReason } from '@ai-support/shared';

type QueuePriority = 'low' | 'medium' | 'high' | 'critical';

interface QueueEntry {
  id: string;
  conversationId: string;
  priority: QueuePriority;
  reason: string;
  estimatedWait: number | null;
  position: number;
  createdAt: Date;
  assignedAt: Date | null;
}

/**
 * Add conversation to escalation queue
 */
export async function addToQueue(
  conversationId: string,
  reason: EscalationReason
): Promise<QueueEntry> {
  const priority = getPriorityForReason(reason);

  // Get current queue position
  const count = await prisma.queueEntry.count({
    where: { assignedAt: null },
  });

  const entry = await prisma.queueEntry.create({
    data: {
      conversationId,
      priority,
      reason,
      position: count + 1,
      estimatedWait: calculateEstimatedWait(count),
    },
  });

  return mapToQueueEntry(entry);
}

/**
 * Remove conversation from queue
 */
export async function removeFromQueue(conversationId: string): Promise<void> {
  await prisma.queueEntry.deleteMany({
    where: { conversationId },
  });
}

/**
 * Get next conversation from queue
 */
export async function getNextFromQueue(): Promise<QueueEntry | null> {
  const entry = await prisma.queueEntry.findFirst({
    where: { assignedAt: null },
    orderBy: [{ priority: 'desc' }, { createdAt: 'asc' }],
  });

  return entry ? mapToQueueEntry(entry) : null;
}

/**
 * Mark queue entry as assigned
 */
export async function markAssigned(conversationId: string): Promise<void> {
  await prisma.queueEntry.update({
    where: { conversationId },
    data: { assignedAt: new Date() },
  });
}

/**
 * Get queue position for a conversation
 */
export async function getQueuePosition(conversationId: string): Promise<number | null> {
  const entry = await prisma.queueEntry.findUnique({
    where: { conversationId },
  });

  if (!entry || entry.assignedAt) return null;

  const ahead = await prisma.queueEntry.count({
    where: {
      assignedAt: null,
      OR: [
        { priority: { gt: entry.priority } },
        { priority: entry.priority, createdAt: { lt: entry.createdAt } },
      ],
    },
  });

  return ahead + 1;
}

/**
 * Get current queue stats
 */
export async function getQueueStats() {
  const [total, critical, high, medium, low] = await Promise.all([
    prisma.queueEntry.count({ where: { assignedAt: null } }),
    prisma.queueEntry.count({ where: { assignedAt: null, priority: 'critical' } }),
    prisma.queueEntry.count({ where: { assignedAt: null, priority: 'high' } }),
    prisma.queueEntry.count({ where: { assignedAt: null, priority: 'medium' } }),
    prisma.queueEntry.count({ where: { assignedAt: null, priority: 'low' } }),
  ]);

  return { total, critical, high, medium, low };
}

function getPriorityForReason(reason: EscalationReason): QueuePriority {
  const priorities: Record<EscalationReason, QueuePriority> = {
    user_requested: 'critical',
    negative_sentiment: 'critical',
    low_confidence: 'high',
    consecutive_fallbacks: 'high',
    complex_query: 'medium',
    sensitive_topic: 'high',
  };

  return priorities[reason] || 'medium';
}

function calculateEstimatedWait(position: number): number {
  // Estimate 3 minutes per position
  return position * 3;
}

function mapToQueueEntry(e: {
  id: string;
  conversationId: string;
  priority: string;
  reason: string;
  estimatedWait: number | null;
  position: number;
  createdAt: Date;
  assignedAt: Date | null;
}): QueueEntry {
  return {
    id: e.id,
    conversationId: e.conversationId,
    priority: e.priority as QueuePriority,
    reason: e.reason,
    estimatedWait: e.estimatedWait,
    position: e.position,
    createdAt: e.createdAt,
    assignedAt: e.assignedAt,
  };
}
