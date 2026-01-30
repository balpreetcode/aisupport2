import { Header } from './Header';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';
import { isConnected } from '../store';

interface Props {
  onSendMessage: (text: string) => void;
}

export function ChatWindow({ onSendMessage }: Props) {
  const connected = isConnected.value;

  const handleQuickReply = (value: string) => {
    onSendMessage(value);
  };

  return (
    <div class="chat-window" role="dialog" aria-label="Chat window">
      <Header />
      <MessageList onQuickReply={handleQuickReply} />
      <MessageInput onSend={onSendMessage} disabled={!connected} />
    </div>
  );
}
