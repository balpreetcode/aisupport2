import { Socket, Server } from 'socket.io';
import type { Message, MessageEventPayload } from '@ai-support/shared';
import * as messageService from '../../services/message.service';
import * as conversationService from '../../services/conversation.service';
import * as aiService from '../../services/ai';

interface AuthenticatedSocket extends Socket {
  customerId?: string;
  userId?: string;
  userType?: 'customer' | 'agent';
}

export function handleMessageEvents(socket: AuthenticatedSocket, io: Server) {
  // Handle new message
  socket.on('message:new', async (payload: MessageEventPayload) => {
    try {
      const { conversationId, message } = payload;

      // Verify sender has access to conversation
      if (socket.userType === 'customer') {
        const conversation = await conversationService.getConversationById(conversationId);

        if (!conversation || conversation.customerId !== socket.customerId) {
          socket.emit('error', { message: 'Access denied' });
          return;
        }
      }

      // Save message to database
      const savedMessage = await messageService.createMessage({
        conversationId,
        senderType: message.senderType,
        senderId: message.senderId,
        content: message.content,
        type: message.type,
        quickReplies: message.quickReplies,
        metadata: message.metadata,
      });

      // Emit delivery confirmation to sender
      socket.emit('message:delivered', { messageId: savedMessage.id });

      // Broadcast to conversation room (excluding sender)
      socket.to(`conversation:${conversationId}`).emit('message:new', {
        conversationId,
        message: savedMessage,
      });

      // Trigger AI processing for customer messages
      if (savedMessage.senderType === 'customer') {
        try {
          const conversation = await conversationService.getConversationById(conversationId);

          // Only process if conversation is not assigned to an agent
          if (conversation && !conversation.assignedTo) {
            const aiResult = await aiService.processAndRespond(savedMessage, {
              conversationId,
              customerId: conversation.customerId,
            });

            // Send AI response to conversation room
            const aiMessages = await messageService.getMessagesForConversation(conversationId, { limit: 1 });
            const aiMessage = aiMessages.data[aiMessages.data.length - 1];

            if (aiMessage && aiMessage.senderType === 'ai') {
              io.to(`conversation:${conversationId}`).emit('message:new', {
                conversationId,
                message: aiMessage,
              });
            }
          }
        } catch (aiError) {
          console.error('[Socket] AI processing error:', aiError);
          // Don't fail the message delivery if AI fails
        }
      }
    } catch (error) {
      console.error('[Socket] Error handling message:', error);
      socket.emit('error', { message: 'Failed to send message' });
    }
  });

  // Handle message read acknowledgment
  socket.on('message:read', async ({ conversationId, messageId }: { conversationId: string; messageId: string }) => {
    try {
      await messageService.updateMessageStatus(messageId, 'read');

      // Broadcast to conversation room
      io.to(`conversation:${conversationId}`).emit('message:read', { messageId });
    } catch (error) {
      console.error('[Socket] Error marking message read:', error);
    }
  });

  // Handle mark all messages as read
  socket.on('messages:read', async ({ conversationId }: { conversationId: string }) => {
    try {
      const readerType = socket.userType === 'customer' ? 'customer' : 'agent';
      await messageService.markMessagesAsRead(conversationId, readerType);
    } catch (error) {
      console.error('[Socket] Error marking messages read:', error);
    }
  });
}
