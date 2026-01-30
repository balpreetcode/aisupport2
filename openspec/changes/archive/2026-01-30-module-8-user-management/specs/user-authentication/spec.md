# User Authentication Specification

## Overview

JWT-based authentication system with refresh tokens for secure session management.

## ADDED Requirements

### Requirement: User Login

Users can authenticate with email and password to receive access tokens.

#### Scenario: Successful login with valid credentials

- **WHEN** a user submits valid email and password to `POST /api/auth/login`
- **THEN** the system returns HTTP 200 with access token and refresh token
- **AND** the access token expires in 15 minutes
- **AND** the refresh token expires in 7 days
- **AND** the response includes user profile (id, email, name, role)

#### Scenario: Login with invalid credentials

- **WHEN** a user submits invalid email or password to `POST /api/auth/login`
- **THEN** the system returns HTTP 401 Unauthorized
- **AND** the response contains error message "Invalid email or password"
- **AND** no tokens are issued

#### Scenario: Login with deactivated account

- **WHEN** a user with status "inactive" attempts to login
- **THEN** the system returns HTTP 403 Forbidden
- **AND** the response contains error message "Account is deactivated"

### Requirement: Token Refresh

Users can refresh their access token using a valid refresh token.

#### Scenario: Successful token refresh

- **WHEN** a user submits a valid refresh token to `POST /api/auth/refresh`
- **THEN** the system returns HTTP 200 with a new access token
- **AND** the new access token expires in 15 minutes
- **AND** the refresh token remains valid

#### Scenario: Token refresh with expired refresh token

- **WHEN** a user submits an expired refresh token
- **THEN** the system returns HTTP 401 Unauthorized
- **AND** the response contains error message "Refresh token expired"

### Requirement: User Logout

Users can invalidate their refresh token to end their session.

#### Scenario: Successful logout

- **WHEN** an authenticated user calls `POST /api/auth/logout`
- **THEN** the system returns HTTP 200
- **AND** the refresh token is invalidated
- **AND** subsequent refresh attempts with that token fail

### Requirement: Password Security

Passwords must be securely hashed and validated.

#### Scenario: Password hashing on user creation

- **WHEN** a new user account is created
- **THEN** the password is hashed using bcrypt with cost factor 12
- **AND** the plain text password is never stored

#### Scenario: Password validation

- **WHEN** a password is submitted for authentication
- **THEN** the system compares using bcrypt's secure comparison
- **AND** timing attacks are mitigated

### Requirement: Protected Route Access

Protected API routes require valid authentication.

#### Scenario: Access with valid token

- **WHEN** a request includes a valid access token in Authorization header
- **THEN** the request proceeds to the route handler
- **AND** the user context is available in the request

#### Scenario: Access without token

- **WHEN** a request to a protected route has no Authorization header
- **THEN** the system returns HTTP 401 Unauthorized
- **AND** the response contains error message "Authentication required"

#### Scenario: Access with expired token

- **WHEN** a request includes an expired access token
- **THEN** the system returns HTTP 401 Unauthorized
- **AND** the response contains error message "Token expired"
