# Widget Customization Specification

## Overview

Theme and branding configuration for brand consistency.

## ADDED Requirements

### Requirement: Color Customization

Configure widget colors to match brand.

#### Scenario: Primary color

- **WHEN** `primaryColor` is configured
- **THEN** buttons, links, and accents use that color

#### Scenario: Background colors

- **WHEN** `backgroundColor` and `headerColor` are configured
- **THEN** the widget uses those colors for respective areas

### Requirement: Position Configuration

Control widget placement on page.

#### Scenario: Position options

- **WHEN** `position` is set to "bottom-right", "bottom-left", "top-right", or "top-left"
- **THEN** the widget appears in that corner

#### Scenario: Offset configuration

- **WHEN** `offsetX` and `offsetY` are configured
- **THEN** the widget is offset from the corner by those pixel values

### Requirement: Branding

Add company branding to widget.

#### Scenario: Logo display

- **WHEN** `logoUrl` is configured
- **THEN** the logo appears in the widget header

#### Scenario: Company name

- **WHEN** `companyName` is configured
- **THEN** it appears in the widget header

#### Scenario: Welcome message

- **WHEN** `welcomeMessage` is configured
- **THEN** it shows as the first message for new conversations
