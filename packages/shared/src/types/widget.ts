/**
 * Widget configuration (full, stored on server)
 */
export interface WidgetConfig {
  id: string;
  apiKey: string;
  companyName: string;
  welcomeMessage: string;
  primaryColor: string;
  headerColor: string;
  backgroundColor: string;
  position: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  offsetX: number;
  offsetY: number;
  logoUrl: string | null;
  showBranding: boolean;
  enabled: boolean;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Widget embed configuration (from data attributes)
 */
export interface WidgetEmbedConfig {
  apiKey: string;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  theme?: 'light' | 'dark';
  primaryColor?: string;
  zIndex?: number;
}

/**
 * Widget SDK interface
 */
export interface WidgetSDK {
  open(): void;
  close(): void;
  toggle(): void;
  sendMessage(text: string): void;
  setUser(userData: { email?: string; name?: string; [key: string]: unknown }): void;
  setCustomAttributes(attrs: Record<string, unknown>): void;
  on(event: WidgetEvent, callback: WidgetEventCallback): void;
  off(event: WidgetEvent, callback: WidgetEventCallback): void;
  destroy(): void;
}

/**
 * Widget events
 */
export type WidgetEvent = 'open' | 'close' | 'message' | 'ready' | 'error';

/**
 * Widget event callback
 */
export type WidgetEventCallback = (data?: unknown) => void;

/**
 * Widget state
 */
export interface WidgetState {
  isOpen: boolean;
  isConnected: boolean;
  isTyping: boolean;
  unreadCount: number;
  customerId: string | null;
  conversationId: string | null;
}
