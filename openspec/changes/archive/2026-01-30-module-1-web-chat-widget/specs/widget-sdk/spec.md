# Widget SDK Specification

## Overview

JavaScript API for programmatic control of the widget.

## ADDED Requirements

### Requirement: SDK Methods

Public methods for widget control.

#### Scenario: open()

- **WHEN** `AISupportWidget.open()` is called
- **THEN** the chat window opens

#### Scenario: close()

- **WHEN** `AISupportWidget.close()` is called
- **THEN** the chat window closes

#### Scenario: toggle()

- **WHEN** `AISupportWidget.toggle()` is called
- **THEN** the chat window toggles open/closed state

#### Scenario: sendMessage(text)

- **WHEN** `AISupportWidget.sendMessage("Hello")` is called
- **THEN** that message is sent as if typed by user

#### Scenario: setUser(userData)

- **WHEN** `AISupportWidget.setUser({ email, name, ... })` is called
- **THEN** the customer profile is updated

#### Scenario: setCustomAttributes(attrs)

- **WHEN** `AISupportWidget.setCustomAttributes({ plan: "pro" })` is called
- **THEN** custom metadata is attached to the conversation

#### Scenario: on(event, callback)

- **WHEN** `AISupportWidget.on("open", fn)` is called
- **THEN** the callback fires when the widget opens

#### Scenario: off(event, callback)

- **WHEN** `AISupportWidget.off("open", fn)` is called
- **THEN** the callback is unregistered

#### Scenario: destroy()

- **WHEN** `AISupportWidget.destroy()` is called
- **THEN** the widget is removed from the page
- **AND** all connections are closed

### Requirement: SDK Events

Events for integration hooks.

#### Scenario: Available events

- **WHEN** integrating with the widget
- **THEN** these events are available: "open", "close", "message", "ready", "error"
