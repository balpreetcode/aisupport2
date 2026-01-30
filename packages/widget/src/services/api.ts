import type { WidgetSessionRequest, WidgetSessionResponse, Message } from '@ai-support/shared';

let baseUrl = '';

export function setBaseUrl(url: string) {
  baseUrl = url.replace(/\/$/, '');
}

export async function createSession(request: WidgetSessionRequest): Promise<WidgetSessionResponse> {
  const response = await fetch(`${baseUrl}/api/widget/session`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new Error('Failed to create session');
  }

  return response.json();
}

export async function getMessages(
  conversationId: string,
  sessionToken: string
): Promise<Message[]> {
  const response = await fetch(
    `${baseUrl}/api/widget/conversations/${conversationId}/messages`,
    {
      headers: { Authorization: `Bearer ${sessionToken}` },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to load messages');
  }

  const data = await response.json();
  return data.data || [];
}

export async function sendMessageApi(
  conversationId: string,
  content: string,
  sessionToken: string
): Promise<Message> {
  const response = await fetch(
    `${baseUrl}/api/widget/conversations/${conversationId}/messages`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionToken}`,
      },
      body: JSON.stringify({ content }),
    }
  );

  if (!response.ok) {
    throw new Error('Failed to send message');
  }

  return response.json();
}
