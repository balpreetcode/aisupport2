/**
 * Audit log action types
 */
export type AuditAction =
  // Auth actions
  | 'auth.login'
  | 'auth.login_failed'
  | 'auth.logout'
  | 'auth.password_reset_requested'
  | 'auth.password_reset'
  // User actions
  | 'user.created'
  | 'user.updated'
  | 'user.deactivated'
  | 'user.activated'
  | 'user.role_changed'
  | 'user.team_changed'
  // Team actions
  | 'team.created'
  | 'team.updated'
  | 'team.deleted';

/**
 * Target entity types for audit logs
 */
export type AuditTargetType = 'user' | 'team' | 'system';

/**
 * Audit log entry
 */
export interface AuditLog {
  id: string;
  action: AuditAction;
  actorId: string | null;
  targetId: string | null;
  targetType: AuditTargetType;
  details: Record<string, unknown>;
  ipAddress: string | null;
  timestamp: Date;
}

/**
 * Data required to create an audit log entry
 */
export interface CreateAuditLogInput {
  action: AuditAction;
  actorId?: string | null;
  targetId?: string | null;
  targetType: AuditTargetType;
  details?: Record<string, unknown>;
  ipAddress?: string | null;
}

/**
 * Query filters for audit logs
 */
export interface AuditLogFilters {
  action?: AuditAction;
  actorId?: string;
  targetId?: string;
  targetType?: AuditTargetType;
  from?: Date;
  to?: Date;
}
