import type { Message } from '@ai-support/shared';

interface Props {
  message: Message;
  onQuickReply?: (value: string) => void;
}

export function MessageBubble({ message, onQuickReply }: Props) {
  const time = new Date(message.createdAt).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div class={`message message-${message.senderType}`}>
      <div>{message.content}</div>
      <div class="message-time">{time}</div>
      {message.quickReplies && message.quickReplies.length > 0 && (
        <div class="quick-replies">
          {message.quickReplies.map((qr) => (
            <button
              key={qr.value}
              class="quick-reply-btn"
              onClick={() => onQuickReply?.(qr.value)}
            >
              {qr.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
