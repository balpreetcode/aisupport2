import { prisma } from '../config/database';
import type {
  AuditLog,
  AuditAction,
  AuditTargetType,
  AuditLogFilters,
  CreateAuditLogInput,
} from '@ai-support/shared';

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
 * Create an audit log entry
 */
export async function createAuditLog(input: CreateAuditLogInput): Promise<AuditLog> {
  const log = await prisma.auditLog.create({
    data: {
      action: input.action,
      actorId: input.actorId ?? null,
      targetId: input.targetId ?? null,
      targetType: input.targetType,
      details: input.details ?? {},
      ipAddress: input.ipAddress ?? null,
    },
  });

  return mapToAuditLog(log);
}

/**
 * Query audit logs with filters and pagination
 */
export async function queryAuditLogs(
  filters: AuditLogFilters = {},
  pagination: PaginationParams = {}
): Promise<PaginatedResult<AuditLog>> {
  const { page = 1, limit = 50 } = pagination;
  const skip = (page - 1) * limit;

  const where: Record<string, unknown> = {};

  if (filters.action) {
    where.action = filters.action;
  }
  if (filters.actorId) {
    where.actorId = filters.actorId;
  }
  if (filters.targetId) {
    where.targetId = filters.targetId;
  }
  if (filters.targetType) {
    where.targetType = filters.targetType;
  }
  if (filters.from || filters.to) {
    where.timestamp = {};
    if (filters.from) {
      (where.timestamp as Record<string, Date>).gte = filters.from;
    }
    if (filters.to) {
      (where.timestamp as Record<string, Date>).lte = filters.to;
    }
  }

  const [logs, total] = await Promise.all([
    prisma.auditLog.findMany({
      where,
      orderBy: { timestamp: 'desc' },
      skip,
      take: limit,
    }),
    prisma.auditLog.count({ where }),
  ]);

  return {
    data: logs.map(mapToAuditLog),
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
  };
}

/**
 * Query audit logs filtered by team members
 */
export async function queryAuditLogsByTeam(
  teamId: string,
  filters: AuditLogFilters = {},
  pagination: PaginationParams = {}
): Promise<PaginatedResult<AuditLog>> {
  const { page = 1, limit = 50 } = pagination;
  const skip = (page - 1) * limit;

  // Get team member IDs
  const teamMembers = await prisma.user.findMany({
    where: { teamId },
    select: { id: true },
  });
  const memberIds = teamMembers.map((m: { id: string }) => m.id);

  const where: Record<string, unknown> = {
    OR: [{ actorId: { in: memberIds } }, { targetId: { in: memberIds } }],
  };

  if (filters.action) {
    where.action = filters.action;
  }
  if (filters.from || filters.to) {
    where.timestamp = {};
    if (filters.from) {
      (where.timestamp as Record<string, Date>).gte = filters.from;
    }
    if (filters.to) {
      (where.timestamp as Record<string, Date>).lte = filters.to;
    }
  }

  const [logs, total] = await Promise.all([
    prisma.auditLog.findMany({
      where,
      orderBy: { timestamp: 'desc' },
      skip,
      take: limit,
    }),
    prisma.auditLog.count({ where }),
  ]);

  return {
    data: logs.map(mapToAuditLog),
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
  };
}

// Helper to map Prisma model to shared type
function mapToAuditLog(log: {
  id: string;
  action: string;
  actorId: string | null;
  targetId: string | null;
  targetType: string;
  details: unknown;
  ipAddress: string | null;
  timestamp: Date;
}): AuditLog {
  return {
    id: log.id,
    action: log.action as AuditAction,
    actorId: log.actorId,
    targetId: log.targetId,
    targetType: log.targetType as AuditTargetType,
    details: log.details as Record<string, unknown>,
    ipAddress: log.ipAddress,
    timestamp: log.timestamp,
  };
}
