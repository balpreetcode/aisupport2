import { Router } from 'express';
import type { Request, Response, NextFunction } from 'express';
import { auth } from '../middleware/auth';
import { permissions, isAdmin, isSupervisor } from '../middleware/permissions';
import * as conversationService from '../services/conversation.service';
import * as messageService from '../services/message.service';
import { ForbiddenError, NotFoundError } from '../utils/errors';

const router = Router();

/**
 * GET /api/conversations
 * List conversations (filtered by role)
 */
router.get(
  '/',
  auth(),
  permissions(['admin', 'supervisor', 'agent']),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { status, page = '1', limit = '50' } = req.query;

      let filters: Record<string, unknown> = {};

      if (status) filters.status = status;

      // Agents only see assigned conversations
      if (req.auth!.role === 'agent') {
        filters.assignedTo = req.auth!.userId;
      }

      // Supervisors see team conversations (simplified: all for now)
      // Admins see all

      const result = await conversationService.listConversations(
        filters as any,
        { page: parseInt(page as string), limit: parseInt(limit as string) }
      );

      res.json(result);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * GET /api/conversations/:id
 * Get conversation by ID
 */
router.get(
  '/:id',
  auth(),
  permissions(['admin', 'supervisor', 'agent']),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const conversation = await conversationService.getConversationById(req.params.id);

      if (!conversation) {
        throw new NotFoundError('Conversation not found');
      }

      // Agents can only view assigned conversations
      if (req.auth!.role === 'agent' && conversation.assignedTo !== req.auth!.userId) {
        throw new ForbiddenError('Access denied');
      }

      res.json(conversation);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * GET /api/conversations/:id/messages
 * Get messages for a conversation
 */
router.get(
  '/:id/messages',
  auth(),
  permissions(['admin', 'supervisor', 'agent']),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { page = '1', limit = '50' } = req.query;

      const conversation = await conversationService.getConversationById(req.params.id);

      if (!conversation) {
        throw new NotFoundError('Conversation not found');
      }

      if (req.auth!.role === 'agent' && conversation.assignedTo !== req.auth!.userId) {
        throw new ForbiddenError('Access denied');
      }

      const result = await messageService.getMessagesForConversation(req.params.id, {
        page: parseInt(page as string),
        limit: parseInt(limit as string),
      });

      res.json(result);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * POST /api/conversations/:id/messages
 * Send a message (as agent)
 */
router.post(
  '/:id/messages',
  auth(),
  permissions(['admin', 'supervisor', 'agent']),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { content, type = 'text' } = req.body;

      if (!content) {
        return res.status(400).json({ error: 'Content is required' });
      }

      const conversation = await conversationService.getConversationById(req.params.id);

      if (!conversation) {
        throw new NotFoundError('Conversation not found');
      }

      if (req.auth!.role === 'agent' && conversation.assignedTo !== req.auth!.userId) {
        throw new ForbiddenError('Access denied');
      }

      const message = await messageService.createMessage({
        conversationId: req.params.id,
        senderType: 'agent',
        senderId: req.auth!.userId,
        content,
        type,
      });

      res.status(201).json(message);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * PATCH /api/conversations/:id
 * Update conversation (assign, change status)
 */
router.patch(
  '/:id',
  auth(),
  permissions(['admin', 'supervisor', 'agent']),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { status, assignedTo, subject } = req.body;

      const conversation = await conversationService.getConversationById(req.params.id);

      if (!conversation) {
        throw new NotFoundError('Conversation not found');
      }

      // Agents can only update their own conversations
      if (req.auth!.role === 'agent') {
        if (conversation.assignedTo !== req.auth!.userId) {
          throw new ForbiddenError('Access denied');
        }
        // Agents can't reassign
        if (assignedTo && assignedTo !== req.auth!.userId) {
          throw new ForbiddenError('Cannot reassign conversation');
        }
      }

      const updated = await conversationService.updateConversation(req.params.id, {
        status,
        assignedTo,
        subject,
      });

      res.json(updated);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
