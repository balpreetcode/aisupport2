/**
 * Conversation status
 */
export type ConversationStatus = 'active' | 'waiting' | 'resolved' | 'closed';

/**
 * Conversation channel
 */
export type ConversationChannel = 'web_widget' | 'api';

/**
 * Conversation entity
 */
export interface Conversation {
  id: string;
  customerId: string;
  assignedTo: string | null;
  status: ConversationStatus;
  channel: ConversationChannel;
  subject: string | null;
  metadata?: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  resolvedAt: Date | null;
}

/**
 * Conversation with message count
 */
export interface ConversationWithCounts extends Conversation {
  messageCount: number;
  unreadCount: number;
}

/**
 * Create conversation input
 */
export interface CreateConversationInput {
  customerId: string;
  channel: ConversationChannel;
  subject?: string | null;
  metadata?: Record<string, unknown>;
}

/**
 * Update conversation input
 */
export interface UpdateConversationInput {
  assignedTo?: string | null;
  status?: ConversationStatus;
  subject?: string | null;
  metadata?: Record<string, unknown>;
}

/**
 * Conversation filters
 */
export interface ConversationFilters {
  status?: ConversationStatus;
  channel?: ConversationChannel;
  assignedTo?: string;
  customerId?: string;
}
