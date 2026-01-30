import { Router } from 'express';
import type { Request, Response, NextFunction } from 'express';
import { auth } from '../middleware/auth';
import { permissions, isAdmin, isSupervisor } from '../middleware/permissions';
import { validate } from '../middleware/validate';
import { auditLogFiltersSchema } from '../schemas/audit.schema';
import * as auditService from '../services/audit.service';
import type { AuditAction, AuditTargetType } from '@ai-support/shared';

const router = Router();

/**
 * GET /api/audit-logs
 * Query audit logs (admin: all, supervisor: team only)
 */
router.get(
  '/',
  auth(),
  permissions(['admin', 'supervisor']),
  validate(auditLogFiltersSchema, 'query'),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { page, limit, ...filters } = req.query as unknown as {
        page: number;
        limit: number;
        action?: string;
        actorId?: string;
        targetId?: string;
        targetType?: string;
        from?: Date;
        to?: Date;
      };

      const typedFilters = {
        action: filters.action as AuditAction | undefined,
        actorId: filters.actorId,
        targetId: filters.targetId,
        targetType: filters.targetType as AuditTargetType | undefined,
        from: filters.from,
        to: filters.to,
      };

      // Admins see all logs
      if (isAdmin(req)) {
        const result = await auditService.queryAuditLogs(typedFilters, { page, limit });
        return res.json(result);
      }

      // Supervisors see only team logs
      if (isSupervisor(req) && req.auth!.teamId) {
        const result = await auditService.queryAuditLogsByTeam(
          req.auth!.teamId,
          typedFilters,
          { page, limit }
        );
        return res.json(result);
      }

      // Supervisor without team - empty result
      res.json({ data: [], total: 0, page, limit, totalPages: 0 });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
