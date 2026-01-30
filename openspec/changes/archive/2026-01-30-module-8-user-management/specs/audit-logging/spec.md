# Audit Logging Specification

## Overview

Comprehensive audit trail for tracking administrative actions with 5-year retention.

## ADDED Requirements

### Requirement: Audit Log Creation

Administrative actions create audit log entries.

#### Scenario: User created audit log

- **WHEN** a new user account is created
- **THEN** an audit log entry is created with:
  - action: "user.created"
  - actor_id: ID of the user who created it
  - target_id: ID of the created user
  - target_type: "user"
  - details: user data (excluding password)
  - timestamp: current UTC time
  - ip_address: actor's IP address

#### Scenario: User updated audit log

- **WHEN** a user account is updated
- **THEN** an audit log entry is created with:
  - action: "user.updated"
  - details: changed fields with before/after values

#### Scenario: User deactivated audit log

- **WHEN** a user account is deactivated
- **THEN** an audit log entry is created with:
  - action: "user.deactivated"
  - details: { reason: "admin_action" }

#### Scenario: User activated audit log

- **WHEN** a user account is reactivated
- **THEN** an audit log entry is created with:
  - action: "user.activated"

#### Scenario: Role changed audit log

- **WHEN** a user's role is changed
- **THEN** an audit log entry is created with:
  - action: "user.role_changed"
  - details: { from: "old_role", to: "new_role" }

#### Scenario: Team created audit log

- **WHEN** a team is created
- **THEN** an audit log entry is created with:
  - action: "team.created"
  - target_type: "team"
  - details: team data

#### Scenario: Team updated audit log

- **WHEN** a team is updated
- **THEN** an audit log entry is created with:
  - action: "team.updated"
  - details: changed fields

#### Scenario: Team deleted audit log

- **WHEN** a team is deleted
- **THEN** an audit log entry is created with:
  - action: "team.deleted"

#### Scenario: User team assignment audit log

- **WHEN** a user is assigned to or removed from a team
- **THEN** an audit log entry is created with:
  - action: "user.team_changed"
  - details: { from_team: "old_team_id", to_team: "new_team_id" }

#### Scenario: Login audit log

- **WHEN** a user successfully logs in
- **THEN** an audit log entry is created with:
  - action: "auth.login"
  - actor_id: logged in user's ID
  - target_id: same as actor_id
  - ip_address: login IP

#### Scenario: Failed login audit log

- **WHEN** a login attempt fails
- **THEN** an audit log entry is created with:
  - action: "auth.login_failed"
  - details: { email: "attempted_email", reason: "invalid_credentials" }
  - ip_address: attempt IP

### Requirement: Query Audit Logs

Authorized users can query audit logs.

#### Scenario: Admin queries all logs

- **WHEN** an admin requests `GET /api/audit-logs`
- **THEN** the system returns paginated audit logs
- **AND** logs can be filtered by action, actor, target, date range

#### Scenario: Supervisor queries team logs

- **WHEN** a supervisor requests `GET /api/audit-logs`
- **THEN** the system returns only logs related to their team members

#### Scenario: Filter by action type

- **WHEN** a request includes `?action=user.created` query parameter
- **THEN** only logs with that action are returned

#### Scenario: Filter by date range

- **WHEN** a request includes `?from=2024-01-01&to=2024-01-31`
- **THEN** only logs within that date range are returned

#### Scenario: Filter by actor

- **WHEN** a request includes `?actor_id=<user_id>`
- **THEN** only logs created by that actor are returned

### Requirement: Audit Log Immutability

Audit logs cannot be modified or deleted.

#### Scenario: Attempt to update audit log

- **WHEN** any user attempts to update an audit log
- **THEN** the system returns HTTP 403 Forbidden
- **AND** no endpoint exists for PUT/PATCH on audit logs

#### Scenario: Attempt to delete audit log

- **WHEN** any user attempts to delete an audit log
- **THEN** the system returns HTTP 403 Forbidden
- **AND** no endpoint exists for DELETE on audit logs

### Requirement: Audit Log Retention

Audit logs are retained for 5 years per compliance requirements.

#### Scenario: Retention policy

- **WHEN** audit logs are stored
- **THEN** they are retained for a minimum of 5 years
- **AND** no automatic cleanup occurs within the retention period

### Requirement: Audit Log Structure

Audit logs follow a consistent structure.

#### Scenario: Required fields

- **WHEN** an audit log is created
- **THEN** it must contain:
  - id: unique identifier (UUID)
  - action: string describing the action
  - actor_id: user who performed the action (nullable for system actions)
  - target_id: entity affected by the action (nullable)
  - target_type: type of entity affected
  - details: JSON object with action-specific data
  - timestamp: UTC timestamp
  - ip_address: actor's IP (nullable for system actions)
