/**
 * Customer entity (end users who chat via widget)
 */
export interface Customer {
  id: string;
  email: string | null;
  name: string | null;
  externalId: string | null;
  metadata?: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  lastSeenAt: Date | null;
}

/**
 * Create customer input
 */
export interface CreateCustomerInput {
  email?: string | null;
  name?: string | null;
  externalId?: string | null;
  metadata?: Record<string, unknown>;
}

/**
 * Update customer input
 */
export interface UpdateCustomerInput {
  email?: string | null;
  name?: string | null;
  externalId?: string | null;
  metadata?: Record<string, unknown>;
}

/**
 * Customer session for widget
 */
export interface CustomerSession {
  sessionToken: string;
  customerId: string;
  expiresAt: Date;
}

/**
 * Widget session request
 */
export interface WidgetSessionRequest {
  apiKey: string;
  fingerprint?: string;
  email?: string;
  name?: string;
  externalId?: string;
}

/**
 * Widget session response
 */
export interface WidgetSessionResponse {
  sessionToken: string;
  customerId: string;
  conversationId: string | null;
  config: WidgetPublicConfig;
}

/**
 * Widget public configuration (sent to client)
 */
export interface WidgetPublicConfig {
  companyName: string;
  welcomeMessage: string;
  primaryColor: string;
  position: 'bottom-right' | 'bottom-left';
  logoUrl?: string;
}
