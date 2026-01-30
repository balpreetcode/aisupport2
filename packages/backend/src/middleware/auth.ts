import type { Request, Response, NextFunction } from 'express';
import type { AuthContext } from '@ai-support/shared';
import { verifyAccessToken } from '../utils/jwt';
import { UnauthorizedError } from '../utils/errors';

// Extend Express Request type
declare global {
  namespace Express {
    interface Request {
      auth?: AuthContext;
    }
  }
}

/**
 * Authentication middleware - validates JWT and populates req.auth
 */
export function auth() {
  return (req: Request, _res: Response, next: NextFunction) => {
    try {
      const authHeader = req.headers.authorization;

      if (!authHeader) {
        throw new UnauthorizedError('Authentication required');
      }

      const [scheme, token] = authHeader.split(' ');

      if (scheme !== 'Bearer' || !token) {
        throw new UnauthorizedError('Invalid authorization header');
      }

      const payload = verifyAccessToken(token);

      req.auth = {
        userId: payload.sub,
        email: payload.email,
        role: payload.role,
        teamId: payload.teamId,
      };

      next();
    } catch (error) {
      if (error instanceof UnauthorizedError) {
        next(error);
      } else if (
        error instanceof Error &&
        (error.name === 'TokenExpiredError' || error.name === 'JsonWebTokenError')
      ) {
        next(new UnauthorizedError('Token expired'));
      } else {
        next(error);
      }
    }
  };
}

/**
 * Get client IP address from request
 */
export function getClientIp(req: Request): string | undefined {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string') {
    return forwarded.split(',')[0].trim();
  }
  return req.socket.remoteAddress;
}
