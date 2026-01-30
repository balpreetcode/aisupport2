import crypto from 'crypto';
import { prisma } from '../config/database';
import type { Customer, CreateCustomerInput, UpdateCustomerInput } from '@ai-support/shared';

/**
 * Create a new customer
 */
export async function createCustomer(input: CreateCustomerInput): Promise<Customer> {
  const customer = await prisma.customer.create({
    data: {
      email: input.email ?? null,
      name: input.name ?? null,
      externalId: input.externalId ?? null,
      metadata: input.metadata ?? {},
      lastSeenAt: new Date(),
    },
  });

  return mapToCustomer(customer);
}

/**
 * Get customer by ID
 */
export async function getCustomerById(id: string): Promise<Customer | null> {
  const customer = await prisma.customer.findUnique({ where: { id } });
  return customer ? mapToCustomer(customer) : null;
}

/**
 * Get customer by external ID
 */
export async function getCustomerByExternalId(externalId: string): Promise<Customer | null> {
  const customer = await prisma.customer.findFirst({ where: { externalId } });
  return customer ? mapToCustomer(customer) : null;
}

/**
 * Update customer
 */
export async function updateCustomer(id: string, input: UpdateCustomerInput): Promise<Customer> {
  const customer = await prisma.customer.update({
    where: { id },
    data: {
      email: input.email,
      name: input.name,
      externalId: input.externalId,
      metadata: input.metadata,
      lastSeenAt: new Date(),
    },
  });

  return mapToCustomer(customer);
}

/**
 * Update last seen timestamp
 */
export async function updateLastSeen(id: string): Promise<void> {
  await prisma.customer.update({
    where: { id },
    data: { lastSeenAt: new Date() },
  });
}

/**
 * Create customer session token
 */
export async function createCustomerSession(customerId: string): Promise<string> {
  const token = crypto.randomBytes(32).toString('hex');
  const tokenHash = crypto.createHash('sha256').update(token).digest('hex');
  const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days

  await prisma.customerSession.create({
    data: {
      customerId,
      tokenHash,
      expiresAt,
    },
  });

  return token;
}

/**
 * Validate customer session token
 */
export async function validateCustomerSession(token: string): Promise<string | null> {
  const tokenHash = crypto.createHash('sha256').update(token).digest('hex');

  const session = await prisma.customerSession.findFirst({
    where: {
      tokenHash,
      expiresAt: { gt: new Date() },
    },
  });

  if (!session) return null;

  // Update last seen
  await updateLastSeen(session.customerId);

  return session.customerId;
}

/**
 * Invalidate customer session
 */
export async function invalidateCustomerSession(token: string): Promise<void> {
  const tokenHash = crypto.createHash('sha256').update(token).digest('hex');

  await prisma.customerSession.deleteMany({
    where: { tokenHash },
  });
}

function mapToCustomer(c: {
  id: string;
  email: string | null;
  name: string | null;
  externalId: string | null;
  metadata: unknown;
  createdAt: Date;
  updatedAt: Date;
  lastSeenAt: Date | null;
}): Customer {
  return {
    id: c.id,
    email: c.email,
    name: c.name,
    externalId: c.externalId,
    metadata: c.metadata as Record<string, unknown>,
    createdAt: c.createdAt,
    updatedAt: c.updatedAt,
    lastSeenAt: c.lastSeenAt,
  };
}
