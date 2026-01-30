import type { Request, Response, NextFunction } from 'express';
import type { UserRole } from '@ai-support/shared';
import { ForbiddenError, UnauthorizedError } from '../utils/errors';

/**
 * Permission middleware - checks if user has required role(s)
 * @param allowedRoles Array of roles that can access the route (OR logic)
 */
export function permissions(allowedRoles: UserRole[]) {
  return (req: Request, _res: Response, next: NextFunction) => {
    if (!req.auth) {
      return next(new UnauthorizedError('Authentication required'));
    }

    const { role } = req.auth;

    if (!allowedRoles.includes(role)) {
      return next(new ForbiddenError('Insufficient permissions'));
    }

    next();
  };
}

/**
 * Check if user can access a specific resource based on ownership or role
 */
export function canAccessResource(
  userRole: UserRole,
  userId: string,
  userTeamId: string | null,
  resource: {
    ownerId?: string;
    teamId?: string | null;
  }
): boolean {
  // Admins can access everything
  if (userRole === 'admin') {
    return true;
  }

  // Users can always access their own resources
  if (resource.ownerId && resource.ownerId === userId) {
    return true;
  }

  // Supervisors can access team resources
  if (userRole === 'supervisor' && userTeamId && resource.teamId === userTeamId) {
    return true;
  }

  return false;
}

/**
 * Middleware to check team-based access for supervisors
 */
export function teamAccess() {
  return (req: Request, _res: Response, next: NextFunction) => {
    if (!req.auth) {
      return next(new UnauthorizedError('Authentication required'));
    }

    const { role, teamId } = req.auth;
    const targetTeamId = req.params.teamId || req.body?.teamId;

    // Admins bypass team check
    if (role === 'admin') {
      return next();
    }

    // Supervisors can only access their team
    if (role === 'supervisor') {
      if (!targetTeamId || targetTeamId === teamId) {
        return next();
      }
      return next(new ForbiddenError('Insufficient permissions'));
    }

    // Agents have no team management access
    return next(new ForbiddenError('Insufficient permissions'));
  };
}

/**
 * Helper to check if user is admin
 */
export function isAdmin(req: Request): boolean {
  return req.auth?.role === 'admin';
}

/**
 * Helper to check if user is supervisor
 */
export function isSupervisor(req: Request): boolean {
  return req.auth?.role === 'supervisor';
}

/**
 * Helper to check if user is agent
 */
export function isAgent(req: Request): boolean {
  return req.auth?.role === 'agent';
}
