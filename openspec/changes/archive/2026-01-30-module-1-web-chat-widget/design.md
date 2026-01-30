# Design: Module 1 - Web Chat Widget

## Context

Building a lightweight, embeddable chat widget that customers add to their websites via a single script tag. The widget must be small (<50KB), fast (<1s load), and work across all modern browsers.

## Goals / Non-Goals

**Goals:**
- Create standalone widget with zero dependencies on host page
- Implement real-time messaging via WebSocket
- Support full customization via config
- Provide JavaScript SDK for programmatic control
- Ensure accessibility (WCAG 2.1 AA)

**Non-Goals:**
- File attachment support (Phase 2)
- Offline message queuing (Phase 2)
- Multi-language i18n (Phase 2)

## Technical Decisions

### Decision 1: Build System

**Approach:** Preact + TypeScript with Vite bundler

- Preact (3KB) instead of React (40KB+) for size constraint
- Vite for fast builds and tree-shaking
- CSS-in-JS with minimal runtime (goober ~1KB)

### Decision 2: Shadow DOM Isolation

**Approach:** Use Shadow DOM to isolate widget styles

```typescript
const shadowRoot = host.attachShadow({ mode: 'closed' });
```

**Rationale:** Prevents host page CSS from affecting widget and vice versa. Closed mode prevents external JavaScript access.

### Decision 3: WebSocket Client

**Approach:** Use native WebSocket with reconnection logic

```typescript
class SocketClient {
  private ws: WebSocket | null = null;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;
  private reconnectDelay = 1000;

  connect(url: string, token: string) {
    this.ws = new WebSocket(`${url}?token=${token}`);
    this.ws.onclose = () => this.handleReconnect();
  }

  private handleReconnect() {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      setTimeout(() => {
        this.reconnectAttempts++;
        this.connect(this.url, this.token);
      }, this.reconnectDelay * Math.pow(2, this.reconnectAttempts));
    }
  }
}
```

### Decision 4: State Management

**Approach:** Simple store with Preact signals

```typescript
import { signal, computed } from '@preact/signals';

const messages = signal<Message[]>([]);
const isOpen = signal(false);
const isConnected = signal(false);
```

**Rationale:** Signals are tiny (~1KB) and provide reactive updates without full state library overhead.

### Decision 5: Embed Script Structure

```html
<script
  src="https://cdn.example.com/widget.js"
  data-api-key="pk_xxx"
  data-position="bottom-right"
  async
></script>
```

The script:
1. Creates a container div
2. Attaches Shadow DOM
3. Loads the widget app into shadow root
4. Exposes global `AISupportWidget` SDK

### Decision 6: Widget Package Structure

```
packages/widget/
├── src/
│   ├── index.ts          # Entry point, embed script
│   ├── App.tsx           # Root component
│   ├── components/
│   │   ├── Launcher.tsx  # Floating button
│   │   ├── ChatWindow.tsx
│   │   ├── MessageList.tsx
│   │   ├── MessageBubble.tsx
│   │   ├── MessageInput.tsx
│   │   ├── QuickReplies.tsx
│   │   └── TypingIndicator.tsx
│   ├── hooks/
│   │   ├── useSocket.ts
│   │   ├── useMessages.ts
│   │   └── useConfig.ts
│   ├── services/
│   │   ├── socket.ts
│   │   ├── api.ts
│   │   └── storage.ts
│   ├── store/
│   │   └── index.ts
│   ├── styles/
│   │   └── theme.ts
│   ├── types/
│   │   └── index.ts
│   └── sdk/
│       └── index.ts      # Public SDK methods
├── vite.config.ts
└── package.json
```

### Decision 7: Backend WebSocket Handler

Extend backend with Socket.IO for the widget:

```typescript
// packages/backend/src/socket/index.ts
import { Server } from 'socket.io';

export function setupSocket(httpServer: HttpServer) {
  const io = new Server(httpServer, {
    cors: { origin: '*' },
    path: '/widget-socket'
  });

  io.on('connection', (socket) => {
    // Authenticate customer
    // Join conversation room
    // Handle message events
  });
}
```

## Dependencies

**Widget Package:**
- preact: ^10.19.0
- @preact/signals: ^1.2.0
- goober: ^2.1.0

**Backend Additions:**
- socket.io (already in package.json)

## API Design

### Customer Authentication

Anonymous customers get a session token:
```
POST /api/widget/session
Body: { apiKey: "pk_xxx", fingerprint: "xxx" }
Response: { sessionToken: "xxx", customerId: "xxx" }
```

### WebSocket Events

| Event | Direction | Payload |
|-------|-----------|---------|
| `message:new` | Both | `{ conversationId, content, type }` |
| `message:delivered` | Server→Client | `{ messageId }` |
| `message:read` | Both | `{ messageId }` |
| `typing:start` | Both | `{ conversationId }` |
| `typing:stop` | Both | `{ conversationId }` |
| `conversation:assigned` | Server→Client | `{ conversationId, agentId }` |

## Bundle Size Budget

| Component | Budget |
|-----------|--------|
| Preact + Signals | 5KB |
| CSS-in-JS runtime | 2KB |
| Socket logic | 3KB |
| UI Components | 25KB |
| Utilities | 5KB |
| **Total** | **~40KB** gzipped |
