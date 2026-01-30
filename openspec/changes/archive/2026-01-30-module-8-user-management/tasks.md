# Tasks: Module 8 - User Management

## 1. Shared Types

- [x] 1.1 Create `packages/shared/src/types/user.ts` with User, UserRole, UserStatus types
- [x] 1.2 Create `packages/shared/src/types/team.ts` with Team type
- [x] 1.3 Create `packages/shared/src/types/audit.ts` with AuditLog, AuditAction types
- [x] 1.4 Create `packages/shared/src/types/auth.ts` with LoginRequest, LoginResponse, TokenPayload types
- [x] 1.5 Create `packages/shared/src/types/index.ts` barrel export

## 2. Backend Project Setup

- [x] 2.1 Add backend dependencies to `packages/backend/package.json` (express, pg, bcrypt, jsonwebtoken, zod, cors, dotenv)
- [x] 2.2 Create `packages/backend/src/index.ts` Express app entry point
- [x] 2.3 Create `packages/backend/src/config/database.ts` PostgreSQL connection (via Prisma)
- [x] 2.4 Create `packages/backend/src/config/env.ts` environment configuration

## 3. Database Schema (Prisma)

- [x] 3.1 Create `packages/backend/prisma/schema.prisma` with User, Team, RefreshToken, AuditLog models
- [x] 3.2 Define enums for UserRole and UserStatus
- [x] 3.3 Set up relations between entities
- [x] 3.4 Add indexes for audit log queries

## 4. Utility Functions

- [x] 4.1 Create `packages/backend/src/utils/password.ts` with hash and compare functions
- [x] 4.2 Create `packages/backend/src/utils/jwt.ts` with sign and verify functions
- [x] 4.3 Create `packages/backend/src/utils/errors.ts` with custom error classes

## 5. Services

- [x] 5.1 Create `packages/backend/src/services/auth.service.ts` with login, logout, refresh, password reset
- [x] 5.2 Create `packages/backend/src/services/user.service.ts` with user CRUD operations
- [x] 5.3 Create `packages/backend/src/services/team.service.ts` with team CRUD operations
- [x] 5.4 Create `packages/backend/src/services/audit.service.ts` with log creation and querying

## 6. Middleware

- [x] 6.1 Create `packages/backend/src/middleware/auth.ts` JWT validation middleware
- [x] 6.2 Create `packages/backend/src/middleware/permissions.ts` RBAC enforcement middleware
- [x] 6.3 Create `packages/backend/src/middleware/error-handler.ts` global error handler
- [x] 6.4 Create `packages/backend/src/middleware/validate.ts` request validation middleware

## 7. API Routes

- [x] 7.1 Create `packages/backend/src/routes/auth.ts` with login, logout, refresh, password reset endpoints
- [x] 7.2 Create `packages/backend/src/routes/users.ts` with user CRUD endpoints
- [x] 7.3 Create `packages/backend/src/routes/teams.ts` with team CRUD endpoints
- [x] 7.4 Create `packages/backend/src/routes/audit-logs.ts` with audit log query endpoint
- [x] 7.5 Create `packages/backend/src/routes/index.ts` route aggregator

## 8. Request Validation Schemas

- [x] 8.1 Create `packages/backend/src/schemas/auth.schema.ts` with Zod schemas for auth requests
- [x] 8.2 Create `packages/backend/src/schemas/user.schema.ts` with Zod schemas for user requests
- [x] 8.3 Create `packages/backend/src/schemas/team.schema.ts` with Zod schemas for team requests
- [x] 8.4 Create `packages/backend/src/schemas/audit.schema.ts` with Zod schemas for audit queries

## 9. Integration

- [x] 9.1 Wire up all routes in `packages/backend/src/index.ts`
- [x] 9.2 Add error handling middleware
- [x] 9.3 Add CORS configuration
- [x] 9.4 Create initial admin user seed script `packages/backend/src/db/seed.ts`
- [x] 9.5 Create `.env.example` with required environment variables

## 10. Verification

- [ ] 10.1 Test auth flow: login → access protected route → refresh → logout
- [ ] 10.2 Test user CRUD: create → read → update → deactivate
- [ ] 10.3 Test team CRUD: create → read → update → delete
- [ ] 10.4 Test permission enforcement: verify role-based access control
- [ ] 10.5 Verify audit logs are created for all administrative actions
