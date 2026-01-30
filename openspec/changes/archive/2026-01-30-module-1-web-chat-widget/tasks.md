# Tasks: Module 1 - Web Chat Widget

## 1. Shared Types for Messaging

- [x] 1.1 Create `packages/shared/src/types/message.ts` with Message, MessageType types
- [x] 1.2 Create `packages/shared/src/types/conversation.ts` with Conversation types
- [x] 1.3 Create `packages/shared/src/types/customer.ts` with Customer types
- [x] 1.4 Create `packages/shared/src/types/widget.ts` with WidgetConfig types
- [x] 1.5 Update `packages/shared/src/types/index.ts` to export new types

## 2. Widget Package Setup

- [x] 2.1 Update `packages/widget/package.json` with Preact, Vite, and dependencies
- [x] 2.2 Create `packages/widget/vite.config.ts` for library build
- [x] 2.3 Existing `packages/widget/tsconfig.json` for Preact JSX
- [x] 2.4 Widget types included in store

## 3. Widget Core

- [x] 3.1 Create `packages/widget/src/index.tsx` entry point with embed logic
- [x] 3.2 Create `packages/widget/src/App.tsx` root component
- [x] 3.3 Create `packages/widget/src/store/index.ts` state management with signals
- [x] 3.4 Create `packages/widget/src/styles/theme.ts` theming system

## 4. Widget Components

- [x] 4.1 Create `packages/widget/src/components/Launcher.tsx` floating button
- [x] 4.2 Create `packages/widget/src/components/ChatWindow.tsx` main container
- [x] 4.3 Create `packages/widget/src/components/Header.tsx` with title and close button
- [x] 4.4 Create `packages/widget/src/components/MessageList.tsx` scrollable message area
- [x] 4.5 Create `packages/widget/src/components/MessageBubble.tsx` individual messages
- [x] 4.6 Create `packages/widget/src/components/MessageInput.tsx` text input and send
- [x] 4.7 Quick replies included in MessageBubble component
- [x] 4.8 Create `packages/widget/src/components/TypingIndicator.tsx` typing animation

## 5. Widget Services

- [x] 5.1 Create `packages/widget/src/services/socket.ts` WebSocket client
- [x] 5.2 Create `packages/widget/src/services/api.ts` REST API client
- [x] 5.3 Create `packages/widget/src/services/storage.ts` localStorage wrapper

## 6. Widget SDK

- [x] 6.1 Create `packages/widget/src/sdk/index.ts` with public methods
- [x] 6.2 Implement open, close, toggle methods
- [x] 6.3 Implement sendMessage, setUser, setCustomAttributes methods
- [x] 6.4 Implement on, off event handlers
- [x] 6.5 Implement destroy method

## 7. Backend Widget API

- [x] 7.1 Create `packages/backend/src/routes/widget.ts` widget-specific endpoints
- [x] 7.2 Implement POST /api/widget/session for customer authentication
- [x] 7.3 Implement GET /api/widget/conversations/:id/messages for message retrieval
- [x] 7.4 Add widget routes to main router

## 8. Backend WebSocket

- [x] 8.1 Create `packages/backend/src/socket/index.ts` Socket.IO setup
- [x] 8.2 Create `packages/backend/src/socket/handlers/message.ts` message handlers
- [x] 8.3 Create `packages/backend/src/socket/handlers/typing.ts` typing handlers
- [x] 8.4 Socket auth middleware in socket/index.ts
- [x] 8.5 Integrate socket server with Express app

## 9. Backend Models

- [x] 9.1 Add Customer model to Prisma schema
- [x] 9.2 Add Conversation model to Prisma schema
- [x] 9.3 Add Message model to Prisma schema
- [x] 9.4 Create customer service
- [x] 9.5 Create conversation service
- [x] 9.6 Create message service

## 10. Verification

- [ ] 10.1 Widget loads in <1 second
- [ ] 10.2 Bundle size <50KB gzipped
- [ ] 10.3 Messages send and receive in real-time
- [ ] 10.4 Typing indicators work bidirectionally
- [ ] 10.5 SDK methods function correctly
