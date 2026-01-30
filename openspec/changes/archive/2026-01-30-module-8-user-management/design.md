# Design: Module 8 - User Management

## Context

This is a greenfield implementation for the AI Support Platform. The user management module is the first to be built and will establish patterns for authentication, authorization, and data modeling used by all other modules.

## Goals / Non-Goals

**Goals:**
- Implement secure JWT-based authentication
- Create a flexible RBAC system with Admin, Supervisor, Agent roles
- Support team organization for user grouping
- Establish audit logging patterns for compliance
- Create reusable middleware for auth/permissions

**Non-Goals:**
- SSO/OAuth integration (future enhancement)
- Multi-factor authentication (future enhancement)
- Custom role creation (only predefined roles for now)
- User self-registration (admin-created accounts only)

## Technical Decisions

### Decision 1: JWT Token Strategy

**Approach:** Dual-token system with short-lived access tokens and long-lived refresh tokens.

- Access token: 15-minute expiry, stored in memory client-side
- Refresh token: 7-day expiry, stored in HTTP-only cookie
- Tokens signed with RS256 (asymmetric) for better security

**Rationale:** Short access tokens minimize the window if a token is compromised. Refresh tokens in HTTP-only cookies prevent XSS attacks from stealing them.

### Decision 2: Password Storage

**Approach:** bcrypt with cost factor 12.

**Rationale:** bcrypt is industry standard, cost factor 12 provides good security/performance balance (~250ms hash time).

### Decision 3: Database Schema

**User Table:**
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  role VARCHAR(20) NOT NULL CHECK (role IN ('admin', 'supervisor', 'agent')),
  status VARCHAR(20) NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'inactive')),
  team_id UUID REFERENCES teams(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

**Team Table:**
```sql
CREATE TABLE teams (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  deleted_at TIMESTAMP WITH TIME ZONE -- soft delete
);
```

**Audit Log Table:**
```sql
CREATE TABLE audit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  action VARCHAR(100) NOT NULL,
  actor_id UUID REFERENCES users(id) ON DELETE SET NULL,
  target_id UUID,
  target_type VARCHAR(50),
  details JSONB,
  ip_address INET,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for common queries
CREATE INDEX idx_audit_logs_action ON audit_logs(action);
CREATE INDEX idx_audit_logs_actor ON audit_logs(actor_id);
CREATE INDEX idx_audit_logs_timestamp ON audit_logs(timestamp);
```

**Refresh Token Table:**
```sql
CREATE TABLE refresh_tokens (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  token_hash VARCHAR(255) NOT NULL,
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_refresh_tokens_user ON refresh_tokens(user_id);
```

### Decision 4: API Structure

**Auth Endpoints:**
- `POST /api/auth/login` - Login, returns tokens
- `POST /api/auth/logout` - Invalidate refresh token
- `POST /api/auth/refresh` - Get new access token
- `POST /api/auth/forgot-password` - Request password reset
- `POST /api/auth/reset-password` - Reset password with token

**User Endpoints:**
- `GET /api/users` - List users (paginated, filterable)
- `GET /api/users/me` - Get current user
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create user (admin only)
- `PATCH /api/users/:id` - Update user
- `POST /api/users/:id/deactivate` - Deactivate user
- `POST /api/users/:id/activate` - Reactivate user

**Team Endpoints:**
- `GET /api/teams` - List teams
- `GET /api/teams/:id` - Get team by ID
- `GET /api/teams/:id/members` - Get team members
- `POST /api/teams` - Create team (admin only)
- `PATCH /api/teams/:id` - Update team (admin only)
- `DELETE /api/teams/:id` - Delete team (admin only)

**Audit Log Endpoints:**
- `GET /api/audit-logs` - List audit logs (admin/supervisor)

### Decision 5: Middleware Architecture

```
Request → AuthMiddleware → PermissionMiddleware → Route Handler
```

1. **AuthMiddleware:** Validates JWT, extracts user context
2. **PermissionMiddleware:** Checks role against required permissions
3. **Route Handler:** Business logic

Permission decorators on routes:
```typescript
// Example usage
router.get('/users',
  auth(),
  permissions(['admin', 'supervisor']),
  listUsers
);
```

### Decision 6: Shared Types Package

All types go in `packages/shared/src/types/` for cross-package usage:

```typescript
// packages/shared/src/types/user.ts
export type UserRole = 'admin' | 'supervisor' | 'agent';
export type UserStatus = 'active' | 'inactive';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  status: UserStatus;
  teamId: string | null;
  createdAt: Date;
  updatedAt: Date;
}
```

### Decision 7: Project Structure

```
packages/
├── shared/
│   └── src/
│       └── types/
│           ├── index.ts
│           ├── user.ts
│           ├── team.ts
│           └── audit.ts
├── backend/
│   └── src/
│       ├── index.ts (Express app entry)
│       ├── config/
│       │   └── database.ts
│       ├── middleware/
│       │   ├── auth.ts
│       │   └── permissions.ts
│       ├── routes/
│       │   ├── auth.ts
│       │   ├── users.ts
│       │   ├── teams.ts
│       │   └── audit-logs.ts
│       ├── services/
│       │   ├── auth.service.ts
│       │   ├── user.service.ts
│       │   ├── team.service.ts
│       │   └── audit.service.ts
│       ├── models/
│       │   ├── user.model.ts
│       │   ├── team.model.ts
│       │   ├── refresh-token.model.ts
│       │   └── audit-log.model.ts
│       └── utils/
│           ├── jwt.ts
│           └── password.ts
```

## Dependencies

**Runtime:**
- express: Web framework
- pg: PostgreSQL client
- bcrypt: Password hashing
- jsonwebtoken: JWT handling
- zod: Request validation

**Dev:**
- typescript
- @types/* packages
- vitest: Testing

## Migration Strategy

Since this is greenfield, no migration concerns. The first run will create all tables.

## Open Questions

None - this is the foundational module with clear requirements.
