import { useState, useRef } from 'preact/hooks';
import { sendTypingStart, sendTypingStop } from '../services/socket';

interface Props {
  onSend: (text: string) => void;
  disabled?: boolean;
}

export function MessageInput({ onSend, disabled }: Props) {
  const [text, setText] = useState('');
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = () => {
    const trimmed = text.trim();
    if (trimmed && !disabled) {
      onSend(trimmed);
      setText('');
      sendTypingStop();
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleInput = (e: Event) => {
    const target = e.target as HTMLTextAreaElement;
    setText(target.value);
    if (target.value) {
      sendTypingStart();
    }
  };

  return (
    <div class="input-area">
      <textarea
        ref={inputRef}
        class="input-field"
        placeholder="Type a message..."
        value={text}
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        rows={1}
        aria-label="Message input"
      />
      <button
        class="send-btn"
        onClick={handleSubmit}
        disabled={!text.trim() || disabled}
        aria-label="Send message"
      >
        <svg viewBox="0 0 24 24">
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
        </svg>
      </button>
    </div>
  );
}
