import { Router } from 'express';
import type { Request, Response, NextFunction } from 'express';
import { auth } from '../middleware/auth';
import { permissions } from '../middleware/permissions';
import * as handoffService from '../services/handoff';

const router = Router();

/**
 * POST /api/handoff/escalate
 * Escalate a conversation to human agent
 */
router.post(
  '/escalate',
  auth(),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { conversationId, reason } = req.body;

      if (!conversationId || !reason) {
        return res.status(400).json({ error: 'conversationId and reason are required' });
      }

      const summary = await handoffService.generateHandoffSummary(conversationId);
      const result = await handoffService.escalateConversation(conversationId, reason, summary);

      res.json(result);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * GET /api/handoff/queue/stats
 * Get queue statistics
 */
router.get(
  '/queue/stats',
  auth(),
  permissions(['admin', 'supervisor']),
  async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const stats = await handoffService.getQueueStats();
      res.json(stats);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * GET /api/handoff/agents
 * Get online agents
 */
router.get(
  '/agents',
  auth(),
  permissions(['admin', 'supervisor']),
  async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const agents = await handoffService.listOnlineAgents();
      res.json({ data: agents });
    } catch (error) {
      next(error);
    }
  }
);

/**
 * PUT /api/handoff/status
 * Update agent availability status
 */
router.put(
  '/status',
  auth(),
  permissions(['admin', 'supervisor', 'agent']),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { availability } = req.body;

      if (!['online', 'busy', 'away', 'offline'].includes(availability)) {
        return res.status(400).json({ error: 'Invalid availability status' });
      }

      await handoffService.updateAgentAvailability(req.auth!.userId, availability);
      const status = await handoffService.getAgentStatus(req.auth!.userId);

      res.json(status);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * POST /api/handoff/transfer
 * Transfer conversation to another agent
 */
router.post(
  '/transfer',
  auth(),
  permissions(['admin', 'supervisor', 'agent']),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { conversationId, toAgentId, note } = req.body;

      if (!conversationId || !toAgentId) {
        return res.status(400).json({ error: 'conversationId and toAgentId are required' });
      }

      await handoffService.transferConversation(
        conversationId,
        toAgentId,
        req.auth!.userId,
        note
      );

      res.json({ message: 'Conversation transferred' });
    } catch (error) {
      next(error);
    }
  }
);

/**
 * POST /api/handoff/resolve
 * Resolve a conversation
 */
router.post(
  '/resolve',
  auth(),
  permissions(['admin', 'supervisor', 'agent']),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { conversationId, resolution } = req.body;

      if (!conversationId) {
        return res.status(400).json({ error: 'conversationId is required' });
      }

      await handoffService.resolveConversation(conversationId, req.auth!.userId, resolution);

      res.json({ message: 'Conversation resolved' });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
