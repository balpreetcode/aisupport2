/**
 * Message sender types
 */
export type MessageSenderType = 'customer' | 'agent' | 'ai' | 'system';

/**
 * Message status
 */
export type MessageStatus = 'sending' | 'sent' | 'delivered' | 'read' | 'failed';

/**
 * Message type
 */
export type MessageType = 'text' | 'quick_reply' | 'system';

/**
 * Quick reply option
 */
export interface QuickReplyOption {
  label: string;
  value: string;
}

/**
 * Message entity
 */
export interface Message {
  id: string;
  conversationId: string;
  senderType: MessageSenderType;
  senderId: string | null;
  content: string;
  type: MessageType;
  status: MessageStatus;
  quickReplies?: QuickReplyOption[];
  metadata?: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Create message input
 */
export interface CreateMessageInput {
  conversationId: string;
  senderType: MessageSenderType;
  senderId?: string | null;
  content: string;
  type?: MessageType;
  quickReplies?: QuickReplyOption[];
  metadata?: Record<string, unknown>;
}

/**
 * WebSocket message event payload
 */
export interface MessageEventPayload {
  conversationId: string;
  message: Message;
}

/**
 * Typing event payload
 */
export interface TypingEventPayload {
  conversationId: string;
  userId: string;
  userType: MessageSenderType;
}
