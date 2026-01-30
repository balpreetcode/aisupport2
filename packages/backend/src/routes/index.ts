import { Router } from 'express';
import authRoutes from './auth';
import userRoutes from './users';
import teamRoutes from './teams';
import auditLogRoutes from './audit-logs';
import widgetRoutes from './widget';
import aiRoutes from './ai';
import handoffRoutes from './handoff';
import conversationRoutes from './conversations';
import articleRoutes from './articles';
import statsRoutes from './stats';
import notificationRoutes from './notifications';

const router = Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/teams', teamRoutes);
router.use('/audit-logs', auditLogRoutes);
router.use('/widget', widgetRoutes);
router.use('/ai', aiRoutes);
router.use('/handoff', handoffRoutes);
router.use('/conversations', conversationRoutes);
router.use('/articles', articleRoutes);
router.use('/stats', statsRoutes);
router.use('/notifications', notificationRoutes);

export default router;
