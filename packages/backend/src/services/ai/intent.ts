import { prisma } from '../../config/database';
import { generateJSONCompletion, type ChatMessage } from './llm';
import type { ExtractedEntity, DEFAULT_INTENTS } from '@ai-support/shared';

interface IntentClassificationResult {
  intent: string;
  confidence: number;
  entities: ExtractedEntity[];
}

const INTENT_SYSTEM_PROMPT = `You are an intent classification system for customer support.

Classify the customer message into one of these intents:
- greeting: Welcome messages (Hi, Hello, Good morning)
- order_status: Order tracking inquiries (Where is my order?, Track package)
- refund_request: Return/refund inquiries (I want a refund, Return policy)
- shipping_info: Delivery questions (Shipping cost, Delivery time)
- account_help: Account management (Reset password, Update email)
- pricing: Cost inquiries (How much does it cost?, Pricing)
- contact_human: Escalation request (Talk to human, Real person)
- goodbye: Conversation end (Thanks, Bye, That's all)
- fallback: Unknown queries that don't match other intents

Also extract any entities (dates, numbers, emails, order IDs, etc.)

Respond with JSON:
{
  "intent": "intent_name",
  "confidence": 0.0-1.0,
  "entities": [
    { "type": "order_id", "value": "12345", "confidence": 0.95 },
    { "type": "email", "value": "user@example.com", "confidence": 1.0 }
  ]
}`;

/**
 * Classify the intent of a customer message
 */
export async function classifyIntent(
  message: string,
  conversationHistory: string[] = []
): Promise<IntentClassificationResult> {
  const messages: ChatMessage[] = [
    { role: 'system', content: INTENT_SYSTEM_PROMPT },
  ];

  // Add conversation context if available
  if (conversationHistory.length > 0) {
    messages.push({
      role: 'user',
      content: `Previous conversation:\n${conversationHistory.slice(-5).join('\n')}\n\nNow classify this message:`,
    });
  }

  messages.push({ role: 'user', content: message });

  try {
    const result = await generateJSONCompletion<IntentClassificationResult>(messages, {
      temperature: 0.3,
      maxTokens: 500,
    });

    return {
      intent: result.intent || 'fallback',
      confidence: Math.min(1, Math.max(0, result.confidence || 0.5)),
      entities: result.entities || [],
    };
  } catch (error) {
    console.error('Intent classification failed:', error);
    return {
      intent: 'fallback',
      confidence: 0.3,
      entities: [],
    };
  }
}

/**
 * Get intent by name from database
 */
export async function getIntentByName(name: string) {
  return prisma.intent.findUnique({
    where: { name },
    include: {
      responses: true,
      trainingPhrases: true,
    },
  });
}

/**
 * List all active intents
 */
export async function listActiveIntents() {
  return prisma.intent.findMany({
    where: { isActive: true },
    include: {
      responses: true,
      _count: { select: { trainingPhrases: true } },
    },
    orderBy: { name: 'asc' },
  });
}
