import { Router } from 'express';
import type { Request, Response, NextFunction } from 'express';
import { prisma } from '../config/database';
import * as customerService from '../services/customer.service';
import * as conversationService from '../services/conversation.service';
import * as messageService from '../services/message.service';
import { BadRequestError, UnauthorizedError, NotFoundError } from '../utils/errors';

const router = Router();

// Middleware to validate widget session token
async function widgetAuth(req: Request, _res: Response, next: NextFunction) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
      throw new UnauthorizedError('Session token required');
    }

    const token = authHeader.slice(7);
    const customerId = await customerService.validateCustomerSession(token);

    if (!customerId) {
      throw new UnauthorizedError('Invalid or expired session');
    }

    (req as Request & { customerId: string }).customerId = customerId;
    next();
  } catch (error) {
    next(error);
  }
}

/**
 * POST /api/widget/session
 * Create a new widget session for a customer
 */
router.post('/session', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { apiKey, email, name, externalId } = req.body;

    if (!apiKey) {
      throw new BadRequestError('API key is required');
    }

    // Validate API key and get widget config
    const widgetConfig = await prisma.widgetConfig.findUnique({
      where: { apiKey },
    });

    if (!widgetConfig || !widgetConfig.enabled) {
      throw new UnauthorizedError('Invalid API key');
    }

    // Find or create customer
    let customer = externalId
      ? await customerService.getCustomerByExternalId(externalId)
      : null;

    if (!customer) {
      customer = await customerService.createCustomer({
        email,
        name,
        externalId,
      });
    } else if (email || name) {
      customer = await customerService.updateCustomer(customer.id, { email, name });
    }

    // Create session token
    const sessionToken = await customerService.createCustomerSession(customer.id);

    // Get or create active conversation
    const conversation = await conversationService.getOrCreateConversation(
      customer.id,
      'web_widget'
    );

    res.json({
      sessionToken,
      customerId: customer.id,
      conversationId: conversation.id,
      config: {
        companyName: widgetConfig.companyName,
        welcomeMessage: widgetConfig.welcomeMessage,
        primaryColor: widgetConfig.primaryColor,
        position: widgetConfig.position,
        logoUrl: widgetConfig.logoUrl,
      },
    });
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/widget/conversations/:conversationId/messages
 * Get messages for a conversation
 */
router.get(
  '/conversations/:conversationId/messages',
  widgetAuth,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { conversationId } = req.params;
      const customerId = (req as Request & { customerId: string }).customerId;

      // Verify customer owns this conversation
      const conversation = await conversationService.getConversationById(conversationId);

      if (!conversation || conversation.customerId !== customerId) {
        throw new NotFoundError('Conversation not found');
      }

      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 50;

      const result = await messageService.getMessagesForConversation(conversationId, {
        page,
        limit,
      });

      res.json(result);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * POST /api/widget/conversations/:conversationId/messages
 * Send a message in a conversation
 */
router.post(
  '/conversations/:conversationId/messages',
  widgetAuth,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { conversationId } = req.params;
      const { content } = req.body;
      const customerId = (req as Request & { customerId: string }).customerId;

      if (!content || typeof content !== 'string') {
        throw new BadRequestError('Message content is required');
      }

      // Verify customer owns this conversation
      const conversation = await conversationService.getConversationById(conversationId);

      if (!conversation || conversation.customerId !== customerId) {
        throw new NotFoundError('Conversation not found');
      }

      const message = await messageService.createMessage({
        conversationId,
        senderType: 'customer',
        senderId: customerId,
        content: content.trim(),
        type: 'text',
      });

      res.status(201).json(message);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
