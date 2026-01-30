import { unreadCount, toggleWidget, isOpen } from '../store';

export function Launcher() {
  const count = unreadCount.value;
  const open = isOpen.value;

  return (
    <button
      class="launcher"
      onClick={toggleWidget}
      aria-label={open ? 'Close chat' : 'Open chat'}
    >
      {open ? (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
        </svg>
      )}
      {count > 0 && !open && <span class="badge">{count > 9 ? '9+' : count}</span>}
    </button>
  );
}
