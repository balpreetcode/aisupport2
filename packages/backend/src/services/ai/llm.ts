import OpenAI from 'openai';

let openai: OpenAI | null = null;

export function getOpenAIClient(): OpenAI {
  if (!openai) {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error('OPENAI_API_KEY environment variable is required');
    }
    openai = new OpenAI({ apiKey });
  }
  return openai;
}

export interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface CompletionOptions {
  model?: string;
  temperature?: number;
  maxTokens?: number;
  responseFormat?: 'text' | 'json';
}

/**
 * Generate a chat completion
 */
export async function generateCompletion(
  messages: ChatMessage[],
  options: CompletionOptions = {}
): Promise<string> {
  const {
    model = 'gpt-4o-mini',
    temperature = 0.7,
    maxTokens = 1000,
    responseFormat = 'text',
  } = options;

  const client = getOpenAIClient();

  const response = await client.chat.completions.create({
    model,
    messages,
    temperature,
    max_tokens: maxTokens,
    response_format: responseFormat === 'json' ? { type: 'json_object' } : undefined,
  });

  return response.choices[0]?.message?.content || '';
}

/**
 * Generate JSON completion with type safety
 */
export async function generateJSONCompletion<T>(
  messages: ChatMessage[],
  options: Omit<CompletionOptions, 'responseFormat'> = {}
): Promise<T> {
  const content = await generateCompletion(messages, {
    ...options,
    responseFormat: 'json',
  });

  try {
    return JSON.parse(content) as T;
  } catch {
    throw new Error('Failed to parse LLM response as JSON');
  }
}
