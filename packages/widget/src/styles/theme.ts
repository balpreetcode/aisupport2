import { config } from '../store';

export function getStyles() {
  const cfg = config.value;
  const primary = cfg.primaryColor || '#6366f1';

  return `
    :host {
      --primary: ${primary};
      --primary-dark: ${adjustBrightness(primary, -20)};
      --primary-light: ${adjustBrightness(primary, 40)};
      --bg: #ffffff;
      --bg-secondary: #f3f4f6;
      --text: #1f2937;
      --text-secondary: #6b7280;
      --border: #e5e7eb;
      --shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
      --radius: 12px;
      --radius-sm: 8px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 14px;
      line-height: 1.5;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    .widget-container {
      position: fixed;
      ${cfg.position.includes('right') ? 'right: 20px;' : 'left: 20px;'}
      ${cfg.position.includes('bottom') ? 'bottom: 20px;' : 'top: 20px;'}
      z-index: 2147483647;
      display: flex;
      flex-direction: column;
      align-items: ${cfg.position.includes('right') ? 'flex-end' : 'flex-start'};
      gap: 16px;
    }

    .launcher {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: var(--primary);
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: var(--shadow);
      transition: transform 0.2s, background 0.2s;
    }

    .launcher:hover {
      transform: scale(1.05);
      background: var(--primary-dark);
    }

    .launcher svg {
      width: 28px;
      height: 28px;
      fill: white;
    }

    .badge {
      position: absolute;
      top: -4px;
      right: -4px;
      background: #ef4444;
      color: white;
      font-size: 12px;
      font-weight: 600;
      min-width: 20px;
      height: 20px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 6px;
    }

    .chat-window {
      width: 380px;
      height: 520px;
      background: var(--bg);
      border-radius: var(--radius);
      box-shadow: var(--shadow);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      animation: slideUp 0.2s ease-out;
    }

    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .header {
      background: var(--primary);
      color: white;
      padding: 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .header-title {
      font-weight: 600;
      font-size: 16px;
    }

    .header-status {
      font-size: 12px;
      opacity: 0.9;
    }

    .close-btn {
      background: none;
      border: none;
      color: white;
      cursor: pointer;
      padding: 4px;
      display: flex;
      opacity: 0.8;
      transition: opacity 0.2s;
    }

    .close-btn:hover {
      opacity: 1;
    }

    .messages {
      flex: 1;
      overflow-y: auto;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .message {
      max-width: 80%;
      padding: 10px 14px;
      border-radius: var(--radius-sm);
      word-wrap: break-word;
    }

    .message-customer {
      align-self: flex-end;
      background: var(--primary);
      color: white;
      border-bottom-right-radius: 4px;
    }

    .message-agent,
    .message-ai,
    .message-system {
      align-self: flex-start;
      background: var(--bg-secondary);
      color: var(--text);
      border-bottom-left-radius: 4px;
    }

    .message-time {
      font-size: 11px;
      opacity: 0.7;
      margin-top: 4px;
    }

    .typing-indicator {
      display: flex;
      gap: 4px;
      padding: 12px 14px;
      background: var(--bg-secondary);
      border-radius: var(--radius-sm);
      align-self: flex-start;
    }

    .typing-dot {
      width: 8px;
      height: 8px;
      background: var(--text-secondary);
      border-radius: 50%;
      animation: bounce 1.4s infinite ease-in-out;
    }

    .typing-dot:nth-child(1) { animation-delay: -0.32s; }
    .typing-dot:nth-child(2) { animation-delay: -0.16s; }

    @keyframes bounce {
      0%, 80%, 100% { transform: scale(0); }
      40% { transform: scale(1); }
    }

    .quick-replies {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 8px;
    }

    .quick-reply-btn {
      padding: 6px 12px;
      border: 1px solid var(--primary);
      background: white;
      color: var(--primary);
      border-radius: 16px;
      cursor: pointer;
      font-size: 13px;
      transition: background 0.2s, color 0.2s;
    }

    .quick-reply-btn:hover {
      background: var(--primary);
      color: white;
    }

    .input-area {
      padding: 12px 16px;
      border-top: 1px solid var(--border);
      display: flex;
      gap: 8px;
    }

    .input-field {
      flex: 1;
      padding: 10px 14px;
      border: 1px solid var(--border);
      border-radius: 20px;
      outline: none;
      font-size: 14px;
      resize: none;
      font-family: inherit;
    }

    .input-field:focus {
      border-color: var(--primary);
    }

    .send-btn {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: var(--primary);
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s;
    }

    .send-btn:hover {
      background: var(--primary-dark);
    }

    .send-btn:disabled {
      background: var(--border);
      cursor: not-allowed;
    }

    .send-btn svg {
      width: 20px;
      height: 20px;
      fill: white;
    }

    @media (max-width: 480px) {
      .chat-window {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        border-radius: 0;
      }
    }
  `;
}

function adjustBrightness(hex: string, percent: number): string {
  const num = parseInt(hex.replace('#', ''), 16);
  const r = Math.min(255, Math.max(0, (num >> 16) + percent));
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00ff) + percent));
  const b = Math.min(255, Math.max(0, (num & 0x0000ff) + percent));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
}
