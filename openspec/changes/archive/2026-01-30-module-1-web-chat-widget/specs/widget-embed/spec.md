# Widget Embed Specification

## Overview

Single-line JavaScript embed code for seamless website integration.

## ADDED Requirements

### Requirement: Embed Script Loading

The widget loads asynchronously without blocking page render.

#### Scenario: Async script loading

- **WHEN** the embed script is added to a page
- **THEN** the page continues loading without waiting for the widget
- **AND** the widget initializes after DOM is ready

#### Scenario: Multiple embed attempts

- **WHEN** the embed script is included multiple times
- **THEN** only one widget instance is created
- **AND** no errors are thrown

### Requirement: Configuration via Data Attributes

Widget configuration is passed via data attributes.

#### Scenario: Configure with API key

- **WHEN** the script tag includes `data-api-key="xxx"`
- **THEN** the widget authenticates with that API key

#### Scenario: Configure position

- **WHEN** the script tag includes `data-position="bottom-left"`
- **THEN** the widget appears in the bottom-left corner

#### Scenario: Configure theme

- **WHEN** the script tag includes `data-theme="dark"`
- **THEN** the widget uses dark theme colors
