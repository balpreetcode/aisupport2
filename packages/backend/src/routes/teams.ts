import { Router } from 'express';
import type { Request, Response, NextFunction } from 'express';
import { auth, getClientIp } from '../middleware/auth';
import { permissions, isAdmin, isSupervisor, isAgent } from '../middleware/permissions';
import { validate, validateAll } from '../middleware/validate';
import {
  createTeamSchema,
  updateTeamSchema,
  teamIdParamSchema,
  paginationSchema,
} from '../schemas/team.schema';
import * as teamService from '../services/team.service';
import { ForbiddenError, NotFoundError } from '../utils/errors';

const router = Router();

/**
 * GET /api/teams
 * List teams (admin: all, supervisor/agent: own team only)
 */
router.get(
  '/',
  auth(),
  validate(paginationSchema, 'query'),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { page, limit } = req.query as unknown as { page: number; limit: number };

      // Admins see all teams
      if (isAdmin(req)) {
        const result = await teamService.listTeams({ page, limit });
        return res.json(result);
      }

      // Supervisors and agents see only their team
      if (!req.auth!.teamId) {
        return res.json({ data: [], total: 0, page, limit, totalPages: 0 });
      }

      const team = await teamService.getTeamById(req.auth!.teamId);

      if (!team) {
        return res.json({ data: [], total: 0, page, limit, totalPages: 0 });
      }

      res.json({ data: [team], total: 1, page: 1, limit, totalPages: 1 });
    } catch (error) {
      next(error);
    }
  }
);

/**
 * GET /api/teams/:id
 * Get team by ID
 */
router.get(
  '/:id',
  auth(),
  validateAll({ params: teamIdParamSchema }),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const team = await teamService.getTeamById(req.params.id);

      if (!team) {
        throw new NotFoundError('Team not found');
      }

      // Non-admins can only view their own team
      if (!isAdmin(req) && req.params.id !== req.auth!.teamId) {
        throw new ForbiddenError('Insufficient permissions');
      }

      res.json(team);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * GET /api/teams/:id/members
 * Get team members
 */
router.get(
  '/:id/members',
  auth(),
  permissions(['admin', 'supervisor']),
  validateAll({
    params: teamIdParamSchema,
    query: paginationSchema,
  }),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { page, limit } = req.query as unknown as { page: number; limit: number };

      // Supervisors can only view their own team
      if (isSupervisor(req) && req.params.id !== req.auth!.teamId) {
        throw new ForbiddenError('Insufficient permissions');
      }

      const result = await teamService.listTeamMembers(req.params.id, { page, limit });

      res.json(result);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * POST /api/teams
 * Create new team (admin only)
 */
router.post(
  '/',
  auth(),
  permissions(['admin']),
  validate(createTeamSchema),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const ipAddress = getClientIp(req);
      const team = await teamService.createTeam(req.body, req.auth!.userId, ipAddress);

      res.status(201).json(team);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * PATCH /api/teams/:id
 * Update team (admin only)
 */
router.patch(
  '/:id',
  auth(),
  permissions(['admin']),
  validateAll({
    params: teamIdParamSchema,
    body: updateTeamSchema,
  }),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const ipAddress = getClientIp(req);
      const team = await teamService.updateTeam(
        req.params.id,
        req.body,
        req.auth!.userId,
        ipAddress
      );

      res.json(team);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * DELETE /api/teams/:id
 * Delete team (admin only)
 */
router.delete(
  '/:id',
  auth(),
  permissions(['admin']),
  validateAll({ params: teamIdParamSchema }),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const ipAddress = getClientIp(req);
      await teamService.deleteTeam(req.params.id, req.auth!.userId, ipAddress);

      res.json({ message: 'Team deleted successfully' });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
