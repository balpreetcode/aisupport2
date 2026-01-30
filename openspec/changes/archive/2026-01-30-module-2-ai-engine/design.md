# Design: Module 2 - AI Engine

## Context

Building an AI-powered response system that processes customer messages, identifies intent, extracts entities, and generates appropriate responses. Uses OpenAI/Anthropic LLMs for NLU and response generation.

## Goals / Non-Goals

**Goals:**
- Classify intents with confidence scoring
- Generate contextual responses using LLM
- Maintain conversation history for multi-turn context
- Trigger escalation on low confidence or negative sentiment

**Non-Goals:**
- Custom model training (use pre-trained LLMs)
- Voice/audio processing
- Image/document understanding

## Technical Decisions

### Decision 1: AI Processing Pipeline

```
Message → Intent Classification → Entity Extraction → Response Generation → Delivery
              ↓                        ↓                     ↓
        Confidence Check          Context Update        Escalation Check
```

### Decision 2: Intent Classification

Use LLM with few-shot prompting for intent classification:

```typescript
const INTENT_PROMPT = `
Classify the following customer message into one of these intents:
- greeting: Welcome messages
- order_status: Order tracking inquiries
- refund_request: Return/refund inquiries
- shipping_info: Delivery questions
- account_help: Account management
- pricing: Cost inquiries
- contact_human: Escalation request
- goodbye: Conversation end
- fallback: Unknown queries

Return JSON: { "intent": "...", "confidence": 0.0-1.0, "entities": [...] }
`;
```

### Decision 3: Confidence Thresholds

| Level | Confidence | Action |
|-------|------------|--------|
| High | ≥80% | Respond directly |
| Medium | 70-79% | Respond with clarification |
| Low | 50-69% | Offer options or escalate after retry |
| Very Low | <50% | Immediate escalation |

### Decision 4: Response Generation

Use system prompts with conversation context:

```typescript
const RESPONSE_PROMPT = `
You are a helpful customer support agent for {companyName}.
Use the following knowledge base articles if relevant:
{relevantArticles}

Previous conversation:
{conversationHistory}

Customer intent: {intent}
Entities: {entities}

Generate a helpful, professional response.
`;
```

### Decision 5: Database Schema

```prisma
model Intent {
  id          String   @id @default(uuid())
  name        String   @unique
  description String?
  isActive    Boolean  @default(true)
  isDefault   Boolean  @default(false)
  trainingPhrases TrainingPhrase[]
  responses   IntentResponse[]
}

model TrainingPhrase {
  id       String @id @default(uuid())
  intentId String
  phrase   String
  intent   Intent @relation(...)
}

model IntentResponse {
  id           String @id @default(uuid())
  intentId     String
  responseText String
  variables    Json?
  intent       Intent @relation(...)
}
```

### Decision 6: AI Service Structure

```
packages/backend/src/services/ai/
├── index.ts           # Main AI service
├── intent.ts          # Intent classification
├── entity.ts          # Entity extraction
├── response.ts        # Response generation
├── sentiment.ts       # Sentiment analysis
├── context.ts         # Conversation context
└── llm.ts             # LLM client wrapper
```

## API Design

### Process Message (Internal)

```typescript
interface AIProcessingResult {
  intent: string;
  confidence: number;
  entities: ExtractedEntity[];
  sentiment: SentimentResult;
  response: string;
  shouldEscalate: boolean;
  escalationReason?: string;
}

async function processMessage(
  message: Message,
  conversationHistory: Message[]
): Promise<AIProcessingResult>
```

### AI Endpoints

- `POST /api/ai/process` - Process a message (internal)
- `GET /api/ai/intents` - List intents (admin)
- `POST /api/ai/intents/:id/test` - Test intent classification

## Dependencies

- openai: ^4.24.0 (already in package.json)
