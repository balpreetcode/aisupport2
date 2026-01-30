import { prisma } from '../config/database';
import type { Team, CreateTeamInput, UpdateTeamInput, TeamWithMemberCount } from '@ai-support/shared';
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
 * Create a new team
 */
export async function createTeam(
  input: CreateTeamInput,
  actorId: string,
  ipAddress?: string
): Promise<Team> {
  // Check for duplicate name
  const existing = await prisma.team.findFirst({
    where: { name: input.name, deletedAt: null },
  });

  if (existing) {
    throw new ConflictError('Team name already exists');
  }

  const team = await prisma.team.create({
    data: {
      name: input.name,
      description: input.description ?? null,
    },
  });

  await createAuditLog({
    action: 'team.created',
    actorId,
    targetId: team.id,
    targetType: 'team',
    details: { name: team.name, description: team.description },
    ipAddress,
  });

  return mapToTeam(team);
}

/**
 * Get team by ID
 */
export async function getTeamById(id: string): Promise<TeamWithMemberCount | null> {
  const team = await prisma.team.findUnique({
    where: { id, deletedAt: null },
    include: {
      _count: {
        select: { users: true },
      },
    },
  });

  if (!team) return null;

  return {
    ...mapToTeam(team),
    memberCount: team._count.users,
  };
}

/**
 * List all teams
 */
export async function listTeams(
  pagination: PaginationParams = {}
): Promise<PaginatedResult<TeamWithMemberCount>> {
  const { page = 1, limit = 50 } = pagination;
  const skip = (page - 1) * limit;

  const [teams, total] = await Promise.all([
    prisma.team.findMany({
      where: { deletedAt: null },
      orderBy: { name: 'asc' },
      skip,
      take: limit,
      include: {
        _count: {
          select: { users: true },
        },
      },
    }),
    prisma.team.count({ where: { deletedAt: null } }),
  ]);

  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: teams.map((t: any) => ({
      ...mapToTeam(t),
      memberCount: t._count.users,
    })),
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
  };
}

/**
 * Get team by ID (for supervisor access check)
 */
export async function getTeamByUserId(userId: string): Promise<Team | null> {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { team: true },
  });

  if (!user?.team || user.team.deletedAt) return null;

  return mapToTeam(user.team);
}

/**
 * Update a team
 */
export async function updateTeam(
  id: string,
  input: UpdateTeamInput,
  actorId: string,
  ipAddress?: string
): Promise<Team> {
  const existing = await prisma.team.findUnique({
    where: { id, deletedAt: null },
  });

  if (!existing) {
    throw new NotFoundError('Team not found');
  }

  // Check name uniqueness if changing
  if (input.name && input.name !== existing.name) {
    const nameTaken = await prisma.team.findFirst({
      where: { name: input.name, deletedAt: null, id: { not: id } },
    });
    if (nameTaken) {
      throw new ConflictError('Team name already exists');
    }
  }

  const changes: Record<string, { from: unknown; to: unknown }> = {};

  if (input.name !== undefined && input.name !== existing.name) {
    changes.name = { from: existing.name, to: input.name };
  }
  if (input.description !== undefined && input.description !== existing.description) {
    changes.description = { from: existing.description, to: input.description };
  }

  const team = await prisma.team.update({
    where: { id },
    data: {
      name: input.name,
      description: input.description,
    },
  });

  if (Object.keys(changes).length > 0) {
    await createAuditLog({
      action: 'team.updated',
      actorId,
      targetId: id,
      targetType: 'team',
      details: { changes },
      ipAddress,
    });
  }

  return mapToTeam(team);
}

/**
 * Delete a team (soft delete)
 */
export async function deleteTeam(
  id: string,
  actorId: string,
  ipAddress?: string
): Promise<void> {
  const existing = await prisma.team.findUnique({
    where: { id, deletedAt: null },
  });

  if (!existing) {
    throw new NotFoundError('Team not found');
  }

  // Soft delete the team and remove team assignment from users
  await prisma.$transaction([
    prisma.team.update({
      where: { id },
      data: { deletedAt: new Date() },
    }),
    prisma.user.updateMany({
      where: { teamId: id },
      data: { teamId: null },
    }),
  ]);

  await createAuditLog({
    action: 'team.deleted',
    actorId,
    targetId: id,
    targetType: 'team',
    details: { name: existing.name },
    ipAddress,
  });
}

/**
 * List team members
 */
export async function listTeamMembers(teamId: string, pagination: PaginationParams = {}) {
  const { page = 1, limit = 50 } = pagination;
  const skip = (page - 1) * limit;

  const team = await prisma.team.findUnique({
    where: { id: teamId, deletedAt: null },
  });

  if (!team) {
    throw new NotFoundError('Team not found');
  }

  const [users, total] = await Promise.all([
    prisma.user.findMany({
      where: { teamId },
      orderBy: { name: 'asc' },
      skip,
      take: limit,
    }),
    prisma.user.count({ where: { teamId } }),
  ]);

  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: users.map((u: any) => ({
      id: u.id,
      email: u.email,
      name: u.name,
      role: u.role,
      status: u.status,
      teamId: u.teamId,
      createdAt: u.createdAt,
      updatedAt: u.updatedAt,
    })),
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
  };
}

// Helper to map Prisma model to shared type
function mapToTeam(team: {
  id: string;
  name: string;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}): Team {
  return {
    id: team.id,
    name: team.name,
    description: team.description,
    createdAt: team.createdAt,
    updatedAt: team.updatedAt,
    deletedAt: team.deletedAt,
  };
}
