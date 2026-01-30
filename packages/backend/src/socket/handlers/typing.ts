import { Socket, Server } from 'socket.io';
import type { TypingEventPayload } from '@ai-support/shared';

interface AuthenticatedSocket extends Socket {
  customerId?: string;
  userId?: string;
  userType?: 'customer' | 'agent';
}

export function handleTypingEvents(socket: AuthenticatedSocket, _io: Server) {
  // Handle typing start
  socket.on('typing:start', (payload: TypingEventPayload) => {
    const { conversationId } = payload;

    // Broadcast to conversation room (excluding sender)
    socket.to(`conversation:${conversationId}`).emit('typing:start', {
      conversationId,
      userId: socket.customerId || socket.userId,
      userType: socket.userType,
    });
  });

  // Handle typing stop
  socket.on('typing:stop', (payload: TypingEventPayload) => {
    const { conversationId } = payload;

    // Broadcast to conversation room (excluding sender)
    socket.to(`conversation:${conversationId}`).emit('typing:stop', {
      conversationId,
      userId: socket.customerId || socket.userId,
      userType: socket.userType,
    });
  });
}
