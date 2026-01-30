# Widget WebSocket Specification

## Overview

Real-time bidirectional communication for instant messaging.

## ADDED Requirements

### Requirement: WebSocket Connection

Establish and maintain real-time connection.

#### Scenario: Connect on widget open

- **WHEN** the chat window opens
- **THEN** a WebSocket connection is established
- **AND** the customer session is authenticated

#### Scenario: Reconnect on disconnect

- **WHEN** the connection drops unexpectedly
- **THEN** the widget attempts to reconnect with exponential backoff
- **AND** queued messages are sent after reconnection

### Requirement: Message Events

Real-time message exchange.

#### Scenario: Send message

- **WHEN** user sends a message
- **THEN** it is sent via WebSocket `message:new` event
- **AND** a pending state is shown until acknowledged

#### Scenario: Receive message

- **WHEN** a `message:new` event is received
- **THEN** the message appears in the chat immediately
- **AND** a notification sound plays (if enabled)

### Requirement: Typing Indicators

Show when the other party is typing.

#### Scenario: User typing

- **WHEN** user starts typing
- **THEN** a `typing:start` event is sent
- **AND** after 3 seconds of no typing, `typing:stop` is sent

#### Scenario: Agent typing

- **WHEN** `typing:start` is received from agent
- **THEN** a typing indicator animation appears
- **AND** it disappears on `typing:stop` or new message

### Requirement: Read Receipts

Track message delivery and read status.

#### Scenario: Message delivered

- **WHEN** the server acknowledges a message
- **THEN** the message shows a delivered indicator

#### Scenario: Message read

- **WHEN** a `message:read` event is received
- **THEN** the message shows a read indicator
