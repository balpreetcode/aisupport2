import { io, Socket } from 'socket.io-client';
import type { Message, MessageEventPayload, TypingEventPayload } from '@ai-support/shared';
import {
  setConnected,
  addMessage,
  updateMessageStatus,
  setAgentTyping,
  conversationId,
  sessionToken,
} from '../store';

let socket: Socket | null = null;
let typingTimeout: ReturnType<typeof setTimeout> | null = null;

export function connectSocket(url: string, token: string) {
  if (socket?.connected) return;

  socket = io(url, {
    path: '/widget-socket',
    auth: { token },
    transports: ['websocket', 'polling'],
    reconnection: true,
    reconnectionAttempts: 5,
    reconnectionDelay: 1000,
    reconnectionDelayMax: 5000,
  });

  socket.on('connect', () => {
    setConnected(true);
    console.log('[Widget] Socket connected');

    // Join conversation room if we have one
    if (conversationId.value) {
      socket?.emit('conversation:join', { conversationId: conversationId.value });
    }
  });

  socket.on('disconnect', () => {
    setConnected(false);
    console.log('[Widget] Socket disconnected');
  });

  socket.on('message:new', (payload: MessageEventPayload) => {
    if (payload.message.senderType !== 'customer') {
      addMessage(payload.message);
    }
  });

  socket.on('message:delivered', ({ messageId }: { messageId: string }) => {
    updateMessageStatus(messageId, 'delivered');
  });

  socket.on('message:read', ({ messageId }: { messageId: string }) => {
    updateMessageStatus(messageId, 'read');
  });

  socket.on('typing:start', (payload: TypingEventPayload) => {
    if (payload.userType !== 'customer') {
      setAgentTyping(true);
    }
  });

  socket.on('typing:stop', (payload: TypingEventPayload) => {
    if (payload.userType !== 'customer') {
      setAgentTyping(false);
    }
  });

  socket.on('error', (error: Error) => {
    console.error('[Widget] Socket error:', error);
  });
}

export function disconnectSocket() {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
}

export function sendMessage(message: Message) {
  if (socket?.connected) {
    socket.emit('message:new', {
      conversationId: message.conversationId,
      message,
    });
  }
}

export function sendTypingStart() {
  if (socket?.connected && conversationId.value) {
    socket.emit('typing:start', {
      conversationId: conversationId.value,
      userId: sessionToken.value,
      userType: 'customer',
    });

    // Auto-stop typing after 3 seconds
    if (typingTimeout) clearTimeout(typingTimeout);
    typingTimeout = setTimeout(() => {
      sendTypingStop();
    }, 3000);
  }
}

export function sendTypingStop() {
  if (socket?.connected && conversationId.value) {
    socket.emit('typing:stop', {
      conversationId: conversationId.value,
      userId: sessionToken.value,
      userType: 'customer',
    });
  }
  if (typingTimeout) {
    clearTimeout(typingTimeout);
    typingTimeout = null;
  }
}

export function joinConversation(convId: string) {
  if (socket?.connected) {
    socket.emit('conversation:join', { conversationId: convId });
  }
}

export function isConnected(): boolean {
  return socket?.connected ?? false;
}
