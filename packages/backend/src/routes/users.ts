import { Router } from 'express';
import type { Request, Response, NextFunction } from 'express';
import { auth, getClientIp } from '../middleware/auth';
import { permissions, isAdmin, isSupervisor } from '../middleware/permissions';
import { validate, validateAll } from '../middleware/validate';
import {
  createUserSchema,
  updateUserSchema,
  userFiltersSchema,
  userIdParamSchema,
} from '../schemas/user.schema';
import * as userService from '../services/user.service';
import { ForbiddenError, NotFoundError } from '../utils/errors';

const router = Router();

/**
 * GET /api/users
 * List users (admin: all, supervisor: team only)
 */
router.get(
  '/',
  auth(),
  permissions(['admin', 'supervisor']),
  validate(userFiltersSchema, 'query'),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { page, limit, ...filters } = req.query as unknown as {
        page: number;
        limit: number;
        role?: 'admin' | 'supervisor' | 'agent';
        status?: 'active' | 'inactive';
        teamId?: string;
      };

      // Supervisors can only see their team
      if (isSupervisor(req)) {
        if (!req.auth!.teamId) {
          return res.json({ data: [], total: 0, page, limit, totalPages: 0 });
        }
        filters.teamId = req.auth!.teamId;
      }

      const result = await userService.listUsers(filters, { page, limit });

      res.json(result);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * GET /api/users/me
 * Get current user profile
 */
router.get(
  '/me',
  auth(),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await userService.getUserById(req.auth!.userId);

      if (!user) {
        throw new NotFoundError('User not found');
      }

      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * GET /api/users/:id
 * Get user by ID (admin only, or supervisor for team members)
 */
router.get(
  '/:id',
  auth(),
  permissions(['admin', 'supervisor']),
  validateAll({ params: userIdParamSchema }),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await userService.getUserById(req.params.id);

      if (!user) {
        throw new NotFoundError('User not found');
      }

      // Supervisors can only view team members
      if (isSupervisor(req) && user.teamId !== req.auth!.teamId) {
        throw new ForbiddenError('Insufficient permissions');
      }

      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * POST /api/users
 * Create new user (admin only)
 */
router.post(
  '/',
  auth(),
  permissions(['admin']),
  validate(createUserSchema),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const ipAddress = getClientIp(req);
      const user = await userService.createUser(req.body, req.auth!.userId, ipAddress);

      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * PATCH /api/users/me
 * Update current user profile (limited fields)
 */
router.patch(
  '/me',
  auth(),
  validate(updateUserSchema),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const ipAddress = getClientIp(req);

      // Users can only update name (not role, teamId, or email)
      const allowedUpdates = { name: req.body.name };

      const user = await userService.updateUser(
        req.auth!.userId,
        allowedUpdates,
        req.auth!.userId,
        ipAddress
      );

      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * PATCH /api/users/:id
 * Update user (admin only)
 */
router.patch(
  '/:id',
  auth(),
  permissions(['admin']),
  validateAll({
    params: userIdParamSchema,
    body: updateUserSchema,
  }),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const ipAddress = getClientIp(req);
      const user = await userService.updateUser(
        req.params.id,
        req.body,
        req.auth!.userId,
        ipAddress
      );

      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * POST /api/users/:id/deactivate
 * Deactivate user (admin only)
 */
router.post(
  '/:id/deactivate',
  auth(),
  permissions(['admin']),
  validateAll({ params: userIdParamSchema }),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const ipAddress = getClientIp(req);
      const user = await userService.deactivateUser(
        req.params.id,
        req.auth!.userId,
        ipAddress
      );

      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * POST /api/users/:id/activate
 * Reactivate user (admin only)
 */
router.post(
  '/:id/activate',
  auth(),
  permissions(['admin']),
  validateAll({ params: userIdParamSchema }),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const ipAddress = getClientIp(req);
      const user = await userService.activateUser(
        req.params.id,
        req.auth!.userId,
        ipAddress
      );

      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
