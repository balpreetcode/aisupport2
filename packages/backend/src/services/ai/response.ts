import { generateCompletion, type ChatMessage } from './llm';
import { getIntentByName } from './intent';
import type { ExtractedEntity, Message } from '@ai-support/shared';

interface ResponseGenerationContext {
  intent: string;
  confidence: number;
  entities: ExtractedEntity[];
  conversationHistory: Message[];
  companyName?: string;
  knowledgeBaseArticles?: string[];
}

/**
 * Generate a response for the customer
 */
export async function generateResponse(
  customerMessage: string,
  context: ResponseGenerationContext
): Promise<string> {
  const { intent, entities, conversationHistory, companyName = 'Support' } = context;

  // Try to get a template response first
  const intentData = await getIntentByName(intent);
  const templateResponse = intentData?.responses[0]?.responseText;

  // Build system prompt
  const systemPrompt = buildSystemPrompt(companyName, context.knowledgeBaseArticles);

  // Build conversation history
  const historyText = conversationHistory
    .slice(-10)
    .map((m) => `${m.senderType === 'customer' ? 'Customer' : 'Agent'}: ${m.content}`)
    .join('\n');

  const messages: ChatMessage[] = [
    { role: 'system', content: systemPrompt },
  ];

  if (historyText) {
    messages.push({
      role: 'user',
      content: `Previous conversation:\n${historyText}`,
    });
    messages.push({
      role: 'assistant',
      content: 'I understand the context. Please provide the latest customer message.',
    });
  }

  // Add context about detected intent
  let contextInfo = `Detected intent: ${intent}`;
  if (entities.length > 0) {
    contextInfo += `\nExtracted information: ${entities.map((e) => `${e.type}: ${e.value}`).join(', ')}`;
  }
  if (templateResponse) {
    contextInfo += `\nSuggested response template: "${templateResponse}"`;
  }

  messages.push({
    role: 'user',
    content: `${contextInfo}\n\nCustomer message: ${customerMessage}\n\nGenerate a helpful, professional response.`,
  });

  try {
    const response = await generateCompletion(messages, {
      temperature: 0.7,
      maxTokens: 500,
    });

    return response.trim();
  } catch (error) {
    console.error('Response generation failed:', error);
    return getDefaultResponse(intent);
  }
}

function buildSystemPrompt(
  companyName: string,
  knowledgeBaseArticles?: string[]
): string {
  let prompt = `You are a helpful, professional customer support agent for ${companyName}.

Guidelines:
- Be friendly and professional
- Provide clear, concise answers
- If you don't know something, admit it and offer to escalate
- Use the customer's name if available
- Acknowledge their concerns before providing solutions`;

  if (knowledgeBaseArticles && knowledgeBaseArticles.length > 0) {
    prompt += `\n\nRelevant knowledge base articles:\n${knowledgeBaseArticles.join('\n---\n')}`;
  }

  return prompt;
}

function getDefaultResponse(intent: string): string {
  const defaults: Record<string, string> = {
    greeting: "Hello! Welcome to our support. How can I help you today?",
    order_status: "I'd be happy to help you track your order. Could you please provide your order number?",
    refund_request: "I understand you'd like to request a refund. Let me help you with that process.",
    shipping_info: "I can help you with shipping information. What would you like to know?",
    account_help: "I can assist you with your account. What do you need help with?",
    pricing: "I'd be happy to provide pricing information. What product or service are you interested in?",
    contact_human: "I'll connect you with a human agent right away. Please hold on.",
    goodbye: "Thank you for contacting us! Have a great day!",
    fallback: "I'm not quite sure I understand. Could you please rephrase your question?",
  };

  return defaults[intent] || defaults.fallback;
}
