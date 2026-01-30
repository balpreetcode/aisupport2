import type { WidgetSDK, WidgetEvent, WidgetEventCallback } from '@ai-support/shared';
import {
  openWidget,
  closeWidget,
  toggleWidget,
  addMessage,
  customerId,
  conversationId,
  sessionToken,
} from '../store';
import { sendMessage as socketSendMessage, disconnectSocket } from '../services/socket';
import type { Message } from '@ai-support/shared';

type EventListeners = Map<WidgetEvent, Set<WidgetEventCallback>>;

const eventListeners: EventListeners = new Map();
let destroyCallback: (() => void) | null = null;

export function setDestroyCallback(callback: () => void) {
  destroyCallback = callback;
}

function emit(event: WidgetEvent, data?: unknown) {
  const listeners = eventListeners.get(event);
  if (listeners) {
    listeners.forEach((callback) => callback(data));
  }
}

export const sdk: WidgetSDK = {
  open() {
    openWidget();
    emit('open');
  },

  close() {
    closeWidget();
    emit('close');
  },

  toggle() {
    toggleWidget();
  },

  sendMessage(text: string) {
    const custId = customerId.value;
    const convId = conversationId.value;
    const token = sessionToken.value;

    if (!custId || !token) {
      console.warn('[Widget SDK] Cannot send message: not initialized');
      return;
    }

    const message: Message = {
      id: `sdk-${Date.now()}`,
      conversationId: convId || '',
      senderType: 'customer',
      senderId: custId,
      content: text,
      type: 'text',
      status: 'sending',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    addMessage(message);
    socketSendMessage(message);
    emit('message', message);
  },

  setUser(userData: { email?: string; name?: string; [key: string]: unknown }) {
    // In a full implementation, this would update the customer profile via API
    console.log('[Widget SDK] setUser:', userData);
  },

  setCustomAttributes(attrs: Record<string, unknown>) {
    // In a full implementation, this would update conversation metadata via API
    console.log('[Widget SDK] setCustomAttributes:', attrs);
  },

  on(event: WidgetEvent, callback: WidgetEventCallback) {
    if (!eventListeners.has(event)) {
      eventListeners.set(event, new Set());
    }
    eventListeners.get(event)!.add(callback);
  },

  off(event: WidgetEvent, callback: WidgetEventCallback) {
    const listeners = eventListeners.get(event);
    if (listeners) {
      listeners.delete(callback);
    }
  },

  destroy() {
    disconnectSocket();
    eventListeners.clear();
    if (destroyCallback) {
      destroyCallback();
    }
  },
};

// Emit ready event
export function emitReady() {
  emit('ready');
}

// Emit error event
export function emitError(error: unknown) {
  emit('error', error);
}
