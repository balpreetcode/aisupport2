import { Router } from 'express';
import type { Request, Response, NextFunction } from 'express';
import { validate } from '../middleware/validate';
import { auth, getClientIp } from '../middleware/auth';
import {
  loginSchema,
  refreshSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
} from '../schemas/auth.schema';
import * as authService from '../services/auth.service';

const router = Router();

/**
 * POST /api/auth/login
 * Login with email and password
 */
router.post(
  '/login',
  validate(loginSchema),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;
      const ipAddress = getClientIp(req);

      const result = await authService.login(email, password, ipAddress);

      res.json(result);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * POST /api/auth/refresh
 * Refresh access token
 */
router.post(
  '/refresh',
  validate(refreshSchema),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { refreshToken } = req.body;

      const accessToken = await authService.refresh(refreshToken);

      res.json({ accessToken });
    } catch (error) {
      next(error);
    }
  }
);

/**
 * POST /api/auth/logout
 * Logout and invalidate refresh token
 */
router.post(
  '/logout',
  auth(),
  validate(refreshSchema),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { refreshToken } = req.body;
      const ipAddress = getClientIp(req);

      await authService.logout(refreshToken, req.auth!.userId, ipAddress);

      res.json({ message: 'Logged out successfully' });
    } catch (error) {
      next(error);
    }
  }
);

/**
 * POST /api/auth/forgot-password
 * Request password reset
 */
router.post(
  '/forgot-password',
  validate(forgotPasswordSchema),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email } = req.body;
      const ipAddress = getClientIp(req);

      const token = await authService.requestPasswordReset(email, ipAddress);

      // In production, send email with token
      // For development, return token in response
      if (process.env.NODE_ENV === 'development' && token) {
        res.json({ message: 'Password reset email sent', token });
      } else {
        res.json({ message: 'Password reset email sent' });
      }
    } catch (error) {
      next(error);
    }
  }
);

/**
 * POST /api/auth/reset-password
 * Reset password with token
 */
router.post(
  '/reset-password',
  validate(resetPasswordSchema),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { token, newPassword } = req.body;
      const ipAddress = getClientIp(req);

      await authService.resetPassword(token, newPassword, ipAddress);

      res.json({ message: 'Password reset successfully' });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
