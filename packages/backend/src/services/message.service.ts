import { prisma } from '../config/database';
import type {
  Message,
  CreateMessageInput,
  MessageSenderType,
  MessageStatus,
  MessageType,
  QuickReplyOption,
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
 * Create a new message
 */
export async function createMessage(input: CreateMessageInput): Promise<Message> {
  const message = await prisma.message.create({
    data: {
      conversationId: input.conversationId,
      senderType: input.senderType,
      senderId: input.senderId ?? null,
      content: input.content,
      type: input.type ?? 'text',
      status: 'sent',
      quickReplies: input.quickReplies ?? null,
      metadata: input.metadata ?? {},
    },
  });

  // Update conversation timestamp
  await prisma.conversation.update({
    where: { id: input.conversationId },
    data: { updatedAt: new Date() },
  });

  return mapToMessage(message);
}

/**
 * Get message by ID
 */
export async function getMessageById(id: string): Promise<Message | null> {
  const message = await prisma.message.findUnique({ where: { id } });
  return message ? mapToMessage(message) : null;
}

/**
 * Get messages for conversation
 */
export async function getMessagesForConversation(
  conversationId: string,
  pagination: PaginationParams = {}
): Promise<PaginatedResult<Message>> {
  const { page = 1, limit = 50 } = pagination;
  const skip = (page - 1) * limit;

  const [messages, total] = await Promise.all([
    prisma.message.findMany({
      where: { conversationId },
      orderBy: { createdAt: 'asc' },
      skip,
      take: limit,
    }),
    prisma.message.count({ where: { conversationId } }),
  ]);

  return {
    data: messages.map(mapToMessage),
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
  };
}

/**
 * Update message status
 */
export async function updateMessageStatus(id: string, status: MessageStatus): Promise<Message> {
  const message = await prisma.message.update({
    where: { id },
    data: { status },
  });

  return mapToMessage(message);
}

/**
 * Mark messages as read
 */
export async function markMessagesAsRead(
  conversationId: string,
  readerType: MessageSenderType
): Promise<void> {
  // Mark all messages from the other party as read
  const senderTypes: MessageSenderType[] =
    readerType === 'customer' ? ['agent', 'ai', 'system'] : ['customer'];

  await prisma.message.updateMany({
    where: {
      conversationId,
      senderType: { in: senderTypes },
      status: { not: 'read' },
    },
    data: { status: 'read' },
  });
}

function mapToMessage(m: {
  id: string;
  conversationId: string;
  senderType: string;
  senderId: string | null;
  content: string;
  type: string;
  status: string;
  quickReplies: unknown;
  metadata: unknown;
  createdAt: Date;
  updatedAt: Date;
}): Message {
  return {
    id: m.id,
    conversationId: m.conversationId,
    senderType: m.senderType as MessageSenderType,
    senderId: m.senderId,
    content: m.content,
    type: m.type as MessageType,
    status: m.status as MessageStatus,
    quickReplies: m.quickReplies as QuickReplyOption[] | undefined,
    metadata: m.metadata as Record<string, unknown>,
    createdAt: m.createdAt,
    updatedAt: m.updatedAt,
  };
}
