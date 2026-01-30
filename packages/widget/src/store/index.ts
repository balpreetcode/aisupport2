import { signal, computed } from '@preact/signals';
import type { Message, WidgetPublicConfig } from '@ai-support/shared';

// Core state
export const isOpen = signal(false);
export const isConnected = signal(false);
export const isTyping = signal(false);
export const isAgentTyping = signal(false);

// Session state
export const customerId = signal<string | null>(null);
export const conversationId = signal<string | null>(null);
export const sessionToken = signal<string | null>(null);

// Messages
export const messages = signal<Message[]>([]);

// Config
export const config = signal<WidgetPublicConfig>({
  companyName: 'Support',
  welcomeMessage: 'Hi! How can we help you today?',
  primaryColor: '#6366f1',
  position: 'bottom-right',
});

// Computed
export const unreadCount = computed(() => {
  if (isOpen.value) return 0;
  return messages.value.filter(
    (m) => m.senderType !== 'customer' && m.status !== 'read'
  ).length;
});

// Actions
export function openWidget() {
  isOpen.value = true;
}

export function closeWidget() {
  isOpen.value = false;
}

export function toggleWidget() {
  isOpen.value = !isOpen.value;
}

export function addMessage(message: Message) {
  messages.value = [...messages.value, message];
}

export function updateMessageStatus(messageId: string, status: Message['status']) {
  messages.value = messages.value.map((m) =>
    m.id === messageId ? { ...m, status } : m
  );
}

export function setSession(token: string, custId: string, convId: string | null) {
  sessionToken.value = token;
  customerId.value = custId;
  conversationId.value = convId;
}

export function setConfig(newConfig: WidgetPublicConfig) {
  config.value = newConfig;
}

export function setMessages(newMessages: Message[]) {
  messages.value = newMessages;
}

export function setConnected(connected: boolean) {
  isConnected.value = connected;
}

export function setAgentTyping(typing: boolean) {
  isAgentTyping.value = typing;
}
