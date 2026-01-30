import { config, closeWidget, isConnected } from '../store';

export function Header() {
  const cfg = config.value;
  const connected = isConnected.value;

  return (
    <div class="header">
      <div>
        <div class="header-title">{cfg.companyName}</div>
        <div class="header-status">
          {connected ? 'We typically reply in a few minutes' : 'Connecting...'}
        </div>
      </div>
      <button class="close-btn" onClick={closeWidget} aria-label="Close chat">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </svg>
      </button>
    </div>
  );
}
