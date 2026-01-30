import { z } from 'zod';

export const auditLogFiltersSchema = z.object({
  action: z.string().optional(),
  actorId: z.string().uuid('Invalid actor ID').optional(),
  targetId: z.string().uuid('Invalid target ID').optional(),
  targetType: z.enum(['user', 'team', 'system']).optional(),
  from: z.coerce.date().optional(),
  to: z.coerce.date().optional(),
  page: z.coerce.number().int().positive().optional().default(1),
  limit: z.coerce.number().int().positive().max(100).optional().default(50),
});
