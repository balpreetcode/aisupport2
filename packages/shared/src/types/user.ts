/**
 * User roles in the system
 */
export type UserRole = 'admin' | 'supervisor' | 'agent';

/**
 * User account status
 */
export type UserStatus = 'active' | 'inactive';

/**
 * User entity
 */
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

/**
 * User with password hash (internal use only)
 */
export interface UserWithPassword extends User {
  passwordHash: string;
}

/**
 * Data required to create a new user
 */
export interface CreateUserInput {
  email: string;
  password: string;
  name: string;
  role: UserRole;
  teamId?: string | null;
}

/**
 * Data for updating a user
 */
export interface UpdateUserInput {
  email?: string;
  name?: string;
  role?: UserRole;
  teamId?: string | null;
}

/**
 * Query filters for listing users
 */
export interface UserFilters {
  role?: UserRole;
  status?: UserStatus;
  teamId?: string;
}

/**
 * Public user data (excludes sensitive fields)
 */
export type PublicUser = Omit<User, 'passwordHash'>;
