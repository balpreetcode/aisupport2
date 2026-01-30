import { z } from 'zod';

const userRoleEnum = z.enum(['admin', 'supervisor', 'agent']);
const userStatusEnum = z.enum(['active', 'inactive']);

export const createUserSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Password must contain at least one lowercase letter, one uppercase letter, and one number'
    ),
  name: z.string().min(1, 'Name is required').max(255, 'Name too long'),
  role: userRoleEnum,
  teamId: z.string().uuid('Invalid team ID').optional().nullable(),
});

export const updateUserSchema = z.object({
  email: z.string().email('Invalid email address').optional(),
  name: z.string().min(1, 'Name is required').max(255, 'Name too long').optional(),
  role: userRoleEnum.optional(),
  teamId: z.string().uuid('Invalid team ID').optional().nullable(),
});

export const userFiltersSchema = z.object({
  role: userRoleEnum.optional(),
  status: userStatusEnum.optional(),
  teamId: z.string().uuid('Invalid team ID').optional(),
  page: z.coerce.number().int().positive().optional().default(1),
  limit: z.coerce.number().int().positive().max(100).optional().default(50),
});

export const userIdParamSchema = z.object({
  id: z.string().uuid('Invalid user ID'),
});
