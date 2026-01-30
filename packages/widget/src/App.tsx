import { useEffect } from 'preact/hooks';
import type { Message } from '@ai-support/shared';
import { Launcher } from './components/Launcher';
import { ChatWindow } from './components/ChatWindow';
import {
  isOpen,
  addMessage,
  setSession,
  setConfig,
  setMessages,
  conversationId,
  sessionToken,
  customerId,
} from './store';
import { createSession, getMessages, setBaseUrl } from './services/api';
import { connectSocket, sendMessage, joinConversation } from './services/socket';
import { getSessionData, setSessionData } from './services/storage';
import { getStyles } from './styles/theme';

interface AppProps {
  apiKey: string;
  baseUrl: string;
}

export function App({ apiKey, baseUrl }: AppProps) {
  const open = isOpen.value;

  useEffect(() => {
    setBaseUrl(baseUrl);
    initSession();
  }, [apiKey, baseUrl]);

  async function initSession() {
    try {
      // Check for existing session
      const stored = getSessionData();
      if (stored) {
        setSession(stored.sessionToken, stored.customerId, stored.conversationId);
        connectSocket(baseUrl, stored.sessionToken);
        if (stored.conversationId) {
          joinConversation(stored.conversationId);
          const msgs = await getMessages(stored.conversationId, stored.sessionToken);
          setMessages(msgs);
        }
        return;
      }

      // Create new session
      const response = await createSession({ apiKey });
      setSession(response.sessionToken, response.customerId, response.conversationId);
      setConfig(response.config);
      setSessionData({
        sessionToken: response.sessionToken,
        customerId: response.customerId,
        conversationId: response.conversationId,
      });
      connectSocket(baseUrl, response.sessionToken);
      if (response.conversationId) {
        joinConversation(response.conversationId);
      }
    } catch (error) {
      console.error('[Widget] Failed to initialize session:', error);
    }
  }

  function handleSendMessage(text: string) {
    const token = sessionToken.value;
    const convId = conversationId.value;
    const custId = customerId.value;

    if (!token || !custId) return;

    const tempId = `temp-${Date.now()}`;
    const message: Message = {
      id: tempId,
      conversationId: convId || '',
      senderType: 'customer',
      senderId: custId,
      content: text,
      type: 'text',
      status: 'sending',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    addMessage(message);
    sendMessage(message);
  }

  return (
    <>
      <style>{getStyles()}</style>
      <div class="widget-container">
        {open && <ChatWindow onSendMessage={handleSendMessage} />}
        <Launcher />
      </div>
    </>
  );
}
