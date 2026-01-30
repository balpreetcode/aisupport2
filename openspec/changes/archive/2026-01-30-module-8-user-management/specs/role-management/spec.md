# Role Management Specification

## Overview

Role assignment and management for users with three defined roles: Admin, Supervisor, Agent.

## ADDED Requirements

### Requirement: Role Definitions

The system supports three predefined roles with specific capabilities.

#### Scenario: Admin role capabilities

- **WHEN** a user has the "admin" role
- **THEN** they have full system access
- **AND** they can manage all users, teams, and settings
- **AND** they can view all conversations and audit logs
- **AND** they can configure AI settings and knowledge base

#### Scenario: Supervisor role capabilities

- **WHEN** a user has the "supervisor" role
- **THEN** they can view and manage their team members
- **AND** they can view all team conversations
- **AND** they can edit the knowledge base
- **AND** they can view team audit logs
- **AND** they cannot access AI configuration or system settings

#### Scenario: Agent role capabilities

- **WHEN** a user has the "agent" role
- **THEN** they can only view/handle conversations assigned to them
- **AND** they can view their personal dashboard
- **AND** they can view (not edit) the knowledge base
- **AND** they cannot access user management or audit logs

### Requirement: Assign Role

Administrators can assign roles to users.

#### Scenario: Successful role assignment

- **WHEN** an admin updates a user's role via `PATCH /api/users/:id`
- **THEN** the system updates the user's role
- **AND** the system returns HTTP 200
- **AND** an audit log entry is created
- **AND** the user's permissions are immediately updated

#### Scenario: Non-admin attempts role change

- **WHEN** a non-admin attempts to change a user's role
- **THEN** the system returns HTTP 403 Forbidden
- **AND** the response contains error message "Insufficient permissions"

#### Scenario: Invalid role assignment

- **WHEN** an admin attempts to assign an invalid role value
- **THEN** the system returns HTTP 400 Bad Request
- **AND** the response contains error message "Invalid role"

### Requirement: Role Validation

Role values are validated on all operations.

#### Scenario: Valid role values

- **WHEN** a role field is provided in any request
- **THEN** the system validates it is one of: "admin", "supervisor", "agent"

#### Scenario: Role enum enforcement

- **WHEN** an invalid role string is provided
- **THEN** the system rejects the request with validation error
