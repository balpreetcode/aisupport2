import { prisma } from '../config/database';
import type {
  Conversation,
  ConversationWithCounts,
  CreateConversationInput,
  UpdateConversationInput,
  ConversationFilters,
  ConversationStatus,
  ConversationChannel,
} from '@ai-support/shared';

interface PaginationParams {
  page?: number;
  limit?: number;
}

interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

/**
 * Create a new conversation
 */
export async function createConversation(input: CreateConversationInput): Promise<Conversation> {
  const conversation = await prisma.conversation.create({
    data: {
      customerId: input.customerId,
      channel: input.channel,
      subject: input.subject ?? null,
      metadata: input.metadata ?? {},
    },
  });

  return mapToConversation(conversation);
}

/**
 * Get conversation by ID
 */
export async function getConversationById(id: string): Promise<Conversation | null> {
  const conversation = await prisma.conversation.findUnique({ where: { id } });
  return conversation ? mapToConversation(conversation) : null;
}

/**
 * Get active conversation for customer
 */
export async function getActiveConversationForCustomer(
  customerId: string
): Promise<Conversation | null> {
  const conversation = await prisma.conversation.findFirst({
    where: {
      customerId,
      status: { in: ['active', 'waiting'] },
    },
    orderBy: { createdAt: 'desc' },
  });

  return conversation ? mapToConversation(conversation) : null;
}

/**
 * Get or create active conversation for customer
 */
export async function getOrCreateConversation(
  customerId: string,
  channel: ConversationChannel = 'web_widget'
): Promise<Conversation> {
  const existing = await getActiveConversationForCustomer(customerId);
  if (existing) return existing;

  return createConversation({ customerId, channel });
}

/**
 * List conversations with filters
 */
export async function listConversations(
  filters: ConversationFilters = {},
  pagination: PaginationParams = {}
): Promise<PaginatedResult<ConversationWithCounts>> {
  const { page = 1, limit = 50 } = pagination;
  const skip = (page - 1) * limit;

  const where: Record<string, unknown> = {};

  if (filters.status) where.status = filters.status;
  if (filters.channel) where.channel = filters.channel;
  if (filters.assignedTo) where.assignedTo = filters.assignedTo;
  if (filters.customerId) where.customerId = filters.customerId;

  const [conversations, total] = await Promise.all([
    prisma.conversation.findMany({
      where,
      orderBy: { updatedAt: 'desc' },
      skip,
      take: limit,
      include: {
        _count: {
          select: { messages: true },
        },
      },
    }),
    prisma.conversation.count({ where }),
  ]);

  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: conversations.map((c: any) => ({
      ...mapToConversation(c),
      messageCount: c._count.messages,
      unreadCount: 0, // TODO: implement proper unread tracking
    })),
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
  };
}

/**
 * Update conversation
 */
export async function updateConversation(
  id: string,
  input: UpdateConversationInput
): Promise<Conversation> {
  const data: Record<string, unknown> = {};

  if (input.assignedTo !== undefined) data.assignedTo = input.assignedTo;
  if (input.status !== undefined) {
    data.status = input.status;
    if (input.status === 'resolved') {
      data.resolvedAt = new Date();
    }
  }
  if (input.subject !== undefined) data.subject = input.subject;
  if (input.metadata !== undefined) data.metadata = input.metadata;

  const conversation = await prisma.conversation.update({
    where: { id },
    data,
  });

  return mapToConversation(conversation);
}

/**
 * Assign conversation to agent
 */
export async function assignConversation(
  id: string,
  agentId: string | null
): Promise<Conversation> {
  return updateConversation(id, { assignedTo: agentId });
}

/**
 * Resolve conversation
 */
export async function resolveConversation(id: string): Promise<Conversation> {
  return updateConversation(id, { status: 'resolved' });
}

function mapToConversation(c: {
  id: string;
  customerId: string;
  assignedTo: string | null;
  status: string;
  channel: string;
  subject: string | null;
  metadata: unknown;
  createdAt: Date;
  updatedAt: Date;
  resolvedAt: Date | null;
}): Conversation {
  return {
    id: c.id,
    customerId: c.customerId,
    assignedTo: c.assignedTo,
    status: c.status as ConversationStatus,
    channel: c.channel as ConversationChannel,
    subject: c.subject,
    metadata: c.metadata as Record<string, unknown>,
    createdAt: c.createdAt,
    updatedAt: c.updatedAt,
    resolvedAt: c.resolvedAt,
  };
}
