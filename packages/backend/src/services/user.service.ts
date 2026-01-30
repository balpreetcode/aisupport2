import { prisma } from '../config/database';
import type {
  User,
  PublicUser,
  CreateUserInput,
  UpdateUserInput,
  UserFilters,
  UserRole,
  UserStatus,
} from '@ai-support/shared';
import { hashPassword } from '../utils/password';
import { ConflictError, NotFoundError } from '../utils/errors';
import { createAuditLog } from './audit.service';

interface PaginationParams {
  page?: number;
  limit?: number;
}

interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

/**
 * Create a new user
 */
export async function createUser(
  input: CreateUserInput,
  actorId: string,
  ipAddress?: string
): Promise<PublicUser> {
  // Check for duplicate email
  const existing = await prisma.user.findUnique({
    where: { email: input.email },
  });

  if (existing) {
    throw new ConflictError('Email already registered');
  }

  // Validate team exists if provided
  if (input.teamId) {
    const team = await prisma.team.findUnique({
      where: { id: input.teamId, deletedAt: null },
    });
    if (!team) {
      throw new NotFoundError('Team not found');
    }
  }

  const passwordHash = await hashPassword(input.password);

  const user = await prisma.user.create({
    data: {
      email: input.email,
      passwordHash,
      name: input.name,
      role: input.role,
      teamId: input.teamId ?? null,
    },
  });

  // Audit log
  await createAuditLog({
    action: 'user.created',
    actorId,
    targetId: user.id,
    targetType: 'user',
    details: {
      email: user.email,
      name: user.name,
      role: user.role,
      teamId: user.teamId,
    },
    ipAddress,
  });

  return mapToPublicUser(user);
}

/**
 * Get user by ID
 */
export async function getUserById(id: string): Promise<PublicUser | null> {
  const user = await prisma.user.findUnique({
    where: { id },
  });

  return user ? mapToPublicUser(user) : null;
}

/**
 * Get user by email (with password hash for auth)
 */
export async function getUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: { email },
  });
}

/**
 * List users with filters and pagination
 */
export async function listUsers(
  filters: UserFilters = {},
  pagination: PaginationParams = {}
): Promise<PaginatedResult<PublicUser>> {
  const { page = 1, limit = 50 } = pagination;
  const skip = (page - 1) * limit;

  const where: Record<string, unknown> = {};

  if (filters.role) {
    where.role = filters.role;
  }
  if (filters.status) {
    where.status = filters.status;
  }
  if (filters.teamId) {
    where.teamId = filters.teamId;
  }

  const [users, total] = await Promise.all([
    prisma.user.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      skip,
      take: limit,
    }),
    prisma.user.count({ where }),
  ]);

  return {
    data: users.map(mapToPublicUser),
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
  };
}

/**
 * List users by team
 */
export async function listUsersByTeam(
  teamId: string,
  pagination: PaginationParams = {}
): Promise<PaginatedResult<PublicUser>> {
  return listUsers({ teamId }, pagination);
}

/**
 * Update a user
 */
export async function updateUser(
  id: string,
  input: UpdateUserInput,
  actorId: string,
  ipAddress?: string
): Promise<PublicUser> {
  const existing = await prisma.user.findUnique({ where: { id } });

  if (!existing) {
    throw new NotFoundError('User not found');
  }

  // Check email uniqueness if changing
  if (input.email && input.email !== existing.email) {
    const emailTaken = await prisma.user.findUnique({
      where: { email: input.email },
    });
    if (emailTaken) {
      throw new ConflictError('Email already registered');
    }
  }

  // Validate team if changing
  if (input.teamId !== undefined && input.teamId !== null) {
    const team = await prisma.team.findUnique({
      where: { id: input.teamId, deletedAt: null },
    });
    if (!team) {
      throw new NotFoundError('Team not found');
    }
  }

  const changes: Record<string, { from: unknown; to: unknown }> = {};

  if (input.email !== undefined && input.email !== existing.email) {
    changes.email = { from: existing.email, to: input.email };
  }
  if (input.name !== undefined && input.name !== existing.name) {
    changes.name = { from: existing.name, to: input.name };
  }
  if (input.role !== undefined && input.role !== existing.role) {
    changes.role = { from: existing.role, to: input.role };
  }
  if (input.teamId !== undefined && input.teamId !== existing.teamId) {
    changes.teamId = { from: existing.teamId, to: input.teamId };
  }

  const user = await prisma.user.update({
    where: { id },
    data: {
      email: input.email,
      name: input.name,
      role: input.role,
      teamId: input.teamId,
    },
  });

  // Role change audit
  if (changes.role) {
    await createAuditLog({
      action: 'user.role_changed',
      actorId,
      targetId: id,
      targetType: 'user',
      details: { from: changes.role.from, to: changes.role.to },
      ipAddress,
    });
  }

  // Team change audit
  if (changes.teamId) {
    await createAuditLog({
      action: 'user.team_changed',
      actorId,
      targetId: id,
      targetType: 'user',
      details: { from_team: changes.teamId.from, to_team: changes.teamId.to },
      ipAddress,
    });
  }

  // General update audit (if other changes)
  if (Object.keys(changes).length > 0) {
    await createAuditLog({
      action: 'user.updated',
      actorId,
      targetId: id,
      targetType: 'user',
      details: { changes },
      ipAddress,
    });
  }

  return mapToPublicUser(user);
}

/**
 * Deactivate a user
 */
export async function deactivateUser(
  id: string,
  actorId: string,
  ipAddress?: string
): Promise<PublicUser> {
  const user = await prisma.user.findUnique({ where: { id } });

  if (!user) {
    throw new NotFoundError('User not found');
  }

  const updated = await prisma.user.update({
    where: { id },
    data: { status: 'inactive' },
  });

  // Invalidate all refresh tokens
  await prisma.refreshToken.deleteMany({
    where: { userId: id },
  });

  await createAuditLog({
    action: 'user.deactivated',
    actorId,
    targetId: id,
    targetType: 'user',
    details: { reason: 'admin_action' },
    ipAddress,
  });

  return mapToPublicUser(updated);
}

/**
 * Activate a user
 */
export async function activateUser(
  id: string,
  actorId: string,
  ipAddress?: string
): Promise<PublicUser> {
  const user = await prisma.user.findUnique({ where: { id } });

  if (!user) {
    throw new NotFoundError('User not found');
  }

  const updated = await prisma.user.update({
    where: { id },
    data: { status: 'active' },
  });

  await createAuditLog({
    action: 'user.activated',
    actorId,
    targetId: id,
    targetType: 'user',
    details: {},
    ipAddress,
  });

  return mapToPublicUser(updated);
}

/**
 * Update user password
 */
export async function updatePassword(userId: string, newPassword: string): Promise<void> {
  const passwordHash = await hashPassword(newPassword);

  await prisma.user.update({
    where: { id: userId },
    data: { passwordHash },
  });

  // Invalidate all refresh tokens
  await prisma.refreshToken.deleteMany({
    where: { userId },
  });
}

// Helper to map Prisma model to public user type
function mapToPublicUser(user: {
  id: string;
  email: string;
  name: string;
  role: string;
  status: string;
  teamId: string | null;
  createdAt: Date;
  updatedAt: Date;
}): PublicUser {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role as UserRole,
    status: user.status as UserStatus,
    teamId: user.teamId,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
}
