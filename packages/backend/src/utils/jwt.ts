import jwt from 'jsonwebtoken';
import type { AccessTokenPayload, UserRole } from '@ai-support/shared';
import { env } from '../config/env';

interface TokenUser {
  id: string;
  email: string;
  role: UserRole;
  teamId: string | null;
}

/**
 * Generate an access token
 */
export function generateAccessToken(user: TokenUser): string {
  const payload: Omit<AccessTokenPayload, 'iat' | 'exp'> = {
    sub: user.id,
    email: user.email,
    role: user.role,
    teamId: user.teamId,
  };

  return jwt.sign(payload, env.JWT_SECRET, {
    expiresIn: env.JWT_ACCESS_EXPIRY as jwt.SignOptions['expiresIn'],
  });
}

/**
 * Generate a refresh token
 */
export function generateRefreshToken(userId: string): string {
  return jwt.sign({ sub: userId, type: 'refresh' }, env.JWT_SECRET, {
    expiresIn: env.JWT_REFRESH_EXPIRY as jwt.SignOptions['expiresIn'],
  });
}

/**
 * Verify and decode an access token
 */
export function verifyAccessToken(token: string): AccessTokenPayload {
  return jwt.verify(token, env.JWT_SECRET) as AccessTokenPayload;
}

/**
 * Verify and decode a refresh token
 */
export function verifyRefreshToken(token: string): { sub: string; type: string } {
  const payload = jwt.verify(token, env.JWT_SECRET) as { sub: string; type: string };
  if (payload.type !== 'refresh') {
    throw new Error('Invalid token type');
  }
  return payload;
}

/**
 * Generate a password reset token (short-lived)
 */
export function generateResetToken(userId: string): string {
  return jwt.sign({ sub: userId, type: 'reset' }, env.JWT_SECRET, {
    expiresIn: '1h',
  });
}

/**
 * Verify a password reset token
 */
export function verifyResetToken(token: string): { sub: string } {
  const payload = jwt.verify(token, env.JWT_SECRET) as { sub: string; type: string };
  if (payload.type !== 'reset') {
    throw new Error('Invalid token type');
  }
  return { sub: payload.sub };
}
