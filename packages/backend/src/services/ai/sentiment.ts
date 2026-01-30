import { generateJSONCompletion, type ChatMessage } from './llm';
import type { SentimentResult } from '@ai-support/shared';

const SENTIMENT_SYSTEM_PROMPT = `Analyze the sentiment of the following customer message.

Consider:
- Overall emotional tone (positive, neutral, negative)
- Signs of frustration or anger
- Urgency indicators

Respond with JSON:
{
  "sentiment": "positive" | "neutral" | "negative",
  "score": -1.0 to 1.0,
  "isUrgent": true/false
}`;

/**
 * Analyze sentiment of a message
 */
export async function analyzeSentiment(message: string): Promise<SentimentResult> {
  const messages: ChatMessage[] = [
    { role: 'system', content: SENTIMENT_SYSTEM_PROMPT },
    { role: 'user', content: message },
  ];

  try {
    const result = await generateJSONCompletion<SentimentResult>(messages, {
      temperature: 0.3,
      maxTokens: 200,
    });

    return {
      sentiment: result.sentiment || 'neutral',
      score: Math.min(1, Math.max(-1, result.score || 0)),
      isUrgent: result.isUrgent || false,
    };
  } catch (error) {
    console.error('Sentiment analysis failed:', error);
    return {
      sentiment: 'neutral',
      score: 0,
      isUrgent: false,
    };
  }
}

/**
 * Check if sentiment indicates need for escalation
 */
export function shouldEscalateBasedOnSentiment(sentiment: SentimentResult): boolean {
  return sentiment.sentiment === 'negative' && sentiment.score < -0.5;
}
