import { Router } from 'express';
import type { Request, Response, NextFunction } from 'express';
import { auth } from '../middleware/auth';
import { permissions } from '../middleware/permissions';
import { prisma } from '../config/database';
import * as aiService from '../services/ai';
import { DEFAULT_INTENTS } from '@ai-support/shared';

const router = Router();

/**
 * GET /api/ai/intents
 * List all intents (admin/supervisor)
 */
router.get(
  '/intents',
  auth(),
  permissions(['admin', 'supervisor']),
  async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const intents = await aiService.listActiveIntents();
      res.json({ data: intents });
    } catch (error) {
      next(error);
    }
  }
);

/**
 * POST /api/ai/intents/:name/test
 * Test intent classification (admin only)
 */
router.post(
  '/intents/test',
  auth(),
  permissions(['admin']),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { message, history = [] } = req.body;

      if (!message || typeof message !== 'string') {
        return res.status(400).json({ error: 'Message is required' });
      }

      const result = await aiService.classifyIntent(message, history);

      res.json(result);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * POST /api/ai/sentiment/test
 * Test sentiment analysis (admin only)
 */
router.post(
  '/sentiment/test',
  auth(),
  permissions(['admin']),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { message } = req.body;

      if (!message || typeof message !== 'string') {
        return res.status(400).json({ error: 'Message is required' });
      }

      const result = await aiService.analyzeSentiment(message);

      res.json(result);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * POST /api/ai/seed-intents
 * Seed default intents (admin only)
 */
router.post(
  '/seed-intents',
  auth(),
  permissions(['admin']),
  async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const defaultIntentData = [
        { name: 'greeting', description: 'Welcome messages' },
        { name: 'order_status', description: 'Order tracking inquiries' },
        { name: 'refund_request', description: 'Return/refund inquiries' },
        { name: 'shipping_info', description: 'Delivery questions' },
        { name: 'account_help', description: 'Account management' },
        { name: 'pricing', description: 'Cost inquiries' },
        { name: 'contact_human', description: 'Escalation request' },
        { name: 'goodbye', description: 'Conversation end' },
        { name: 'fallback', description: 'Unknown queries' },
      ];

      for (const intent of defaultIntentData) {
        await prisma.intent.upsert({
          where: { name: intent.name },
          update: {},
          create: {
            name: intent.name,
            description: intent.description,
            isActive: true,
            isDefault: true,
          },
        });
      }

      res.json({ message: 'Default intents seeded successfully' });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
