/**
 * Intent entity
 */
export interface Intent {
  id: string;
  name: string;
  description: string | null;
  isActive: boolean;
  isDefault: boolean;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Training phrase for intent
 */
export interface TrainingPhrase {
  id: string;
  intentId: string;
  phrase: string;
}

/**
 * Response template for intent
 */
export interface IntentResponse {
  id: string;
  intentId: string;
  responseText: string;
  variables: string[] | null;
}

/**
 * Extracted entity from message
 */
export interface ExtractedEntity {
  type: string;
  value: string;
  startIndex?: number;
  endIndex?: number;
  confidence: number;
}

/**
 * Sentiment analysis result
 */
export interface SentimentResult {
  sentiment: 'positive' | 'neutral' | 'negative';
  score: number;
  isUrgent: boolean;
}

/**
 * AI processing result
 */
export interface AIProcessingResult {
  intent: string;
  confidence: number;
  entities: ExtractedEntity[];
  sentiment: SentimentResult;
  response: string;
  shouldEscalate: boolean;
  escalationReason?: string;
  processingTimeMs: number;
}

/**
 * Escalation reasons
 */
export type EscalationReason =
  | 'low_confidence'
  | 'user_requested'
  | 'negative_sentiment'
  | 'consecutive_fallbacks'
  | 'complex_query'
  | 'sensitive_topic';

/**
 * Confidence level thresholds
 */
export const CONFIDENCE_THRESHOLDS = {
  HIGH: 0.8,
  MEDIUM: 0.7,
  LOW: 0.5,
} as const;

/**
 * Default intents
 */
export const DEFAULT_INTENTS = [
  'greeting',
  'order_status',
  'refund_request',
  'shipping_info',
  'account_help',
  'pricing',
  'contact_human',
  'goodbye',
  'fallback',
] as const;

export type DefaultIntent = (typeof DEFAULT_INTENTS)[number];
