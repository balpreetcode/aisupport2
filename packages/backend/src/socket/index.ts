import { Server as HttpServer } from 'http';
import { Server, Socket } from 'socket.io';
import * as customerService from '../services/customer.service';
import { handleMessageEvents } from './handlers/message';
import { handleTypingEvents } from './handlers/typing';

let io: Server | null = null;

interface AuthenticatedSocket extends Socket {
  customerId?: string;
  userId?: string;
  userType?: 'customer' | 'agent';
}

export function setupSocket(httpServer: HttpServer) {
  io = new Server(httpServer, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
    path: '/widget-socket',
  });

  // Authentication middleware
  io.use(async (socket: AuthenticatedSocket, next) => {
    try {
      const token = socket.handshake.auth.token as string;

      if (!token) {
        return next(new Error('Authentication required'));
      }

      // Try customer session first
      const customerId = await customerService.validateCustomerSession(token);

      if (customerId) {
        socket.customerId = customerId;
        socket.userType = 'customer';
        return next();
      }

      // TODO: Add agent authentication via JWT

      return next(new Error('Invalid token'));
    } catch (error) {
      next(new Error('Authentication failed'));
    }
  });

  io.on('connection', (socket: AuthenticatedSocket) => {
    console.log(`[Socket] Connected: ${socket.id} (${socket.userType})`);

    // Join conversation room
    socket.on('conversation:join', ({ conversationId }: { conversationId: string }) => {
      socket.join(`conversation:${conversationId}`);
      console.log(`[Socket] ${socket.id} joined conversation:${conversationId}`);
    });

    // Leave conversation room
    socket.on('conversation:leave', ({ conversationId }: { conversationId: string }) => {
      socket.leave(`conversation:${conversationId}`);
      console.log(`[Socket] ${socket.id} left conversation:${conversationId}`);
    });

    // Handle message events
    handleMessageEvents(socket, io!);

    // Handle typing events
    handleTypingEvents(socket, io!);

    socket.on('disconnect', () => {
      console.log(`[Socket] Disconnected: ${socket.id}`);
    });

    socket.on('error', (error) => {
      console.error(`[Socket] Error on ${socket.id}:`, error);
    });
  });

  console.log('✅ Socket.IO initialized');

  return io;
}

export function getIO(): Server | null {
  return io;
}

// Emit to a specific conversation room
export function emitToConversation(conversationId: string, event: string, data: unknown) {
  if (io) {
    io.to(`conversation:${conversationId}`).emit(event, data);
  }
}

// Emit to a specific user
export function emitToUser(userId: string, event: string, data: unknown) {
  if (io) {
    io.to(`user:${userId}`).emit(event, data);
  }
}
