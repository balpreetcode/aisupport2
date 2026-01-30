import { Router } from 'express';
import type { Request, Response, NextFunction } from 'express';
import { auth } from '../middleware/auth';
import { permissions } from '../middleware/permissions';
import { prisma } from '../config/database';
import { getQueueStats } from '../services/handoff';

const router = Router();

/**
 * GET /api/stats/dashboard
 * Get dashboard statistics
 */
router.get(
  '/dashboard',
  auth(),
  permissions(['admin', 'supervisor']),
  async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const [
        activeConversations,
        resolvedToday,
        totalCustomers,
        queueStats,
        messageStats,
        agentStats,
      ] = await Promise.all([
        // Active conversations
        prisma.conversation.count({
          where: { status: { in: ['active', 'waiting'] } },
        }),

        // Resolved today
        prisma.conversation.count({
          where: {
            status: 'resolved',
            resolvedAt: { gte: today },
          },
        }),

        // Total customers
        prisma.customer.count(),

        // Queue stats
        getQueueStats(),

        // Messages today
        prisma.message.count({
          where: { createdAt: { gte: today } },
        }),

        // Online agents
        prisma.agentStatus.count({
          where: { availability: { in: ['online', 'busy'] } },
        }),
      ]);

      // Calculate AI automation rate (conversations without agent)
      const aiOnly = await prisma.conversation.count({
        where: {
          status: 'resolved',
          assignedTo: null,
          resolvedAt: { gte: today },
        },
      });
      const automationRate = resolvedToday > 0 ? (aiOnly / resolvedToday) * 100 : 0;

      res.json({
        activeConversations,
        resolvedToday,
        totalCustomers,
        queueLength: queueStats.total,
        messagestoday: messageStats,
        onlineAgents: agentStats,
        automationRate: Math.round(automationRate),
      });
    } catch (error) {
      next(error);
    }
  }
);

/**
 * GET /api/stats/conversations
 * Get conversation statistics over time
 */
router.get(
  '/conversations',
  auth(),
  permissions(['admin', 'supervisor']),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { days = '7' } = req.query;
      const daysNum = parseInt(days as string);

      const startDate = new Date();
      startDate.setDate(startDate.getDate() - daysNum);
      startDate.setHours(0, 0, 0, 0);

      // Get daily conversation counts
      const conversations = await prisma.conversation.groupBy({
        by: ['status'],
        _count: true,
        where: {
          createdAt: { gte: startDate },
        },
      });

      // Get daily message counts
      const messages = await prisma.message.count({
        where: { createdAt: { gte: startDate } },
      });

      res.json({
        period: `${daysNum} days`,
        conversations: conversations.reduce(
          (acc: Record<string, number>, c: { status: string; _count: number }) => ({ ...acc, [c.status]: c._count }),
          {}
        ),
        totalMessages: messages,
      });
    } catch (error) {
      next(error);
    }
  }
);

/**
 * GET /api/stats/agents
 * Get agent performance statistics
 */
router.get(
  '/agents',
  auth(),
  permissions(['admin', 'supervisor']),
  async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const agents = await prisma.user.findMany({
        where: { role: { in: ['agent', 'supervisor'] }, status: 'active' },
        select: {
          id: true,
          name: true,
          email: true,
          agentStatus: true,
          _count: {
            select: {
              assignedConversations: {
                where: { status: 'resolved' },
              },
            },
          },
        },
      });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const stats = agents.map((agent: any) => ({
        id: agent.id,
        name: agent.name,
        email: agent.email,
        availability: agent.agentStatus?.availability || 'offline',
        currentConversations: agent.agentStatus?.currentCount || 0,
        resolvedTotal: agent._count.assignedConversations,
      }));

      res.json({ data: stats });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
