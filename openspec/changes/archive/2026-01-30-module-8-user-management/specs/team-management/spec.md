# Team Management Specification

## Overview

Team creation and user organization for structured support operations.

## ADDED Requirements

### Requirement: Create Team

Administrators can create teams.

#### Scenario: Successful team creation

- **WHEN** an admin submits valid team data to `POST /api/teams`
- **THEN** the system creates the team and returns HTTP 201
- **AND** the response includes the created team with ID
- **AND** an audit log entry is created

#### Scenario: Create team with duplicate name

- **WHEN** an admin submits a team with a name that already exists
- **THEN** the system returns HTTP 409 Conflict
- **AND** the response contains error message "Team name already exists"

#### Scenario: Create team with invalid data

- **WHEN** required fields (name) are missing
- **THEN** the system returns HTTP 400 Bad Request

### Requirement: Get Team

Users can retrieve team information.

#### Scenario: Get team by ID

- **WHEN** an authenticated user requests `GET /api/teams/:id`
- **THEN** the system returns HTTP 200 with team data
- **AND** the response includes team member count

#### Scenario: Get team not found

- **WHEN** a request is made for a non-existent team ID
- **THEN** the system returns HTTP 404 Not Found

### Requirement: List Teams

Users can list teams based on their role.

#### Scenario: Admin lists all teams

- **WHEN** an admin requests `GET /api/teams`
- **THEN** the system returns all teams
- **AND** the response includes member counts

#### Scenario: Supervisor lists own team

- **WHEN** a supervisor requests `GET /api/teams`
- **THEN** the system returns only their assigned team

#### Scenario: Agent views own team

- **WHEN** an agent requests `GET /api/teams`
- **THEN** the system returns only their assigned team

### Requirement: Update Team

Administrators can update team information.

#### Scenario: Successful team update

- **WHEN** an admin submits valid updates to `PATCH /api/teams/:id`
- **THEN** the system updates the team and returns HTTP 200
- **AND** an audit log entry is created

#### Scenario: Non-admin attempts team update

- **WHEN** a non-admin attempts to update a team
- **THEN** the system returns HTTP 403 Forbidden

### Requirement: Delete Team

Administrators can delete teams.

#### Scenario: Successful team deletion

- **WHEN** an admin requests `DELETE /api/teams/:id`
- **THEN** the system soft-deletes the team
- **AND** the system returns HTTP 200
- **AND** users in the team have their team_id set to null
- **AND** an audit log entry is created

#### Scenario: Delete team with users

- **WHEN** an admin deletes a team that has users
- **THEN** the system removes team assignment from those users
- **AND** the users remain in the system without a team

### Requirement: Assign User to Team

Administrators can assign users to teams.

#### Scenario: Successful team assignment

- **WHEN** an admin updates a user's team via `PATCH /api/users/:id` with team_id
- **THEN** the system updates the user's team assignment
- **AND** the system returns HTTP 200
- **AND** an audit log entry is created

#### Scenario: Assign to non-existent team

- **WHEN** an admin assigns a user to a non-existent team_id
- **THEN** the system returns HTTP 400 Bad Request
- **AND** the response contains error message "Team not found"

#### Scenario: Remove user from team

- **WHEN** an admin sets team_id to null for a user
- **THEN** the user is removed from their current team
- **AND** the system returns HTTP 200

### Requirement: List Team Members

Users can list members of a team.

#### Scenario: Admin lists any team members

- **WHEN** an admin requests `GET /api/teams/:id/members`
- **THEN** the system returns all users in that team

#### Scenario: Supervisor lists own team members

- **WHEN** a supervisor requests `GET /api/teams/:id/members` for their team
- **THEN** the system returns all users in that team

#### Scenario: Supervisor lists other team members

- **WHEN** a supervisor requests members of a different team
- **THEN** the system returns HTTP 403 Forbidden
