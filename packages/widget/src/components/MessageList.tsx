import { useRef, useEffect } from 'preact/hooks';
import { messages, isAgentTyping, config } from '../store';
import { MessageBubble } from './MessageBubble';
import { TypingIndicator } from './TypingIndicator';

interface Props {
  onQuickReply: (value: string) => void;
}

export function MessageList({ onQuickReply }: Props) {
  const listRef = useRef<HTMLDivElement>(null);
  const msgs = messages.value;
  const typing = isAgentTyping.value;
  const cfg = config.value;

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [msgs, typing]);

  return (
    <div class="messages" ref={listRef}>
      {msgs.length === 0 && (
        <div class="message message-ai">
          <div>{cfg.welcomeMessage}</div>
        </div>
      )}
      {msgs.map((msg) => (
        <MessageBubble key={msg.id} message={msg} onQuickReply={onQuickReply} />
      ))}
      {typing && <TypingIndicator />}
    </div>
  );
}
