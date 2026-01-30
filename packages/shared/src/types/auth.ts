import type { PublicUser, UserRole } from './user.js';

/**
 * Login request payload
 */
export interface LoginRequest {
  email: string;
  password: string;
}

/**
 * Login response
 */
export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: PublicUser;
}

/**
 * Token refresh request
 */
export interface RefreshTokenRequest {
  refreshToken: string;
}

/**
 * Token refresh response
 */
export interface RefreshTokenResponse {
  accessToken: string;
}

/**
 * Forgot password request
 */
export interface ForgotPasswordRequest {
  email: string;
}

/**
 * Reset password request
 */
export interface ResetPasswordRequest {
  token: string;
  newPassword: string;
}

/**
 * JWT access token payload
 */
export interface AccessTokenPayload {
  sub: string; // user ID
  email: string;
  role: UserRole;
  teamId: string | null;
  iat: number;
  exp: number;
}

/**
 * Decoded token info available in request context
 */
export interface AuthContext {
  userId: string;
  email: string;
  role: UserRole;
  teamId: string | null;
}
