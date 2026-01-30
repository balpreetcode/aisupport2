import { render } from 'preact';
import { App } from './App';
import { sdk, setDestroyCallback, emitReady } from './sdk';
import type { WidgetEmbedConfig } from '@ai-support/shared';

declare global {
  interface Window {
    AISupportWidget: typeof sdk;
  }
}

// Prevent multiple initializations
let initialized = false;
let shadowRoot: ShadowRoot | null = null;
let containerElement: HTMLElement | null = null;

function getConfig(): WidgetEmbedConfig {
  const script = document.currentScript as HTMLScriptElement | null;

  if (!script) {
    // Fallback: find our script tag
    const scripts = document.querySelectorAll('script[data-api-key]');
    const ourScript = scripts[scripts.length - 1] as HTMLScriptElement | null;

    return {
      apiKey: ourScript?.dataset.apiKey || '',
      position: (ourScript?.dataset.position as WidgetEmbedConfig['position']) || 'bottom-right',
      primaryColor: ourScript?.dataset.primaryColor,
    };
  }

  return {
    apiKey: script.dataset.apiKey || '',
    position: (script.dataset.position as WidgetEmbedConfig['position']) || 'bottom-right',
    primaryColor: script.dataset.primaryColor,
  };
}

function getBaseUrl(): string {
  const script = document.currentScript as HTMLScriptElement | null;
  if (script?.src) {
    const url = new URL(script.src);
    return `${url.protocol}//${url.host}`;
  }
  // Default for development
  return 'http://localhost:3000';
}

function init() {
  if (initialized) {
    console.warn('[AI Support Widget] Already initialized');
    return;
  }

  const config = getConfig();

  if (!config.apiKey) {
    console.error('[AI Support Widget] Missing API key. Add data-api-key to the script tag.');
    return;
  }

  // Create container
  containerElement = document.createElement('div');
  containerElement.id = 'ai-support-widget-container';
  document.body.appendChild(containerElement);

  // Create shadow DOM for style isolation
  shadowRoot = containerElement.attachShadow({ mode: 'closed' });

  // Set destroy callback
  setDestroyCallback(() => {
    if (containerElement) {
      containerElement.remove();
      containerElement = null;
      shadowRoot = null;
      initialized = false;
    }
  });

  // Render app
  const baseUrl = getBaseUrl();
  render(<App apiKey={config.apiKey} baseUrl={baseUrl} />, shadowRoot);

  // Expose SDK globally
  window.AISupportWidget = sdk;
  initialized = true;

  // Emit ready event
  setTimeout(emitReady, 0);

  console.log('[AI Support Widget] Initialized');
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Export SDK for module usage
export { sdk as AISupportWidget };
export default sdk;
