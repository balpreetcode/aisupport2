import crypto from 'crypto';
import { prisma } from '../config/database';
import type { LoginResponse, PublicUser } from '@ai-support/shared';
import { comparePassword, hashPassword } from '../utils/password';
import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
  generateResetToken,
  verifyResetToken,
} from '../utils/jwt';
import { UnauthorizedError, ForbiddenError, BadRequestError } from '../utils/errors';
import { createAuditLog } from './audit.service';
import { getUserByEmail, updatePassword as updateUserPassword } from './user.service';

/**
 * Login a user with email and password
 */
export async function login(
  email: string,
  password: string,
  ipAddress?: string
): Promise<LoginResponse> {
  const user = await getUserByEmail(email);

  if (!user) {
    await createAuditLog({
      action: 'auth.login_failed',
      actorId: null,
      targetId: null,
      targetType: 'system',
      details: { email, reason: 'invalid_credentials' },
      ipAddress,
    });
    throw new UnauthorizedError('Invalid email or password');
  }

  const validPassword = await comparePassword(password, user.passwordHash);

  if (!validPassword) {
    await createAuditLog({
      action: 'auth.login_failed',
      actorId: null,
      targetId: user.id,
      targetType: 'user',
      details: { email, reason: 'invalid_credentials' },
      ipAddress,
    });
    throw new UnauthorizedError('Invalid email or password');
  }

  if (user.status === 'inactive') {
    throw new ForbiddenError('Account is deactivated');
  }

  // Generate tokens
  const accessToken = generateAccessToken({
    id: user.id,
    email: user.email,
    role: user.role,
    teamId: user.teamId,
  });

  const refreshToken = generateRefreshToken(user.id);

  // Store refresh token hash
  const tokenHash = hashToken(refreshToken);
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

  await prisma.refreshToken.create({
    data: {
      userId: user.id,
      tokenHash,
      expiresAt,
    },
  });

  await createAuditLog({
    action: 'auth.login',
    actorId: user.id,
    targetId: user.id,
    targetType: 'user',
    details: {},
    ipAddress,
  });

  const publicUser: PublicUser = {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
    status: user.status,
    teamId: user.teamId,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };

  return {
    accessToken,
    refreshToken,
    user: publicUser,
  };
}

/**
 * Refresh an access token
 */
export async function refresh(refreshToken: string): Promise<string> {
  let payload: { sub: string };

  try {
    payload = verifyRefreshToken(refreshToken);
  } catch {
    throw new UnauthorizedError('Refresh token expired');
  }

  // Verify token exists in database
  const tokenHash = hashToken(refreshToken);
  const stored = await prisma.refreshToken.findFirst({
    where: {
      userId: payload.sub,
      tokenHash,
      expiresAt: { gt: new Date() },
    },
    include: { user: true },
  });

  if (!stored) {
    throw new UnauthorizedError('Refresh token expired');
  }

  if (stored.user.status === 'inactive') {
    throw new ForbiddenError('Account is deactivated');
  }

  // Generate new access token
  return generateAccessToken({
    id: stored.user.id,
    email: stored.user.email,
    role: stored.user.role,
    teamId: stored.user.teamId,
  });
}

/**
 * Logout a user by invalidating their refresh token
 */
export async function logout(
  refreshToken: string,
  userId: string,
  ipAddress?: string
): Promise<void> {
  const tokenHash = hashToken(refreshToken);

  await prisma.refreshToken.deleteMany({
    where: {
      userId,
      tokenHash,
    },
  });

  await createAuditLog({
    action: 'auth.logout',
    actorId: userId,
    targetId: userId,
    targetType: 'user',
    details: {},
    ipAddress,
  });
}

/**
 * Request a password reset
 */
export async function requestPasswordReset(
  email: string,
  ipAddress?: string
): Promise<string | null> {
  const user = await getUserByEmail(email);

  await createAuditLog({
    action: 'auth.password_reset_requested',
    actorId: null,
    targetId: user?.id ?? null,
    targetType: user ? 'user' : 'system',
    details: { email },
    ipAddress,
  });

  if (!user) {
    // Return null but don't indicate whether email exists
    return null;
  }

  // Generate reset token
  return generateResetToken(user.id);
}

/**
 * Reset password with token
 */
export async function resetPassword(
  token: string,
  newPassword: string,
  ipAddress?: string
): Promise<void> {
  let payload: { sub: string };

  try {
    payload = verifyResetToken(token);
  } catch {
    throw new BadRequestError('Invalid or expired reset token');
  }

  await updateUserPassword(payload.sub, newPassword);

  await createAuditLog({
    action: 'auth.password_reset',
    actorId: payload.sub,
    targetId: payload.sub,
    targetType: 'user',
    details: {},
    ipAddress,
  });
}

/**
 * Hash a token for storage
 */
function hashToken(token: string): string {
  return crypto.createHash('sha256').update(token).digest('hex');
}
