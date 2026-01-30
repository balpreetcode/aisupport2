# User Management Specification

## Overview

CRUD operations for managing user accounts in the system.

## ADDED Requirements

### Requirement: Create User

Administrators can create new user accounts.

#### Scenario: Successful user creation

- **WHEN** an admin submits valid user data to `POST /api/users`
- **THEN** the system creates the user and returns HTTP 201
- **AND** the response includes the created user (without password)
- **AND** the user status defaults to "active"
- **AND** an audit log entry is created

#### Scenario: Create user with duplicate email

- **WHEN** an admin submits a user with an email that already exists
- **THEN** the system returns HTTP 409 Conflict
- **AND** the response contains error message "Email already registered"

#### Scenario: Create user with invalid data

- **WHEN** an admin submits invalid user data (missing required fields)
- **THEN** the system returns HTTP 400 Bad Request
- **AND** the response contains validation errors

### Requirement: Get User

Users can retrieve user profile information.

#### Scenario: Get user by ID (admin)

- **WHEN** an admin requests `GET /api/users/:id`
- **THEN** the system returns HTTP 200 with user data
- **AND** sensitive fields (password hash) are excluded

#### Scenario: Get current user profile

- **WHEN** an authenticated user requests `GET /api/users/me`
- **THEN** the system returns HTTP 200 with their own user data

#### Scenario: Get user not found

- **WHEN** a request is made for a non-existent user ID
- **THEN** the system returns HTTP 404 Not Found

### Requirement: List Users

Administrators and supervisors can list users.

#### Scenario: Admin lists all users

- **WHEN** an admin requests `GET /api/users`
- **THEN** the system returns HTTP 200 with paginated user list
- **AND** the response includes pagination metadata

#### Scenario: Supervisor lists team users

- **WHEN** a supervisor requests `GET /api/users`
- **THEN** the system returns only users in their team
- **AND** the response includes pagination metadata

#### Scenario: Filter users by role

- **WHEN** a request includes `?role=agent` query parameter
- **THEN** the system returns only users with that role

#### Scenario: Filter users by status

- **WHEN** a request includes `?status=active` query parameter
- **THEN** the system returns only users with that status

### Requirement: Update User

Users can update user profile information.

#### Scenario: Admin updates any user

- **WHEN** an admin submits valid updates to `PATCH /api/users/:id`
- **THEN** the system updates the user and returns HTTP 200
- **AND** an audit log entry is created with changes

#### Scenario: User updates own profile

- **WHEN** a user submits updates to `PATCH /api/users/me`
- **THEN** the system updates allowed fields (name, preferences)
- **AND** role and status cannot be self-modified

#### Scenario: Update with invalid data

- **WHEN** invalid data is submitted for update
- **THEN** the system returns HTTP 400 Bad Request
- **AND** the response contains validation errors

### Requirement: Deactivate User

Administrators can deactivate user accounts.

#### Scenario: Successful deactivation

- **WHEN** an admin requests `POST /api/users/:id/deactivate`
- **THEN** the system sets user status to "inactive"
- **AND** the system returns HTTP 200
- **AND** all user sessions are invalidated
- **AND** an audit log entry is created

#### Scenario: Deactivate already inactive user

- **WHEN** an admin attempts to deactivate an already inactive user
- **THEN** the system returns HTTP 200 (idempotent)

### Requirement: Reactivate User

Administrators can reactivate user accounts.

#### Scenario: Successful reactivation

- **WHEN** an admin requests `POST /api/users/:id/activate`
- **THEN** the system sets user status to "active"
- **AND** the system returns HTTP 200
- **AND** an audit log entry is created

### Requirement: Password Reset

Users can reset their password.

#### Scenario: Request password reset

- **WHEN** a user requests `POST /api/auth/forgot-password` with email
- **THEN** the system generates a reset token (expires in 1 hour)
- **AND** the system returns HTTP 200 (regardless of email existence)
- **AND** if email exists, a reset email is queued

#### Scenario: Reset password with valid token

- **WHEN** a user submits `POST /api/auth/reset-password` with valid token and new password
- **THEN** the system updates the password
- **AND** the system invalidates all existing sessions
- **AND** the system returns HTTP 200

#### Scenario: Reset password with invalid token

- **WHEN** a user submits an invalid or expired reset token
- **THEN** the system returns HTTP 400 Bad Request
- **AND** the response contains error message "Invalid or expired reset token"
