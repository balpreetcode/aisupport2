# Widget UI Specification

## Overview

Chat interface with message bubbles, input field, and controls.

## ADDED Requirements

### Requirement: Launcher Button

A floating button opens the chat widget.

#### Scenario: Display launcher

- **WHEN** the widget is initialized
- **THEN** a floating launcher button appears
- **AND** it shows an unread message count badge when applicable

#### Scenario: Toggle chat window

- **WHEN** user clicks the launcher button
- **THEN** the chat window opens/closes with animation

### Requirement: Chat Window

The main chat interface displays conversations.

#### Scenario: Display messages

- **WHEN** the chat window opens
- **THEN** previous messages are loaded and displayed
- **AND** messages are grouped by date

#### Scenario: Message input

- **WHEN** user types in the input field
- **THEN** send button becomes active
- **AND** pressing Enter sends the message

### Requirement: Message Bubbles

Messages display with appropriate styling.

#### Scenario: User message

- **WHEN** the user sends a message
- **THEN** it appears as a right-aligned bubble
- **AND** shows timestamp on hover

#### Scenario: Agent/AI message

- **WHEN** a response is received
- **THEN** it appears as a left-aligned bubble
- **AND** shows sender name and avatar

### Requirement: Quick Replies

Predefined response buttons for common actions.

#### Scenario: Display quick replies

- **WHEN** a message includes quick reply options
- **THEN** clickable buttons appear below the message

#### Scenario: Select quick reply

- **WHEN** user clicks a quick reply button
- **THEN** that text is sent as their response
- **AND** the buttons disappear

### Requirement: Responsive Design

The widget adapts to screen size.

#### Scenario: Desktop display

- **WHEN** viewport width is >768px
- **THEN** widget displays as a floating window

#### Scenario: Mobile display

- **WHEN** viewport width is ≤768px
- **THEN** widget expands to full screen when opened
