// User types
export type {
  User,
  UserWithPassword,
  UserRole,
  UserStatus,
  CreateUserInput,
  UpdateUserInput,
  UserFilters,
  PublicUser,
} from './user.js';

// Team types
export type {
  Team,
  CreateTeamInput,
  UpdateTeamInput,
  TeamWithMemberCount,
} from './team.js';

// Audit types
export type {
  AuditLog,
  AuditAction,
  AuditTargetType,
  CreateAuditLogInput,
  AuditLogFilters,
} from './audit.js';

// Auth types
export type {
  LoginRequest,
  LoginResponse,
  RefreshTokenRequest,
  RefreshTokenResponse,
  ForgotPasswordRequest,
  ResetPasswordRequest,
  AccessTokenPayload,
  AuthContext,
} from './auth.js';

// Message types
export type {
  Message,
  MessageSenderType,
  MessageStatus,
  MessageType,
  QuickReplyOption,
  CreateMessageInput,
  MessageEventPayload,
  TypingEventPayload,
} from './message.js';

// Conversation types
export type {
  Conversation,
  ConversationStatus,
  ConversationChannel,
  ConversationWithCounts,
  CreateConversationInput,
  UpdateConversationInput,
  ConversationFilters,
} from './conversation.js';

// Customer types
export type {
  Customer,
  CreateCustomerInput,
  UpdateCustomerInput,
  CustomerSession,
  WidgetSessionRequest,
  WidgetSessionResponse,
  WidgetPublicConfig,
} from './customer.js';

// Widget types
export type {
  WidgetConfig,
  WidgetEmbedConfig,
  WidgetSDK,
  WidgetEvent,
  WidgetEventCallback,
  WidgetState,
} from './widget.js';

// AI types
export type {
  Intent,
  TrainingPhrase,
  IntentResponse,
  ExtractedEntity,
  SentimentResult,
  AIProcessingResult,
  EscalationReason,
  DefaultIntent,
} from './ai.js';

export { CONFIDENCE_THRESHOLDS, DEFAULT_INTENTS } from './ai.js';
