import type { Message, AIProcessingResult, CONFIDENCE_THRESHOLDS } from '@ai-support/shared';
import { classifyIntent } from './intent';
import { analyzeSentiment, shouldEscalateBasedOnSentiment } from './sentiment';
import { generateResponse } from './response';
import * as messageService from '../message.service';
import * as conversationService from '../conversation.service';

const CONFIDENCE_HIGH = 0.8;
const CONFIDENCE_MEDIUM = 0.7;
const CONFIDENCE_LOW = 0.5;

interface ProcessMessageOptions {
  conversationId: string;
  customerId: string;
  companyName?: string;
}

/**
 * Process a customer message through the AI pipeline
 */
export async function processMessage(
  message: Message,
  options: ProcessMessageOptions
): Promise<AIProcessingResult> {
  const startTime = Date.now();

  // Get conversation history
  const historyResult = await messageService.getMessagesForConversation(
    options.conversationId,
    { limit: 20 }
  );
  const conversationHistory = historyResult.data;

  // Build history for context
  const historyText = conversationHistory
    .slice(-10)
    .map((m) => m.content);

  // Step 1: Classify intent
  const intentResult = await classifyIntent(message.content, historyText);

  // Step 2: Analyze sentiment
  const sentiment = await analyzeSentiment(message.content);

  // Step 3: Determine if escalation is needed
  const { shouldEscalate, escalationReason } = determineEscalation(
    intentResult.intent,
    intentResult.confidence,
    sentiment,
    conversationHistory
  );

  // Step 4: Generate response (unless escalating)
  let response: string;
  if (shouldEscalate) {
    response = getEscalationMessage(escalationReason);
  } else {
    response = await generateResponse(message.content, {
      intent: intentResult.intent,
      confidence: intentResult.confidence,
      entities: intentResult.entities,
      conversationHistory,
      companyName: options.companyName,
    });
  }

  const processingTimeMs = Date.now() - startTime;

  return {
    intent: intentResult.intent,
    confidence: intentResult.confidence,
    entities: intentResult.entities,
    sentiment,
    response,
    shouldEscalate,
    escalationReason,
    processingTimeMs,
  };
}

/**
 * Process message and send AI response
 */
export async function processAndRespond(
  message: Message,
  options: ProcessMessageOptions
): Promise<AIProcessingResult> {
  const result = await processMessage(message, options);

  // Create AI response message
  await messageService.createMessage({
    conversationId: options.conversationId,
    senderType: 'ai',
    senderId: null,
    content: result.response,
    type: 'text',
    metadata: {
      intent: result.intent,
      confidence: result.confidence,
      sentiment: result.sentiment,
      processingTimeMs: result.processingTimeMs,
    },
  });

  // If escalation needed, update conversation status
  if (result.shouldEscalate) {
    await conversationService.updateConversation(options.conversationId, {
      status: 'waiting',
      metadata: {
        escalationReason: result.escalationReason,
        escalatedAt: new Date().toISOString(),
      },
    });
  }

  return result;
}

function determineEscalation(
  intent: string,
  confidence: number,
  sentiment: { sentiment: string; score: number; isUrgent: boolean },
  history: Message[]
): { shouldEscalate: boolean; escalationReason?: string } {
  // User explicitly requested human
  if (intent === 'contact_human') {
    return { shouldEscalate: true, escalationReason: 'user_requested' };
  }

  // Very low confidence
  if (confidence < CONFIDENCE_LOW) {
    return { shouldEscalate: true, escalationReason: 'low_confidence' };
  }

  // Negative sentiment
  if (shouldEscalateBasedOnSentiment(sentiment as any)) {
    return { shouldEscalate: true, escalationReason: 'negative_sentiment' };
  }

  // Check for consecutive fallbacks
  const recentMessages = history.slice(-5);
  const consecutiveFallbacks = recentMessages.filter(
    (m) => m.metadata && (m.metadata as Record<string, unknown>).intent === 'fallback'
  ).length;

  if (consecutiveFallbacks >= 3) {
    return { shouldEscalate: true, escalationReason: 'consecutive_fallbacks' };
  }

  return { shouldEscalate: false };
}

function getEscalationMessage(reason?: string): string {
  const messages: Record<string, string> = {
    user_requested: "I'll connect you with a human agent right away. Please wait a moment.",
    low_confidence: "I want to make sure you get the best help. Let me connect you with a team member who can assist you better.",
    negative_sentiment: "I understand your frustration. Let me connect you with a specialist who can help resolve this quickly.",
    consecutive_fallbacks: "I apologize for the confusion. Let me get a human agent to help you with this.",
    default: "I'll transfer you to a human agent who can better assist you. Please hold on.",
  };

  return messages[reason || 'default'] || messages.default;
}

// Re-export sub-modules
export { classifyIntent, getIntentByName, listActiveIntents } from './intent';
export { analyzeSentiment } from './sentiment';
export { generateResponse } from './response';
