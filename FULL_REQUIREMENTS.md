# Module 1: Web Chat Widget

	Module 1: Web Chat Widget
	Embeddable customer-facing chat interface
	Must Have# Module 2: AI Engine

	Module 2: AI Engine
	Intent recognition, response generation, NLU
	Must Have# Module 3: Human Handoff

	Module 3: Human Handoff
	Escalation triggers, queue management, routing
	Must Have# Module 4: Agent Interface

	Module 4: Agent Interface
	Agent workspace for handling conversations
	Must Have# Module 5: Admin Dashboard

	Module 5: Admin Dashboard
	Analytics, reporting, system management
	Must Have# Module 6: Knowledge Base

	Module 6: Knowledge Base
	Article management, search, AI training
	Must Have# Module 7: AI Configuration

	Module 7: AI Configuration
	Intent management, response templates
	Should Have# Module 8: User Management

	Module 8: User Management
	Roles, permissions, team structure
	Should Have# Module 9: Notifications

	Module 9: Notifications
	Alerts, emails, push notifications
	Should Have
	

 
4.2 Module 1: Web Chat Widget
The web chat widget is the primary customer-facing interface, providing an embeddable chat experience that integrates seamlessly with any website.
4.2.1 Core Features
•           Lightweight, asynchronous loading (<50KB initial payload)
•           Customizable appearance (colors, position, branding)
•           Responsive design for desktop and mobile
•           Real-time messaging via WebSocket
•           Typing indicators and read receipts
•           Quick reply buttons for common actions
•           File attachment support
•           Conversation history persistence
4.2.2 Technical Specifications
Specification
	Requirement
	Initial Load Time
	<1 second
	Bundle Size
	<50KB gzipped
	Browser Support
	Chrome 70+, Firefox 65+, Safari 12+, Edge 79+
	Mobile Support
	iOS Safari, Android Chrome
	Accessibility
	WCAG 2.1 AA compliant
	Security
	HTTPS only, XSS prevention, CSP compatible
	4.2.3 Integration Options
•           JavaScript embed code (single line)
•           NPM package for framework integration
•           REST API for custom implementations
•           JavaScript SDK with 9 public methods


 
4.3 Module 2: AI Engine
The AI Engine is the intelligent core of the platform, responsible for understanding customer intent, extracting relevant information, and generating appropriate responses.
4.3.1 Core Capabilities
•           Intent recognition with confidence scoring
•           Entity extraction (dates, numbers, emails, custom entities)
•           Context-aware response generation
•           Knowledge base integration
•           Multi-turn conversation handling
•           Sentiment analysis for escalation
4.3.2 Default Intents
Intent
	Description
	Example Phrases
	greeting
	Welcome messages
	Hi, Hello, Good morning
	order_status
	Order tracking
	Where is my order?, Track package
	refund_request
	Return/refund inquiries
	I want a refund, Return policy
	shipping_info
	Delivery questions
	Shipping cost, Delivery time
	account_help
	Account management
	Reset password, Update email
	pricing
	Cost inquiries
	How much does it cost?, Pricing
	contact_human
	Escalation request
	Talk to human, Real person
	goodbye
	Conversation end
	Thanks, Bye, That's all
	fallback
	Unknown queries
	Catch-all for unrecognized input
	4.3.3 Confidence Thresholds
Level
	Confidence
	Action
	High
	≥80%
	Respond directly with matched intent
	Medium
	70-79%
	Respond with clarification option
	Low
	50-69%
	Offer options or escalate after retry
	Very Low
	<50%
	Immediate escalation to human
	

 
4.4 Module 3: Human Handoff
The Human Handoff module manages the seamless transition from AI to human agents when automation cannot fully resolve customer needs.
4.4.1 Escalation Triggers
Trigger Type
	Condition
	Priority
	Low Confidence
	AI confidence <50% on initial response
	High
	Repeated Low Confidence
	Confidence 50-69% twice in a row
	High
	User Request
	Customer asks for human agent
	Critical
	Consecutive Fallbacks
	3 fallback responses in a row
	High
	Negative Sentiment
	Frustration or anger detected
	Critical
	Complex Query
	Multiple intents detected
	Medium
	Sensitive Topic
	Billing disputes, complaints
	High
	4.4.2 Queue Management
•           FIFO queue with priority override
•           Real-time wait time estimation
•           SLA monitoring and alerts
•           Automatic load balancing across agents
•           Business hours awareness
•           Offline message handling
4.4.3 Context Preservation
•           Full conversation history transfer
•           AI-generated conversation summary
•           Detected intent and entities
•           Customer information and history
•           Suggested responses for agent


 
4.5 Module 4: Agent Interface
The Agent Interface provides support agents with a powerful workspace to handle customer conversations efficiently.
4.5.1 Core Features
•           Unified inbox for all assigned conversations
•           Real-time message updates via WebSocket
•           Customer information panel with history
•           AI context and suggested responses
•           Canned response library
•           Internal notes (agent-only)
•           Conversation transfer capabilities
•           Multi-conversation handling (up to 5 concurrent)
4.5.2 Agent Actions
Action
	Description
	Reply
	Send message to customer
	Add Note
	Add internal note (not visible to customer)
	Transfer
	Transfer to another agent or team
	Resolve
	Mark conversation as resolved with summary
	Tag
	Add tags for categorization
	Snooze
	Temporarily hide conversation
	4.5.3 Agent Status
Status
	Description
	Receives Work
	Online
	Available for new conversations
	Yes
	Busy
	At maximum capacity
	No
	Away
	Temporarily unavailable
	No
	Offline
	Not working
	No
	

 
4.6 Module 5: Admin Dashboard
The Admin Dashboard provides comprehensive visibility into support operations with real-time analytics and management capabilities.
4.6.1 Dashboard Metrics
Metric
	Description
	Update Frequency
	Active Conversations
	Currently open conversations
	Real-time
	Resolved Today
	Conversations closed today
	Real-time
	AI Automation Rate
	% handled by AI without human
	5 minutes
	Avg Response Time
	Time to first response
	5 minutes
	Queue Length
	Customers waiting for agent
	Real-time
	CSAT Score
	Customer satisfaction rating
	Daily
	Agent Utilization
	Active time / Available time
	Hourly
	4.6.2 Reporting Features
•           Customizable date range filtering (Today, 7 days, 30 days, Custom)
•           Conversation volume trends
•           Status distribution analysis
•           Channel performance comparison
•           Agent performance leaderboard
•           AI intent accuracy reports
•           Export capabilities (CSV, PDF, Excel)
4.6.3 Management Functions
•           View and manage all conversations
•           Assign escalated conversations to agents
•           Monitor agent status in real-time
•           Configure system settings
•           Access audit logs


 
4.7 Module 6: Knowledge Base
The Knowledge Base serves as the central repository for information that powers AI responses and agent assistance.
4.7.1 Article Management
•           Rich text editor with formatting options
•           Category and tag organization
•           Version history and rollback
•           Draft and published states
•           Search engine optimization
•           Article performance analytics
4.7.2 AI Integration
•           Automatic article indexing for AI retrieval
•           Semantic search for relevant content
•           Article suggestion during conversations
•           Training data extraction
4.7.3 Article Structure
Field
	Type
	Required
	Title
	Text (max 200 chars)
	Yes
	Content
	Rich text
	Yes
	Category
	Select from list
	Yes
	Tags
	Multi-select
	No
	Status
	Draft/Published
	Yes
	Visibility
	Public/Internal
	Yes
	

 
4.8 Module 7: AI Configuration
AI Configuration enables administrators to customize the AI behavior without requiring technical expertise.
4.8.1 Intent Management
•           Create, edit, and delete custom intents
•           Add training phrases for each intent
•           Configure response templates with variables
•           Set confidence thresholds per intent
•           Test intents with the built-in console
4.8.2 Entity Management
•           Configure custom entity types
•           Define extraction patterns
•           Set validation rules
4.9 Module 8: User Management
•           Create and manage user accounts
•           Assign roles (Admin, Supervisor, Agent)
•           Organize users into teams
•           Configure permissions per role
•           Track user activity and audit logs
4.10 Module 9: Notifications
•           In-app notifications for agents and admins
•           Browser push notifications
•           Email notifications for important events
•           Configurable notification preferences
•           Queue alerts and SLA warnings


 
5. Data Architecture
5.1 Core Entities
Entity
	Description
	Key Fields
	User
	System users (agents, admins)
	id, email, role, status, team_id
	Customer
	End customers
	id, email, name, external_id, metadata
	Conversation
	Support conversations
	id, customer_id, status, channel, assigned_to
	Message
	Individual messages
	id, conversation_id, sender_type, content, timestamp
	Article
	Knowledge base articles
	id, title, content, category_id, status
	Intent
	AI intents
	id, name, description, is_active
	TrainingPhrase
	Intent training data
	id, intent_id, phrase
	IntentResponse
	Response templates
	id, intent_id, response_text, variables
	5.2 Entity Relationships
•           User → Team (many-to-one)
•           Conversation → Customer (many-to-one)
•           Conversation → User/assigned_to (many-to-one)
•           Message → Conversation (many-to-one)
•           Article → Category (many-to-one)
•           TrainingPhrase → Intent (many-to-one)
•           IntentResponse → Intent (many-to-one)
5.3 Data Retention
Data Type
	Retention Period
	Notes
	Conversation Messages
	2 years
	Configurable per compliance requirements
	Audit Logs
	5 years
	Immutable, no deletion
	Analytics Data
	1 year (detailed)
	Aggregated data kept longer
	Session Data
	30 days
	Automatic cleanup
	Knowledge Base
	Indefinite
	Version history maintained
	

 
6. Integration Points
6.1 External Integrations
Integration
	Purpose
	Protocol
	OpenAI/Anthropic
	LLM for NLU and response generation
	REST API
	SMTP Server
	Email notifications
	SMTP
	OAuth Providers
	SSO authentication
	OAuth 2.0
	Webhook Endpoints
	Event notifications to external systems
	HTTP POST
	CRM Systems
	Customer data sync (future)
	REST API
	6.2 API Endpoints
The platform exposes a comprehensive REST API for custom integrations.
6.2.1 Public API Categories
•           Authentication: /api/auth/* (login, logout, refresh)
•           Conversations: /api/conversations/* (CRUD, messages)
•           Customers: /api/customers/* (CRUD, lookup)
•           Knowledge Base: /api/articles/* (CRUD, search)
•           Analytics: /api/stats/* (metrics, reports)
•           Webhooks: /api/webhooks/* (subscribe, manage)
6.2.2 WebSocket Events
Event
	Direction
	Description
	message:new
	Bidirectional
	New message in conversation
	conversation:assigned
	Server → Client
	Conversation assigned to agent
	conversation:resolved
	Server → Client
	Conversation resolved
	typing:start
	Bidirectional
	User started typing
	typing:stop
	Bidirectional
	User stopped typing
	agent:status
	Server → Client
	Agent status change
	

 
7. User Roles & Permissions
7.1 Role Definitions
Role
	Description
	Typical Users
	Administrator
	Full system access, configuration
	IT Admin, Support Manager
	Supervisor
	Team oversight, reporting
	Team Lead, QA Manager
	Agent
	Handle customer conversations
	Support Agent, CSR
	7.2 Permission Matrix
Feature
	Admin
	Supervisor
	Agent
	Dashboard - Full
	✓
	✓
	Personal only
	Conversations - All
	✓
	✓
	Assigned only
	Knowledge Base - Edit
	✓
	✓
	View only
	AI Configuration
	✓
	View only
	No access
	User Management
	✓
	View team
	No access
	System Settings
	✓
	Limited
	Personal only
	Audit Logs
	✓
	Team only
	No access
	

 
8. Workflow Diagrams
8.1 Customer Message Flow
1. Customer sends message via widget
2. Message received by API Gateway
3. If new conversation → Create conversation record
4. Route message to AI Engine
5. AI Engine processes: Intent → Entities → Confidence
6. If confidence ≥ 70% → Generate response from template
7. If confidence < 70% or escalation trigger → Route to Human Handoff
8. Response sent back to customer via WebSocket
8.2 Human Escalation Flow
1. Escalation triggered (low confidence, user request, etc.)
2. AI sends pre-escalation message to customer
3. Conversation added to escalation queue with priority
4. Available agents notified via all channels
5. Agent claims or is assigned the conversation
6. AI context summary provided to agent
7. Agent handles conversation with AI assistance
8. Agent resolves and closes conversation
9. CSAT survey sent to customer
8.3 Conversation Resolution Flow
1. Agent clicks 'Resolve' button
2. Agent selects resolution type (Resolved/Closed/Spam)
3. Agent adds optional resolution note
4. System sends closing message to customer
5. CSAT survey triggered (if enabled)
6. Conversation status updated to 'Resolved'
7. Metrics updated (handle time, resolution count)
8. Conversation archived for reporting


 
9. Non-Functional Requirements
9.1 Performance Requirements
Metric
	Requirement
	Measurement Method
	API Response Time
	<200ms (95th percentile)
	APM monitoring
	Widget Load Time
	<1 second
	Lighthouse score
	AI Processing Time
	<2 seconds
	Request logging
	WebSocket Latency
	<100ms
	Ping monitoring
	Dashboard Load
	<3 seconds
	Browser metrics
	Search Results
	<1 second
	Query logging
	Concurrent Users
	10,000+ simultaneous
	Load testing
	9.2 Availability & Reliability
•           System Uptime: 99.5% SLA
•           Disaster Recovery: RPO 1 hour, RTO 4 hours
•           Automated failover for critical services
•           Geographic redundancy for database
•           Graceful degradation during AI service outages
9.3 Security Requirements
•           All data encrypted in transit (TLS 1.3)
•           All data encrypted at rest (AES-256)
•           JWT-based authentication with refresh tokens
•           Role-based access control (RBAC)
•           SQL injection and XSS prevention
•           Rate limiting on all endpoints
•           Audit logging for all administrative actions
•           GDPR and CCPA compliance
9.4 Scalability
•           Horizontal scaling via container orchestration
•           Auto-scaling based on load metrics
•           Database read replicas for query distribution
•           CDN for static asset delivery
•           Message queue for async processing


 
10. Implementation Roadmap
10.1 MVP Phase (Weeks 1-12)
Phase
	Weeks
	Deliverables
	Foundation
	1-3
	Architecture setup, database schema, authentication
	Core Modules
	4-7
	Chat widget, AI engine basics, human handoff
	Agent Tools
	8-10
	Agent interface, basic dashboard
	Integration
	11-12
	Testing, bug fixes, deployment
	10.2 MVP Scope
Included
•           Web chat channel only
•           Basic AI with 10-15 intents
•           Human escalation and routing
•           Agent conversation handling
•           Simple analytics dashboard
•           Basic knowledge base
Excluded from MVP
•           Multi-channel support (email, WhatsApp, SMS)
•           Advanced analytics and reporting
•           Workflow automation
•           Custom integrations
•           Mobile applications
10.3 Post-MVP Phases
Phase
	Timeline
	Features
	Phase 2
	Months 4-6
	Email channel, advanced analytics, API v2
	Phase 3
	Months 7-9
	WhatsApp/SMS, workflow automation, integrations
	Phase 4
	Months 10-12
	Mobile apps, advanced AI, enterprise features
	

 
11. Success Metrics
11.1 Key Performance Indicators
KPI
	Target
	Measurement
	AI Resolution Rate
	>50% (MVP), >70% (Year 1)
	Conversations resolved by AI / Total conversations
	First Response Time
	<30 seconds
	Avg time from customer message to response
	Customer Satisfaction
	>4.0/5 (MVP), >4.5/5 (Year 1)
	Post-conversation CSAT surveys
	System Uptime
	>99.5%
	Monitoring and incident tracking
	Agent Utilization
	>75%
	Active time / Available time
	Escalation Rate
	<30%
	Escalated / Total conversations
	Average Handle Time
	<5 minutes
	Time from escalation to resolution
	11.2 Business Impact Metrics
•           Cost per conversation reduction: Target 40-60%
•           Support capacity increase: Target 3x without headcount
•           Customer retention improvement: Target +5%
•           Agent satisfaction score: Target >4.0/5
11.3 Monitoring & Reporting
•           Real-time dashboard for operational metrics
•           Daily automated reports via email
•           Weekly trend analysis
•           Monthly business review package
•           Quarterly strategic assessment


 
12. Appendices
12.1 Glossary
Term
	Definition
	CSAT
	Customer Satisfaction Score (typically 1-5 scale)
	Intent
	The purpose or goal behind a customer's message
	Entity
	Specific data extracted from a message (dates, numbers, etc.)
	Escalation
	Transfer of conversation from AI to human agent
	NLU
	Natural Language Understanding
	NLG
	Natural Language Generation
	SLA
	Service Level Agreement
	FIFO
	First In, First Out (queue ordering)
	12.2 Reference Documents
•           MVP Requirements Document (MVP_Requirements.md)
•           Developer Technical Specifications (MVP_Developer_Requirements.md)
•           Functional Requirements Document (MVP_Functional_Requirements.md)
•           Module 1: Web Chat Widget Requirements
•           Module 2: AI Engine Requirements
•           Module 3: Human Handoff Requirements
•           Module 4: Agent Interface Requirements
•           Module 5: Admin Dashboard Requirements
•           Interactive Screen Mockups (HTML files)
12.3 Document Control
Version
	Date
	Author
	Changes
	1.0
	January 2025
	Product Team
	Initial release
	 
— End of Document —

# Section 8: Workflow Diagrams

Section 8: Workflow Diagrams
 # Section 8: Workflow Diagrams

Section 8: Workflow Diagrams
Elaborated Process Flows & Decision Trees
AI Customer Support Platform


 
8.1 Workflow Overview
This section provides comprehensive documentation of all critical workflows within the AI Customer Support Platform. Each workflow is detailed with step-by-step processes, decision points, system interactions, and error handling procedures.
8.1.1 Workflow Categories
Category
	Workflows Included
	Primary Actors
	Customer Journeys
	New conversation, message flow, session management
	Customer, AI, System
	AI Processing
	Intent recognition, response generation, learning
	AI Engine, Knowledge Base
	Human Handoff
	Escalation, queue management, agent assignment
	AI, Agent, Supervisor
	Agent Operations
	Conversation handling, transfer, resolution
	Agent, Customer, System
	Administrative
	Configuration, reporting, user management
	Admin, Supervisor
	8.1.2 Workflow Notation
Symbol
	Meaning
	Example
	[Actor]
	The entity performing the action
	[Customer], [AI], [Agent]
	→
	Flow direction / leads to
	Step 1 → Step 2
	◆
	Decision point
	◆ Confidence ≥ 70%?
	⚡
	Trigger / Event
	⚡ New message received
	✓
	Success outcome
	✓ Response sent
	✗
	Failure / Error
	✗ Connection failed
	⏱
	Time-based action
	⏱ Wait 30 seconds
	

 
8.2 Customer Message Flow
The Customer Message Flow describes the complete journey of a message from the moment a customer sends it until they receive a response. This is the core workflow of the platform.
8.2.1 Flow Diagram
Step 1
	⚡ TRIGGER
	Customer sends message via chat widget
	Step 2
	RECEIVE
	WebSocket server receives message payload
	Step 3
	VALIDATE
	Validate message format, length, content safety
	Step 4
	PERSIST
	Save message to database with timestamp
	Step 5
	ROUTE
	Determine routing: AI or existing human agent
	Step 6
	PROCESS
	AI Engine analyzes message (or agent receives)
	Step 7
	RESPOND
	Generate and send response to customer
	Step 8
	CONFIRM
	✓ Delivery confirmation via WebSocket
	8.2.2 Detailed Step Breakdown
Step 1: Message Trigger
The workflow begins when a customer submits a message through the chat widget.
Component
	Action
	Data
	Chat Widget
	Capture user input
	Message text, attachments
	Widget JS
	Validate client-side
	Length check, empty check
	WebSocket Client
	Send to server
	JSON payload with metadata
	UI
	Show sending indicator
	Spinner, disabled input
	Message Payload Structure:
JSON Payload
{ conversation_id: 'uuid', content: 'message text', type: 'text', timestamp: 'ISO-8601', metadata: { source: 'widget', device: 'desktop' } }
	Step 2: Message Reception
The server receives and acknowledges the message.
•           WebSocket server validates connection authentication
•           Message is parsed and validated against schema
•           Rate limiting check (max 10 messages per minute)
•           Acknowledgment sent back to client
Step 3: Validation
Validation
	Rule
	On Failure
	Format
	Valid JSON structure
	Reject with error code 400
	Length
	Max 2000 characters
	Truncate or reject
	Content
	No malicious scripts
	Sanitize HTML/JS
	Rate Limit
	≤10 messages/minute
	Queue or reject with 429
	Session
	Valid session token
	Request re-authentication
	Step 4: Persistence
Message is saved to the database for history and analytics.
Field
	Value
	Purpose
	id
	UUID generated
	Unique identifier
	conversation_id
	From payload
	Links to conversation
	sender_type
	'customer'
	Identifies message source
	content
	Sanitized text
	Message body
	created_at
	Server timestamp
	Ordering and analytics
	metadata
	JSON blob
	Device, channel, etc.
	

 
Step 5: Routing Decision
The system determines how to handle the message based on conversation state.
◆ Decision Point: Message Routing
IF conversation.assigned_to IS NOT NULL AND agent.status = 'online' THEN route to Human Agent ELSE route to AI Engine
	Condition
	Route To
	Reason
	New conversation
	AI Engine
	No prior context, start with AI
	AI handling, no escalation
	AI Engine
	Continue AI conversation
	Escalated, agent assigned
	Human Agent
	Agent is handling
	Escalated, no agent yet
	Queue + AI ack
	Waiting for agent
	Agent went offline
	Re-queue + notify
	Reassign needed
	Step 6: AI Processing
When routed to AI, the message goes through the AI Engine pipeline (detailed in Section 8.3).
•           Intent recognition with confidence scoring
•           Entity extraction from message content
•           Context retrieval from conversation history
•           Knowledge base search for relevant articles
•           Response generation using templates and AI
Step 7: Response Delivery
The generated response is sent back to the customer.
Action
	System
	Details
	Format response
	API Server
	Apply template, insert variables
	Save to database
	Database
	Persist for history
	Send via WebSocket
	WS Server
	Real-time delivery
	Fallback to polling
	API Server
	If WebSocket unavailable
	Update UI
	Widget
	Display message bubble
	Step 8: Delivery Confirmation
•           WebSocket acknowledgment confirms message received by client
•           Message status updated to 'delivered' in database
•           Analytics event logged for reporting
•           Typing indicator cleared


 
8.3 AI Processing Pipeline
The AI Processing Pipeline details how the AI Engine analyzes customer messages and generates appropriate responses. This is the intelligence core of the platform.
8.3.1 Pipeline Overview
Stage 1
	PREPROCESS
	Clean and normalize input text
	Stage 2
	INTENT
	Classify user intent with confidence
	Stage 3
	ENTITY
	Extract relevant entities (dates, IDs, etc.)
	Stage 4
	CONTEXT
	Retrieve conversation history and customer data
	Stage 5
	KNOWLEDGE
	Search knowledge base for relevant content
	Stage 6
	DECIDE
	◆ Determine response strategy
	Stage 7
	GENERATE
	Create response from template or AI
	Stage 8
	VALIDATE
	Check response quality and safety
	Stage 9
	OUTPUT
	Return formatted response
	8.3.2 Stage Details
Stage 1: Preprocessing
Raw input is cleaned and normalized for consistent processing.
Operation
	Input
	Output
	Example
	Lowercase
	Mixed case
	All lowercase
	'Hello' → 'hello'
	Trim whitespace
	Extra spaces
	Single spaces
	'hi  there' → 'hi there'
	Remove special chars
	Emojis, symbols
	Clean text
	'Hi!! 😊' → 'Hi'
	Spell correction
	Typos
	Corrected words
	'refudn' → 'refund'
	Language detection
	Any text
	Language code
	'Bonjour' → 'fr'
	Stage 2: Intent Recognition
The system classifies what the customer wants to accomplish.
◆ Decision Point: Intent Confidence
HIGH (≥80%): Direct match, proceed with intent MEDIUM (70-79%): Proceed with clarification option LOW (50-69%): Offer multiple options or retry VERY LOW (<50%): Trigger escalation
	Input
	Processing
	Output
	'Where is my order #12345'
	Pattern matching + ML model
	intent: order_status (92%)
	'I want my money back'
	Semantic analysis
	intent: refund_request (87%)
	'asdfgh'
	No match found
	intent: fallback (100%)
	'Can you help me with billing and also shipping'
	Multi-intent detection
	intents: [billing, shipping]
	Stage 3: Entity Extraction
Relevant data points are extracted from the message.
Entity Type
	Pattern/Method
	Example Extraction
	Order ID
	Regex: #[0-9]+
	'#12345' → order_id: 12345
	Email
	Regex: email pattern
	'john@email.com' → email: john@email.com
	Date
	NLP date parsing
	'next Tuesday' → date: 2025-01-28
	Amount
	Currency pattern
	'$99.99' → amount: 99.99, currency: USD
	Product
	Entity recognition
	'iPhone 15' → product: iPhone 15
	

 
Stage 4: Context Retrieval
Historical context is gathered to inform the response.
•           Last 10 messages from current conversation
•           Previous intents detected in this session
•           Customer profile data (name, email, tier)
•           Previous conversations summary (if returning customer)
•           Any pending actions or follow-ups
Context Item
	Source
	Usage
	Conversation history
	Messages table
	Maintain continuity
	Customer name
	Customers table
	Personalize response
	Customer tier
	Customers table
	Priority routing
	Previous issues
	Conversations table
	Reference past interactions
	Pending orders
	External API
	Proactive information
	Stage 5: Knowledge Base Search
Relevant articles are retrieved to enhance the response.
•           Semantic search using intent and entities as query
•           Top 3 matching articles retrieved
•           Relevance score calculated for each
•           Article content summarized for inclusion
Stage 6: Response Decision
◆ Decision Tree: Response Strategy
IF confidence ≥ 70% AND intent has template:   → Use template response ELSE IF confidence ≥ 70% AND KB match:   → Generate from KB content ELSE IF confidence 50-69% AND retry_count < 2:   → Ask clarifying question ELSE:   → Trigger human escalation
	Stage 7: Response Generation
Method
	When Used
	Example
	Template + Variables
	High confidence, standard query
	'Your order #{{order_id}} is {{status}}'
	KB Summary
	Information request
	'Based on our policy: {{article_summary}}'
	AI Generation
	Complex or novel query
	LLM generates contextual response
	Clarification
	Ambiguous intent
	'Did you mean A or B?'
	Escalation Message
	Low confidence
	'Let me connect you with a specialist'
	Stage 8: Response Validation
•           Check response length (not too short or long)
•           Verify all variables were substituted
•           Content safety scan (no inappropriate content)
•           Grammar and spelling check
•           Tone analysis (professional, helpful)


 
8.4 Human Escalation Workflow
The Human Escalation Workflow manages the transition from AI to human support when automation cannot fully address customer needs.
8.4.1 Escalation Triggers
Trigger ID
	Trigger
	Detection Method
	Priority
	ESC-01
	User explicitly requests human
	Keyword detection
	Critical
	ESC-02
	AI confidence < 50%
	Confidence score
	High
	ESC-03
	Confidence 50-69% twice
	Consecutive check
	High
	ESC-04
	3 consecutive fallbacks
	Fallback counter
	High
	ESC-05
	Negative sentiment
	Sentiment analysis
	Critical
	ESC-06
	Complex multi-intent
	Intent count > 2
	Medium
	ESC-07
	Sensitive topic detected
	Topic classifier
	High
	ESC-08
	Customer is VIP
	Customer tier check
	High
	8.4.2 Escalation Flow
Step 1
	⚡ TRIGGER
	Escalation condition detected
	Step 2
	PREPARE
	Generate AI summary of conversation
	Step 3
	NOTIFY
	Send pre-escalation message to customer
	Step 4
	QUEUE
	Add to escalation queue with priority
	Step 5
	ALERT
	Notify available agents
	Step 6
	ASSIGN
	Agent claims or auto-assigned
	Step 7
	HANDOFF
	Transfer context to agent interface
	Step 8
	CONFIRM
	✓ Agent connected message to customer
	8.4.3 Pre-Escalation Processing
AI Summary Generation
Before escalation, AI generates a summary for the receiving agent.
Summary Component
	Content
	Purpose
	Issue Summary
	1-2 sentence problem description
	Quick understanding
	Detected Intent
	Primary intent and confidence
	Context for agent
	Extracted Entities
	Order IDs, dates, amounts
	Key data points
	Escalation Reason
	Why AI escalated
	Agent awareness
	Suggested Response
	AI-recommended reply
	Speed up resolution
	Related KB Articles
	Top matching articles
	Reference material
	Customer Notification
Customer receives a message indicating the transition.
Pre-Escalation Message Template
"I'd like to connect you with a team member who can better assist with this. Before I do, is there anything else you'd like me to note about your issue?"  [Wait for response or 30 seconds]  "Connecting you now. Estimated wait time: {{wait_time}}. A specialist will be with you shortly."
	

 
8.4.4 Queue Management
Queue Entry
Field
	Value
	Purpose
	conversation_id
	UUID
	Reference to conversation
	priority
	1-5 (1=highest)
	Queue ordering
	escalation_reason
	Trigger code
	Agent context
	customer_tier
	VIP/Regular
	Priority boost
	entered_at
	Timestamp
	Wait time tracking
	sla_deadline
	Timestamp
	SLA monitoring
	Priority Calculation
Priority Formula
Base Priority = Escalation Type Priority + VIP Bonus (if applicable): -1 + Long Wait Penalty: -1 for every 2 minutes waiting + Negative Sentiment: -1  Lower number = Higher priority
	Factor
	Priority Impact
	Example
	User request for human
	Priority 1 (Critical)
	"Talk to a person"
	Negative sentiment
	Priority 1 (Critical)
	Angry customer
	Low AI confidence
	Priority 2 (High)
	Confidence < 50%
	VIP customer
	-1 to base priority
	Enterprise tier
	Wait > 2 minutes
	-1 per 2 min
	4 min wait = -2
	8.4.5 Agent Assignment
Assignment Methods
Method
	Description
	When Used
	Manual Claim
	Agent picks from queue
	Default method
	Round Robin
	System assigns evenly
	High volume periods
	Skill-Based
	Match skills to issue
	Technical issues
	Load-Based
	Assign to least busy
	Balancing workload
	Direct Assignment
	Admin assigns specific agent
	Escalations, VIPs
	Agent Selection Criteria
•           Agent status is 'Online' (not Busy, Away, or Offline)
•           Agent has capacity (below max concurrent chats)
•           Agent has required skills (if skill-based routing)
•           Agent is in correct team/department
•           Preference for agent who handled previous conversations


 
8.5 Agent Conversation Handling
This workflow covers how agents receive, handle, and resolve customer conversations after escalation.
8.5.1 Agent Receives Conversation
Step 1
	⚡ NOTIFY
	Agent receives notification of assignment
	Step 2
	LOAD
	Conversation appears in agent's inbox
	Step 3
	CONTEXT
	AI summary and history displayed
	Step 4
	REVIEW
	Agent reads conversation history
	Step 5
	ENGAGE
	Agent sends first response to customer
	Agent Notification Channels
Channel
	Trigger
	Content
	In-App Badge
	Immediate
	Inbox count increments
	In-App Sound
	Immediate
	Configurable alert sound
	Browser Push
	If tab not focused
	Customer name + preview
	Desktop Alert
	If enabled
	Native OS notification
	Tab Title Flash
	If tab not focused
	Title flashes with count
	8.5.2 Message Handling
Step 1
	RECEIVE
	Customer message appears in real-time
	Step 2
	ANALYZE
	AI suggests responses (optional)
	Step 3
	COMPOSE
	Agent types or selects response
	Step 4
	ENHANCE
	Use canned response or KB article
	Step 5
	SEND
	Response delivered to customer
	Step 6
	LOG
	Message saved with agent attribution
	AI Assistance for Agents
While handling conversations, agents receive AI-powered assistance.
Assistance Type
	Description
	Display Location
	Suggested Responses
	2-3 AI-generated reply options
	Above message input
	Related KB Articles
	Relevant knowledge base links
	Right panel
	Customer Sentiment
	Real-time sentiment indicator
	Conversation header
	Entity Highlights
	Key data highlighted in chat
	In message bubbles
	Quick Actions
	One-click common actions
	Toolbar
	8.5.3 Internal Notes
Agents can add notes visible only to other agents.
Use Case
	Example Note
	Visibility
	Context for transfer
	"Customer is frustrated, handle carefully"
	Receiving agent
	Technical details
	"Checked system - order stuck in processing"
	All agents
	Follow-up reminder
	"Promised callback tomorrow at 2 PM"
	All agents
	Supervisor escalation
	"Need manager approval for refund > $500"
	Supervisors
	

 
8.5.4 Conversation Transfer
Agents can transfer conversations to other agents or teams.
Step 1
	INITIATE
	Agent clicks Transfer button
	Step 2
	SELECT
	Choose agent or team from list
	Step 3
	NOTE
	Add internal note for receiving agent
	Step 4
	CONFIRM
	Confirm transfer action
	Step 5
	NOTIFY
	Customer informed of transfer
	Step 6
	HANDOFF
	Conversation moves to new agent
	Step 7
	COMPLETE
	✓ Original agent released
	Transfer Types
Type
	Recipient
	Use Case
	Agent Transfer
	Specific agent by name
	Specialist needed, shift handoff
	Team Transfer
	Team queue (e.g., Billing)
	Department routing
	Supervisor Escalation
	Team supervisor
	Authority needed
	Return to Queue
	General queue
	Agent unavailable
	8.5.5 Conversation Resolution
Step 1
	INITIATE
	Agent clicks Resolve button
	Step 2
	TYPE
	Select resolution type
	Step 3
	SUMMARY
	Add optional resolution note
	Step 4
	TAGS
	Apply tags for categorization
	Step 5
	MESSAGE
	Send closing message to customer
	Step 6
	SURVEY
	Trigger CSAT survey (if enabled)
	Step 7
	CLOSE
	Update status to Resolved
	Step 8
	METRICS
	Calculate and log handle time
	Resolution Types
Type
	Description
	Customer Message
	CSAT Survey
	Resolved
	Issue successfully fixed
	Closing message sent
	Yes
	Closed
	No action needed/possible
	Brief closing sent
	Optional
	Spam
	Spam or abuse
	No message
	No
	

 
8.6 Customer Satisfaction Survey Flow
After conversation resolution, customers may receive a satisfaction survey to measure service quality.
8.6.1 Survey Trigger
Condition
	Survey Sent
	Reason
	Resolved by AI
	Yes (if enabled)
	Measure AI effectiveness
	Resolved by Agent
	Yes
	Standard feedback
	Closed (no resolution)
	Optional
	Configurable
	Marked as Spam
	No
	Not applicable
	Customer abandoned
	No
	Not completed
	8.6.2 Survey Flow
Step 1
	TRIGGER
	Conversation marked as Resolved
	Step 2
	DELAY
	⏱ Wait 30 seconds
	Step 3
	DISPLAY
	Show rating prompt in widget
	Step 4
	RATE
	Customer selects 1-5 stars
	Step 5
	COMMENT
	Optional text feedback
	Step 6
	SUBMIT
	Save response to database
	Step 7
	THANK
	Display thank you message
	Step 8
	ANALYZE
	Update metrics and reports
	8.6.3 Survey Questions
Question
	Type
	Required
	How satisfied are you with our support?
	1-5 star rating
	Yes
	Was your issue resolved?
	Yes/No/Partially
	Optional
	Any additional feedback?
	Free text (500 chars)
	No
	Would you recommend us?
	0-10 NPS scale
	Optional
	8.6.4 Survey Analysis
•           Individual responses linked to conversation and agent
•           Daily/weekly/monthly aggregation for trends
•           Low score alerts sent to supervisors
•           AI analysis of text feedback for themes
•           Correlation with conversation attributes (wait time, transfers, etc.)


 
8.7 Offline and After-Hours Flow
This workflow handles customer interactions when human agents are unavailable.
8.7.1 Business Hours Check
Scenario
	AI Available
	Humans Available
	Behavior
	Business hours, agents online
	Yes
	Yes
	Normal flow
	Business hours, all agents busy
	Yes
	Queue
	AI + queue with wait time
	After hours
	Yes
	No
	AI only, no escalation option
	Holiday
	Yes
	No
	AI + holiday message
	System maintenance
	Limited
	No
	Maintenance message
	8.7.2 After-Hours Flow
Step 1
	DETECT
	System checks current time against business hours
	Step 2
	NOTIFY
	Widget shows "Outside business hours" banner
	Step 3
	AI ONLY
	AI handles conversation without escalation
	Step 4
	COLLECT
	If AI can't resolve, collect customer details
	Step 5
	PROMISE
	Promise callback/email when agents return
	Step 6
	QUEUE
	Add to next-day queue with priority
	Step 7
	CONFIRM
	Send confirmation email to customer
	8.7.3 Leave Message Flow
When AI cannot resolve and no agents are available, customers can leave a message.
Field
	Required
	Purpose
	Name
	Yes
	Identify customer
	Email
	Yes
	Contact for follow-up
	Phone
	Optional
	Alternative contact
	Issue description
	Yes
	Understand problem
	Preferred callback time
	Optional
	Schedule follow-up
	Leave Message Confirmation
"Thank you for contacting us! We've received your message and a team member will reach out to you at {{email}} within {{sla_hours}} hours. Your reference number is #{{ticket_id}}."
	

 
8.8 Error Handling Workflows
This section documents how the system handles various error conditions to ensure graceful degradation and good user experience.
8.8.1 Connection Errors
Error
	Detection
	User Message
	Recovery
	WebSocket disconnect
	Connection lost event
	"Reconnecting..."
	Auto-retry 3x, then fallback to polling
	Server timeout
	No response in 30s
	"Taking longer than usual..."
	Retry request, show cached data
	Network offline
	Navigator.onLine = false
	"You appear to be offline"
	Queue messages, send when online
	Session expired
	401 response
	"Session expired"
	Prompt re-authentication
	8.8.2 AI Service Errors
Error
	Detection
	Fallback
	Notification
	AI API timeout
	No response in 10s
	Use fallback response
	Alert ops team
	AI API error
	5xx response
	Graceful escalation
	Alert ops team
	Rate limit exceeded
	429 response
	Queue and retry
	Log for capacity planning
	Invalid response
	Parse error
	Use fallback response
	Log for debugging
	8.8.3 Fallback Responses
When AI cannot generate a proper response, fallback messages are used.
Fallback Response Template
"I apologize, but I'm having trouble understanding your request right now. Could you please rephrase your question? Or if you'd prefer, I can connect you with a team member who can help."  [Offer escalation option if within business hours]
	8.8.4 Error Recovery Flow
Step 1
	DETECT
	Error condition identified
	Step 2
	LOG
	Record error details for debugging
	Step 3
	CLASSIFY
	Determine error severity and type
	Step 4
	NOTIFY USER
	Display appropriate user message
	Step 5
	ATTEMPT RECOVERY
	Try automatic recovery if possible
	Step 6
	ESCALATE
	If critical, alert operations team
	Step 7
	FALLBACK
	Use fallback behavior if recovery fails
	Step 8
	MONITOR
	Track for patterns and recurring issues
	

 
8.9 Administrative Workflows
8.9.1 User Management
Create User
	Admin → User Management → Add User → Fill form → Set role → Send invite
	Deactivate User
	Admin → User Management → Select user → Deactivate → Confirm → Sessions invalidated
	Change Role
	Admin → User Management → Select user → Edit → Change role → Save → Permissions updated
	Reset Password
	Admin → User Management → Select user → Reset password → Email sent to user
	8.9.2 Knowledge Base Management
Create Article
	Admin → KB → New Article → Write content → Set category → Preview → Publish
	Edit Article
	Admin → KB → Select article → Edit → Make changes → Save draft or Publish
	Archive Article
	Admin → KB → Select article → Archive → Confirm → Removed from AI search
	Bulk Import
	Admin → KB → Import → Upload CSV → Map fields → Validate → Import
	8.9.3 AI Configuration
Add Intent
	Admin → AI Config → New Intent → Name → Add training phrases → Add responses → Test → Activate
	Edit Intent
	Admin → AI Config → Select intent → Edit phrases/responses → Test → Save
	Train Model
	Admin → AI Config → Training → Review changes → Start training → Monitor progress
	Test Intent
	Admin → AI Config → Test Console → Enter message → View results → Adjust if needed
	8.9.4 Reporting Workflow
Generate Report
	Admin → Reports → Select type → Set date range → Set filters → Generate → View/Export
	Schedule Report
	Admin → Reports → Select type → Schedule → Set frequency → Set recipients → Activate
	Dashboard Review
	Admin → Dashboard → Select date range → Review metrics → Drill down → Take action
	

 
8.10 Workflow Summary
8.10.1 Key Workflows by Module
Module
	Primary Workflows
	Triggers
	Chat Widget
	Session start, message send, reconnection
	User action, system events
	AI Engine
	Processing pipeline, response generation
	Incoming message
	Human Handoff
	Escalation, queue management, assignment
	Escalation triggers
	Agent Interface
	Handle conversation, transfer, resolve
	Agent actions
	Admin Dashboard
	Reporting, configuration, user management
	Admin actions
	8.10.2 Critical Paths
•           Happy Path: Customer → AI → Resolution (target: 70% of conversations)
•           Escalation Path: Customer → AI → Human → Resolution (target: <30%)
•           Error Path: Error → Fallback → Recovery or Graceful Degradation
8.10.3 Performance Targets by Workflow
Workflow
	Target Duration
	SLA
	Message send to AI response
	<2 seconds
	95th percentile
	Escalation trigger to queue entry
	<2 seconds
	99th percentile
	Queue entry to agent assignment
	<2 minutes
	90th percentile
	Agent response to customer
	<1 minute
	85th percentile
	Total conversation resolution
	<10 minutes
	80th percentile
	 
— End of Section 8 —

# Module 1: Web Chat Widget

Module 1: Web Chat Widget# Module 1: Web Chat Widget - Detailed Functional Requirements

Module 1: Web Chat Widget - Detailed Functional Requirements
Document Info
Module: Web Chat Widget | Version: 1.0 | Status: Approved
________________




  
  
  

1. Widget Display
1.1 Widget Button (Collapsed State)
ID
	Requirement
	Details
	WGT-1.1.1
	Button shape
	Circular, 60px diameter
	WGT-1.1.2
	Button position
	Fixed, bottom-right (default), 20px from edges
	WGT-1.1.3
	Button icon
	Chat icon (💬) or custom SVG
	WGT-1.1.4
	Button color
	Configurable primary color with gradient
	WGT-1.1.5
	Button shadow
	Box-shadow for depth (0 4px 12px rgba)
	WGT-1.1.6
	Hover effect
	Scale 1.05x on hover
	WGT-1.1.7
	Click action
	Opens chat window
	WGT-1.1.8
	Unread badge
	Red circle with count (top-right of button)
	WGT-1.1.9
	Z-index
	9999 (above page content)
	WGT-1.1.10
	Mobile
	Same behavior, responsive sizing
	Acceptance Criteria:
* [ ] Button visible on all pages where script is embedded
* [ ] Button stays fixed during scroll
* [ ] Unread badge shows when new message arrives while minimized
________________


1.2 Chat Window (Expanded State)
ID
	Requirement
	Details
	WGT-1.2.1
	Window size
	360px width × 500px height (desktop)
	WGT-1.2.2
	Window position
	Above widget button, right-aligned
	WGT-1.2.3
	Border radius
	16px rounded corners
	WGT-1.2.4
	Shadow
	Elevated shadow (0 8px 32px rgba)
	WGT-1.2.5
	Animation
	Slide up + fade in (300ms)
	WGT-1.2.6
	Mobile size
	Full screen on viewport < 480px
	WGT-1.2.7
	Close action
	Click X or click outside closes window
	WGT-1.2.8
	Minimize
	Closes to button, preserves conversation
	Chat Window Components:
1.2.A Header
ID
	Requirement
	Details
	WGT-1.2.A1
	Background
	Primary color gradient
	WGT-1.2.A2
	Height
	70px
	WGT-1.2.A3
	Logo/Avatar
	40px circle, left side
	WGT-1.2.A4
	Title
	Company/bot name, white text, 16px bold
	WGT-1.2.A5
	Subtitle
	Status text (Online/Away), 12px
	WGT-1.2.A6
	Online indicator
	Green dot when available
	WGT-1.2.A7
	Close button
	X icon, right side, 24px
	1.2.B Message Area
ID
	Requirement
	Details
	WGT-1.2.B1
	Background
	Light gray (#f8f9fa)
	WGT-1.2.B2
	Height
	Flexible, fills available space
	WGT-1.2.B3
	Scroll
	Vertical scroll when content overflows
	WGT-1.2.B4
	Auto-scroll
	Scroll to bottom on new message
	WGT-1.2.B5
	Padding
	16px all sides
	WGT-1.2.B6
	Load more
	"Load earlier messages" at top (if history)
	1.2.C Input Area
ID
	Requirement
	Details
	WGT-1.2.C1
	Background
	White
	WGT-1.2.C2
	Height
	60px minimum
	WGT-1.2.C3
	Input field
	Rounded text input, placeholder text
	WGT-1.2.C4
	Send button
	Circular, primary color, right side
	WGT-1.2.C5
	Attachment
	Optional paperclip icon (if enabled)
	WGT-1.2.C6
	Emoji
	Optional emoji picker (if enabled)
	Acceptance Criteria:
* [ ] Window opens/closes smoothly
* [ ] All components render correctly
* [ ] Mobile full-screen works
________________


2. Messaging
2.1 Sending Messages
ID
	Requirement
	Details
	WGT-2.1.1
	Input field
	Text input, max 1000 characters
	WGT-2.1.2
	Send trigger
	Click send button OR press Enter
	WGT-2.1.3
	Shift+Enter
	Inserts new line (no send)
	WGT-2.1.4
	Empty validation
	Cannot send empty/whitespace message
	WGT-2.1.5
	Clear input
	Input clears after successful send
	WGT-2.1.6
	Disable input
	Disable send while message in transit
	WGT-2.1.7
	Retry
	Retry option if send fails
	Acceptance Criteria:
* [ ] Message sends within 500ms
* [ ] Input clears after send
* [ ] Error shown if send fails
________________


2.2 Message Display
ID
	Requirement
	Details
	WGT-2.2.1
	Customer messages
	Right-aligned, primary color background
	WGT-2.2.2
	Bot/Agent messages
	Left-aligned, white background with border
	WGT-2.2.3
	Avatar
	28px circle, left of bot/agent messages
	WGT-2.2.4
	Bubble shape
	Rounded rectangle, 12px radius
	WGT-2.2.5
	Max width
	75% of message area width
	WGT-2.2.6
	Text style
	14px, line-height 1.5
	WGT-2.2.7
	Timestamp
	Below bubble, 10px gray text
	WGT-2.2.8
	Grouping
	Consecutive same-sender messages grouped
	WGT-2.2.9
	Links
	Auto-detect and make clickable (target=_blank)
	WGT-2.2.10
	Emoji
	Render emoji inline
	Message States:
State
	Visual
	Sending
	Slight opacity, spinner
	Sent
	Full opacity
	Failed
	Red border, retry icon
	Acceptance Criteria:
* [ ] Messages display correctly aligned
* [ ] Timestamps accurate
* [ ] Links open in new tab
________________


2.3 Typing Indicator
ID
	Requirement
	Details
	WGT-2.3.1
	Trigger
	Show when bot/agent is composing
	WGT-2.3.2
	Position
	Left-aligned, like incoming message
	WGT-2.3.3
	Visual
	Three animated dots
	WGT-2.3.4
	Animation
	Dots pulse/bounce (1.4s loop)
	WGT-2.3.5
	Timeout
	Hide after 30 seconds max
	WGT-2.3.6
	Replace
	Replace with actual message when received
	Acceptance Criteria:
* [ ] Indicator appears within 500ms of agent typing
* [ ] Animation smooth
* [ ] Disappears when message arrives
________________


2.4 Quick Replies
ID
	Requirement
	Details
	WGT-2.4.1
	Display
	Horizontal row of buttons below bot message
	WGT-2.4.2
	Style
	Pill-shaped, outlined, primary color
	WGT-2.4.3
	Max options
	5 quick replies per message
	WGT-2.4.4
	Click action
	Send quick reply text as customer message
	WGT-2.4.5
	Disappear
	Hide after one is clicked
	WGT-2.4.6
	Wrap
	Wrap to next line if needed
	Acceptance Criteria:
* [ ] Quick replies clickable
* [ ] Clicking sends message
* [ ] Replies hide after selection
________________


3. Conversation Management
3.1 Session Handling
ID
	Requirement
	Details
	WGT-3.1.1
	Session ID
	Generate unique session ID per visitor
	WGT-3.1.2
	Storage
	Store session in localStorage
	WGT-3.1.3
	Expiry
	Session expires after 24 hours inactivity
	WGT-3.1.4
	Persistence
	Conversation persists across page navigation
	WGT-3.1.5
	Restore
	Load message history on widget reopen
	WGT-3.1.6
	New session
	Option to start new conversation
	Acceptance Criteria:
* [ ] Conversation survives page refresh
* [ ] History loads correctly on return
* [ ] New conversation clears history
________________


3.2 Customer Identification
ID
	Requirement
	Details
	WGT-3.2.1
	Anonymous
	Works without customer info
	WGT-3.2.2
	Identify API
	sw('identify', {name, email, external_id})
	WGT-3.2.3
	Pre-chat form
	Optional form before first message
	WGT-3.2.4
	Form fields
	Name (optional), Email (optional)
	WGT-3.2.5
	Validation
	Email format validation
	WGT-3.2.6
	Skip option
	Allow skip if fields not required
	Pre-chat Form Fields:
Field
	Type
	Required
	Validation
	Name
	Text
	Configurable
	Max 100 chars
	Email
	Email
	Configurable
	Valid email format
	Acceptance Criteria:
* [ ] Anonymous users can chat
* [ ] Identify API updates customer info
* [ ] Pre-chat form validates correctly
________________


3.3 Message History
ID
	Requirement
	Details
	WGT-3.3.1
	Load on open
	Load last 50 messages
	WGT-3.3.2
	Pagination
	"Load more" loads 50 more
	WGT-3.3.3
	Scroll position
	Maintain scroll when loading more
	WGT-3.3.4
	Cache
	Cache messages locally
	WGT-3.3.5
	Sync
	Sync with server on reconnect
	Acceptance Criteria:
* [ ] History loads within 1 second
* [ ] Load more works correctly
* [ ] No duplicate messages
________________


4. Real-time Communication
4.1 WebSocket Connection
ID
	Requirement
	Details
	WGT-4.1.1
	Connect
	Establish WebSocket on widget load
	WGT-4.1.2
	Auth
	Authenticate with session token
	WGT-4.1.3
	Reconnect
	Auto-reconnect on disconnect (backoff)
	WGT-4.1.4
	Heartbeat
	Ping every 30 seconds
	WGT-4.1.5
	Offline mode
	Queue messages when offline
	WGT-4.1.6
	Sync
	Send queued messages on reconnect
	Connection States:
State
	Visual
	Behavior
	Connecting
	Spinner
	Disable input
	Connected
	Green dot
	Normal operation
	Disconnected
	Gray dot
	Show "Reconnecting..."
	Offline
	Red dot
	Queue messages locally
	Acceptance Criteria:
* [ ] Connection established within 2 seconds
* [ ] Auto-reconnect works
* [ ] Queued messages send on reconnect
________________


4.2 Real-time Events
ID
	Requirement
	Details
	WGT-4.2.1
	Receive message
	Display new message instantly
	WGT-4.2.2
	Typing start
	Show typing indicator
	WGT-4.2.3
	Typing stop
	Hide typing indicator
	WGT-4.2.4
	Agent joined
	Show system message
	WGT-4.2.5
	Agent left
	Show system message
	WGT-4.2.6
	Conversation ended
	Show end message, disable input
	Acceptance Criteria:
* [ ] Messages appear within 500ms
* [ ] Typing indicator responsive
* [ ] System messages display correctly
________________


5. Notifications
5.1 In-Widget Notifications
ID
	Requirement
	Details
	WGT-5.1.1
	New message sound
	Play sound on new message (if enabled)
	WGT-5.1.2
	Unread badge
	Show count on minimized button
	WGT-5.1.3
	Badge clear
	Clear badge when window opened
	WGT-5.1.4
	Title flash
	Flash browser tab title with new message
	5.2 Browser Notifications
ID
	Requirement
	Details
	WGT-5.2.1
	Permission
	Request notification permission
	WGT-5.2.2
	Show notification
	Show when widget minimized and new message
	WGT-5.2.3
	Notification content
	"New message from [Agent Name]"
	WGT-5.2.4
	Click action
	Open widget on notification click
	WGT-5.2.5
	Respect settings
	Honor user's sound/notification preferences
	Acceptance Criteria:
* [ ] Sound plays on new message
* [ ] Badge count accurate
* [ ] Browser notification shows (if permitted)
________________


6. Customization
6.1 Appearance Settings
ID
	Setting
	Type
	Default
	WGT-6.1.1
	Primary color
	Hex color
	#3b82f6
	WGT-6.1.2
	Secondary color
	Hex color
	#8b5cf6
	WGT-6.1.3
	Company name
	Text
	"Support"
	WGT-6.1.4
	Company logo
	Image URL
	Default icon
	WGT-6.1.5
	Bot avatar
	Image URL
	Robot emoji
	WGT-6.1.6
	Widget position
	left/right
	right
	WGT-6.1.7
	Button icon
	URL or emoji
	💬
	6.2 Behavior Settings
ID
	Setting
	Type
	Default
	WGT-6.2.1
	Welcome message
	Text
	"Hi! How can we help?"
	WGT-6.2.2
	Auto-open delay
	Seconds (0=disabled)
	0
	WGT-6.2.3
	Pre-chat form
	Boolean
	false
	WGT-6.2.4
	Sound enabled
	Boolean
	true
	WGT-6.2.5
	File upload
	Boolean
	false
	WGT-6.2.6
	Emoji picker
	Boolean
	false
	6.3 Text Customization
ID
	Text
	Default
	WGT-6.3.1
	Input placeholder
	"Type a message..."
	WGT-6.3.2
	Connecting text
	"Connecting..."
	WGT-6.3.3
	Agent joined
	"You're now chatting with {name}"
	WGT-6.3.4
	Offline text
	"We're offline. Leave a message."
	Acceptance Criteria:
* [ ] All settings apply correctly
* [ ] Changes reflect immediately in preview
* [ ] Invalid values show error
________________


7. Integration
7.1 Embed Script
<script>
(function(w,d,s,o,f,js,fjs){
    w['SupportWidget']=o;
    w[o]=w[o]||function(){(w[o].q=w[o].q||[]).push(arguments)};
    js=d.createElement(s);fjs=d.getElementsByTagName(s)[0];
    js.id=o;js.src=f;js.async=1;
    fjs.parentNode.insertBefore(js,fjs);
})(window,document,'script','sw','https://widget.example.com/loader.js');


sw('init', { workspace_id: 'YOUR_WORKSPACE_ID' });
</script>


7.2 JavaScript API
Method
	Parameters
	Description
	sw('init', config)
	workspace_id, options
	Initialize widget
	sw('open')
	-
	Open chat window
	sw('close')
	-
	Close chat window
	sw('toggle')
	-
	Toggle open/close
	sw('identify', user)
	name, email, external_id, metadata
	Set customer info
	sw('reset')
	-
	Clear session, start new
	sw('sendMessage', text)
	message text
	Send message programmatically
	sw('on', event, callback)
	event name, function
	Subscribe to events
	sw('off', event)
	event name
	Unsubscribe from event
	7.3 Events
Event
	Payload
	Triggered When
	widget:opened
	-
	Chat window opened
	widget:closed
	-
	Chat window closed
	message:sent
	{message}
	Customer sends message
	message:received
	{message}
	New message from bot/agent
	conversation:started
	{conversation_id}
	New conversation created
	conversation:ended
	{conversation_id}
	Conversation resolved
	Acceptance Criteria:
* [ ] Script loads asynchronously
* [ ] All API methods work
* [ ] Events fire correctly
________________


8. Performance Requirements
Metric
	Target
	Script size
	<50KB gzipped
	Load time
	<1 second
	Time to interactive
	<2 seconds
	Message send latency
	<500ms
	Memory usage
	<10MB
	________________


9. Browser Support
Browser
	Minimum Version
	Chrome
	70+
	Firefox
	65+
	Safari
	12+
	Edge
	79+
	Mobile Safari
	iOS 12+
	Chrome Android
	70+
	________________


10. Security Requirements
ID
	Requirement
	SEC-1
	All communication over HTTPS/WSS
	SEC-2
	XSS prevention (sanitize all inputs)
	SEC-3
	CSRF protection on API calls
	SEC-4
	Rate limiting (10 messages/minute)
	SEC-5
	Domain whitelist for widget embedding
	SEC-6
	No sensitive data in localStorage
	________________


11. Error Handling
Scenario
	User Message
	Action
	Connection failed
	"Unable to connect. Retrying..."
	Auto-retry
	Message send failed
	"Message not sent. Tap to retry."
	Show retry
	Session expired
	"Session expired. Starting new chat."
	Reset session
	Server error
	"Something went wrong. Please try again."
	Log error
	Rate limited
	"Please wait before sending more messages."
	Disable input 60s
	________________


12. Accessibility (A11y)
ID
	Requirement
	A11Y-1
	Keyboard navigation (Tab, Enter, Escape)
	A11Y-2
	ARIA labels on all interactive elements
	A11Y-3
	Focus management (trap focus in modal)
	A11Y-4
	Screen reader announcements for new messages
	A11Y-5
	Color contrast ratio 4.5:1 minimum
	A11Y-6
	Resizable text support
	—-----------—-----------—-----------—-----------—-----------—-----------—-----------—-----------—-----------—-----------


  
  
  



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Chat Widget - Module 1 Screens</title>
    <style>
        *{margin:0;padding:0;box-sizing:border-box}
        body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f0f0f0;min-height:100vh;padding:20px}
        
        /* Page Layout */
        .page-header{text-align:center;margin-bottom:30px}
        .page-header h1{font-size:24px;color:#1a1a2e;margin-bottom:8px}
        .page-header p{color:#666;font-size:14px}
        
        .screens-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(400px,1fr));gap:30px;max-width:1400px;margin:0 auto}
        
        .screen-card{background:#fff;border-radius:12px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,0.1)}
        .screen-card h3{font-size:14px;color:#666;margin-bottom:12px;padding-bottom:8px;border-bottom:1px solid #eee}
        
        /* Website Mockup */
        .website-mock{background:#f8f9fa;border-radius:8px;height:500px;position:relative;overflow:hidden}
        .browser-bar{background:#e5e7eb;padding:8px 12px;display:flex;align-items:center;gap:8px}
        .browser-dots{display:flex;gap:4px}
        .browser-dots span{width:10px;height:10px;border-radius:50%;background:#ccc}
        .browser-dots span:first-child{background:#ff5f57}
        .browser-dots span:nth-child(2){background:#ffbd2e}
        .browser-dots span:last-child{background:#28ca42}
        .browser-url{flex:1;background:#fff;border-radius:4px;padding:4px 10px;font-size:11px;color:#666;margin-left:10px}
        .website-content{padding:30px;color:#999;font-size:13px}
        .website-content h2{color:#333;margin-bottom:10px}
        
        /* Chat Widget Button */
        .widget-button{position:absolute;bottom:20px;right:20px;width:60px;height:60px;background:linear-gradient(135deg,#3b82f6,#8b5cf6);border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 4px 12px rgba(59,130,246,0.4);transition:transform 0.2s}
        .widget-button:hover{transform:scale(1.05)}
        .widget-button span{font-size:28px}
        
        /* Chat Window */
        .chat-window{position:absolute;bottom:20px;right:20px;width:360px;height:450px;background:#fff;border-radius:16px;box-shadow:0 8px 32px rgba(0,0,0,0.15);display:flex;flex-direction:column;overflow:hidden}
        
        .chat-header{background:linear-gradient(135deg,#3b82f6,#8b5cf6);color:#fff;padding:16px 20px;display:flex;justify-content:space-between;align-items:center}
        .chat-header-info{display:flex;align-items:center;gap:12px}
        .chat-header-avatar{width:40px;height:40px;background:rgba(255,255,255,0.2);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:20px}
        .chat-header h4{font-size:16px;margin-bottom:2px}
        .chat-header p{font-size:12px;opacity:0.9}
        .chat-close{background:none;border:none;color:#fff;font-size:24px;cursor:pointer;opacity:0.8}
        .chat-close:hover{opacity:1}
        
        .chat-messages{flex:1;padding:16px;overflow-y:auto;background:#f8f9fa}
        
        .message{margin-bottom:12px;display:flex;gap:8px}
        .message.bot{justify-content:flex-start}
        .message.user{justify-content:flex-end}
        .message .avatar{width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#3b82f6,#8b5cf6);display:flex;align-items:center;justify-content:center;font-size:12px;color:#fff;flex-shrink:0}
        .message .bubble{max-width:240px;padding:10px 14px;border-radius:12px;font-size:14px;line-height:1.4}
        .message.bot .bubble{background:#fff;border:1px solid #e5e7eb;border-radius:12px 12px 12px 4px}
        .message.user .bubble{background:linear-gradient(135deg,#3b82f6,#8b5cf6);color:#fff;border-radius:12px 12px 4px 12px}
        .message .time{font-size:10px;color:#999;margin-top:4px}
        
        .typing-indicator{display:flex;align-items:center;gap:8px;padding:10px 14px;background:#fff;border:1px solid #e5e7eb;border-radius:12px;width:fit-content}
        .typing-dots{display:flex;gap:4px}
        .typing-dots span{width:6px;height:6px;background:#999;border-radius:50%;animation:typing 1.4s infinite}
        .typing-dots span:nth-child(2){animation-delay:0.2s}
        .typing-dots span:nth-child(3){animation-delay:0.4s}
        @keyframes typing{0%,100%{opacity:0.3}50%{opacity:1}}
        
        .chat-input{padding:12px 16px;background:#fff;border-top:1px solid #e5e7eb;display:flex;gap:10px;align-items:center}
        .chat-input input{flex:1;border:1px solid #e5e7eb;border-radius:20px;padding:10px 16px;font-size:14px;outline:none}
        .chat-input input:focus{border-color:#3b82f6}
        .chat-input button{width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#3b82f6,#8b5cf6);border:none;color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:18px}
        
        /* Welcome Screen */
        .welcome-screen{padding:20px;text-align:center}
        .welcome-screen .avatar-large{width:60px;height:60px;background:linear-gradient(135deg,#3b82f6,#8b5cf6);border-radius:50%;margin:0 auto 16px;display:flex;align-items:center;justify-content:center;font-size:28px}
        .welcome-screen h3{font-size:18px;margin-bottom:8px;color:#1a1a2e}
        .welcome-screen p{font-size:14px;color:#666;margin-bottom:20px}
        .welcome-screen .start-btn{background:linear-gradient(135deg,#3b82f6,#8b5cf6);color:#fff;border:none;padding:12px 32px;border-radius:24px;font-size:14px;cursor:pointer}
        
        /* Quick Replies */
        .quick-replies{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}
        .quick-reply{background:#fff;border:1px solid #3b82f6;color:#3b82f6;padding:6px 14px;border-radius:16px;font-size:13px;cursor:pointer}
        .quick-reply:hover{background:#eff6ff}
        
        /* Status Indicators */
        .online-status{display:flex;align-items:center;gap:6px;font-size:12px}
        .online-dot{width:8px;height:8px;background:#22c55e;border-radius:50%}
        
        /* Mobile View */
        .mobile-frame{width:280px;height:500px;background:#1a1a2e;border-radius:30px;padding:8px;margin:0 auto}
        .mobile-screen{background:#f8f9fa;border-radius:24px;height:100%;overflow:hidden;position:relative}
        .mobile-notch{width:120px;height:24px;background:#1a1a2e;border-radius:0 0 12px 12px;margin:0 auto}
        
        /* Config Panel Preview */
        .config-preview{background:#fff;border-radius:8px;padding:16px}
        .config-row{display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-bottom:1px solid #f0f0f0}
        .config-row:last-child{border:none}
        .config-label{font-size:13px;color:#666}
        .color-swatch{width:24px;height:24px;border-radius:4px;border:2px solid #e5e7eb}
        .config-input{padding:6px 10px;border:1px solid #e5e7eb;border-radius:4px;font-size:13px;width:140px}
    </style>
</head>
<body>
    <div class="page-header">
        <h1>Module 1: Web Chat Widget Screens</h1>
        <p>WGT-1.1 to WGT-1.3 Requirements Coverage</p>
    </div>


    <div class="screens-grid">
        <!-- Screen 1: Widget Button (Collapsed) -->
        <div class="screen-card">
            <h3>1.1 Widget Button - Collapsed State (WGT-1.1.1)</h3>
            <div class="website-mock">
                <div class="browser-bar">
                    <div class="browser-dots"><span></span><span></span><span></span></div>
                    <div class="browser-url">https://example.com/products</div>
                </div>
                <div class="website-content">
                    <h2>Example Website</h2>
                    <p>This is a sample website page where the chat widget would appear. The floating button is positioned at the bottom-right corner by default.</p>
                </div>
                <div class="widget-button">
                    <span>💬</span>
                </div>
            </div>
        </div>


        <!-- Screen 2: Chat Window Open (WGT-1.1.2 - 1.1.6) -->
        <div class="screen-card">
            <h3>1.2 Chat Window - Open State (WGT-1.1.2 to WGT-1.1.6)</h3>
            <div class="website-mock">
                <div class="browser-bar">
                    <div class="browser-dots"><span></span><span></span><span></span></div>
                    <div class="browser-url">https://example.com/products</div>
                </div>
                <div class="website-content">
                    <h2>Example Website</h2>
                    <p>Website content behind the chat window.</p>
                </div>
                <div class="chat-window">
                    <div class="chat-header">
                        <div class="chat-header-info">
                            <div class="chat-header-avatar">🤖</div>
                            <div>
                                <h4>Support Assistant</h4>
                                <div class="online-status"><span class="online-dot"></span>Online</div>
                            </div>
                        </div>
                        <button class="chat-close">×</button>
                    </div>
                    <div class="chat-messages">
                        <div class="welcome-screen">
                            <div class="avatar-large">👋</div>
                            <h3>Hi there!</h3>
                            <p>How can we help you today?</p>
                            <button class="start-btn">Start a conversation</button>
                        </div>
                    </div>
                    <div class="chat-input">
                        <input type="text" placeholder="Type a message...">
                        <button>➤</button>
                    </div>
                </div>
            </div>
        </div>


        <!-- Screen 3: Active Conversation (WGT-1.2.1 - 1.2.5) -->
        <div class="screen-card">
            <h3>1.3 Active Conversation (WGT-1.2.1 to WGT-1.2.5)</h3>
            <div class="website-mock">
                <div class="browser-bar">
                    <div class="browser-dots"><span></span><span></span><span></span></div>
                    <div class="browser-url">https://example.com/products</div>
                </div>
                <div class="chat-window" style="bottom:10px;right:10px">
                    <div class="chat-header">
                        <div class="chat-header-info">
                            <div class="chat-header-avatar">🤖</div>
                            <div>
                                <h4>Support Assistant</h4>
                                <div class="online-status"><span class="online-dot"></span>Online</div>
                            </div>
                        </div>
                        <button class="chat-close">×</button>
                    </div>
                    <div class="chat-messages">
                        <div class="message bot">
                            <div class="avatar">🤖</div>
                            <div>
                                <div class="bubble">Hello! How can I help you today?</div>
                                <div class="time">2:34 PM</div>
                            </div>
                        </div>
                        <div class="message user">
                            <div>
                                <div class="bubble">I want to check my order status</div>
                                <div class="time" style="text-align:right">2:34 PM</div>
                            </div>
                        </div>
                        <div class="message bot">
                            <div class="avatar">🤖</div>
                            <div>
                                <div class="bubble">I'd be happy to help! Please provide your order number.</div>
                                <div class="time">2:34 PM</div>
                            </div>
                        </div>
                        <div class="message user">
                            <div>
                                <div class="bubble">ORD-78923</div>
                                <div class="time" style="text-align:right">2:35 PM</div>
                            </div>
                        </div>
                        <div class="message bot">
                            <div class="avatar">🤖</div>
                            <div>
                                <div class="bubble">Your order #78923 is out for delivery and should arrive today by 6 PM. 📦</div>
                                <div class="time">2:35 PM</div>
                            </div>
                        </div>
                    </div>
                    <div class="chat-input">
                        <input type="text" placeholder="Type a message...">
                        <button>➤</button>
                    </div>
                </div>
            </div>
        </div>


        <!-- Screen 4: Typing Indicator (WGT-1.2.6) -->
        <div class="screen-card">
            <h3>1.4 Typing Indicator (WGT-1.2.6)</h3>
            <div class="website-mock">
                <div class="browser-bar">
                    <div class="browser-dots"><span></span><span></span><span></span></div>
                    <div class="browser-url">https://example.com/products</div>
                </div>
                <div class="chat-window" style="bottom:10px;right:10px">
                    <div class="chat-header">
                        <div class="chat-header-info">
                            <div class="chat-header-avatar">🤖</div>
                            <div>
                                <h4>Support Assistant</h4>
                                <div class="online-status"><span class="online-dot"></span>Online</div>
                            </div>
                        </div>
                        <button class="chat-close">×</button>
                    </div>
                    <div class="chat-messages">
                        <div class="message bot">
                            <div class="avatar">🤖</div>
                            <div>
                                <div class="bubble">Hello! How can I help you today?</div>
                                <div class="time">2:34 PM</div>
                            </div>
                        </div>
                        <div class="message user">
                            <div>
                                <div class="bubble">I need a refund for my order</div>
                                <div class="time" style="text-align:right">2:35 PM</div>
                            </div>
                        </div>
                        <div class="message bot">
                            <div class="avatar">🤖</div>
                            <div>
                                <div class="typing-indicator">
                                    <div class="typing-dots">
                                        <span></span><span></span><span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="chat-input">
                        <input type="text" placeholder="Type a message...">
                        <button>➤</button>
                    </div>
                </div>
            </div>
        </div>


        <!-- Screen 5: Quick Replies -->
        <div class="screen-card">
            <h3>1.5 Quick Reply Suggestions</h3>
            <div class="website-mock">
                <div class="browser-bar">
                    <div class="browser-dots"><span></span><span></span><span></span></div>
                    <div class="browser-url">https://example.com/products</div>
                </div>
                <div class="chat-window" style="bottom:10px;right:10px">
                    <div class="chat-header">
                        <div class="chat-header-info">
                            <div class="chat-header-avatar">🤖</div>
                            <div>
                                <h4>Support Assistant</h4>
                                <div class="online-status"><span class="online-dot"></span>Online</div>
                            </div>
                        </div>
                        <button class="chat-close">×</button>
                    </div>
                    <div class="chat-messages">
                        <div class="message bot">
                            <div class="avatar">🤖</div>
                            <div>
                                <div class="bubble">Hi there! 👋 What can I help you with?</div>
                                <div class="quick-replies">
                                    <span class="quick-reply">Track my order</span>
                                    <span class="quick-reply">Request refund</span>
                                    <span class="quick-reply">Talk to human</span>
                                </div>
                                <div class="time">2:34 PM</div>
                            </div>
                        </div>
                    </div>
                    <div class="chat-input">
                        <input type="text" placeholder="Type a message...">
                        <button>➤</button>
                    </div>
                </div>
            </div>
        </div>


        <!-- Screen 6: Human Handoff -->
        <div class="screen-card">
            <h3>1.6 Human Agent Connected</h3>
            <div class="website-mock">
                <div class="browser-bar">
                    <div class="browser-dots"><span></span><span></span><span></span></div>
                    <div class="browser-url">https://example.com/products</div>
                </div>
                <div class="chat-window" style="bottom:10px;right:10px">
                    <div class="chat-header">
                        <div class="chat-header-info">
                            <div class="chat-header-avatar">👤</div>
                            <div>
                                <h4>Sarah from Support</h4>
                                <div class="online-status"><span class="online-dot"></span>Online</div>
                            </div>
                        </div>
                        <button class="chat-close">×</button>
                    </div>
                    <div class="chat-messages">
                        <div class="message bot">
                            <div class="avatar">🤖</div>
                            <div>
                                <div class="bubble">Connecting you with a support agent...</div>
                                <div class="time">2:36 PM</div>
                            </div>
                        </div>
                        <div style="text-align:center;padding:10px;font-size:12px;color:#666">
                            — Sarah joined the chat —
                        </div>
                        <div class="message bot">
                            <div class="avatar" style="background:linear-gradient(135deg,#10b981,#06b6d4)">S</div>
                            <div>
                                <div class="bubble">Hi! I'm Sarah. I see you need help with a refund. Let me look into this for you right away.</div>
                                <div class="time">2:36 PM</div>
                            </div>
                        </div>
                    </div>
                    <div class="chat-input">
                        <input type="text" placeholder="Type a message...">
                        <button>➤</button>
                    </div>
                </div>
            </div>
        </div>


        <!-- Screen 7: Mobile View -->
        <div class="screen-card">
            <h3>1.7 Mobile Responsive View</h3>
            <div class="mobile-frame">
                <div class="mobile-screen">
                    <div class="mobile-notch"></div>
                    <div style="height:calc(100% - 24px);display:flex;flex-direction:column">
                        <div class="chat-header" style="border-radius:0">
                            <div class="chat-header-info">
                                <div class="chat-header-avatar" style="width:32px;height:32px;font-size:16px">🤖</div>
                                <div>
                                    <h4 style="font-size:14px">Support</h4>
                                    <div class="online-status" style="font-size:10px"><span class="online-dot" style="width:6px;height:6px"></span>Online</div>
                                </div>
                            </div>
                            <button class="chat-close" style="font-size:20px">×</button>
                        </div>
                        <div class="chat-messages" style="flex:1;padding:12px">
                            <div class="message bot">
                                <div class="avatar" style="width:24px;height:24px;font-size:10px">🤖</div>
                                <div>
                                    <div class="bubble" style="font-size:13px;padding:8px 12px">How can I help?</div>
                                </div>
                            </div>
                            <div class="message user">
                                <div>
                                    <div class="bubble" style="font-size:13px;padding:8px 12px">Order status</div>
                                </div>
                            </div>
                        </div>
                        <div class="chat-input" style="padding:8px 12px">
                            <input type="text" placeholder="Message..." style="padding:8px 12px;font-size:13px">
                            <button style="width:32px;height:32px;font-size:14px">➤</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- Screen 8: Widget Configuration -->
        <div class="screen-card">
            <h3>1.8 Widget Configuration (WGT-1.3.1 to WGT-1.3.4)</h3>
            <div class="config-preview">
                <h4 style="font-size:16px;margin-bottom:16px">Widget Settings</h4>
                <div class="config-row">
                    <span class="config-label">Primary Color</span>
                    <div style="display:flex;align-items:center;gap:8px">
                        <div class="color-swatch" style="background:linear-gradient(135deg,#3b82f6,#8b5cf6)"></div>
                        <input class="config-input" value="#3b82f6" style="width:100px">
                    </div>
                </div>
                <div class="config-row">
                    <span class="config-label">Company Logo</span>
                    <button style="padding:6px 12px;background:#f0f0f0;border:1px solid #ddd;border-radius:4px;font-size:12px;cursor:pointer">Upload Logo</button>
                </div>
                <div class="config-row">
                    <span class="config-label">Welcome Message</span>
                    <input class="config-input" value="Hi! How can we help?">
                </div>
                <div class="config-row">
                    <span class="config-label">Widget Position</span>
                    <select class="config-input" style="width:120px">
                        <option>Bottom Right</option>
                        <option>Bottom Left</option>
                    </select>
                </div>
                <div class="config-row">
                    <span class="config-label">Auto-open Delay</span>
                    <select class="config-input" style="width:120px">
                        <option>Disabled</option>
                        <option>5 seconds</option>
                        <option>10 seconds</option>
                    </select>
                </div>
            </div>
            <div style="margin-top:16px;padding:16px;background:#f8f9fa;border-radius:8px">
                <h5 style="font-size:13px;margin-bottom:8px">Embed Code</h5>
                <code style="font-size:11px;color:#666;word-break:break-all">&lt;script src="https://widget.example.com/loader.js" data-id="YOUR_ID"&gt;&lt;/script&gt;</code>
            </div>
        </div>
    </div>
</body>
</html>





# Module 2: AI Engine

Module 2: AI Engine# Module 2: AI Engine - Detailed Functional Requirements

Module 2: AI Engine - Detailed Functional Requirements


  

Document Info
Module: AI Engine | Version: 1.0 | Status: Approved
________________


1. Intent Recognition
1.1 Intent Matching
ID
	Requirement
	Details
	AI-1.1.1
	Message analysis
	System analyzes each incoming customer message
	AI-1.1.2
	Intent matching
	System compares message against all active intents
	AI-1.1.3
	Confidence score
	System returns confidence score 0-100% for each intent
	AI-1.1.4
	Top intent
	System selects highest confidence intent
	AI-1.1.5
	Threshold check
	If confidence ≥70%, process as matched
	AI-1.1.6
	Below threshold
	If confidence <70%, trigger fallback/escalation
	AI-1.1.7
	Multiple matches
	Handle cases where multiple intents score similarly
	AI-1.1.8
	Processing time
	Intent recognition completes in <500ms
	Acceptance Criteria:
* [ ] System correctly identifies intent for 85%+ of test messages
* [ ] Confidence scores are consistent for similar messages
* [ ] Processing completes within time limit
________________


1.2 Training Phrases
ID
	Requirement
	Details
	AI-1.2.1
	Phrase storage
	Each intent has list of training phrases
	AI-1.2.2
	Minimum phrases
	Minimum 5 phrases per intent (warning if less)
	AI-1.2.3
	Phrase variations
	Support different phrasings of same intent
	AI-1.2.4
	Entity annotation
	Phrases can contain entity placeholders
	AI-1.2.5
	Case insensitive
	Matching is case-insensitive
	AI-1.2.6
	Typo tolerance
	Basic tolerance for common typos
	AI-1.2.7
	Add phrase
	Admin can add new training phrase
	AI-1.2.8
	Delete phrase
	Admin can delete training phrase
	AI-1.2.9
	Duplicate check
	Warn if phrase already exists
	AI-1.2.10
	Bulk import
	Import phrases from CSV
	Phrase Format Examples:
"Where is my order?"
"Check order status for @order_id"
"I want to track @order_id"
"What's the status of my order @order_id?"


Acceptance Criteria:
* [ ] Phrases save correctly
* [ ] Entity annotations parse correctly
* [ ] Duplicate warning displays
________________


1.3 Context Handling
ID
	Requirement
	Details
	AI-1.3.1
	Context window
	Consider last 5 messages for context
	AI-1.3.2
	Session context
	Maintain context within conversation session
	AI-1.3.3
	Entity memory
	Remember extracted entities in session
	AI-1.3.4
	Follow-up detection
	Detect follow-up questions ("What about...", "And...")
	AI-1.3.5
	Context reset
	Reset context on new conversation
	AI-1.3.6
	Pronoun resolution
	Resolve "it", "that", "this" from context
	Context Example:
Customer: "Where is my order ORD-12345?"
AI: [extracts order_id, stores in context]
Customer: "When will it arrive?"
AI: [uses stored order_id from context]


Acceptance Criteria:
* [ ] Follow-up questions answered correctly
* [ ] Entities persist in session
* [ ] Context clears on new conversation
________________


2. Entity Extraction
2.1 Built-in Entities
Entity
	Type
	Pattern/Description
	@email
	Built-in
	Standard email format
	@phone
	Built-in
	Phone number formats
	@date
	Built-in
	Date expressions (today, tomorrow, Jan 15)
	@time
	Built-in
	Time expressions (3pm, 15:00)
	@number
	Built-in
	Numeric values
	@currency
	Built-in
	Money amounts ($50, 50 USD)
	@person_name
	Built-in
	Person name detection
	@url
	Built-in
	URL/link detection
	2.2 Custom Entities
ID
	Requirement
	Details
	AI-2.2.1
	Create entity
	Admin creates custom entity
	AI-2.2.2
	Entity name
	Unique name, alphanumeric + underscore
	AI-2.2.3
	Regex type
	Define pattern using regex
	AI-2.2.4
	List type
	Define list of allowed values
	AI-2.2.5
	Synonyms
	Support synonyms for list values
	AI-2.2.6
	Edit entity
	Admin edits entity definition
	AI-2.2.7
	Delete entity
	Admin deletes entity (with usage check)
	AI-2.2.8
	Test entity
	Test entity extraction inline
	Custom Entity Examples:
Entity
	Type
	Definition
	@order_id
	Regex
	ORD-[0-9]{5}
	@product_sku
	Regex
	SKU-[A-Z]{2}[0-9]{4}
	@plan_name
	List
	Basic, Pro, Enterprise
	@department
	List
	Sales, Support, Billing
	2.3 Extraction Process
ID
	Requirement
	Details
	AI-2.3.1
	Auto-extract
	Extract entities from message automatically
	AI-2.3.2
	Multiple entities
	Extract multiple entities from single message
	AI-2.3.3
	Entity validation
	Validate extracted value against pattern
	AI-2.3.4
	Extraction confidence
	Return confidence for each extraction
	AI-2.3.5
	Missing required
	Prompt user if required entity missing
	AI-2.3.6
	Entity storage
	Store extracted entities with message
	Extraction Response:
{
  "entities": {
    "order_id": {
      "value": "ORD-78923",
      "confidence": 0.98,
      "start": 24,
      "end": 33
    },
    "email": {
      "value": "john@email.com",
      "confidence": 0.95,
      "start": 45,
      "end": 59
    }
  }
}


Acceptance Criteria:
* [ ] Built-in entities extract correctly
* [ ] Custom entities work as defined
* [ ] Multiple entities extracted from one message
________________


3. Response Generation
3.1 Response Templates
ID
	Requirement
	Details
	AI-3.1.1
	Template storage
	Each intent has response templates
	AI-3.1.2
	Multiple templates
	Support multiple templates per intent
	AI-3.1.3
	Random selection
	Randomly select from templates
	AI-3.1.4
	Template variables
	Support variable placeholders
	AI-3.1.5
	Conditional text
	Support conditional blocks
	AI-3.1.6
	Add template
	Admin adds response template
	AI-3.1.7
	Edit template
	Admin edits template
	AI-3.1.8
	Delete template
	Admin deletes template
	AI-3.1.9
	Preview
	Preview rendered template
	3.2 Variable System
Variable
	Source
	Example
	{{customer.name}}
	Customer record
	"John"
	{{customer.email}}
	Customer record
	"john@email.com"
	{{order.id}}
	Extracted entity
	"ORD-78923"
	{{order.status}}
	API lookup
	"Shipped"
	{{order.delivery_date}}
	API lookup
	"Jan 20, 2025"
	{{agent.name}}
	System
	"Sarah"
	{{company.name}}
	Config
	"Acme Inc"
	3.3 Response Rules
ID
	Requirement
	Details
	AI-3.3.1
	Variable substitution
	Replace variables with actual values
	AI-3.3.2
	Missing variable
	Use fallback or omit if variable unavailable
	AI-3.3.3
	Max length
	Response max 1000 characters
	AI-3.3.4
	Formatting
	Support basic formatting (bold, links)
	AI-3.3.5
	Emoji support
	Allow emoji in templates
	AI-3.3.6
	Response time
	Generate response in <1 second
	Template Example:
Hi {{customer.name|there}}! 👋


Your order {{order.id}} is currently {{order.status}}.


{{#if order.tracking_number}}
Track it here: {{order.tracking_url}}
{{/if}}


Anything else I can help with?


Acceptance Criteria:
* [ ] Variables substitute correctly
* [ ] Missing variables handled gracefully
* [ ] Conditional blocks work
________________


4. Confidence & Fallback
4.1 Confidence Thresholds
Confidence
	Action
	Description
	90-100%
	High confidence
	Respond immediately
	70-89%
	Medium confidence
	Respond with confirmation
	50-69%
	Low confidence
	Ask clarifying question
	0-49%
	No confidence
	Trigger fallback
	4.2 Fallback Handling
ID
	Requirement
	Details
	AI-4.2.1
	Fallback intent
	Special intent for unmatched messages
	AI-4.2.2
	Clarification
	Ask clarifying question first
	AI-4.2.3
	Retry limit
	Max 2 clarification attempts
	AI-4.2.4
	Escalation trigger
	Escalate after retry limit
	AI-4.2.5
	Negative sentiment
	Escalate on detected frustration
	AI-4.2.6
	Explicit request
	Escalate when user asks for human
	AI-4.2.7
	Fallback response
	Configurable fallback message
	Fallback Flow:
1. Message received → No intent matched (confidence <50%)
2. Send: "I'm not sure I understand. Could you rephrase?"
3. Customer rephrases → Still no match
4. Send: "Let me connect you with a team member."
5. Trigger human handoff


4.3 Escalation Triggers
Trigger
	Condition
	Low confidence
	Confidence <50% twice
	User request
	"human", "agent", "person", "representative"
	Frustration
	Negative sentiment detected
	Complex query
	Multiple intents detected
	Repeated fallback
	3 consecutive fallbacks
	Acceptance Criteria:
* [ ] Thresholds work correctly
* [ ] Fallback messages display
* [ ] Escalation triggers fire appropriately
________________


5. Knowledge Base Integration
5.1 Article Search
ID
	Requirement
	Details
	AI-5.1.1
	Query generation
	Generate search query from message
	AI-5.1.2
	Semantic search
	Search by meaning, not just keywords
	AI-5.1.3
	Top results
	Return top 3 matching articles
	AI-5.1.4
	Match score
	Calculate relevance score 0-100%
	AI-5.1.5
	Threshold
	Only use articles with >60% match
	AI-5.1.6
	Published only
	Search only published articles
	5.2 Article Usage
ID
	Requirement
	Details
	AI-5.2.1
	Content extraction
	Extract relevant section from article
	AI-5.2.2
	Response enhancement
	Use article content to enhance response
	AI-5.2.3
	Article link
	Option to include article link
	AI-5.2.4
	Citation
	Track which article was used
	AI-5.2.5
	Feedback loop
	Track if article resolved query
	KB-Enhanced Response Example:
Customer: "How do I get a refund?"


AI Response (enhanced with KB):
"To request a refund:
1. Go to Order History
2. Select the order
3. Click 'Request Refund'


Refunds process in 5-7 business days.


📄 Full details: [Refund Policy](link)"


Acceptance Criteria:
* [ ] Relevant articles found
* [ ] Content enhances response
* [ ] Links work correctly
________________


6. Intent Management (Admin)
6.1 Intent CRUD
ID
	Requirement
	Details
	AI-6.1.1
	List intents
	View all intents with status
	AI-6.1.2
	Search intents
	Search by name
	AI-6.1.3
	Filter intents
	Filter by active/inactive
	AI-6.1.4
	Create intent
	Create new intent
	AI-6.1.5
	Edit intent
	Edit intent details
	AI-6.1.6
	Delete intent
	Delete intent (with confirmation)
	AI-6.1.7
	Enable/disable
	Toggle intent active status
	AI-6.1.8
	Duplicate
	Duplicate existing intent
	6.2 Intent Fields
Field
	Type
	Required
	Validation
	name
	String
	Yes
	Unique, lowercase, no spaces
	display_name
	String
	Yes
	Max 100 chars
	description
	Text
	No
	Max 500 chars
	is_active
	Boolean
	Yes
	Default: true
	training_phrases
	Array
	Yes
	Min 5 recommended
	responses
	Array
	Yes
	Min 1 required
	entities
	Array
	No
	Valid entity references
	6.3 Intent Analytics
ID
	Requirement
	Details
	AI-6.3.1
	Match count
	Show total matches for intent
	AI-6.3.2
	Accuracy rate
	Show accuracy percentage
	AI-6.3.3
	Trend
	Show match trend (up/down)
	AI-6.3.4
	Low performers
	Highlight intents with <80% accuracy
	AI-6.3.5
	Unmatched log
	Log messages that didn't match any intent
	Acceptance Criteria:
* [ ] CRUD operations work
* [ ] Validation enforced
* [ ] Analytics display correctly
________________


7. Default Intents
7.1 Pre-configured Intents
Intent
	Description
	Auto-Action
	greeting
	Hello, hi, good morning
	Welcome message
	goodbye
	Thanks, bye, that's all
	Closing message
	order_status
	Check order, track package
	Fetch order API
	refund_request
	Want refund, return item
	KB article + guide
	shipping_info
	Delivery time, tracking
	Shipping info
	account_help
	Login issues, password
	Account recovery
	pricing
	How much, plans, cost
	Pricing info
	contact_human
	Speak to agent
	Trigger handoff
	fallback
	(No match)
	Clarify or escalate
	7.2 Default Training Phrases
greeting:
* Hello
* Hi
* Hey
* Good morning
* Good afternoon
order_status:
* Where is my order?
* Check order status
* Track my order
* Order status for @order_id
* When will my order arrive?
refund_request:
* I want a refund
* How do I get my money back?
* Return this item
* Refund for order @order_id
* I'd like to return my purchase
contact_human:
* Talk to a human
* Speak to an agent
* I want a real person
* Connect me to support
* Human please
7.3 Default Responses
greeting:
Hi there! 👋 How can I help you today?


order_status (with order):
Your order {{order.id}} is {{order.status}}. 
Expected delivery: {{order.delivery_date}}.


order_status (without order):
I'd be happy to check your order status! 
Could you please provide your order number? 
It starts with "ORD-".


contact_human:
Of course! Let me connect you with a team member.
Please hold for a moment... 🙋


fallback:
I'm not sure I understood that. Could you try rephrasing?
Or type "agent" to speak with a team member.


________________


8. Test Console
8.1 Testing Interface
ID
	Requirement
	Details
	AI-8.1.1
	Test input
	Text input for test message
	AI-8.1.2
	Send test
	Button to send test message
	AI-8.1.3
	Show intent
	Display detected intent
	AI-8.1.4
	Show confidence
	Display confidence score
	AI-8.1.5
	Show all scores
	Display scores for all intents
	AI-8.1.6
	Show entities
	Display extracted entities
	AI-8.1.7
	Show response
	Display generated response
	AI-8.1.8
	Show KB matches
	Display matching articles
	AI-8.1.9
	JSON view
	Toggle raw JSON output
	8.2 Test Output Format
{
  "input": "Where is my order ORD-78923?",
  "intent": {
    "name": "order_status",
    "confidence": 0.94
  },
  "all_intents": [
    {"name": "order_status", "confidence": 0.94},
    {"name": "shipping_info", "confidence": 0.42},
    {"name": "refund_request", "confidence": 0.12}
  ],
  "entities": {
    "order_id": "ORD-78923"
  },
  "kb_matches": [
    {"title": "Track Your Order", "score": 0.87}
  ],
  "response": "Your order ORD-78923 is out for delivery...",
  "processing_time_ms": 245
}


Acceptance Criteria:
* [ ] Test input works
* [ ] All output fields display
* [ ] JSON toggle works
________________


9. AI Configuration Settings
9.1 Global Settings
Setting
	Type
	Default
	Description
	confidence_threshold
	Number
	70
	Min confidence to respond
	fallback_threshold
	Number
	50
	Below this, trigger fallback
	max_clarifications
	Number
	2
	Max clarifying questions
	context_messages
	Number
	5
	Messages to consider for context
	response_delay_ms
	Number
	500
	Artificial delay for natural feel
	kb_match_threshold
	Number
	60
	Min KB article match score
	9.2 Model Settings
Setting
	Type
	Default
	Description
	ai_provider
	Enum
	openai
	AI provider (openai/anthropic)
	model_name
	String
	gpt-4o-mini
	Model to use
	temperature
	Number
	0.3
	Response creativity (0-1)
	max_tokens
	Number
	500
	Max response length
	________________


10. Performance Requirements
Metric
	Target
	Intent recognition
	<500ms
	Entity extraction
	<200ms
	Response generation
	<1000ms
	Total processing
	<2000ms
	Accuracy rate
	>85%
	Uptime
	99.9%
	________________


11. Logging & Analytics
11.1 Message Logging
Field
	Description
	message_id
	Unique identifier
	conversation_id
	Parent conversation
	input_text
	Customer message
	detected_intent
	Matched intent
	confidence
	Confidence score
	entities
	Extracted entities
	response_text
	AI response
	processing_time
	Time to process
	timestamp
	When processed
	11.2 Analytics Metrics
Metric
	Description
	Total processed
	Messages processed by AI
	Automation rate
	% handled without human
	Avg confidence
	Average confidence score
	Fallback rate
	% triggered fallback
	Top intents
	Most common intents
	Low confidence
	Messages below threshold
	________________


12. Error Handling
Error
	Handling
	AI service timeout
	Retry once, then fallback message
	AI service error
	Log error, send fallback message
	Entity extraction fail
	Continue without entity
	KB search fail
	Respond without KB enhancement
	Invalid response
	Use default fallback response
	Fallback Message:
I'm having trouble processing your request. 
Let me connect you with a team member who can help.


________________


13. Security Requirements
ID
	Requirement
	SEC-1
	Sanitize all input before processing
	SEC-2
	No PII in logs (mask sensitive data)
	SEC-3
	Rate limit AI API calls
	SEC-4
	Validate all admin inputs
	SEC-5
	Audit log for intent changes
	SEC-6
	Encrypt API keys at rest






	—---------—---------—---------—--------—---------—---------—---------—--------—---------—---------—---------—--------


  
  

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Engine - Module 2 Screens</title>
    <style>
        *{margin:0;padding:0;box-sizing:border-box}
        body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f0f0f0;min-height:100vh;padding:20px}
        .page-header{text-align:center;margin-bottom:30px}
        .page-header h1{font-size:24px;color:#1a1a2e;margin-bottom:8px}
        .page-header p{color:#666;font-size:14px}
        .screens-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(500px,1fr));gap:30px;max-width:1400px;margin:0 auto}
        .screen-card{background:#fff;border-radius:12px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,0.1)}
        .screen-card h3{font-size:14px;color:#666;margin-bottom:12px;padding-bottom:8px;border-bottom:1px solid #eee}
        
        /* Admin Layout */
        .admin-layout{display:flex;height:420px;border-radius:8px;overflow:hidden;border:1px solid #e5e7eb}
        .admin-sidebar{width:200px;background:#1a1a2e;color:#fff;padding:16px 0}
        .admin-sidebar h4{padding:0 16px 12px;font-size:14px;border-bottom:1px solid #2a2a4e;margin-bottom:8px}
        .admin-nav-item{padding:10px 16px;font-size:13px;cursor:pointer}
        .admin-nav-item:hover{background:#2a2a4e}
        .admin-nav-item.active{background:#3b82f6}
        .admin-main{flex:1;background:#f8f9fa;overflow:auto}
        .admin-header{padding:16px 20px;background:#fff;border-bottom:1px solid #e5e7eb;display:flex;justify-content:space-between;align-items:center}
        .admin-header h2{font-size:18px}
        .admin-content{padding:20px}
        
        /* Buttons */
        .btn{padding:8px 16px;border-radius:6px;font-size:13px;cursor:pointer;border:none}
        .btn-primary{background:#3b82f6;color:#fff}
        .btn-secondary{background:#fff;border:1px solid #e5e7eb}
        .btn-sm{padding:5px 10px;font-size:12px}
        
        /* Intent List */
        .intent-list{display:flex;flex-direction:column;gap:8px}
        .intent-item{background:#fff;padding:14px 16px;border-radius:8px;display:flex;justify-content:space-between;align-items:center;border:1px solid #e5e7eb}
        .intent-item:hover{border-color:#3b82f6}
        .intent-name{font-weight:600;font-size:14px}
        .intent-meta{display:flex;gap:16px;font-size:12px;color:#666;margin-top:4px}
        .intent-status{padding:3px 8px;border-radius:4px;font-size:11px}
        .intent-status.active{background:#dcfce7;color:#166534}
        .intent-status.inactive{background:#fee2e2;color:#dc2626}
        
        /* Training Phrases */
        .phrase-list{display:flex;flex-direction:column;gap:6px}
        .phrase-item{background:#f8f9fa;padding:10px 14px;border-radius:6px;font-size:13px;display:flex;justify-content:space-between;align-items:center}
        .phrase-item .entity{background:#dbeafe;color:#1d4ed8;padding:2px 6px;border-radius:4px;font-size:12px}
        .phrase-item .delete{color:#999;cursor:pointer}
        .phrase-item .delete:hover{color:#dc2626}
        
        /* Response Templates */
        .response-box{background:#f8f9fa;border-radius:8px;padding:14px;margin-bottom:10px;font-size:13px;line-height:1.5}
        .response-box .var{background:#fef3c7;color:#92400e;padding:1px 4px;border-radius:3px}
        
        /* Confidence Meter */
        .confidence-meter{display:flex;align-items:center;gap:10px}
        .confidence-bar{flex:1;height:8px;background:#e5e7eb;border-radius:4px;overflow:hidden}
        .confidence-fill{height:100%;border-radius:4px}
        .confidence-fill.high{background:#10b981}
        .confidence-fill.medium{background:#f59e0b}
        .confidence-fill.low{background:#ef4444}
        .confidence-value{font-size:13px;font-weight:600;min-width:45px}
        
        /* Entity Tags */
        .entity-tag{display:inline-flex;align-items:center;gap:4px;background:#eff6ff;color:#3b82f6;padding:4px 10px;border-radius:4px;font-size:12px;margin-right:6px;margin-bottom:6px}
        
        /* Test Console */
        .test-console{background:#1a1a2e;border-radius:8px;padding:16px;color:#fff}
        .test-input{display:flex;gap:10px;margin-bottom:16px}
        .test-input input{flex:1;background:#2a2a4e;border:none;padding:10px 14px;border-radius:6px;color:#fff;font-size:13px}
        .test-input input::placeholder{color:#666}
        .test-output{background:#2a2a4e;border-radius:6px;padding:14px;font-family:monospace;font-size:12px;line-height:1.6}
        .test-output .key{color:#8b5cf6}
        .test-output .string{color:#10b981}
        .test-output .number{color:#f59e0b}
        
        /* Flow Diagram */
        .flow-diagram{background:#f8f9fa;border-radius:8px;padding:20px;position:relative;min-height:200px}
        .flow-node{position:absolute;background:#fff;border:2px solid #e5e7eb;border-radius:8px;padding:10px 16px;font-size:12px;text-align:center}
        .flow-node.start{border-color:#10b981;background:#ecfdf5}
        .flow-node.process{border-color:#3b82f6;background:#eff6ff}
        .flow-node.decision{border-color:#f59e0b;background:#fffbeb;transform:rotate(0deg)}
        .flow-node.end{border-color:#8b5cf6;background:#f5f3ff}
        .flow-arrow{position:absolute;color:#999;font-size:18px}
        
        /* Stats Cards */
        .stats-row{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:16px}
        .stat-card{background:#fff;padding:14px;border-radius:8px;border:1px solid #e5e7eb}
        .stat-card .label{font-size:11px;color:#666;margin-bottom:4px}
        .stat-card .value{font-size:20px;font-weight:700}
        
        /* Table */
        table{width:100%;border-collapse:collapse;font-size:13px}
        th{text-align:left;padding:10px 12px;background:#f8f9fa;font-weight:600;font-size:11px;text-transform:uppercase;color:#666}
        td{padding:10px 12px;border-bottom:1px solid #f0f0f0}
        
        /* Knowledge Match */
        .kb-match{background:#fff;border:1px solid #e5e7eb;border-radius:8px;padding:12px;margin-bottom:8px}
        .kb-match-title{font-weight:600;font-size:13px;margin-bottom:4px}
        .kb-match-excerpt{font-size:12px;color:#666;margin-bottom:6px}
        .kb-match-score{font-size:11px;color:#10b981}
    </style>
</head>
<body>
    <div class="page-header">
        <h1>Module 2: AI Engine Screens</h1>
        <p>AI-2.1 to AI-2.4 Requirements Coverage</p>
    </div>


    <div class="screens-grid">
        <!-- Screen 1: Intent List -->
        <div class="screen-card">
            <h3>2.1 Intent Management - List View (AI-2.1.1)</h3>
            <div class="admin-layout">
                <div class="admin-sidebar">
                    <h4>🤖 AI Config</h4>
                    <div class="admin-nav-item active">Intents</div>
                    <div class="admin-nav-item">Entities</div>
                    <div class="admin-nav-item">Responses</div>
                    <div class="admin-nav-item">Test Console</div>
                    <div class="admin-nav-item">Analytics</div>
                </div>
                <div class="admin-main">
                    <div class="admin-header">
                        <h2>Intents</h2>
                        <button class="btn btn-primary">+ New Intent</button>
                    </div>
                    <div class="admin-content">
                        <div class="stats-row">
                            <div class="stat-card"><div class="label">Total Intents</div><div class="value">12</div></div>
                            <div class="stat-card"><div class="label">Active</div><div class="value">10</div></div>
                            <div class="stat-card"><div class="label">Avg Accuracy</div><div class="value">91%</div></div>
                        </div>
                        <div class="intent-list">
                            <div class="intent-item">
                                <div>
                                    <div class="intent-name">order_status</div>
                                    <div class="intent-meta"><span>📝 15 phrases</span><span>✓ 94% accuracy</span></div>
                                </div>
                                <span class="intent-status active">Active</span>
                            </div>
                            <div class="intent-item">
                                <div>
                                    <div class="intent-name">refund_request</div>
                                    <div class="intent-meta"><span>📝 12 phrases</span><span>✓ 89% accuracy</span></div>
                                </div>
                                <span class="intent-status active">Active</span>
                            </div>
                            <div class="intent-item">
                                <div>
                                    <div class="intent-name">shipping_info</div>
                                    <div class="intent-meta"><span>📝 10 phrases</span><span>✓ 92% accuracy</span></div>
                                </div>
                                <span class="intent-status active">Active</span>
                            </div>
                            <div class="intent-item">
                                <div>
                                    <div class="intent-name">contact_human</div>
                                    <div class="intent-meta"><span>📝 8 phrases</span><span>✓ 97% accuracy</span></div>
                                </div>
                                <span class="intent-status active">Active</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- Screen 2: Intent Detail -->
        <div class="screen-card">
            <h3>2.2 Intent Detail - Training Phrases (AI-2.1.2)</h3>
            <div class="admin-layout">
                <div class="admin-sidebar">
                    <h4>🤖 AI Config</h4>
                    <div class="admin-nav-item active">Intents</div>
                    <div class="admin-nav-item">Entities</div>
                    <div class="admin-nav-item">Responses</div>
                    <div class="admin-nav-item">Test Console</div>
                </div>
                <div class="admin-main">
                    <div class="admin-header">
                        <h2>order_status</h2>
                        <div style="display:flex;gap:8px">
                            <button class="btn btn-secondary">Disable</button>
                            <button class="btn btn-primary">Save</button>
                        </div>
                    </div>
                    <div class="admin-content">
                        <div style="margin-bottom:16px">
                            <label style="font-size:12px;color:#666;display:block;margin-bottom:6px">Description</label>
                            <input type="text" value="Customer wants to check order status" style="width:100%;padding:8px 12px;border:1px solid #e5e7eb;border-radius:6px;font-size:13px">
                        </div>
                        <div style="margin-bottom:12px;display:flex;justify-content:space-between;align-items:center">
                            <h4 style="font-size:14px">Training Phrases (15)</h4>
                            <button class="btn btn-sm btn-secondary">+ Add Phrase</button>
                        </div>
                        <div class="phrase-list">
                            <div class="phrase-item">
                                <span>Where is my order?</span>
                                <span class="delete">×</span>
                            </div>
                            <div class="phrase-item">
                                <span>Check order status for <span class="entity">@order_id</span></span>
                                <span class="delete">×</span>
                            </div>
                            <div class="phrase-item">
                                <span>I want to track my order</span>
                                <span class="delete">×</span>
                            </div>
                            <div class="phrase-item">
                                <span>What's the status of order <span class="entity">@order_id</span></span>
                                <span class="delete">×</span>
                            </div>
                            <div class="phrase-item">
                                <span>When will my package arrive?</span>
                                <span class="delete">×</span>
                            </div>
                            <div class="phrase-item">
                                <span>Track order <span class="entity">@order_id</span></span>
                                <span class="delete">×</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- Screen 3: Entity Extraction -->
        <div class="screen-card">
            <h3>2.3 Entity Extraction (AI-2.1.4)</h3>
            <div class="admin-layout">
                <div class="admin-sidebar">
                    <h4>🤖 AI Config</h4>
                    <div class="admin-nav-item">Intents</div>
                    <div class="admin-nav-item active">Entities</div>
                    <div class="admin-nav-item">Responses</div>
                    <div class="admin-nav-item">Test Console</div>
                </div>
                <div class="admin-main">
                    <div class="admin-header">
                        <h2>Entities</h2>
                        <button class="btn btn-primary">+ New Entity</button>
                    </div>
                    <div class="admin-content">
                        <table>
                            <thead>
                                <tr>
                                    <th>Entity Name</th>
                                    <th>Type</th>
                                    <th>Pattern / Values</th>
                                    <th>Used In</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><span class="entity-tag">@order_id</span></td>
                                    <td>Regex</td>
                                    <td><code style="font-size:11px;background:#f0f0f0;padding:2px 6px;border-radius:3px">ORD-[0-9]{5}</code></td>
                                    <td>order_status, refund_request</td>
                                </tr>
                                <tr>
                                    <td><span class="entity-tag">@email</span></td>
                                    <td>Built-in</td>
                                    <td>Email address pattern</td>
                                    <td>account_help</td>
                                </tr>
                                <tr>
                                    <td><span class="entity-tag">@customer_name</span></td>
                                    <td>Built-in</td>
                                    <td>Person name detection</td>
                                    <td>greeting</td>
                                </tr>
                                <tr>
                                    <td><span class="entity-tag">@date</span></td>
                                    <td>Built-in</td>
                                    <td>Date/time expressions</td>
                                    <td>shipping_info</td>
                                </tr>
                                <tr>
                                    <td><span class="entity-tag">@product_name</span></td>
                                    <td>List</td>
                                    <td>Product catalog (245 items)</td>
                                    <td>product_inquiry</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>


        <!-- Screen 4: Response Configuration -->
        <div class="screen-card">
            <h3>2.4 Response Templates (AI-2.2.1 - AI-2.2.4)</h3>
            <div class="admin-layout">
                <div class="admin-sidebar">
                    <h4>🤖 AI Config</h4>
                    <div class="admin-nav-item">Intents</div>
                    <div class="admin-nav-item">Entities</div>
                    <div class="admin-nav-item active">Responses</div>
                    <div class="admin-nav-item">Test Console</div>
                </div>
                <div class="admin-main">
                    <div class="admin-header">
                        <h2>order_status Responses</h2>
                        <button class="btn btn-primary">+ Add Response</button>
                    </div>
                    <div class="admin-content">
                        <p style="font-size:12px;color:#666;margin-bottom:12px">Multiple responses will be randomly selected. Use variables for personalization.</p>
                        
                        <div class="response-box">
                            Hi <span class="var">{{customer.name}}</span>! Your order <span class="var">{{order.id}}</span> is currently <span class="var">{{order.status}}</span>. Expected delivery: <span class="var">{{order.delivery_date}}</span>.
                        </div>
                        
                        <div class="response-box">
                            I found your order <span class="var">{{order.id}}</span>! It's <span class="var">{{order.status}}</span> and should arrive by <span class="var">{{order.delivery_date}}</span>. 📦
                        </div>
                        
                        <div class="response-box">
                            Let me check that for you, <span class="var">{{customer.name}}</span>. Order <span class="var">{{order.id}}</span> status: <span class="var">{{order.status}}</span>.
                        </div>
                        
                        <div style="margin-top:16px">
                            <h4 style="font-size:13px;margin-bottom:8px">Available Variables</h4>
                            <div>
                                <span class="entity-tag">{{customer.name}}</span>
                                <span class="entity-tag">{{customer.email}}</span>
                                <span class="entity-tag">{{order.id}}</span>
                                <span class="entity-tag">{{order.status}}</span>
                                <span class="entity-tag">{{order.delivery_date}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- Screen 5: Confidence Scoring -->
        <div class="screen-card">
            <h3>2.5 Confidence Scoring (AI-2.1.3)</h3>
            <div class="admin-layout">
                <div class="admin-sidebar">
                    <h4>🤖 AI Config</h4>
                    <div class="admin-nav-item">Intents</div>
                    <div class="admin-nav-item">Entities</div>
                    <div class="admin-nav-item">Responses</div>
                    <div class="admin-nav-item active">Test Console</div>
                </div>
                <div class="admin-main">
                    <div class="admin-header">
                        <h2>Test Console</h2>
                    </div>
                    <div class="admin-content">
                        <div class="test-console">
                            <div class="test-input">
                                <input type="text" placeholder="Enter test message..." value="Where is my order ORD-78923?">
                                <button class="btn btn-primary">Test</button>
                            </div>
                            <div class="test-output">
                                <span class="key">"intent"</span>: <span class="string">"order_status"</span>,<br>
                                <span class="key">"confidence"</span>: <span class="number">0.94</span>,<br>
                                <span class="key">"entities"</span>: {<br>
                                &nbsp;&nbsp;<span class="key">"order_id"</span>: <span class="string">"ORD-78923"</span><br>
                                },<br>
                                <span class="key">"response"</span>: <span class="string">"Your order ORD-78923 is out for delivery..."</span>
                            </div>
                        </div>
                        <div style="margin-top:16px">
                            <h4 style="font-size:13px;margin-bottom:12px">Intent Scores</h4>
                            <div style="display:flex;flex-direction:column;gap:10px">
                                <div>
                                    <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px">
                                        <span>order_status</span>
                                        <span style="color:#10b981;font-weight:600">94%</span>
                                    </div>
                                    <div class="confidence-bar"><div class="confidence-fill high" style="width:94%"></div></div>
                                </div>
                                <div>
                                    <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px">
                                        <span>shipping_info</span>
                                        <span style="color:#666">42%</span>
                                    </div>
                                    <div class="confidence-bar"><div class="confidence-fill medium" style="width:42%"></div></div>
                                </div>
                                <div>
                                    <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px">
                                        <span>refund_request</span>
                                        <span style="color:#666">12%</span>
                                    </div>
                                    <div class="confidence-bar"><div class="confidence-fill low" style="width:12%"></div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- Screen 6: Knowledge Base Search -->
        <div class="screen-card">
            <h3>2.6 Knowledge Base Matching (AI-2.3.1 - AI-2.3.3)</h3>
            <div class="admin-layout">
                <div class="admin-sidebar">
                    <h4>🤖 AI Config</h4>
                    <div class="admin-nav-item">Intents</div>
                    <div class="admin-nav-item">Entities</div>
                    <div class="admin-nav-item">Responses</div>
                    <div class="admin-nav-item active">Test Console</div>
                </div>
                <div class="admin-main">
                    <div class="admin-header">
                        <h2>KB Search Results</h2>
                    </div>
                    <div class="admin-content">
                        <div style="background:#f8f9fa;padding:12px;border-radius:6px;margin-bottom:16px;font-size:13px">
                            <strong>Query:</strong> "How do I get a refund for my order?"
                        </div>
                        <h4 style="font-size:13px;margin-bottom:12px">Matching Articles (3)</h4>
                        <div class="kb-match">
                            <div class="kb-match-title">How to Request a Refund</div>
                            <div class="kb-match-excerpt">To request a refund, go to your order history, select the order, and click "Request Refund". Refunds are processed within 5-7 business days...</div>
                            <div class="kb-match-score">✓ 96% match</div>
                        </div>
                        <div class="kb-match">
                            <div class="kb-match-title">Refund Policy</div>
                            <div class="kb-match-excerpt">We offer full refunds within 30 days of purchase for unused items in original packaging. Some restrictions apply...</div>
                            <div class="kb-match-score">✓ 82% match</div>
                        </div>
                        <div class="kb-match">
                            <div class="kb-match-title">Return vs Refund</div>
                            <div class="kb-match-excerpt">Understanding the difference between returns and refunds. A return involves sending the item back, while a refund...</div>
                            <div class="kb-match-score">✓ 67% match</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- Screen 7: AI Processing Flow -->
        <div class="screen-card">
            <h3>2.7 AI Processing Flow (AI-2.1.5)</h3>
            <div style="padding:20px">
                <div class="flow-diagram" style="height:280px">
                    <div class="flow-node start" style="left:20px;top:110px">
                        <div style="font-size:10px;color:#666">START</div>
                        <div style="font-weight:600">Message Received</div>
                    </div>
                    <div class="flow-arrow" style="left:130px;top:120px">→</div>
                    
                    <div class="flow-node process" style="left:160px;top:110px">
                        <div style="font-size:10px;color:#666">PROCESS</div>
                        <div style="font-weight:600">Intent Recognition</div>
                    </div>
                    <div class="flow-arrow" style="left:280px;top:120px">→</div>
                    
                    <div class="flow-node decision" style="left:310px;top:100px;padding:14px">
                        <div style="font-size:10px;color:#666">CHECK</div>
                        <div style="font-weight:600">Confidence ≥70%?</div>
                    </div>
                    
                    <div class="flow-arrow" style="left:370px;top:70px;transform:rotate(-45deg)">↗</div>
                    <div class="flow-node process" style="left:400px;top:20px">
                        <div style="font-size:10px;color:#666">PROCESS</div>
                        <div style="font-weight:600">Generate Response</div>
                    </div>
                    <div class="flow-arrow" style="left:520px;top:35px">→</div>
                    <div class="flow-node end" style="left:550px;top:20px">
                        <div style="font-size:10px;color:#666">END</div>
                        <div style="font-weight:600">Send AI Reply</div>
                    </div>
                    
                    <div class="flow-arrow" style="left:370px;top:165px;transform:rotate(45deg)">↘</div>
                    <div class="flow-node process" style="left:400px;top:190px">
                        <div style="font-size:10px;color:#666">PROCESS</div>
                        <div style="font-weight:600">Escalate</div>
                    </div>
                    <div class="flow-arrow" style="left:500px;top:205px">→</div>
                    <div class="flow-node end" style="left:530px;top:190px">
                        <div style="font-size:10px;color:#666">END</div>
                        <div style="font-weight:600">Human Handoff</div>
                    </div>
                </div>
                <div style="margin-top:16px;display:flex;gap:20px;justify-content:center;font-size:12px">
                    <div style="display:flex;align-items:center;gap:6px"><span style="width:12px;height:12px;background:#ecfdf5;border:2px solid #10b981;border-radius:3px"></span> Start</div>
                    <div style="display:flex;align-items:center;gap:6px"><span style="width:12px;height:12px;background:#eff6ff;border:2px solid #3b82f6;border-radius:3px"></span> Process</div>
                    <div style="display:flex;align-items:center;gap:6px"><span style="width:12px;height:12px;background:#fffbeb;border:2px solid #f59e0b;border-radius:3px"></span> Decision</div>
                    <div style="display:flex;align-items:center;gap:6px"><span style="width:12px;height:12px;background:#f5f3ff;border:2px solid #8b5cf6;border-radius:3px"></span> End</div>
                </div>
            </div>
        </div>


        <!-- Screen 8: Default Intents -->
        <div class="screen-card">
            <h3>2.8 Default Intents (AI-2.4)</h3>
            <div style="padding:10px">
                <table>
                    <thead>
                        <tr>
                            <th>Intent</th>
                            <th>Sample Phrases</th>
                            <th>Action</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>greeting</strong></td>
                            <td>Hello, Hi, Good morning</td>
                            <td>Welcome message</td>
                            <td><span class="intent-status active">Active</span></td>
                        </tr>
                        <tr>
                            <td><strong>order_status</strong></td>
                            <td>Where is my order, Track order</td>
                            <td>Fetch order + respond</td>
                            <td><span class="intent-status active">Active</span></td>
                        </tr>
                        <tr>
                            <td><strong>refund_request</strong></td>
                            <td>I want a refund, Return item</td>
                            <td>KB article + guide</td>
                            <td><span class="intent-status active">Active</span></td>
                        </tr>
                        <tr>
                            <td><strong>shipping_info</strong></td>
                            <td>Delivery time, When arrive</td>
                            <td>Shipping details</td>
                            <td><span class="intent-status active">Active</span></td>
                        </tr>
                        <tr>
                            <td><strong>account_help</strong></td>
                            <td>Can't login, Reset password</td>
                            <td>Account recovery flow</td>
                            <td><span class="intent-status active">Active</span></td>
                        </tr>
                        <tr>
                            <td><strong>pricing</strong></td>
                            <td>How much, Pricing plans</td>
                            <td>Pricing info</td>
                            <td><span class="intent-status active">Active</span></td>
                        </tr>
                        <tr>
                            <td><strong>contact_human</strong></td>
                            <td>Talk to agent, Human please</td>
                            <td>Trigger handoff</td>
                            <td><span class="intent-status active">Active</span></td>
                        </tr>
                        <tr>
                            <td><strong>goodbye</strong></td>
                            <td>Thanks, Bye, That's all</td>
                            <td>Closing message</td>
                            <td><span class="intent-status active">Active</span></td>
                        </tr>
                        <tr>
                            <td><strong>fallback</strong></td>
                            <td>(No match)</td>
                            <td>Escalate to human</td>
                            <td><span class="intent-status active">Active</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</body>
</html>

# Module 3: Human Handoff

Module 3: Human Handoff# Module 3: Human Handoff - Detailed Functional Requirements

Module 3: Human Handoff - Detailed Functional Requirements
Document Info
Module: Human Handoff | Version: 1.0 | Status: Approved
________________




  
  
  

1. Escalation Triggers
1.1 Automatic Triggers
ID
	Trigger
	Condition
	Action
	HH-1.1.1
	Low confidence
	AI confidence <50%
	Immediate escalation
	HH-1.1.2
	Medium confidence
	AI confidence 50-69% twice
	Escalate after retry
	HH-1.1.3
	Consecutive fallbacks
	3 fallback responses in row
	Auto-escalate
	HH-1.1.4
	Negative sentiment
	Frustration/anger detected
	Auto-escalate
	HH-1.1.5
	Complex query
	Multiple intents detected
	Auto-escalate
	HH-1.1.6
	Sensitive topic
	Billing dispute, complaint
	Auto-escalate
	HH-1.1.7
	Long conversation
	>10 messages without resolution
	Offer escalation
	1.2 User-Initiated Triggers
ID
	Trigger
	Detection
	HH-1.2.1
	Direct request
	"human", "agent", "person", "representative"
	HH-1.2.2
	Dissatisfaction
	"not helpful", "doesn't work", "useless"
	HH-1.2.3
	Urgency
	"urgent", "emergency", "immediately"
	HH-1.2.4
	Explicit phrases
	"talk to someone", "real person", "speak to agent"
	Trigger Keywords:
human, agent, person, representative, operator, 
real person, talk to someone, speak to agent,
customer service, support team, manager,
not a bot, actual human, live agent


1.3 Trigger Configuration
ID
	Requirement
	Details
	HH-1.3.1
	Enable/disable triggers
	Admin can toggle each trigger type
	HH-1.3.2
	Confidence threshold
	Admin sets confidence threshold (default 50%)
	HH-1.3.3
	Fallback limit
	Admin sets fallback count (default 3)
	HH-1.3.4
	Sentiment sensitivity
	Low/Medium/High sensitivity setting
	HH-1.3.5
	Business hours
	Different behavior in/out of hours
	HH-1.3.6
	Trigger logging
	Log all escalation triggers for analysis
	Acceptance Criteria:
* [ ] All automatic triggers fire correctly
* [ ] User keywords detected accurately
* [ ] Configuration changes apply immediately
________________


2. Escalation Process
2.1 Pre-Escalation
ID
	Requirement
	Details
	HH-2.1.1
	Confirmation
	Ask customer to confirm handoff (optional)
	HH-2.1.2
	Context collection
	Gather issue summary before transfer
	HH-2.1.3
	Queue check
	Check agent availability before escalating
	HH-2.1.4
	Estimated wait
	Show estimated wait time to customer
	HH-2.1.5
	Alternative offer
	Offer callback/email if long wait
	Pre-Escalation Flow:
AI: "I'd like to connect you with a team member. Before I do, 
     could you briefly describe the issue you need help with?"


Customer: [Describes issue]


AI: "Thank you! Connecting you now. Estimated wait: 2 minutes."


2.2 Escalation Execution
ID
	Requirement
	Details
	HH-2.2.1
	Status change
	Set conversation status to "escalated"
	HH-2.2.2
	Queue placement
	Add to escalation queue
	HH-2.2.3
	Priority assignment
	Assign priority based on trigger type
	HH-2.2.4
	Agent notification
	Notify available agents in real-time
	HH-2.2.5
	Customer message
	Send "Connecting you..." message
	HH-2.2.6
	AI handoff
	AI stops auto-responding
	HH-2.2.7
	Timestamp
	Record escalation time
	Priority Levels:
Priority
	Trigger Type
	Queue Position
	Critical
	Negative sentiment, VIP customer
	Top of queue
	High
	User request, 3+ fallbacks
	High priority
	Normal
	Low confidence, complex query
	Standard
	2.3 Queue Management
ID
	Requirement
	Details
	HH-2.3.1
	FIFO default
	First-in-first-out queue order
	HH-2.3.2
	Priority override
	Higher priority jumps queue
	HH-2.3.3
	Wait time tracking
	Track time in queue per conversation
	HH-2.3.4
	SLA warnings
	Alert if wait exceeds threshold
	HH-2.3.5
	Queue metrics
	Show queue length, avg wait time
	HH-2.3.6
	Abandonment
	Track if customer leaves before agent
	Acceptance Criteria:
* [ ] Escalation completes in <2 seconds
* [ ] Queue updates in real-time
* [ ] Priority correctly applied
________________


3. Agent Notification
3.1 Notification Channels
ID
	Channel
	Details
	HH-3.1.1
	In-app visual
	Badge count, highlight in queue
	HH-3.1.2
	In-app sound
	Configurable alert sound
	HH-3.1.3
	Browser push
	Desktop notification (if permitted)
	HH-3.1.4
	Tab flash
	Browser tab title flashes
	HH-3.1.5
	Mobile push
	Push to mobile app (future)
	3.2 Notification Content
ID
	Requirement
	Details
	HH-3.2.1
	Customer name
	Show customer name or "Visitor"
	HH-3.2.2
	Preview
	First line of customer message
	HH-3.2.3
	Escalation reason
	Why AI escalated (badge)
	HH-3.2.4
	Wait time
	How long customer waiting
	HH-3.2.5
	Customer tier
	VIP/Regular indicator
	HH-3.2.6
	Action button
	"View" or "Claim" button
	Notification Example:
🔔 New Escalation
━━━━━━━━━━━━━━━━
John Doe (VIP)
"I need help with my API integration..."


Reason: Low AI confidence
Waiting: 45 seconds


[View] [Claim]


3.3 Notification Settings
ID
	Requirement
	Details
	HH-3.3.1
	Sound toggle
	Agent can enable/disable sound
	HH-3.3.2
	Sound selection
	Choose from preset sounds
	HH-3.3.3
	Push toggle
	Enable/disable browser push
	HH-3.3.4
	DND mode
	Do not disturb when busy
	HH-3.3.5
	Volume control
	Adjust notification volume
	Acceptance Criteria:
* [ ] Notifications arrive within 500ms
* [ ] All channels work correctly
* [ ] Settings persist per agent
________________


4. Agent Queue Interface
4.1 Queue Display
ID
	Requirement
	Details
	HH-4.1.1
	Queue list
	Show all escalated conversations
	HH-4.1.2
	Waiting count
	Badge showing total waiting
	HH-4.1.3
	Sort by wait time
	Longest waiting first (default)
	HH-4.1.4
	Sort by priority
	Option to sort by priority
	HH-4.1.5
	Real-time update
	Queue updates without refresh
	HH-4.1.6
	Auto-refresh
	Poll every 5 seconds as backup
	4.2 Queue Item Display
Field
	Description
	Customer name
	Name or "Visitor #123"
	Message preview
	Truncated first message (50 chars)
	Wait time
	Time since escalation (mm:ss)
	Escalation reason
	Badge (Low confidence, User request, etc.)
	Customer tier
	VIP badge if applicable
	Channel
	Chat/Email/WhatsApp icon
	4.3 Queue Filters
ID
	Requirement
	Details
	HH-4.3.1
	Filter by reason
	Show only specific escalation types
	HH-4.3.2
	Filter by channel
	Show only specific channels
	HH-4.3.3
	Filter by priority
	Show only high priority
	HH-4.3.4
	Search
	Search by customer name/email
	Acceptance Criteria:
* [ ] Queue displays correctly
* [ ] Real-time updates work
* [ ] Filters function properly
________________


5. Conversation Claiming
5.1 Claim Process
ID
	Requirement
	Details
	HH-5.1.1
	Preview before claim
	Agent can view conversation before claiming
	HH-5.1.2
	One-click claim
	Single button to claim
	HH-5.1.3
	Exclusive claim
	Only one agent can claim
	HH-5.1.4
	Claim confirmation
	Brief confirmation message
	HH-5.1.5
	Remove from queue
	Claimed conversation leaves queue
	HH-5.1.6
	Assignment record
	Record which agent claimed, when
	5.2 Claim Conflict Handling
ID
	Requirement
	Details
	HH-5.2.1
	Race condition
	If two agents claim simultaneously, first wins
	HH-5.2.2
	Loser notification
	Second agent sees "Already claimed by [name]"
	HH-5.2.3
	Queue refresh
	Loser's queue refreshes automatically
	5.3 Auto-Assignment (Optional)
ID
	Requirement
	Details
	HH-5.3.1
	Round-robin
	Distribute evenly among available agents
	HH-5.3.2
	Skill-based
	Route to agent with matching skills
	HH-5.3.3
	Load-based
	Route to agent with fewest active chats
	HH-5.3.4
	Accept/decline
	Agent can accept or decline auto-assigned
	Acceptance Criteria:
* [ ] Claim works correctly
* [ ] Conflicts handled gracefully
* [ ] Assignment recorded accurately
________________


6. Agent Conversation View
6.1 Conversation Header
Field
	Description
	Customer avatar
	Initials or photo
	Customer name
	Full name
	Customer email
	Email address
	Customer tier
	VIP/Regular badge
	Channel
	Source channel icon
	Duration
	Time since conversation started
	6.2 AI Context Panel
ID
	Requirement
	Details
	HH-6.2.1
	AI summary
	Brief summary of customer issue
	HH-6.2.2
	Detected intent
	What AI thought customer wanted
	HH-6.2.3
	Confidence score
	AI confidence percentage
	HH-6.2.4
	Escalation reason
	Why AI escalated
	HH-6.2.5
	Extracted entities
	Order ID, email, etc. found
	HH-6.2.6
	Suggested articles
	Relevant KB articles
	HH-6.2.7
	Collapsible
	Agent can collapse panel
	AI Context Example:
┌─ AI Summary ────────────────────────────┐
│ Issue: Customer's webhook returns 403   │
│        on POST requests after update    │
│                                         │
│ Intent: technical_support (47%)         │
│ Reason: Complex technical issue         │
│                                         │
│ Entities:                               │
│   • error_code: 403                     │
│   • method: POST                        │
│                                         │
│ Suggested Articles:                     │
│   • API Authentication Guide            │
│   • Webhook Troubleshooting             │
└─────────────────────────────────────────┘


6.3 Message History
ID
	Requirement
	Details
	HH-6.3.1
	Full history
	Show all messages in conversation
	HH-6.3.2
	AI messages labeled
	Clear "AI" badge on AI responses
	HH-6.3.3
	Agent messages labeled
	Show agent name on their messages
	HH-6.3.4
	Timestamps
	Show time for each message
	HH-6.3.5
	Scroll to bottom
	Auto-scroll to newest message
	HH-6.3.6
	Load more
	Load older messages on scroll up
	6.4 Agent Actions
Action
	Description
	Send message
	Reply to customer
	Add internal note
	Note visible only to agents
	Transfer
	Transfer to another agent/team
	Resolve
	Mark conversation as resolved
	Tag
	Add tags to conversation
	View customer
	Open customer profile
	Acceptance Criteria:
* [ ] All context displays correctly
* [ ] History loads completely
* [ ] All actions function properly
________________


7. Agent Messaging
7.1 Message Composition
ID
	Requirement
	Details
	HH-7.1.1
	Text input
	Multi-line text area
	HH-7.1.2
	Send button
	Click to send
	HH-7.1.3
	Enter to send
	Enter sends, Shift+Enter new line
	HH-7.1.4
	Character limit
	Max 2000 characters
	HH-7.1.5
	Emoji support
	Emoji picker available
	HH-7.1.6
	Attachments
	Send files (if enabled)
	7.2 Canned Responses
ID
	Requirement
	Details
	HH-7.2.1
	Quick access
	Dropdown or shortcut to canned responses
	HH-7.2.2
	Search canned
	Search by keyword
	HH-7.2.3
	Insert response
	Click to insert into composer
	HH-7.2.4
	Edit before send
	Agent can edit inserted response
	HH-7.2.5
	Personal canned
	Agent can create personal responses
	HH-7.2.6
	Team canned
	Shared team responses
	7.3 AI-Suggested Responses
ID
	Requirement
	Details
	HH-7.3.1
	Auto-suggest
	AI suggests responses based on context
	HH-7.3.2
	Multiple suggestions
	Show 2-3 suggestions
	HH-7.3.3
	One-click use
	Click suggestion to insert
	HH-7.3.4
	Relevance
	Suggestions based on KB and intent
	HH-7.3.5
	Dismiss
	Agent can dismiss suggestions
	HH-7.3.6
	Learn
	Track which suggestions agents use
	Acceptance Criteria:
* [ ] Messages send instantly
* [ ] Canned responses work
* [ ] AI suggestions are relevant
________________


8. Conversation Transfer
8.1 Transfer Options
ID
	Requirement
	Details
	HH-8.1.1
	Transfer to agent
	Select specific agent
	HH-8.1.2
	Transfer to team
	Select team (routes to available)
	HH-8.1.3
	Agent availability
	Show agent online/busy/offline status
	HH-8.1.4
	Agent workload
	Show number of active chats
	8.2 Transfer Process
ID
	Requirement
	Details
	HH-8.2.1
	Internal note
	Optional note for receiving agent
	HH-8.2.2
	Customer notification
	"You're being transferred to [name/team]"
	HH-8.2.3
	Instant transfer
	Transfer completes immediately
	HH-8.2.4
	History preserved
	Full history visible to new agent
	HH-8.2.5
	Transfer record
	Log who transferred, to whom, when
	HH-8.2.6
	Original agent notified
	Confirm transfer success
	8.3 Transfer to Queue
ID
	Requirement
	Details
	HH-8.3.1
	Return to queue
	Option to put back in general queue
	HH-8.3.2
	Priority preserved
	Keep original priority
	HH-8.3.3
	Notes preserved
	Keep internal notes
	Acceptance Criteria:
* [ ] Transfer completes in <2 seconds
* [ ] Customer notified appropriately
* [ ] History fully preserved
________________


9. Internal Notes
9.1 Note Features
ID
	Requirement
	Details
	HH-9.1.1
	Add note
	Agent adds internal note
	HH-9.1.2
	Note visibility
	Notes visible only to agents
	HH-9.1.3
	Note styling
	Different visual style from messages
	HH-9.1.4
	Note timestamp
	Show when note was added
	HH-9.1.5
	Note author
	Show which agent added note
	HH-9.1.6
	Edit note
	Agent can edit own notes
	HH-9.1.7
	Delete note
	Agent can delete own notes
	Note Display:
┌─ Internal Note ─────────────────────────┐
│ 📝 Customer mentioned they're a beta    │
│    tester. Check if issue is related    │
│    to beta features.                    │
│                                         │
│ Added by Sarah M. • 2:45 PM             │
└─────────────────────────────────────────┘


Acceptance Criteria:
* [ ] Notes save correctly
* [ ] Notes never visible to customer
* [ ] Notes display inline with messages
________________


10. Conversation Resolution
10.1 Resolve Actions
ID
	Requirement
	Details
	HH-10.1.1
	Resolve button
	One-click resolve
	HH-10.1.2
	Resolution type
	Select: Resolved, Closed, Spam
	HH-10.1.3
	Resolution note
	Optional summary note
	HH-10.1.4
	Customer notification
	Send closing message to customer
	HH-10.1.5
	CSAT trigger
	Trigger satisfaction survey
	HH-10.1.6
	Timestamp
	Record resolution time
	10.2 Resolution Types
Type
	Description
	Customer Message
	Resolved
	Issue fixed
	"Glad I could help! Have a great day."
	Closed
	No action needed
	"Thanks for chatting with us!"
	Spam
	Spam/abuse
	No message
	10.3 Post-Resolution
ID
	Requirement
	Details
	HH-10.3.1
	Remove from active
	Conversation leaves active list
	HH-10.3.2
	Metrics update
	Update resolution metrics
	HH-10.3.3
	Handle time calc
	Calculate total handle time
	HH-10.3.4
	Reopen option
	Customer can reopen (within 24h)
	Acceptance Criteria:
* [ ] Resolution completes properly
* [ ] Metrics calculated correctly
* [ ] Survey triggers (if enabled)
________________


11. Customer Waiting Experience
11.1 Waiting State
ID
	Requirement
	Details
	HH-11.1.1
	Waiting message
	"Connecting you with an agent..."
	HH-11.1.2
	Loading indicator
	Animated spinner/dots
	HH-11.1.3
	Position in queue
	"You are #3 in queue" (optional)
	HH-11.1.4
	Estimated wait
	"Estimated wait: 2 minutes"
	HH-11.1.5
	Input disabled
	Customer can't send during wait
	HH-11.1.6
	Cancel option
	Customer can cancel and return to AI
	11.2 Agent Joined
ID
	Requirement
	Details
	HH-11.2.1
	System message
	"[Agent name] has joined the chat"
	HH-11.2.2
	Header update
	Update header with agent name/photo
	HH-11.2.3
	Input enabled
	Customer can send messages
	HH-11.2.4
	Sound (optional)
	Play sound when agent joins
	11.3 Offline Handling
ID
	Requirement
	Details
	HH-11.3.1
	Offline detection
	Detect when no agents available
	HH-11.3.2
	Offline message
	"No agents available right now"
	HH-11.3.3
	Leave message
	Option to leave message/email
	HH-11.3.4
	Business hours
	Show when agents will be back
	HH-11.3.5
	Callback request
	Option to request callback
	Acceptance Criteria:
* [ ] Wait experience is clear
* [ ] Agent join is obvious
* [ ] Offline handled gracefully
________________


12. Agent Status Management
12.1 Agent Statuses
Status
	Description
	Receives Escalations
	Online
	Available for chats
	Yes
	Busy
	At capacity
	No (unless urgent)
	Away
	Temporarily away
	No
	Offline
	Not working
	No
	12.2 Status Rules
ID
	Requirement
	Details
	HH-12.2.1
	Manual status
	Agent can set own status
	HH-12.2.2
	Auto-busy
	Auto-set busy at max chats
	HH-12.2.3
	Auto-away
	Auto-away after X minutes idle
	HH-12.2.4
	Max concurrent
	Admin sets max concurrent chats
	HH-12.2.5
	Status visible
	Show status to other agents
	Acceptance Criteria:
* [ ] Status changes work
* [ ] Auto-status triggers correctly
* [ ] Routing respects status
________________


13. Performance Requirements
Metric
	Target
	Escalation time
	<2 seconds
	Notification delivery
	<500ms
	Queue update
	Real-time (<1s)
	Message delivery
	<500ms
	Transfer completion
	<2 seconds
	________________


14. Data Model
Escalation Record
{
  id: UUID,
  conversation_id: UUID,
  triggered_at: Timestamp,
  trigger_type: Enum (low_confidence, user_request, sentiment, fallback),
  trigger_details: JSON,
  ai_confidence: Number,
  ai_intent: String,
  claimed_by: UUID (nullable),
  claimed_at: Timestamp (nullable),
  wait_time_seconds: Number,
  priority: Enum (critical, high, normal)
}


Transfer Record
{
  id: UUID,
  conversation_id: UUID,
  from_agent_id: UUID,
  to_agent_id: UUID (nullable),
  to_team_id: UUID (nullable),
  internal_note: Text,
  transferred_at: Timestamp
}


________________


15. Security & Privacy
ID
	Requirement
	SEC-1
	Only assigned agent can respond
	SEC-2
	Internal notes never exposed to customer
	SEC-3
	Transfer notes visible only to agents
	SEC-4
	Audit log for all actions
	SEC-5
	Customer data masked in notifications
	SEC-6
	Session validation on all actions
	





—------—------—------—------—------—------—------—------—------—------—------—------—------—------—------—---


  
  
  

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Human Handoff - Module 3 Screens</title>
    <style>
        *{margin:0;padding:0;box-sizing:border-box}
        body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f0f0f0;min-height:100vh;padding:20px}
        .page-header{text-align:center;margin-bottom:30px}
        .page-header h1{font-size:24px;color:#1a1a2e;margin-bottom:8px}
        .page-header p{color:#666;font-size:14px}
        .screens-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(480px,1fr));gap:30px;max-width:1400px;margin:0 auto}
        .screen-card{background:#fff;border-radius:12px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,0.1)}
        .screen-card h3{font-size:14px;color:#666;margin-bottom:12px;padding-bottom:8px;border-bottom:1px solid #eee}
        
        /* Chat Widget Mock */
        .widget-mock{width:340px;margin:0 auto;background:#fff;border-radius:16px;box-shadow:0 8px 32px rgba(0,0,0,0.15);overflow:hidden}
        .widget-header{background:linear-gradient(135deg,#3b82f6,#8b5cf6);color:#fff;padding:14px 18px;display:flex;align-items:center;gap:12px}
        .widget-header .avatar{width:36px;height:36px;background:rgba(255,255,255,0.2);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:18px}
        .widget-header h4{font-size:15px}
        .widget-header p{font-size:11px;opacity:0.9}
        .widget-messages{padding:14px;background:#f8f9fa;min-height:280px;max-height:280px;overflow-y:auto}
        .widget-input{padding:12px;background:#fff;border-top:1px solid #e5e7eb;display:flex;gap:8px}
        .widget-input input{flex:1;border:1px solid #e5e7eb;border-radius:20px;padding:8px 14px;font-size:13px}
        .widget-input button{width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#3b82f6,#8b5cf6);border:none;color:#fff;font-size:16px}
        
        .msg{margin-bottom:10px;display:flex;gap:8px}
        .msg.bot{justify-content:flex-start}
        .msg.user{justify-content:flex-end}
        .msg .avatar{width:26px;height:26px;border-radius:50%;background:linear-gradient(135deg,#3b82f6,#8b5cf6);display:flex;align-items:center;justify-content:center;font-size:11px;color:#fff;flex-shrink:0}
        .msg .avatar.agent{background:linear-gradient(135deg,#10b981,#06b6d4)}
        .msg .bubble{max-width:220px;padding:9px 13px;border-radius:12px;font-size:13px;line-height:1.4}
        .msg.bot .bubble{background:#fff;border:1px solid #e5e7eb;border-radius:12px 12px 12px 4px}
        .msg.user .bubble{background:linear-gradient(135deg,#3b82f6,#8b5cf6);color:#fff;border-radius:12px 12px 4px 12px}
        .msg .time{font-size:9px;color:#999;margin-top:3px}
        
        .system-msg{text-align:center;font-size:11px;color:#666;padding:8px;background:#fff;border-radius:8px;margin:10px 0}
        .system-msg.highlight{background:#fef3c7;color:#92400e}
        
        /* Agent Interface */
        .agent-layout{display:flex;height:420px;border-radius:8px;overflow:hidden;border:1px solid #e5e7eb}
        .agent-sidebar{width:280px;background:#fff;border-right:1px solid #e5e7eb;display:flex;flex-direction:column}
        .agent-sidebar-header{padding:14px 16px;border-bottom:1px solid #e5e7eb;display:flex;justify-content:space-between;align-items:center}
        .agent-sidebar-header h4{font-size:14px}
        .queue-badge{background:#ef4444;color:#fff;font-size:11px;padding:2px 8px;border-radius:10px}
        .queue-list{flex:1;overflow-y:auto}
        .queue-item{padding:12px 16px;border-bottom:1px solid #f0f0f0;cursor:pointer}
        .queue-item:hover{background:#f8f9fa}
        .queue-item.active{background:#eff6ff;border-left:3px solid #3b82f6}
        .queue-item .name{font-weight:600;font-size:13px;margin-bottom:2px}
        .queue-item .preview{font-size:12px;color:#666;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
        .queue-item .meta{display:flex;justify-content:space-between;margin-top:6px;font-size:11px;color:#999}
        .wait-time{color:#ef4444;font-weight:600}
        
        .agent-main{flex:1;display:flex;flex-direction:column;background:#f8f9fa}
        .agent-header{padding:12px 16px;background:#fff;border-bottom:1px solid #e5e7eb;display:flex;justify-content:space-between;align-items:center}
        .agent-header .customer-info{display:flex;align-items:center;gap:10px}
        .agent-header .avatar{width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#3b82f6,#8b5cf6);display:flex;align-items:center;justify-content:center;color:#fff;font-size:13px}
        .agent-header h4{font-size:14px}
        .agent-header p{font-size:11px;color:#666}
        .agent-actions{display:flex;gap:8px}
        
        .agent-messages{flex:1;padding:16px;overflow-y:auto}
        .agent-input{padding:12px 16px;background:#fff;border-top:1px solid #e5e7eb;display:flex;gap:10px}
        .agent-input textarea{flex:1;border:1px solid #e5e7eb;border-radius:8px;padding:10px;font-size:13px;resize:none;font-family:inherit}
        
        .btn{padding:7px 14px;border-radius:6px;font-size:12px;cursor:pointer;border:none}
        .btn-primary{background:#3b82f6;color:#fff}
        .btn-secondary{background:#fff;border:1px solid #e5e7eb}
        .btn-success{background:#10b981;color:#fff}
        .btn-danger{background:#ef4444;color:#fff}
        .btn-sm{padding:5px 10px;font-size:11px}
        
        /* AI Context Panel */
        .ai-context{background:#f8f9fa;border-radius:8px;padding:12px;margin-bottom:12px;font-size:12px}
        .ai-context h5{font-size:11px;color:#666;margin-bottom:8px;text-transform:uppercase}
        .ai-context .intent-tag{background:#dbeafe;color:#1d4ed8;padding:3px 8px;border-radius:4px;font-size:11px;display:inline-block;margin-right:6px}
        .ai-context .confidence{color:#10b981;font-weight:600}
        
        /* Escalation Reasons */
        .escalation-badge{display:inline-flex;align-items:center;gap:4px;padding:4px 10px;border-radius:4px;font-size:11px;margin-right:6px;margin-bottom:6px}
        .escalation-badge.low-conf{background:#fef3c7;color:#92400e}
        .escalation-badge.user-req{background:#dbeafe;color:#1d4ed8}
        .escalation-badge.sentiment{background:#fee2e2;color:#dc2626}
        
        /* Notification */
        .notification{position:absolute;top:10px;right:10px;background:#1a1a2e;color:#fff;padding:12px 16px;border-radius:8px;font-size:13px;display:flex;align-items:center;gap:10px;box-shadow:0 4px 12px rgba(0,0,0,0.2)}
        .notification .icon{width:32px;height:32px;background:#ef4444;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px}
        
        /* Transfer Modal */
        .modal{background:#fff;border-radius:12px;padding:20px;width:360px;box-shadow:0 8px 32px rgba(0,0,0,0.2)}
        .modal h3{font-size:16px;margin-bottom:16px}
        .modal-close{float:right;background:none;border:none;font-size:18px;cursor:pointer;color:#999}
        .form-group{margin-bottom:14px}
        .form-group label{display:block;font-size:12px;font-weight:600;margin-bottom:6px}
        .form-group select,.form-group input,.form-group textarea{width:100%;padding:9px 12px;border:1px solid #e5e7eb;border-radius:6px;font-size:13px}
        .modal-actions{display:flex;gap:10px;justify-content:flex-end;margin-top:16px}
        
        /* Status indicators */
        .status-dot{width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:6px}
        .status-dot.online{background:#10b981}
        .status-dot.busy{background:#f59e0b}
        .status-dot.offline{background:#9ca3af}
        
        /* Suggested Responses */
        .suggestions{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}
        .suggestion{background:#fff;border:1px solid #3b82f6;color:#3b82f6;padding:5px 12px;border-radius:16px;font-size:11px;cursor:pointer}
        .suggestion:hover{background:#eff6ff}
    </style>
</head>
<body>
    <div class="page-header">
        <h1>Module 3: Human Handoff Screens</h1>
        <p>HH-3.1 to HH-3.3 Requirements Coverage</p>
    </div>


    <div class="screens-grid">
        <!-- Screen 1: AI Escalation Trigger (Customer View) -->
        <div class="screen-card">
            <h3>3.1 AI Low Confidence Escalation (HH-3.1.1)</h3>
            <div class="widget-mock">
                <div class="widget-header">
                    <div class="avatar">🤖</div>
                    <div><h4>Support Assistant</h4><p>Online</p></div>
                </div>
                <div class="widget-messages">
                    <div class="msg user">
                        <div><div class="bubble">I have a complex issue with my API integration not working with your webhook system</div></div>
                    </div>
                    <div class="msg bot">
                        <div class="avatar">🤖</div>
                        <div>
                            <div class="bubble">I understand you're having an API integration issue. Could you provide more details about the specific error?</div>
                        </div>
                    </div>
                    <div class="msg user">
                        <div><div class="bubble">The webhook returns 403 but only on POST requests with custom headers and it started after your last update</div></div>
                    </div>
                    <div class="system-msg highlight">
                        ⚠️ AI confidence low - connecting to specialist
                    </div>
                    <div class="msg bot">
                        <div class="avatar">🤖</div>
                        <div>
                            <div class="bubble">This seems like a technical issue that needs specialist attention. Let me connect you with our technical team right away. 🔧</div>
                        </div>
                    </div>
                </div>
                <div class="widget-input">
                    <input type="text" placeholder="Type a message...">
                    <button>➤</button>
                </div>
            </div>
        </div>


        <!-- Screen 2: User Requests Human -->
        <div class="screen-card">
            <h3>3.2 Customer Requests Human (HH-3.1.2)</h3>
            <div class="widget-mock">
                <div class="widget-header">
                    <div class="avatar">🤖</div>
                    <div><h4>Support Assistant</h4><p>Online</p></div>
                </div>
                <div class="widget-messages">
                    <div class="msg bot">
                        <div class="avatar">🤖</div>
                        <div><div class="bubble">Hi! How can I help you today?</div></div>
                    </div>
                    <div class="msg user">
                        <div><div class="bubble">I want to speak to a real person please</div></div>
                    </div>
                    <div class="msg bot">
                        <div class="avatar">🤖</div>
                        <div>
                            <div class="bubble">Of course! I'll connect you with a team member right away. Please hold for just a moment. 🙋</div>
                        </div>
                    </div>
                    <div class="system-msg">
                        Connecting you to an available agent...
                    </div>
                    <div style="text-align:center;padding:20px">
                        <div style="width:40px;height:40px;border:3px solid #e5e7eb;border-top-color:#3b82f6;border-radius:50%;margin:0 auto;animation:spin 1s linear infinite"></div>
                        <p style="font-size:12px;color:#666;margin-top:10px">Finding the best agent for you...</p>
                    </div>
                </div>
                <div class="widget-input">
                    <input type="text" placeholder="Type a message..." disabled>
                    <button disabled style="opacity:0.5">➤</button>
                </div>
            </div>
            <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
        </div>


        <!-- Screen 3: Agent Connected (Customer View) -->
        <div class="screen-card">
            <h3>3.3 Agent Connected - Customer View (HH-3.2.3)</h3>
            <div class="widget-mock">
                <div class="widget-header">
                    <div class="avatar" style="background:linear-gradient(135deg,#10b981,#06b6d4)">S</div>
                    <div><h4>Sarah from Support</h4><p><span class="status-dot online"></span>Online</p></div>
                </div>
                <div class="widget-messages">
                    <div class="msg bot">
                        <div class="avatar">🤖</div>
                        <div><div class="bubble">Connecting you with a team member...</div></div>
                    </div>
                    <div class="system-msg">
                        ✓ Sarah has joined the chat
                    </div>
                    <div class="msg bot">
                        <div class="avatar agent">S</div>
                        <div>
                            <div class="bubble">Hi there! I'm Sarah from the support team. I can see you were having some trouble with our AI assistant. How can I help you today?</div>
                            <div class="time">2:45 PM</div>
                        </div>
                    </div>
                    <div class="msg user">
                        <div>
                            <div class="bubble">Yes, I have a billing issue that the bot couldn't resolve</div>
                            <div class="time" style="text-align:right">2:45 PM</div>
                        </div>
                    </div>
                    <div class="msg bot">
                        <div class="avatar agent">S</div>
                        <div>
                            <div class="bubble">I'd be happy to help with that! Let me pull up your account. Could you confirm your email address?</div>
                            <div class="time">2:46 PM</div>
                        </div>
                    </div>
                </div>
                <div class="widget-input">
                    <input type="text" placeholder="Type a message...">
                    <button>➤</button>
                </div>
            </div>
        </div>


        <!-- Screen 4: Agent Queue (Agent View) -->
        <div class="screen-card">
            <h3>3.4 Escalation Queue - Agent View (HH-3.2.1, HH-3.2.4)</h3>
            <div class="agent-layout">
                <div class="agent-sidebar">
                    <div class="agent-sidebar-header">
                        <h4>Queue</h4>
                        <span class="queue-badge">4 waiting</span>
                    </div>
                    <div class="queue-list">
                        <div class="queue-item">
                            <div class="name">John Doe</div>
                            <div class="preview">I have a complex issue with my API...</div>
                            <div class="meta">
                                <span class="escalation-badge low-conf">Low confidence</span>
                                <span class="wait-time">2:30</span>
                            </div>
                        </div>
                        <div class="queue-item">
                            <div class="name">Mary Smith</div>
                            <div class="preview">I want to speak to a real person</div>
                            <div class="meta">
                                <span class="escalation-badge user-req">User request</span>
                                <span class="wait-time">1:45</span>
                            </div>
                        </div>
                        <div class="queue-item">
                            <div class="name">Robert Chen</div>
                            <div class="preview">This is ridiculous, I've been trying...</div>
                            <div class="meta">
                                <span class="escalation-badge sentiment">Frustrated</span>
                                <span class="wait-time">1:20</span>
                            </div>
                        </div>
                        <div class="queue-item">
                            <div class="name">Lisa Wong</div>
                            <div class="preview">Can someone help me with refund?</div>
                            <div class="meta">
                                <span class="escalation-badge low-conf">3 fallbacks</span>
                                <span class="wait-time">0:45</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="agent-main">
                    <div style="display:flex;align-items:center;justify-content:center;height:100%;color:#999;flex-direction:column;gap:10px">
                        <div style="font-size:48px">📥</div>
                        <p>Select a conversation from the queue</p>
                        <p style="font-size:12px">4 customers waiting for assistance</p>
                    </div>
                </div>
            </div>
        </div>


        <!-- Screen 5: Agent Claiming Conversation -->
        <div class="screen-card">
            <h3>3.5 Agent Claims Conversation (HH-3.3.1, HH-3.3.2)</h3>
            <div class="agent-layout">
                <div class="agent-sidebar">
                    <div class="agent-sidebar-header">
                        <h4>Queue</h4>
                        <span class="queue-badge">4 waiting</span>
                    </div>
                    <div class="queue-list">
                        <div class="queue-item active">
                            <div class="name">John Doe</div>
                            <div class="preview">I have a complex issue with my API...</div>
                            <div class="meta">
                                <span class="escalation-badge low-conf">Low confidence</span>
                                <span class="wait-time">2:30</span>
                            </div>
                        </div>
                        <div class="queue-item">
                            <div class="name">Mary Smith</div>
                            <div class="preview">I want to speak to a real person</div>
                            <div class="meta">
                                <span class="escalation-badge user-req">User request</span>
                                <span class="wait-time">1:45</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="agent-main">
                    <div class="agent-header">
                        <div class="customer-info">
                            <div class="avatar">JD</div>
                            <div>
                                <h4>John Doe</h4>
                                <p>john.doe@email.com • VIP Customer</p>
                            </div>
                        </div>
                        <div class="agent-actions">
                            <button class="btn btn-success">✓ Claim</button>
                        </div>
                    </div>
                    <div class="agent-messages" style="padding:12px">
                        <div class="ai-context">
                            <h5>AI Summary</h5>
                            <p style="margin-bottom:8px"><strong>Issue:</strong> API webhook returning 403 on POST requests</p>
                            <p style="margin-bottom:8px"><strong>Detected Intent:</strong> <span class="intent-tag">technical_support</span> <span class="confidence">47% confidence</span></p>
                            <p><strong>Escalation Reason:</strong> Complex technical issue, low AI confidence</p>
                        </div>
                        <div class="msg user">
                            <div><div class="bubble">I have a complex issue with my API integration not working</div><div class="time">2:40 PM</div></div>
                        </div>
                        <div class="msg bot">
                            <div class="avatar">🤖</div>
                            <div><div class="bubble">Could you provide more details about the specific error?</div><div class="time">2:40 PM • AI</div></div>
                        </div>
                        <div class="msg user">
                            <div><div class="bubble">The webhook returns 403 but only on POST requests with custom headers</div><div class="time">2:41 PM</div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- Screen 6: Active Conversation with Agent -->
        <div class="screen-card">
            <h3>3.6 Agent Handling Conversation (HH-3.3.3, HH-3.3.4)</h3>
            <div class="agent-layout">
                <div class="agent-sidebar">
                    <div class="agent-sidebar-header">
                        <h4>My Chats</h4>
                        <span style="background:#10b981;color:#fff;font-size:11px;padding:2px 8px;border-radius:10px">2 active</span>
                    </div>
                    <div class="queue-list">
                        <div class="queue-item active">
                            <div class="name">John Doe</div>
                            <div class="preview">Thanks, that fixed it!</div>
                            <div class="meta"><span style="color:#10b981">● Active</span><span>5 min</span></div>
                        </div>
                        <div class="queue-item">
                            <div class="name">Mary Smith</div>
                            <div class="preview">Let me check my account...</div>
                            <div class="meta"><span style="color:#10b981">● Active</span><span>3 min</span></div>
                        </div>
                    </div>
                    <div style="padding:12px;border-top:1px solid #e5e7eb">
                        <h4 style="font-size:12px;margin-bottom:8px">Queue</h4>
                        <p style="font-size:11px;color:#666">2 waiting</p>
                    </div>
                </div>
                <div class="agent-main">
                    <div class="agent-header">
                        <div class="customer-info">
                            <div class="avatar">JD</div>
                            <div>
                                <h4>John Doe</h4>
                                <p>john.doe@email.com</p>
                            </div>
                        </div>
                        <div class="agent-actions">
                            <button class="btn btn-secondary btn-sm">Transfer</button>
                            <button class="btn btn-secondary btn-sm">Note</button>
                            <button class="btn btn-success btn-sm">✓ Resolve</button>
                        </div>
                    </div>
                    <div class="agent-messages" style="padding:12px">
                        <div class="msg user">
                            <div><div class="bubble">The webhook returns 403 on POST requests</div></div>
                        </div>
                        <div class="msg bot">
                            <div class="avatar agent">S</div>
                            <div><div class="bubble">I see the issue. Your API key doesn't have write permissions. Let me update that for you.</div></div>
                        </div>
                        <div class="msg bot">
                            <div class="avatar agent">S</div>
                            <div><div class="bubble">Done! I've upgraded your key permissions. Try the POST request again now.</div></div>
                        </div>
                        <div class="msg user">
                            <div><div class="bubble">Thanks, that fixed it! 🎉</div></div>
                        </div>
                    </div>
                    <div class="agent-input">
                        <textarea rows="2" placeholder="Type your reply..."></textarea>
                        <button class="btn btn-primary">Send</button>
                    </div>
                </div>
            </div>
        </div>


        <!-- Screen 7: Transfer Modal -->
        <div class="screen-card">
            <h3>3.7 Transfer Conversation (HH-3.3.3)</h3>
            <div style="display:flex;justify-content:center;padding:20px">
                <div class="modal">
                    <button class="modal-close">×</button>
                    <h3>Transfer Conversation</h3>
                    <div class="form-group">
                        <label>Transfer to</label>
                        <select>
                            <option value="">Select agent or team...</option>
                            <optgroup label="Agents">
                                <option>🟢 Mike Johnson (Available)</option>
                                <option>🟢 Emily Davis (Available)</option>
                                <option>🟡 Tom Wilson (Busy - 2 chats)</option>
                            </optgroup>
                            <optgroup label="Teams">
                                <option>Technical Support</option>
                                <option>Billing Team</option>
                                <option>Sales Team</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Internal Note (optional)</label>
                        <textarea rows="3" placeholder="Add context for the next agent...">Customer has API integration issue. Key permissions were the problem - might need further technical help.</textarea>
                    </div>
                    <div class="modal-actions">
                        <button class="btn btn-secondary">Cancel</button>
                        <button class="btn btn-primary">Transfer</button>
                    </div>
                </div>
            </div>
        </div>


        <!-- Screen 8: Agent Notification -->
        <div class="screen-card">
            <h3>3.8 New Escalation Notification (HH-3.2.2)</h3>
            <div style="position:relative;height:300px;background:#f8f9fa;border-radius:8px">
                <div class="notification">
                    <div class="icon">🔔</div>
                    <div>
                        <div style="font-weight:600;margin-bottom:2px">New Escalation</div>
                        <div style="font-size:12px;opacity:0.8">John Doe needs help with API issue</div>
                    </div>
                    <button class="btn btn-sm" style="background:#3b82f6;color:#fff;margin-left:10px">View</button>
                </div>
                <div style="text-align:center;padding-top:120px">
                    <p style="font-size:13px;color:#666">Desktop notification with sound alert</p>
                    <div style="display:flex;justify-content:center;gap:20px;margin-top:20px">
                        <div style="background:#fff;padding:16px 24px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.1)">
                            <div style="font-size:24px;margin-bottom:8px">🔔</div>
                            <div style="font-size:12px;color:#666">Visual Alert</div>
                        </div>
                        <div style="background:#fff;padding:16px 24px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.1)">
                            <div style="font-size:24px;margin-bottom:8px">🔊</div>
                            <div style="font-size:12px;color:#666">Sound Alert</div>
                        </div>
                        <div style="background:#fff;padding:16px 24px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.1)">
                            <div style="font-size:24px;margin-bottom:8px">📱</div>
                            <div style="font-size:12px;color:#666">Browser Push</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- Screen 9: Conversation Resolved -->
        <div class="screen-card">
            <h3>3.9 Conversation Resolved</h3>
            <div class="widget-mock">
                <div class="widget-header">
                    <div class="avatar" style="background:linear-gradient(135deg,#10b981,#06b6d4)">S</div>
                    <div><h4>Sarah from Support</h4><p>Online</p></div>
                </div>
                <div class="widget-messages">
                    <div class="msg bot">
                        <div class="avatar agent">S</div>
                        <div><div class="bubble">I've upgraded your API key permissions. Try the POST request again now.</div></div>
                    </div>
                    <div class="msg user">
                        <div><div class="bubble">Thanks, that fixed it! 🎉</div></div>
                    </div>
                    <div class="msg bot">
                        <div class="avatar agent">S</div>
                        <div><div class="bubble">Excellent! Is there anything else I can help you with today?</div></div>
                    </div>
                    <div class="msg user">
                        <div><div class="bubble">No, that's all. Thanks for your help!</div></div>
                    </div>
                    <div class="msg bot">
                        <div class="avatar agent">S</div>
                        <div><div class="bubble">You're welcome! Have a great day! 👋</div></div>
                    </div>
                    <div class="system-msg" style="background:#dcfce7;color:#166534">
                        ✓ Conversation resolved
                    </div>
                    <div style="text-align:center;padding:10px">
                        <p style="font-size:12px;color:#666;margin-bottom:8px">How was your experience?</p>
                        <div style="font-size:24px">😟 😐 🙂 😊 😍</div>
                    </div>
                </div>
                <div class="widget-input">
                    <input type="text" placeholder="Start a new conversation...">
                    <button>➤</button>
                </div>
            </div>
        </div>


        <!-- Screen 10: Suggested Responses -->
        <div class="screen-card">
            <h3>3.10 AI-Suggested Responses for Agent</h3>
            <div class="agent-layout" style="height:380px">
                <div class="agent-sidebar" style="width:240px">
                    <div class="agent-sidebar-header"><h4>My Chats</h4></div>
                    <div class="queue-list">
                        <div class="queue-item active">
                            <div class="name">Lisa Wong</div>
                            <div class="preview">How do I get a refund?</div>
                        </div>
                    </div>
                </div>
                <div class="agent-main">
                    <div class="agent-header">
                        <div class="customer-info">
                            <div class="avatar">LW</div>
                            <div><h4>Lisa Wong</h4><p>lisa.wong@email.com</p></div>
                        </div>
                    </div>
                    <div class="agent-messages" style="padding:12px">
                        <div class="msg user">
                            <div><div class="bubble">How do I get a refund for my order?</div></div>
                        </div>
                        <div style="background:#eff6ff;border-radius:8px;padding:12px;margin-top:10px">
                            <div style="font-size:11px;color:#3b82f6;font-weight:600;margin-bottom:8px">💡 AI Suggested Responses</div>
                            <div class="suggestions">
                                <span class="suggestion">To request a refund, go to Order History and click "Request Refund"</span>
                                <span class="suggestion">I can process the refund for you. Which order?</span>
                                <span class="suggestion">Refunds take 5-7 business days to process</span>
                            </div>
                            <div style="font-size:10px;color:#666;margin-top:8px">
                                📄 Related: <a href="#" style="color:#3b82f6">Refund Policy</a> • <a href="#" style="color:#3b82f6">How to Request Refund</a>
                            </div>
                        </div>
                    </div>
                    <div class="agent-input">
                        <textarea rows="2" placeholder="Type or click a suggestion..."></textarea>
                        <button class="btn btn-primary">Send</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>

# Module 4: Agent Interface

Module 4: Agent Interface# Module 4: Agent Interface - Detailed Functional Requirements

Module 4: Agent Interface - Detailed Functional Requirements
Document Info
Module: Agent Interface | Version: 1.0 | Status: Approved
________________


1. Agent Dashboard
  
  

1.1 Dashboard Layout
ID
	Requirement
	Details
	AGT-1.1.1
	Navigation sidebar
	Left nav with icons for main sections
	AGT-1.1.2
	Conversation list
	Center panel showing conversations
	AGT-1.1.3
	Main content area
	Right panel for active conversation
	AGT-1.1.4
	Customer info panel
	Optional right panel for customer details
	AGT-1.1.5
	Responsive design
	Adapt layout for different screen sizes
	AGT-1.1.6
	Collapsible panels
	Allow panels to be collapsed/expanded
	1.2 Navigation Menu
Icon
	Section
	Description
	💬
	Conversations
	Active chats and queue
	📥
	Queue
	Escalated conversations waiting
	📊
	Stats
	Personal performance metrics
	⚙️
	Settings
	Agent preferences
	1.3 Header Bar
ID
	Requirement
	Details
	AGT-1.3.1
	Agent avatar
	Display agent photo/initials
	AGT-1.3.2
	Agent name
	Show logged-in agent name
	AGT-1.3.3
	Status indicator
	Show current status (Online/Busy/Away)
	AGT-1.3.4
	Notifications
	Bell icon with unread count
	AGT-1.3.5
	Quick actions
	Dropdown for common actions
	Acceptance Criteria:
* [ ] Dashboard loads within 2 seconds
* [ ] All panels render correctly
* [ ] Navigation works smoothly
________________


2. Conversation List
2.1 List Display
ID
	Requirement
	Details
	AGT-2.1.1
	Show assigned conversations
	List all conversations assigned to agent
	AGT-2.1.2
	Conversation card
	Show customer name, preview, time
	AGT-2.1.3
	Unread indicator
	Badge showing unread message count
	AGT-2.1.4
	Channel icon
	Show source channel (Chat/Email/WhatsApp)
	AGT-2.1.5
	Priority badge
	Show priority level if high/urgent
	AGT-2.1.6
	Status indicator
	Visual indicator of conversation state
	AGT-2.1.7
	Real-time updates
	List updates without page refresh
	2.2 Conversation Card Fields
Field
	Description
	Customer name
	Name or "Visitor #123"
	Avatar
	Customer initials or photo
	Message preview
	Last message (truncated 50 chars)
	Timestamp
	Time of last message
	Channel badge
	Chat/Email/WhatsApp/SMS icon
	Unread count
	Number badge if unread messages
	Priority
	High/Urgent badge if applicable
	Tags
	Conversation tags (max 2 visible)
	2.3 List Tabs
Tab
	Description
	Mine
	Conversations assigned to agent
	Queue
	Escalated waiting for claim
	All
	All active conversations (admin only)
	2.4 List Actions
ID
	Requirement
	Details
	AGT-2.4.1
	Click to open
	Click conversation to view details
	AGT-2.4.2
	Sort options
	Sort by newest, oldest, priority
	AGT-2.4.3
	Filter by channel
	Filter by Chat/Email/WhatsApp
	AGT-2.4.4
	Filter by status
	Filter by Active/Pending/Resolved
	AGT-2.4.5
	Search
	Search by customer name or content
	Acceptance Criteria:
* [ ] List shows all assigned conversations
* [ ] Unread indicators accurate
* [ ] Filters work correctly
________________


3. Conversation View
3.1 Conversation Header
ID
	Requirement
	Details
	AGT-3.1.1
	Customer avatar
	Photo or initials
	AGT-3.1.2
	Customer name
	Full name
	AGT-3.1.3
	Customer status
	Online/Offline indicator
	AGT-3.1.4
	Customer email
	Email address
	AGT-3.1.5
	Channel
	Source channel icon
	AGT-3.1.6
	Duration
	Time since conversation started
	AGT-3.1.7
	Action buttons
	Transfer, Resolve, More options
	3.2 Message Display
ID
	Requirement
	Details
	AGT-3.2.1
	Full history
	Show all messages in conversation
	AGT-3.2.2
	Customer messages
	Left-aligned with customer avatar
	AGT-3.2.3
	Agent messages
	Right-aligned with agent avatar
	AGT-3.2.4
	AI messages
	Labeled with "AI" badge
	AGT-3.2.5
	System messages
	Centered, different style
	AGT-3.2.6
	Timestamps
	Show time for each message
	AGT-3.2.7
	Read receipts
	Show if customer read message
	AGT-3.2.8
	Message grouping
	Group consecutive same-sender messages
	AGT-3.2.9
	Auto-scroll
	Scroll to newest message
	AGT-3.2.10
	Load more
	Load older messages on scroll up
	3.3 Message Types
Type
	Display
	Text
	Standard text bubble
	Image
	Thumbnail with expand option
	File
	File icon with name and download
	Link
	Clickable link with preview
	Internal note
	Yellow background, agent-only
	3.4 Message States
State
	Visual
	Sending
	Slight opacity, spinner
	Sent
	Full opacity, single check
	Delivered
	Double check
	Read
	Blue double check
	Failed
	Red border, retry option
	Acceptance Criteria:
* [ ] All messages display correctly
* [ ] History loads completely
* [ ] Auto-scroll works
________________


4. Message Composition
4.1 Input Area
ID
	Requirement
	Details
	AGT-4.1.1
	Text input
	Multi-line text area
	AGT-4.1.2
	Send button
	Click to send message
	AGT-4.1.3
	Enter to send
	Enter sends, Shift+Enter new line
	AGT-4.1.4
	Character count
	Show count if approaching limit
	AGT-4.1.5
	Character limit
	Max 2000 characters
	AGT-4.1.6
	Auto-resize
	Input grows with content
	4.2 Toolbar
Button
	Action
	📝
	Add internal note
	💬
	Open canned responses
	📎
	Attach file
	😊
	Emoji picker
	🔗
	Insert link
	4.3 File Attachments
ID
	Requirement
	Details
	AGT-4.3.1
	Attach button
	Click to open file picker
	AGT-4.3.2
	Drag and drop
	Drop files into input area
	AGT-4.3.3
	File preview
	Show preview before sending
	AGT-4.3.4
	Multiple files
	Support multiple attachments
	AGT-4.3.5
	File size limit
	Max 10MB per file
	AGT-4.3.6
	File types
	Images, PDFs, documents
	AGT-4.3.7
	Remove file
	Remove attached file before send
	4.4 Emoji Picker
ID
	Requirement
	Details
	AGT-4.4.1
	Emoji button
	Click to open picker
	AGT-4.4.2
	Emoji categories
	Recent, Smileys, People, etc.
	AGT-4.4.3
	Search emoji
	Search by name/keyword
	AGT-4.4.4
	Insert emoji
	Click to insert at cursor
	AGT-4.4.5
	Recent emojis
	Show recently used
	Acceptance Criteria:
* [ ] Messages send successfully
* [ ] Attachments upload correctly
* [ ] Emoji picker works
________________


5. Canned Responses
5.1 Canned Response Library
ID
	Requirement
	Details
	AGT-5.1.1
	Quick access
	Button in toolbar to open
	AGT-5.1.2
	Search
	Search by title or content
	AGT-5.1.3
	Categories
	Organize by category
	AGT-5.1.4
	Preview
	Show full response on hover
	AGT-5.1.5
	Click to insert
	Insert into composer
	AGT-5.1.6
	Edit before send
	Can modify after inserting
	5.2 Canned Response Types
Type
	Scope
	Team
	Shared by entire team
	Personal
	Created by individual agent
	Global
	Available to all agents
	5.3 Canned Response Fields
Field
	Description
	Title
	Short identifying name
	Content
	Full response text
	Shortcut
	Keyboard shortcut (e.g., /refund)
	Category
	Organization category
	Variables
	Support {{customer.name}} etc.
	5.4 Canned Response Management
ID
	Requirement
	Details
	AGT-5.4.1
	Create personal
	Agent creates own responses
	AGT-5.4.2
	Edit personal
	Agent edits own responses
	AGT-5.4.3
	Delete personal
	Agent deletes own responses
	AGT-5.4.4
	Use team responses
	Access shared team responses
	AGT-5.4.5
	Shortcut trigger
	Type "/" to show suggestions
	Acceptance Criteria:
* [ ] Canned responses load quickly
* [ ] Search finds relevant responses
* [ ] Variables substitute correctly
________________


6. AI-Suggested Responses
6.1 Suggestion Display
ID
	Requirement
	Details
	AGT-6.1.1
	Auto-suggest
	Show suggestions after customer message
	AGT-6.1.2
	Suggestion box
	Highlighted box above input
	AGT-6.1.3
	Multiple suggestions
	Show 2-3 relevant suggestions
	AGT-6.1.4
	One-click insert
	Click to insert suggestion
	AGT-6.1.5
	Dismiss
	Close suggestion box
	AGT-6.1.6
	Related articles
	Link to relevant KB articles
	6.2 Suggestion Sources
Source
	Description
	Intent response
	Based on detected intent
	KB articles
	From knowledge base matches
	Similar conversations
	From past resolved conversations
	Canned responses
	Relevant canned responses
	6.3 Suggestion Settings
ID
	Requirement
	Details
	AGT-6.3.1
	Enable/disable
	Agent can turn off suggestions
	AGT-6.3.2
	Auto-show
	Show automatically vs. on-demand
	AGT-6.3.3
	Feedback
	Track which suggestions agents use
	Acceptance Criteria:
* [ ] Suggestions appear within 1 second
* [ ] Suggestions are relevant
* [ ] Click to insert works
________________


7. Internal Notes
7.1 Note Features
ID
	Requirement
	Details
	AGT-7.1.1
	Add note
	Click button to add internal note
	AGT-7.1.2
	Note visibility
	Only visible to agents
	AGT-7.1.3
	Note styling
	Different background (yellow)
	AGT-7.1.4
	Note timestamp
	Show when note was added
	AGT-7.1.5
	Note author
	Show which agent added note
	AGT-7.1.6
	Edit note
	Agent can edit own notes
	AGT-7.1.7
	Delete note
	Agent can delete own notes
	AGT-7.1.8
	Note in timeline
	Display inline with messages
	7.2 Note Display
┌─ 📝 Internal Note ──────────────────────┐
│ Customer mentioned they're a beta       │
│ tester. Issue may be related to beta    │
│ features.                               │
│                                         │
│ Sarah M. • 2:45 PM                      │
└─────────────────────────────────────────┘


Acceptance Criteria:
* [ ] Notes save correctly
* [ ] Notes never visible to customer
* [ ] Notes display in timeline
________________


8. Customer Information Panel
8.1 Customer Details
ID
	Requirement
	Details
	AGT-8.1.1
	Customer name
	Full name
	AGT-8.1.2
	Email
	Email address (clickable)
	AGT-8.1.3
	Phone
	Phone number (clickable)
	AGT-8.1.4
	Company
	Company name
	AGT-8.1.5
	Plan/Tier
	Subscription level
	AGT-8.1.6
	Customer since
	Account creation date
	AGT-8.1.7
	Custom fields
	Any custom attributes
	8.2 AI Context
ID
	Requirement
	Details
	AGT-8.2.1
	Detected intent
	What AI thought customer wanted
	AGT-8.2.2
	Confidence score
	AI confidence percentage
	AGT-8.2.3
	Extracted entities
	Order ID, dates, etc.
	AGT-8.2.4
	Escalation reason
	Why AI escalated
	AGT-8.2.5
	Suggested articles
	KB articles AI found relevant
	8.3 Conversation Tags
ID
	Requirement
	Details
	AGT-8.3.1
	View tags
	Show current tags
	AGT-8.3.2
	Add tag
	Add new tag to conversation
	AGT-8.3.3
	Remove tag
	Remove existing tag
	AGT-8.3.4
	Tag suggestions
	Suggest tags based on content
	8.4 Customer History
ID
	Requirement
	Details
	AGT-8.4.1
	Previous conversations
	List past conversations
	AGT-8.4.2
	Conversation count
	Total conversations
	AGT-8.4.3
	Last contact
	Date of last interaction
	AGT-8.4.4
	Click to view
	Open past conversation details
	AGT-8.4.5
	Resolution status
	Show if resolved/closed
	8.5 Panel Actions
ID
	Requirement
	Details
	AGT-8.5.1
	Edit customer
	Edit customer details
	AGT-8.5.2
	View profile
	Open full customer profile
	AGT-8.5.3
	Collapse panel
	Hide/show panel
	Acceptance Criteria:
* [ ] All customer info displays
* [ ] History loads correctly
* [ ] Tags can be managed
________________


9. Conversation Actions
9.1 Resolve Conversation
ID
	Requirement
	Details
	AGT-9.1.1
	Resolve button
	One-click to open resolve modal
	AGT-9.1.2
	Resolution type
	Select Resolved/Closed/Spam
	AGT-9.1.3
	Resolution note
	Optional summary note
	AGT-9.1.4
	Add tags
	Tag conversation before resolving
	AGT-9.1.5
	Closing message
	Option to send closing message
	AGT-9.1.6
	Confirm
	Confirm before resolving
	9.2 Resolution Types
Type
	Description
	Customer Message
	Resolved
	Issue fixed
	"Glad I could help!"
	Closed
	No action needed
	"Thanks for chatting!"
	Spam
	Spam/abuse
	No message
	9.3 Transfer Conversation
ID
	Requirement
	Details
	AGT-9.3.1
	Transfer button
	Open transfer modal
	AGT-9.3.2
	Select agent
	Pick specific agent
	AGT-9.3.3
	Select team
	Pick team for routing
	AGT-9.3.4
	Agent availability
	Show agent status
	AGT-9.3.5
	Agent workload
	Show active chat count
	AGT-9.3.6
	Internal note
	Add note for receiving agent
	AGT-9.3.7
	Customer notification
	Notify customer of transfer
	9.4 Other Actions
Action
	Description
	Mark unread
	Mark conversation as unread
	Snooze
	Hide for specified time
	Priority
	Change priority level
	Block
	Block customer (admin approval)
	Acceptance Criteria:
* [ ] Resolve works correctly
* [ ] Transfer completes successfully
* [ ] Customer notified appropriately
________________


10. Multiple Conversations
10.1 Multi-Conversation Support
ID
	Requirement
	Details
	AGT-10.1.1
	Handle multiple
	Agent handles multiple simultaneously
	AGT-10.1.2
	Max concurrent
	Configurable max (default 5)
	AGT-10.1.3
	Easy switching
	Quick switch between conversations
	AGT-10.1.4
	Unread indicators
	Clear indicators for unread
	AGT-10.1.5
	Attention alerts
	Highlight conversations needing attention
	10.2 Attention Indicators
Indicator
	Condition
	Unread badge
	New messages from customer
	Red highlight
	Waiting >2 minutes for response
	Priority badge
	High priority conversation
	Typing indicator
	Customer is typing
	10.3 Conversation Switching
ID
	Requirement
	Details
	AGT-10.3.1
	Click to switch
	Click conversation in list
	AGT-10.3.2
	Keyboard shortcut
	Alt+1-5 for quick switch
	AGT-10.3.3
	Preserve draft
	Save draft when switching
	AGT-10.3.4
	Scroll position
	Remember scroll position
	Acceptance Criteria:
* [ ] Multiple conversations work smoothly
* [ ] Unread indicators accurate
* [ ] Switching preserves state
________________


11. Agent Status Management
11.1 Status Types
Status
	Description
	Receives Work
	Online
	Available
	Yes
	Busy
	At capacity
	No
	Away
	Temporarily away
	No
	Offline
	Not working
	No
	11.2 Status Controls
ID
	Requirement
	Details
	AGT-11.2.1
	Status selector
	Dropdown to change status
	AGT-11.2.2
	One-click change
	Quick status change
	AGT-11.2.3
	Status visible
	Show current status in header
	AGT-11.2.4
	Auto-busy
	Auto-set busy at max chats
	AGT-11.2.5
	Auto-away
	Auto-away after idle timeout
	AGT-11.2.6
	Away reason
	Optional reason when setting away
	11.3 Status Rules
ID
	Requirement
	Details
	AGT-11.3.1
	Max conversations
	Stop routing at limit
	AGT-11.3.2
	Idle timeout
	Set away after X minutes
	AGT-11.3.3
	Force offline
	Auto-offline end of shift
	AGT-11.3.4
	Status history
	Log status changes
	Acceptance Criteria:
* [ ] Status changes immediately
* [ ] Auto-status works correctly
* [ ] Routing respects status
________________


12. Agent Performance Stats
12.1 Personal Metrics
Metric
	Description
	Conversations
	Total handled today
	Resolved
	Conversations resolved
	Resolution rate
	Percentage resolved
	Avg handle time
	Average conversation duration
	Avg response time
	Average time to first response
	CSAT score
	Customer satisfaction rating
	Messages sent
	Total messages sent
	12.2 Stats Display
ID
	Requirement
	Details
	AGT-12.2.1
	Stats dashboard
	Dedicated stats page
	AGT-12.2.2
	Today's stats
	Current day metrics
	AGT-12.2.3
	Comparison
	Compare to previous day/week
	AGT-12.2.4
	Trends
	Show up/down trends
	AGT-12.2.5
	Goals
	Show targets vs. actual
	12.3 Activity Feed
ID
	Requirement
	Details
	AGT-12.3.1
	Recent activity
	List of recent actions
	AGT-12.3.2
	Activity types
	Resolved, claimed, transferred
	AGT-12.3.3
	Timestamps
	When each action occurred
	12.4 Queue Status
ID
	Requirement
	Details
	AGT-12.4.1
	Queue length
	Customers waiting
	AGT-12.4.2
	Avg wait time
	Average queue wait
	AGT-12.4.3
	Agents online
	Team members available
	AGT-12.4.4
	Team stats
	Team performance overview
	Acceptance Criteria:
* [ ] Stats calculate correctly
* [ ] Real-time updates
* [ ] Activity feed accurate
________________


13. Notifications
13.1 In-App Notifications
ID
	Requirement
	Details
	AGT-13.1.1
	New message
	Alert for new customer message
	AGT-13.1.2
	New assignment
	Alert when assigned conversation
	AGT-13.1.3
	Transfer received
	Alert when receiving transfer
	AGT-13.1.4
	Queue alert
	Alert when queue is high
	AGT-13.1.5
	Notification center
	View all notifications
	13.2 Notification Settings
ID
	Requirement
	Details
	AGT-13.2.1
	Sound toggle
	Enable/disable sounds
	AGT-13.2.2
	Sound selection
	Choose notification sound
	AGT-13.2.3
	Desktop push
	Enable browser notifications
	AGT-13.2.4
	DND mode
	Do not disturb option
	Acceptance Criteria:
* [ ] Notifications arrive promptly
* [ ] Settings persist
* [ ] DND works correctly
________________


14. Keyboard Shortcuts
Shortcut
	Action
	Enter
	Send message
	Shift+Enter
	New line
	Ctrl+/
	Open canned responses
	Ctrl+K
	Search conversations
	Ctrl+Enter
	Resolve conversation
	Alt+1-5
	Switch to conversation 1-5
	Escape
	Close modal/panel
	________________


15. Performance Requirements
Metric
	Target
	Dashboard load
	<2 seconds
	Conversation load
	<1 second
	Message send
	<500ms
	Search results
	<1 second
	Real-time updates
	<500ms delay
	________________


16. Accessibility
ID
	Requirement
	A11Y-1
	Keyboard navigation throughout
	A11Y-2
	Screen reader support
	A11Y-3
	ARIA labels on all controls
	A11Y-4
	Focus management in modals
	A11Y-5
	Color contrast 4.5:1 minimum
	A11Y-6
	Resizable text support
	________________


17. Security
ID
	Requirement
	SEC-1
	Session timeout after inactivity
	SEC-2
	Agent can only see assigned conversations
	SEC-3
	Internal notes encrypted at rest
	SEC-4
	Audit log for all actions
	SEC-5
	CSRF protection on all forms
	SEC-6
	XSS prevention in message display
	—-----------------------------------------------------------------------------------------


  
  

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agent Interface - Module 4 Screens</title>
    <style>
        *{margin:0;padding:0;box-sizing:border-box}
        body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f0f0f0;min-height:100vh;padding:20px}
        .page-header{text-align:center;margin-bottom:30px}
        .page-header h1{font-size:24px;color:#1a1a2e;margin-bottom:8px}
        .page-header p{color:#666;font-size:14px}
        .screens-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(550px,1fr));gap:30px;max-width:1500px;margin:0 auto}
        .screen-card{background:#fff;border-radius:12px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,0.1)}
        .screen-card h3{font-size:14px;color:#666;margin-bottom:12px;padding-bottom:8px;border-bottom:1px solid #eee}
        
        /* Agent Layout */
        .agent-layout{display:flex;height:480px;border-radius:8px;overflow:hidden;border:1px solid #e5e7eb}
        .agent-nav{width:60px;background:#1a1a2e;display:flex;flex-direction:column;align-items:center;padding:12px 0}
        .nav-icon{width:40px;height:40px;display:flex;align-items:center;justify-content:center;border-radius:8px;margin-bottom:8px;cursor:pointer;font-size:18px;color:#666}
        .nav-icon:hover{background:#2a2a4e}
        .nav-icon.active{background:#3b82f6;color:#fff}
        .nav-icon .badge{position:absolute;top:-4px;right:-4px;background:#ef4444;color:#fff;font-size:10px;padding:2px 5px;border-radius:8px}
        
        .agent-sidebar{width:280px;background:#fff;border-right:1px solid #e5e7eb;display:flex;flex-direction:column}
        .sidebar-header{padding:14px 16px;border-bottom:1px solid #e5e7eb}
        .sidebar-header h4{font-size:14px;margin-bottom:8px}
        .sidebar-tabs{display:flex;gap:4px}
        .sidebar-tab{padding:6px 12px;font-size:12px;border-radius:6px;cursor:pointer;background:#f0f0f0}
        .sidebar-tab.active{background:#3b82f6;color:#fff}
        .conv-list{flex:1;overflow-y:auto}
        .conv-item{padding:12px 16px;border-bottom:1px solid #f0f0f0;cursor:pointer}
        .conv-item:hover{background:#f8f9fa}
        .conv-item.active{background:#eff6ff;border-left:3px solid #3b82f6}
        .conv-item .header{display:flex;justify-content:space-between;margin-bottom:4px}
        .conv-item .name{font-weight:600;font-size:13px}
        .conv-item .time{font-size:11px;color:#999}
        .conv-item .preview{font-size:12px;color:#666;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
        .conv-item .badges{display:flex;gap:6px;margin-top:6px}
        .badge{font-size:10px;padding:2px 8px;border-radius:4px}
        .badge.channel{background:#e0f2fe;color:#0369a1}
        .badge.priority{background:#fee2e2;color:#dc2626}
        .badge.unread{background:#3b82f6;color:#fff;border-radius:50%;width:18px;height:18px;display:flex;align-items:center;justify-content:center}
        
        .agent-main{flex:1;display:flex;flex-direction:column;background:#f8f9fa}
        .main-header{padding:12px 16px;background:#fff;border-bottom:1px solid #e5e7eb;display:flex;justify-content:space-between;align-items:center}
        .customer-info{display:flex;align-items:center;gap:12px}
        .avatar{width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#3b82f6,#8b5cf6);display:flex;align-items:center;justify-content:center;color:#fff;font-size:14px;font-weight:600}
        .customer-info h4{font-size:15px;margin-bottom:2px}
        .customer-info p{font-size:12px;color:#666}
        .header-actions{display:flex;gap:8px}
        
        .messages-area{flex:1;padding:16px;overflow-y:auto}
        .message{display:flex;gap:10px;margin-bottom:14px;max-width:75%}
        .message.customer{align-self:flex-start}
        .message.agent{align-self:flex-end;margin-left:auto;flex-direction:row-reverse}
        .message .avatar{width:32px;height:32px;font-size:12px;flex-shrink:0}
        .message.agent .avatar{background:linear-gradient(135deg,#10b981,#06b6d4)}
        .bubble{padding:10px 14px;border-radius:12px;font-size:14px;line-height:1.5}
        .message.customer .bubble{background:#fff;border:1px solid #e5e7eb}
        .message.agent .bubble{background:#3b82f6;color:#fff}
        .message .meta{font-size:10px;color:#999;margin-top:4px}
        .message.agent .meta{text-align:right}
        
        .internal-note{background:#fef3c7;border:1px solid #fcd34d;border-radius:8px;padding:10px 14px;margin:10px 0;font-size:13px}
        .internal-note .label{font-size:10px;color:#92400e;font-weight:600;margin-bottom:4px}
        
        .input-area{padding:12px 16px;background:#fff;border-top:1px solid #e5e7eb}
        .input-toolbar{display:flex;gap:8px;margin-bottom:8px}
        .tool-btn{width:32px;height:32px;border:none;background:#f0f0f0;border-radius:6px;cursor:pointer;font-size:14px}
        .tool-btn:hover{background:#e5e7eb}
        .input-row{display:flex;gap:10px}
        .input-row textarea{flex:1;border:1px solid #e5e7eb;border-radius:8px;padding:10px;font-size:14px;resize:none;font-family:inherit}
        .input-row textarea:focus{outline:none;border-color:#3b82f6}
        
        .btn{padding:8px 16px;border-radius:6px;font-size:13px;cursor:pointer;border:none}
        .btn-primary{background:#3b82f6;color:#fff}
        .btn-secondary{background:#fff;border:1px solid #e5e7eb}
        .btn-success{background:#10b981;color:#fff}
        .btn-sm{padding:6px 12px;font-size:12px}
        
        /* Right Panel */
        .right-panel{width:280px;background:#fff;border-left:1px solid #e5e7eb;overflow-y:auto}
        .panel-section{padding:16px;border-bottom:1px solid #e5e7eb}
        .panel-section h5{font-size:12px;color:#666;text-transform:uppercase;margin-bottom:12px}
        .info-row{display:flex;justify-content:space-between;font-size:13px;margin-bottom:8px}
        .info-row .label{color:#666}
        .tag{display:inline-block;padding:3px 8px;background:#f0f0f0;border-radius:4px;font-size:11px;margin-right:4px;margin-bottom:4px}
        
        /* Status */
        .status-dot{width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:6px}
        .status-dot.online{background:#10b981}
        .status-dot.busy{background:#f59e0b}
        .status-dot.away{background:#9ca3af}
        
        /* Canned Responses */
        .canned-list{max-height:200px;overflow-y:auto}
        .canned-item{padding:10px;background:#f8f9fa;border-radius:6px;margin-bottom:6px;cursor:pointer;font-size:12px}
        .canned-item:hover{background:#eff6ff}
        .canned-item .title{font-weight:600;margin-bottom:2px}
        .canned-item .preview{color:#666}
        
        /* AI Suggestions */
        .suggestion-box{background:#eff6ff;border-radius:8px;padding:12px;margin-bottom:12px}
        .suggestion-box h6{font-size:11px;color:#3b82f6;margin-bottom:8px}
        .suggestion-chip{display:inline-block;background:#fff;border:1px solid #3b82f6;color:#3b82f6;padding:6px 12px;border-radius:16px;font-size:12px;margin-right:6px;margin-bottom:6px;cursor:pointer}
        .suggestion-chip:hover{background:#3b82f6;color:#fff}
        
        /* Customer History */
        .history-item{padding:10px 0;border-bottom:1px solid #f0f0f0}
        .history-item:last-child{border:none}
        .history-item .date{font-size:11px;color:#999;margin-bottom:4px}
        .history-item .topic{font-size:13px;font-weight:500}
        .history-item .status{font-size:11px;color:#10b981}
        
        /* Agent Status Selector */
        .status-selector{display:flex;gap:8px;padding:12px;border-top:1px solid #e5e7eb;margin-top:auto}
        .status-option{flex:1;padding:8px;text-align:center;border-radius:6px;font-size:11px;cursor:pointer;border:1px solid #e5e7eb}
        .status-option.active{border-color:#3b82f6;background:#eff6ff}
        .status-option .dot{width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:4px}
        
        /* Typing indicator */
        .typing{display:flex;align-items:center;gap:6px;font-size:12px;color:#666;padding:8px 0}
        .typing-dots span{width:6px;height:6px;background:#999;border-radius:50%;display:inline-block;animation:bounce 1.4s infinite}
        .typing-dots span:nth-child(2){animation-delay:0.2s}
        .typing-dots span:nth-child(3){animation-delay:0.4s}
        @keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
    </style>
</head>
<body>
    <div class="page-header">
        <h1>Module 4: Agent Interface Screens</h1>
        <p>AGT-4.1 to AGT-4.4 Requirements Coverage</p>
    </div>


    <div class="screens-grid">
        <!-- Screen 1: Agent Dashboard Overview -->
        <div class="screen-card">
            <h3>4.1 Agent Dashboard - Conversation List (AGT-4.1.1, AGT-4.2.1)</h3>
            <div class="agent-layout">
                <div class="agent-nav">
                    <div class="nav-icon active" style="position:relative">💬<span class="badge">5</span></div>
                    <div class="nav-icon">📥</div>
                    <div class="nav-icon">📊</div>
                    <div class="nav-icon">⚙️</div>
                    <div style="margin-top:auto">
                        <div class="avatar" style="width:36px;height:36px;font-size:12px">SM</div>
                    </div>
                </div>
                <div class="agent-sidebar">
                    <div class="sidebar-header">
                        <h4>Conversations</h4>
                        <div class="sidebar-tabs">
                            <div class="sidebar-tab active">Mine (3)</div>
                            <div class="sidebar-tab">Queue (2)</div>
                        </div>
                    </div>
                    <div class="conv-list">
                        <div class="conv-item active">
                            <div class="header">
                                <span class="name">John Doe</span>
                                <span class="time">2m</span>
                            </div>
                            <div class="preview">Thanks, that fixed it! 🎉</div>
                            <div class="badges">
                                <span class="badge channel">💬 Chat</span>
                            </div>
                        </div>
                        <div class="conv-item">
                            <div class="header">
                                <span class="name">Sarah Miller</span>
                                <span class="badge unread">2</span>
                            </div>
                            <div class="preview">Can you check my refund status?</div>
                            <div class="badges">
                                <span class="badge channel">📧 Email</span>
                                <span class="badge priority">High</span>
                            </div>
                        </div>
                        <div class="conv-item">
                            <div class="header">
                                <span class="name">Mike Chen</span>
                                <span class="time">15m</span>
                            </div>
                            <div class="preview">Let me check that for you...</div>
                            <div class="badges">
                                <span class="badge channel">📱 WhatsApp</span>
                            </div>
                        </div>
                    </div>
                    <div class="status-selector">
                        <div class="status-option active"><span class="dot" style="background:#10b981"></span>Online</div>
                        <div class="status-option"><span class="dot" style="background:#f59e0b"></span>Busy</div>
                        <div class="status-option"><span class="dot" style="background:#9ca3af"></span>Away</div>
                    </div>
                </div>
                <div class="agent-main">
                    <div style="display:flex;align-items:center;justify-content:center;height:100%;flex-direction:column;color:#999">
                        <div style="font-size:48px;margin-bottom:12px">💬</div>
                        <p>Select a conversation to start</p>
                        <p style="font-size:12px;margin-top:4px">3 active conversations</p>
                    </div>
                </div>
            </div>
        </div>


        <!-- Screen 2: Active Conversation View -->
        <div class="screen-card">
            <h3>4.2 Conversation View - Messages (AGT-4.3.1, AGT-4.3.5, AGT-4.3.6)</h3>
            <div class="agent-layout">
                <div class="agent-nav">
                    <div class="nav-icon active" style="position:relative">💬<span class="badge">5</span></div>
                    <div class="nav-icon">📥</div>
                    <div class="nav-icon">📊</div>
                    <div class="nav-icon">⚙️</div>
                </div>
                <div class="agent-sidebar">
                    <div class="sidebar-header">
                        <h4>Conversations</h4>
                        <div class="sidebar-tabs">
                            <div class="sidebar-tab active">Mine (3)</div>
                            <div class="sidebar-tab">Queue (2)</div>
                        </div>
                    </div>
                    <div class="conv-list">
                        <div class="conv-item active">
                            <div class="header">
                                <span class="name">John Doe</span>
                                <span class="time">2m</span>
                            </div>
                            <div class="preview">Thanks, that fixed it!</div>
                        </div>
                        <div class="conv-item">
                            <div class="header">
                                <span class="name">Sarah Miller</span>
                                <span class="badge unread">2</span>
                            </div>
                            <div class="preview">Can you check my refund?</div>
                        </div>
                    </div>
                </div>
                <div class="agent-main">
                    <div class="main-header">
                        <div class="customer-info">
                            <div class="avatar">JD</div>
                            <div>
                                <h4>John Doe</h4>
                                <p><span class="status-dot online"></span>Online • john.doe@email.com</p>
                            </div>
                        </div>
                        <div class="header-actions">
                            <button class="btn btn-secondary btn-sm">📋 Transfer</button>
                            <button class="btn btn-success btn-sm">✓ Resolve</button>
                        </div>
                    </div>
                    <div class="messages-area">
                        <div class="message customer">
                            <div class="avatar">JD</div>
                            <div>
                                <div class="bubble">My webhook returns 403 on POST requests</div>
                                <div class="meta">2:40 PM</div>
                            </div>
                        </div>
                        <div class="message agent">
                            <div class="avatar">SM</div>
                            <div>
                                <div class="bubble">I see the issue. Your API key doesn't have write permissions. Let me fix that.</div>
                                <div class="meta">2:41 PM</div>
                            </div>
                        </div>
                        <div class="message agent">
                            <div class="avatar">SM</div>
                            <div>
                                <div class="bubble">Done! I've upgraded your key permissions. Try the POST request now.</div>
                                <div class="meta">2:42 PM</div>
                            </div>
                        </div>
                        <div class="message customer">
                            <div class="avatar">JD</div>
                            <div>
                                <div class="bubble">Thanks, that fixed it! 🎉</div>
                                <div class="meta">2:43 PM</div>
                            </div>
                        </div>
                    </div>
                    <div class="input-area">
                        <div class="input-row">
                            <textarea rows="2" placeholder="Type your message... (Enter to send)"></textarea>
                            <button class="btn btn-primary">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- Screen 3: Customer Info Panel -->
        <div class="screen-card">
            <h3>4.3 Customer Info & History (AGT-4.3.2, AGT-4.3.3)</h3>
            <div class="agent-layout">
                <div class="agent-nav">
                    <div class="nav-icon active">💬</div>
                    <div class="nav-icon">📥</div>
                </div>
                <div class="agent-sidebar" style="width:220px">
                    <div class="sidebar-header"><h4>Conversations</h4></div>
                    <div class="conv-list">
                        <div class="conv-item active">
                            <div class="name">John Doe</div>
                            <div class="preview">Thanks, that fixed it!</div>
                        </div>
                    </div>
                </div>
                <div class="agent-main" style="flex:1">
                    <div class="main-header">
                        <div class="customer-info">
                            <div class="avatar">JD</div>
                            <div><h4>John Doe</h4><p>john.doe@email.com</p></div>
                        </div>
                    </div>
                    <div class="messages-area" style="padding:12px">
                        <div class="message customer">
                            <div class="avatar">JD</div>
                            <div><div class="bubble">My webhook returns 403...</div></div>
                        </div>
                    </div>
                </div>
                <div class="right-panel">
                    <div class="panel-section">
                        <h5>Customer Info</h5>
                        <div class="info-row"><span class="label">Name</span><span>John Doe</span></div>
                        <div class="info-row"><span class="label">Email</span><span>john.doe@email.com</span></div>
                        <div class="info-row"><span class="label">Phone</span><span>+1 555-0123</span></div>
                        <div class="info-row"><span class="label">Company</span><span>Acme Corp</span></div>
                        <div class="info-row"><span class="label">Plan</span><span>Enterprise</span></div>
                        <div class="info-row"><span class="label">Customer Since</span><span>Jan 2023</span></div>
                    </div>
                    <div class="panel-section">
                        <h5>Tags</h5>
                        <span class="tag">VIP</span>
                        <span class="tag">API User</span>
                        <span class="tag">Enterprise</span>
                    </div>
                    <div class="panel-section">
                        <h5>AI Context</h5>
                        <div class="info-row"><span class="label">Intent</span><span>technical_support</span></div>
                        <div class="info-row"><span class="label">Confidence</span><span>47%</span></div>
                        <div class="info-row"><span class="label">Entities</span><span>error: 403</span></div>
                    </div>
                    <div class="panel-section">
                        <h5>Previous Conversations (3)</h5>
                        <div class="history-item">
                            <div class="date">Jan 10, 2025</div>
                            <div class="topic">API Rate Limiting</div>
                            <div class="status">✓ Resolved</div>
                        </div>
                        <div class="history-item">
                            <div class="date">Dec 15, 2024</div>
                            <div class="topic">Billing Question</div>
                            <div class="status">✓ Resolved</div>
                        </div>
                        <div class="history-item">
                            <div class="date">Nov 28, 2024</div>
                            <div class="topic">Account Setup</div>
                            <div class="status">✓ Resolved</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- Screen 4: Internal Notes -->
        <div class="screen-card">
            <h3>4.4 Internal Notes (AGT-4.4.2)</h3>
            <div class="agent-layout" style="height:400px">
                <div class="agent-nav">
                    <div class="nav-icon active">💬</div>
                </div>
                <div class="agent-sidebar" style="width:200px">
                    <div class="sidebar-header"><h4>Conversations</h4></div>
                    <div class="conv-list">
                        <div class="conv-item active">
                            <div class="name">John Doe</div>
                        </div>
                    </div>
                </div>
                <div class="agent-main">
                    <div class="main-header">
                        <div class="customer-info">
                            <div class="avatar">JD</div>
                            <div><h4>John Doe</h4></div>
                        </div>
                    </div>
                    <div class="messages-area">
                        <div class="message customer">
                            <div class="avatar">JD</div>
                            <div><div class="bubble">My webhook returns 403 on POST</div><div class="meta">2:40 PM</div></div>
                        </div>
                        
                        <div class="internal-note">
                            <div class="label">📝 Internal Note • Sarah M. • 2:41 PM</div>
                            Customer is on Enterprise plan. Checked their API settings - key only has read permissions. Need to upgrade to write access.
                        </div>
                        
                        <div class="message agent">
                            <div class="avatar">SM</div>
                            <div><div class="bubble">I see the issue. Your API key doesn't have write permissions.</div><div class="meta">2:41 PM</div></div>
                        </div>
                        
                        <div class="internal-note">
                            <div class="label">📝 Internal Note • Sarah M. • 2:42 PM</div>
                            Upgraded key permissions. Should work now. Follow up if issues persist.
                        </div>
                    </div>
                    <div class="input-area">
                        <div class="input-toolbar">
                            <button class="tool-btn" title="Add Note" style="background:#fef3c7">📝</button>
                            <button class="tool-btn" title="Canned Response">💬</button>
                            <button class="tool-btn" title="Attach File">📎</button>
                            <button class="tool-btn" title="Emoji">😊</button>
                        </div>
                        <div class="input-row">
                            <textarea rows="2" placeholder="Type message or click 📝 for internal note..."></textarea>
                            <button class="btn btn-primary">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- Screen 5: Canned Responses -->
        <div class="screen-card">
            <h3>4.5 Canned Responses</h3>
            <div class="agent-layout" style="height:420px">
                <div class="agent-nav">
                    <div class="nav-icon active">💬</div>
                </div>
                <div class="agent-sidebar" style="width:200px">
                    <div class="sidebar-header"><h4>Conversations</h4></div>
                    <div class="conv-list">
                        <div class="conv-item active"><div class="name">Sarah Miller</div></div>
                    </div>
                </div>
                <div class="agent-main">
                    <div class="main-header">
                        <div class="customer-info">
                            <div class="avatar">SM</div>
                            <div><h4>Sarah Miller</h4></div>
                        </div>
                    </div>
                    <div class="messages-area">
                        <div class="message customer">
                            <div class="avatar">SM</div>
                            <div><div class="bubble">Can you check my refund status?</div></div>
                        </div>
                    </div>
                    <div class="input-area">
                        <div style="margin-bottom:12px">
                            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
                                <span style="font-size:12px;font-weight:600">💬 Canned Responses</span>
                                <input type="text" placeholder="Search..." style="padding:4px 8px;border:1px solid #e5e7eb;border-radius:4px;font-size:11px;width:120px">
                            </div>
                            <div class="canned-list">
                                <div class="canned-item">
                                    <div class="title">Refund Status Check</div>
                                    <div class="preview">Let me check your refund status. Could you provide your order number?</div>
                                </div>
                                <div class="canned-item">
                                    <div class="title">Refund Processing Time</div>
                                    <div class="preview">Refunds typically take 5-7 business days to process...</div>
                                </div>
                                <div class="canned-item">
                                    <div class="title">Refund Confirmation</div>
                                    <div class="preview">Great news! Your refund of $XX has been processed...</div>
                                </div>
                            </div>
                        </div>
                        <div class="input-row">
                            <textarea rows="2" placeholder="Click a canned response to insert..."></textarea>
                            <button class="btn btn-primary">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- Screen 6: AI Suggested Responses -->
        <div class="screen-card">
            <h3>4.6 AI-Suggested Responses (AGT-4.4.4)</h3>
            <div class="agent-layout" style="height:420px">
                <div class="agent-nav">
                    <div class="nav-icon active">💬</div>
                </div>
                <div class="agent-sidebar" style="width:200px">
                    <div class="sidebar-header"><h4>Conversations</h4></div>
                    <div class="conv-list">
                        <div class="conv-item active"><div class="name">Sarah Miller</div></div>
                    </div>
                </div>
                <div class="agent-main">
                    <div class="main-header">
                        <div class="customer-info">
                            <div class="avatar">SM</div>
                            <div><h4>Sarah Miller</h4></div>
                        </div>
                    </div>
                    <div class="messages-area">
                        <div class="message customer">
                            <div class="avatar">SM</div>
                            <div><div class="bubble">How do I request a refund for my order?</div></div>
                        </div>
                        <div class="suggestion-box">
                            <h6>💡 AI Suggested Responses</h6>
                            <span class="suggestion-chip">To request a refund, go to Order History and click "Request Refund"</span>
                            <span class="suggestion-chip">I can process the refund for you. Which order?</span>
                            <span class="suggestion-chip">Refunds take 5-7 business days</span>
                            <div style="margin-top:10px;font-size:11px;color:#666">
                                📄 Related KB: <a href="#" style="color:#3b82f6">Refund Policy</a> • <a href="#" style="color:#3b82f6">How to Request Refund</a>
                            </div>
                        </div>
                    </div>
                    <div class="input-area">
                        <div class="input-row">
                            <textarea rows="2" placeholder="Click suggestion to insert or type your own..."></textarea>
                            <button class="btn btn-primary">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- Screen 7: Multiple Conversations -->
        <div class="screen-card">
            <h3>4.7 Multiple Active Conversations (AGT-4.2.2, AGT-4.2.3)</h3>
            <div class="agent-layout">
                <div class="agent-nav">
                    <div class="nav-icon active" style="position:relative">💬<span class="badge">4</span></div>
                    <div class="nav-icon">📥</div>
                </div>
                <div class="agent-sidebar">
                    <div class="sidebar-header">
                        <h4>My Conversations (4)</h4>
                    </div>
                    <div class="conv-list">
                        <div class="conv-item active">
                            <div class="header">
                                <span class="name">John Doe</span>
                                <span class="time">Active</span>
                            </div>
                            <div class="preview">Thanks, that fixed it!</div>
                            <div class="badges"><span class="badge channel">💬 Chat</span></div>
                        </div>
                        <div class="conv-item">
                            <div class="header">
                                <span class="name">Sarah Miller</span>
                                <span class="badge unread">3</span>
                            </div>
                            <div class="preview">Any update on the refund?</div>
                            <div class="badges">
                                <span class="badge channel">📧 Email</span>
                                <span class="badge priority">High</span>
                            </div>
                        </div>
                        <div class="conv-item">
                            <div class="header">
                                <span class="name">Mike Chen</span>
                                <span class="badge unread">1</span>
                            </div>
                            <div class="preview">Hello, are you there?</div>
                            <div class="badges"><span class="badge channel">📱 WhatsApp</span></div>
                        </div>
                        <div class="conv-item">
                            <div class="header">
                                <span class="name">Lisa Wong</span>
                                <span class="time">5m</span>
                            </div>
                            <div class="preview">Thank you!</div>
                            <div class="badges"><span class="badge channel">💬 Chat</span></div>
                        </div>
                    </div>
                    <div style="padding:12px;background:#fef3c7;font-size:12px;color:#92400e">
                        ⚠️ 2 conversations need attention
                    </div>
                </div>
                <div class="agent-main">
                    <div class="main-header">
                        <div class="customer-info">
                            <div class="avatar">JD</div>
                            <div><h4>John Doe</h4><p>Active now</p></div>
                        </div>
                        <div class="header-actions">
                            <button class="btn btn-success btn-sm">✓ Resolve</button>
                        </div>
                    </div>
                    <div class="messages-area">
                        <div class="message customer">
                            <div class="avatar">JD</div>
                            <div><div class="bubble">Thanks, that fixed it! 🎉</div></div>
                        </div>
                        <div class="typing">
                            <div class="typing-dots"><span></span><span></span><span></span></div>
                            John is typing...
                        </div>
                    </div>
                    <div class="input-area">
                        <div class="input-row">
                            <textarea rows="2" placeholder="Type your message..."></textarea>
                            <button class="btn btn-primary">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- Screen 8: Resolve Conversation -->
        <div class="screen-card">
            <h3>4.8 Resolve Conversation (AGT-4.4.1)</h3>
            <div style="display:flex;gap:20px;align-items:flex-start">
                <div style="flex:1">
                    <div style="background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:20px;max-width:400px">
                        <h4 style="font-size:16px;margin-bottom:16px">✓ Resolve Conversation</h4>
                        <div style="margin-bottom:14px">
                            <label style="display:block;font-size:12px;font-weight:600;margin-bottom:6px">Resolution Type</label>
                            <select style="width:100%;padding:10px;border:1px solid #e5e7eb;border-radius:6px;font-size:13px">
                                <option>Resolved - Issue fixed</option>
                                <option>Closed - No action needed</option>
                                <option>Spam - Mark as spam</option>
                            </select>
                        </div>
                        <div style="margin-bottom:14px">
                            <label style="display:block;font-size:12px;font-weight:600;margin-bottom:6px">Resolution Note</label>
                            <textarea style="width:100%;padding:10px;border:1px solid #e5e7eb;border-radius:6px;font-size:13px;resize:none" rows="3" placeholder="Brief summary of resolution...">Upgraded API key permissions to include write access. Customer confirmed webhook now working.</textarea>
                        </div>
                        <div style="margin-bottom:14px">
                            <label style="display:block;font-size:12px;font-weight:600;margin-bottom:6px">Tags</label>
                            <div>
                                <span class="tag">API</span>
                                <span class="tag">Permissions</span>
                                <span class="tag" style="background:#dcfce7;color:#166534">Resolved</span>
                            </div>
                        </div>
                        <div style="margin-bottom:14px">
                            <label style="display:flex;align-items:center;gap:8px;font-size:13px;cursor:pointer">
                                <input type="checkbox" checked> Send closing message to customer
                            </label>
                        </div>
                        <div style="display:flex;gap:10px;justify-content:flex-end">
                            <button class="btn btn-secondary">Cancel</button>
                            <button class="btn btn-success">Resolve</button>
                        </div>
                    </div>
                </div>
                <div style="flex:1">
                    <div style="background:#f8f9fa;border-radius:8px;padding:16px">
                        <h5 style="font-size:13px;margin-bottom:12px">Conversation Summary</h5>
                        <div class="info-row"><span class="label">Customer</span><span>John Doe</span></div>
                        <div class="info-row"><span class="label">Duration</span><span>8 minutes</span></div>
                        <div class="info-row"><span class="label">Messages</span><span>6</span></div>
                        <div class="info-row"><span class="label">Channel</span><span>Web Chat</span></div>
                        <div class="info-row"><span class="label">AI Handled</span><span>2 messages</span></div>
                        <div class="info-row"><span class="label">Agent Handled</span><span>4 messages</span></div>
                    </div>
                </div>
            </div>
        </div>


        <!-- Screen 9: Transfer Conversation -->
        <div class="screen-card">
            <h3>4.9 Transfer Conversation (AGT-4.4.3)</h3>
            <div style="display:flex;justify-content:center;padding:20px">
                <div style="background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:20px;width:400px">
                    <h4 style="font-size:16px;margin-bottom:16px">📋 Transfer Conversation</h4>
                    <div style="margin-bottom:14px">
                        <label style="display:block;font-size:12px;font-weight:600;margin-bottom:6px">Transfer To</label>
                        <select style="width:100%;padding:10px;border:1px solid #e5e7eb;border-radius:6px;font-size:13px">
                            <option value="">Select agent or team...</option>
                            <optgroup label="Available Agents">
                                <option>🟢 Mike Johnson (0 chats)</option>
                                <option>🟢 Emily Davis (1 chat)</option>
                                <option>🟡 Tom Wilson (3 chats)</option>
                            </optgroup>
                            <optgroup label="Teams">
                                <option>Technical Support</option>
                                <option>Billing Team</option>
                                <option>Sales Team</option>
                            </optgroup>
                        </select>
                    </div>
                    <div style="margin-bottom:14px">
                        <label style="display:block;font-size:12px;font-weight:600;margin-bottom:6px">Internal Note for Next Agent</label>
                        <textarea style="width:100%;padding:10px;border:1px solid #e5e7eb;border-radius:6px;font-size:13px;resize:none" rows="3" placeholder="Add context for the next agent..."></textarea>
                    </div>
                    <div style="background:#f8f9fa;border-radius:6px;padding:12px;margin-bottom:14px;font-size:12px">
                        <strong>Transfer Note:</strong> The customer and the receiving agent will be notified of the transfer.
                    </div>
                    <div style="display:flex;gap:10px;justify-content:flex-end">
                        <button class="btn btn-secondary">Cancel</button>
                        <button class="btn btn-primary">Transfer</button>
                    </div>
                </div>
            </div>
        </div>


        <!-- Screen 10: Agent Performance Stats -->
        <div class="screen-card">
            <h3>4.10 Agent Stats Dashboard</h3>
            <div class="agent-layout" style="height:400px">
                <div class="agent-nav">
                    <div class="nav-icon">💬</div>
                    <div class="nav-icon active">📊</div>
                    <div class="nav-icon">⚙️</div>
                </div>
                <div class="agent-main" style="padding:20px;background:#f8f9fa">
                    <h4 style="margin-bottom:16px">My Performance - Today</h4>
                    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:20px">
                        <div style="background:#fff;padding:16px;border-radius:8px;border-left:4px solid #3b82f6">
                            <div style="font-size:12px;color:#666">Conversations</div>
                            <div style="font-size:28px;font-weight:700">12</div>
                            <div style="font-size:11px;color:#10b981">↑ 3 from yesterday</div>
                        </div>
                        <div style="background:#fff;padding:16px;border-radius:8px;border-left:4px solid #10b981">
                            <div style="font-size:12px;color:#666">Resolved</div>
                            <div style="font-size:28px;font-weight:700">9</div>
                            <div style="font-size:11px;color:#666">75% resolution rate</div>
                        </div>
                        <div style="background:#fff;padding:16px;border-radius:8px;border-left:4px solid #f59e0b">
                            <div style="font-size:12px;color:#666">Avg Handle Time</div>
                            <div style="font-size:28px;font-weight:700">4:32</div>
                            <div style="font-size:11px;color:#10b981">↓ 30s faster</div>
                        </div>
                        <div style="background:#fff;padding:16px;border-radius:8px;border-left:4px solid #8b5cf6">
                            <div style="font-size:12px;color:#666">CSAT Score</div>
                            <div style="font-size:28px;font-weight:700">4.8</div>
                            <div style="font-size:11px;color:#666">Based on 7 ratings</div>
                        </div>
                    </div>
                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
                        <div style="background:#fff;padding:16px;border-radius:8px">
                            <h5 style="font-size:13px;margin-bottom:12px">Recent Activity</h5>
                            <div style="font-size:12px">
                                <div style="padding:8px 0;border-bottom:1px solid #f0f0f0">✓ Resolved chat with John Doe <span style="color:#999">2m ago</span></div>
                                <div style="padding:8px 0;border-bottom:1px solid #f0f0f0">💬 Claimed conversation from queue <span style="color:#999">15m ago</span></div>
                                <div style="padding:8px 0;border-bottom:1px solid #f0f0f0">📋 Transferred to Technical Team <span style="color:#999">25m ago</span></div>
                                <div style="padding:8px 0">✓ Resolved chat with Lisa Wong <span style="color:#999">32m ago</span></div>
                            </div>
                        </div>
                        <div style="background:#fff;padding:16px;border-radius:8px">
                            <h5 style="font-size:13px;margin-bottom:12px">Queue Status</h5>
                            <div class="info-row"><span class="label">Waiting</span><span style="color:#ef4444;font-weight:600">3 customers</span></div>
                            <div class="info-row"><span class="label">Avg Wait Time</span><span>1:45</span></div>
                            <div class="info-row"><span class="label">Agents Online</span><span>5</span></div>
                            <div class="info-row"><span class="label">Your Status</span><span><span class="status-dot online"></span>Online</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>

# Module 5: Admin Dashboard

Module 5: Admin Dashboard# Module 5: Admin Dashboard - Detailed Functional Requirements

Module 5: Admin Dashboard - Detailed Functional Requirements
Document Info
Module: Admin Dashboard | Version: 1.0 | Status: Approved
________________


1. Authentication
  
  
  
  

Document Info
Module: Admin Dashboard | Version: 1.1 | Status: Approved
________________


1. Authentication
1.1 Login Page
ID
	Requirement
	Details
	ADM-1.1.1
	Login form
	Display email and password fields
	ADM-1.1.2
	Email field
	Text input with email validation
	ADM-1.1.3
	Password field
	Masked input field
	ADM-1.1.4
	Remember me
	Checkbox to extend session
	ADM-1.1.5
	Login button
	Submit form on click
	ADM-1.1.6
	Enter to submit
	Submit form on Enter key
	ADM-1.1.7
	Forgot password
	Link to password reset flow
	ADM-1.1.8
	Branding
	Company logo and name
	1.2 Login Validation
ID
	Requirement
	Details
	ADM-1.2.1
	Required fields
	Both email and password required
	ADM-1.2.2
	Email format
	Validate email format
	ADM-1.2.3
	Invalid credentials
	Show error for wrong email/password
	ADM-1.2.4
	Account locked
	Show message after 5 failed attempts
	ADM-1.2.5
	Account disabled
	Show message if account deactivated
	ADM-1.2.6
	Error display
	Red border on invalid fields
	1.3 Login Security
ID
	Requirement
	Details
	ADM-1.3.1
	Rate limiting
	Max 5 attempts per minute
	ADM-1.3.2
	Lockout
	15-minute lockout after 5 failures
	ADM-1.3.3
	HTTPS only
	All login traffic encrypted
	ADM-1.3.4
	CSRF protection
	Token validation on submit
	ADM-1.3.5
	Password hashing
	Never transmit plain password
	User Stories - Authentication
US-1.1: Admin Login
AS AN administrator
I WANT TO log in with my email and password
SO THAT I can access the admin dashboard securely


US-1.2: Remember Me
AS AN administrator
I WANT TO stay logged in across browser sessions
SO THAT I don't have to log in every time I open the dashboard


US-1.3: Password Recovery
AS AN administrator who forgot my password
I WANT TO reset my password via email
SO THAT I can regain access to my account


US-1.4: Account Security
AS A system administrator
I WANT failed login attempts to trigger account lockout
SO THAT brute force attacks are prevented


Acceptance Criteria - Authentication
AC-1.1: Successful Login
GIVEN I am on the login page
WHEN I enter valid email "admin@company.com" and correct password
AND I click the "Sign In" button
THEN I should be redirected to the dashboard home page
AND I should see my name in the header
AND a session should be created with 7-day expiry


AC-1.2: Invalid Credentials
GIVEN I am on the login page
WHEN I enter email "admin@company.com" and incorrect password
AND I click the "Sign In" button
THEN I should see error message "Invalid email or password"
AND the password field should be cleared
AND the email field should retain its value
AND both fields should have red border


AC-1.3: Empty Fields Validation
GIVEN I am on the login page
WHEN I click "Sign In" without entering email or password
THEN I should see "Email is required" error
AND I should see "Password is required" error
AND I should remain on the login page


AC-1.4: Account Lockout
GIVEN I have failed login 4 times
WHEN I enter incorrect password for the 5th time
THEN I should see message "Account locked. Try again in 15 minutes"
AND further login attempts should be blocked for 15 minutes
AND an email notification should be sent to the account owner


AC-1.5: Remember Me Function
GIVEN I am on the login page
WHEN I check "Remember me" and log in successfully
THEN my session should expire in 30 days instead of 7 days
AND I should remain logged in after closing and reopening browser


AC-1.6: Logout
GIVEN I am logged into the admin dashboard
WHEN I click the "Logout" button
THEN I should be redirected to the login page
AND my session should be invalidated
AND attempting to access dashboard pages should redirect to login


________________


2. Session Management
2.1 Session Creation
ID
	Requirement
	Details
	ADM-2.1.1
	JWT token
	Generate JWT on successful login
	ADM-2.1.2
	Token storage
	Store in httpOnly cookie
	ADM-2.1.3
	Session record
	Create session in database
	ADM-2.1.4
	Login timestamp
	Record login time
	ADM-2.1.5
	Device info
	Store browser/device info
	2.2 Session Duration
ID
	Requirement
	Details
	ADM-2.2.1
	Default expiry
	7 days from login
	ADM-2.2.2
	Remember me expiry
	30 days if checkbox selected
	ADM-2.2.3
	Activity extension
	Extend on activity (sliding window)
	ADM-2.2.4
	Idle timeout
	Warn after 30 min idle
	ADM-2.2.5
	Force logout
	Logout after 60 min idle
	2.3 Session Display
ID
	Requirement
	Details
	ADM-2.3.1
	Session info
	Show session start time
	ADM-2.3.2
	Expiry info
	Show when session expires
	ADM-2.3.3
	Last activity
	Show last activity time
	ADM-2.3.4
	Expiry warning
	Show warning when near expiry
	2.4 Logout
ID
	Requirement
	Details
	ADM-2.4.1
	Logout button
	Visible in sidebar/header
	ADM-2.4.2
	Confirm logout
	Optional confirmation prompt
	ADM-2.4.3
	Clear session
	Invalidate token on server
	ADM-2.4.4
	Clear cookies
	Remove auth cookies
	ADM-2.4.5
	Redirect
	Redirect to login page
	ADM-2.4.6
	Logout all
	Option to logout all sessions
	User Stories - Session Management
US-2.1: Session Persistence
AS AN administrator
I WANT TO my session to persist when I refresh the page
SO THAT I don't lose my work or context


US-2.2: Idle Timeout Warning
AS AN administrator
I WANT TO be warned before my session expires due to inactivity
SO THAT I can extend my session if I'm still working


US-2.3: Session Information
AS AN administrator
I WANT TO see when my session started and when it will expire
SO THAT I can plan my work accordingly


US-2.4: Logout All Devices
AS AN administrator concerned about security
I WANT TO log out from all devices at once
SO THAT I can secure my account if I suspect unauthorized access


Acceptance Criteria - Session Management
AC-2.1: Session Persistence
GIVEN I am logged into the dashboard
WHEN I refresh the browser page
THEN I should remain logged in
AND I should be on the same page I was viewing


AC-2.2: Idle Timeout Warning
GIVEN I am logged into the dashboard
WHEN I have been idle for 30 minutes
THEN I should see a warning modal "Your session will expire in 30 minutes"
AND the modal should have "Stay Logged In" and "Logout" buttons
WHEN I click "Stay Logged In"
THEN the session timeout should reset


AC-2.3: Automatic Logout
GIVEN I received an idle timeout warning
WHEN I do not respond for 30 more minutes (60 min total idle)
THEN I should be automatically logged out
AND I should see message "Session expired due to inactivity"
AND I should be redirected to the login page


AC-2.4: Session Information Display
GIVEN I am logged into the dashboard
WHEN I navigate to the session information page
THEN I should see "Session started: [date and time]"
AND I should see "Session expires: [date and time]"
AND I should see "Last activity: [relative time]"


AC-2.5: Logout All Sessions
GIVEN I am logged into the dashboard on multiple devices
WHEN I click "Logout from all devices"
THEN all my sessions should be invalidated
AND I should be logged out on the current device
AND attempting to access on other devices should redirect to login


________________


3. Dashboard Layout
3.1 Navigation Sidebar
ID
	Requirement
	Details
	ADM-3.1.1
	Fixed sidebar
	Always visible on left
	ADM-3.1.2
	Logo
	Company logo at top
	ADM-3.1.3
	Nav sections
	Grouped navigation items
	ADM-3.1.4
	Active indicator
	Highlight current page
	ADM-3.1.5
	Badges
	Show counts (e.g., queue length)
	ADM-3.1.6
	Collapse option
	Minimize to icons only
	ADM-3.1.7
	User profile
	User avatar and name at bottom
	3.2 Navigation Items
Section
	Items
	Overview
	Dashboard, Conversations
	Manage
	Knowledge Base, AI Config, Team
	Settings
	Settings, Audit Log
	3.3 Main Content Area
ID
	Requirement
	Details
	ADM-3.3.1
	Header bar
	Page title and actions
	ADM-3.3.2
	Breadcrumbs
	Navigation path (optional)
	ADM-3.3.3
	Content area
	Scrollable main content
	ADM-3.3.4
	Responsive
	Adapt to screen size
	User Stories - Dashboard Layout
US-3.1: Navigation
AS AN administrator
I WANT TO navigate between different sections easily
SO THAT I can access all admin features efficiently


US-3.2: Quick Status View
AS AN administrator
I WANT TO see queue counts in the navigation
SO THAT I can quickly assess if there are urgent issues


US-3.3: Collapsed Navigation
AS AN administrator working on a small screen
I WANT TO collapse the sidebar
SO THAT I have more space for the main content


Acceptance Criteria - Dashboard Layout
AC-3.1: Navigation Highlighting
GIVEN I am on the dashboard
WHEN I click "Conversations" in the sidebar
THEN I should be navigated to the Conversations page
AND "Conversations" should be highlighted as active
AND other nav items should not be highlighted


AC-3.2: Badge Updates
GIVEN I am viewing the dashboard
WHEN a new conversation enters the queue
THEN the badge count on "Conversations" should increment
AND the update should happen without page refresh


AC-3.3: Sidebar Collapse
GIVEN the sidebar is expanded
WHEN I click the collapse button
THEN the sidebar should minimize to show only icons
AND hovering over icons should show tooltips with labels
AND clicking an icon should navigate to that section


AC-3.4: Responsive Layout
GIVEN I am viewing on a tablet (768px width)
WHEN the page loads
THEN the sidebar should be collapsed by default
AND I should be able to expand it via menu button


________________


4. Dashboard Home
4.1 Key Metrics Cards
Metric
	Description
	Update Frequency
	Active Conversations
	Currently open conversations
	Real-time
	Resolved Today
	Conversations resolved today
	Real-time
	AI Automation Rate
	% handled by AI without human
	Every 5 min
	Avg Response Time
	Average first response time
	Every 5 min
	4.2 Metric Card Display
ID
	Requirement
	Details
	ADM-4.2.1
	Card layout
	4 cards in row
	ADM-4.2.2
	Metric label
	Description of metric
	ADM-4.2.3
	Metric value
	Large number display
	ADM-4.2.4
	Trend indicator
	Up/down arrow with percentage
	ADM-4.2.5
	Comparison
	vs. previous period
	ADM-4.2.6
	Color coding
	Green for positive, red for negative
	4.3 Real-time Widgets
ID
	Requirement
	Details
	ADM-4.3.1
	Live indicator
	Pulsing dot showing real-time
	ADM-4.3.2
	Active count
	Current active conversations
	ADM-4.3.3
	Queue status
	Customers waiting in queue
	ADM-4.3.4
	Avg wait time
	Average queue wait time
	ADM-4.3.5
	Agents online
	Count of available agents
	ADM-4.3.6
	Auto-refresh
	Update without page reload
	4.4 Charts
ID
	Requirement
	Details
	ADM-4.4.1
	Conversation volume
	Bar/line chart over time
	ADM-4.4.2
	Time axis
	Hours (today) or days (7/30 day)
	ADM-4.4.3
	Hover details
	Show exact values on hover
	ADM-4.4.4
	Legend
	Show what each line/bar means
	User Stories - Dashboard Home
US-4.1: At-a-Glance Overview
AS AN administrator
I WANT TO see key metrics immediately when I open the dashboard
SO THAT I can quickly assess the state of customer support


US-4.2: Trend Analysis
AS AN administrator
I WANT TO see how metrics compare to the previous period
SO THAT I can identify improvements or concerns


US-4.3: Real-time Monitoring
AS AN administrator
I WANT TO see live updates of active conversations and queue
SO THAT I can respond quickly to high-volume periods


US-4.4: Visual Analytics
AS AN administrator
I WANT TO see conversation volume as a chart
SO THAT I can identify patterns and peak times


US-4.5: Agent Availability
AS AN administrator
I WANT TO see how many agents are online
SO THAT I can ensure adequate coverage


Acceptance Criteria - Dashboard Home
AC-4.1: Metrics Display
GIVEN I navigate to the Dashboard home page
WHEN the page loads
THEN I should see 4 metric cards:
  - "Active Conversations" with current count
  - "Resolved Today" with today's resolved count
  - "AI Automation Rate" as percentage
  - "Avg Response Time" in seconds/minutes
AND each card should show trend indicator (↑ or ↓)
AND each card should show comparison percentage


AC-4.2: Trend Color Coding
GIVEN I am viewing the dashboard metrics
WHEN "Resolved Today" is higher than yesterday
THEN the trend should show "↑ X%" in green
WHEN "Avg Response Time" is higher than yesterday
THEN the trend should show "↑ X%" in red (higher is worse)


AC-4.3: Real-time Updates
GIVEN I am viewing the dashboard
WHEN a new conversation is opened
THEN "Active Conversations" should increment within 2 seconds
AND I should see the pulsing "live" indicator
AND no page refresh should be required


AC-4.4: Queue Alert
GIVEN I am viewing the dashboard
WHEN queue length exceeds 10 customers
THEN the queue widget should show warning styling (orange/red)
AND I should receive an in-app notification


AC-4.5: Chart Interaction
GIVEN I am viewing the conversation volume chart
WHEN I hover over a bar/point
THEN I should see a tooltip with:
  - Date/time
  - Exact conversation count
  - Comparison to same period last week


AC-4.6: Chart Time Periods
GIVEN I am viewing the dashboard with "Today" filter
WHEN I look at the chart
THEN the X-axis should show hours (12AM, 6AM, 12PM, 6PM)
GIVEN I select "7 Days" filter
WHEN I look at the chart
THEN the X-axis should show days (Mon, Tue, Wed...)


________________


5. Conversation Analytics
5.1 Status Distribution
Status
	Description
	Open
	Active, being handled
	Escalated
	Waiting for human agent
	Resolved
	Issue fixed, closed
	Closed
	Closed without resolution
	5.2 Status Metrics
ID
	Requirement
	Details
	ADM-5.2.1
	Count per status
	Show number in each status
	ADM-5.2.2
	Percentage
	Show % of total
	ADM-5.2.3
	Progress bar
	Visual bar representation
	ADM-5.2.4
	Status chart
	Donut/pie chart of distribution
	5.3 Handler Distribution
ID
	Requirement
	Details
	ADM-5.3.1
	AI handled
	Count/% handled by AI only
	ADM-5.3.2
	Human handled
	Count/% requiring human
	ADM-5.3.3
	Hybrid
	Count/% started AI, finished human
	ADM-5.3.4
	Visual chart
	Bar or donut chart
	5.4 Channel Distribution
ID
	Requirement
	Details
	ADM-5.4.1
	By channel
	Breakdown by Chat/Email/WhatsApp
	ADM-5.4.2
	Volume per channel
	Count for each channel
	ADM-5.4.3
	Channel chart
	Visual representation
	User Stories - Conversation Analytics
US-5.1: Status Overview
AS AN administrator
I WANT TO see the distribution of conversations by status
SO THAT I can understand workload and identify bottlenecks


US-5.2: AI Effectiveness
AS AN administrator
I WANT TO see what percentage of conversations AI handles alone
SO THAT I can measure AI effectiveness and ROI


US-5.3: Channel Analysis
AS AN administrator
I WANT TO see conversation volume by channel
SO THAT I can allocate resources appropriately


Acceptance Criteria - Conversation Analytics
AC-5.1: Status Distribution Display
GIVEN I am viewing the Analytics page
WHEN the page loads
THEN I should see status cards showing:
  - Open: [count] ([percentage]%)
  - Escalated: [count] ([percentage]%)
  - Resolved: [count] ([percentage]%)
  - Closed: [count] ([percentage]%)
AND percentages should sum to 100%
AND a donut chart should visualize the distribution


AC-5.2: Handler Distribution
GIVEN I am viewing the Analytics page
WHEN I look at the handler distribution
THEN I should see:
  - "AI Handled: X%" with progress bar
  - "Human Handled: Y%" with progress bar
AND X + Y should equal 100%
AND the target (70% AI) should be indicated


AC-5.3: Clicking Status for Details
GIVEN I am viewing the status distribution
WHEN I click on "Escalated" status card
THEN I should be navigated to Conversations page
AND the filter should be pre-set to "Status: Escalated"


________________


6. Date Filtering
6.1 Quick Filters
Filter
	Date Range
	Today
	Current day (midnight to now)
	7 Days
	Last 7 days including today
	30 Days
	Last 30 days including today
	Custom
	User-defined range
	6.2 Filter Controls
ID
	Requirement
	Details
	ADM-6.2.1
	Quick filter buttons
	Toggle buttons for presets
	ADM-6.2.2
	Active indicator
	Highlight selected filter
	ADM-6.2.3
	Custom date picker
	Date range selector
	ADM-6.2.4
	Start date
	Date picker for start
	ADM-6.2.5
	End date
	Date picker for end
	ADM-6.2.6
	Apply button
	Apply custom range
	ADM-6.2.7
	Clear filter
	Reset to default
	6.3 Filter Behavior
ID
	Requirement
	Details
	ADM-6.3.1
	Instant update
	Update dashboard on filter change
	ADM-6.3.2
	Persist filter
	Remember filter during session
	ADM-6.3.3
	URL params
	Reflect filter in URL
	ADM-6.3.4
	Comparison
	Show vs. previous period
	User Stories - Date Filtering
US-6.1: Quick Date Selection
AS AN administrator
I WANT TO quickly switch between Today, 7 Days, and 30 Days views
SO THAT I can analyze different time periods efficiently


US-6.2: Custom Date Range
AS AN administrator
I WANT TO select a custom date range
SO THAT I can analyze specific periods (e.g., last month, Q4)


US-6.3: Share Filtered View
AS AN administrator
I WANT the date filter to be reflected in the URL
SO THAT I can share specific views with colleagues


Acceptance Criteria - Date Filtering
AC-6.1: Quick Filter Selection
GIVEN I am on the dashboard with "Today" selected
WHEN I click "7 Days" button
THEN "7 Days" button should be highlighted
AND "Today" button should be unhighlighted
AND all metrics should update to show last 7 days data
AND the change should happen without page reload


AC-6.2: Custom Date Range
GIVEN I click "Custom" date filter
WHEN I select start date "Jan 1, 2025" and end date "Jan 15, 2025"
AND I click "Apply"
THEN all metrics should update to show data for Jan 1-15
AND the date range should display "Jan 1 - Jan 15, 2025"


AC-6.3: Filter Persistence
GIVEN I select "7 Days" filter on the dashboard
WHEN I navigate to Conversations page and back to Dashboard
THEN the "7 Days" filter should still be selected


AC-6.4: URL Parameters
GIVEN I select "7 Days" filter
WHEN I check the URL
THEN it should contain "?period=7days"
GIVEN I copy this URL and open in new tab
THEN the dashboard should load with "7 Days" filter active


AC-6.5: Invalid Date Range
GIVEN I am selecting a custom date range
WHEN I select an end date before the start date
THEN I should see error "End date must be after start date"
AND the Apply button should be disabled


________________


7. Conversation Management
7.1 Conversation List
ID
	Requirement
	Details
	ADM-7.1.1
	Table display
	Show conversations in table
	ADM-7.1.2
	Pagination
	20 per page, page navigation
	ADM-7.1.3
	Total count
	Show total conversations
	ADM-7.1.4
	Sortable columns
	Click header to sort
	ADM-7.1.5
	Default sort
	Newest first
	7.2 Table Columns
Column
	Description
	Customer
	Name, email, avatar
	Subject
	Conversation topic/preview
	Status
	Open/Escalated/Resolved badge
	Handler
	AI or Agent name
	Channel
	Chat/Email/WhatsApp icon
	Time
	Relative time (2 min ago)
	Action
	View/Assign buttons
	7.3 Filters
ID
	Requirement
	Details
	ADM-7.3.1
	Status filter
	Dropdown: All/Open/Escalated/Resolved
	ADM-7.3.2
	Handler filter
	Dropdown: All/AI/Human
	ADM-7.3.3
	Channel filter
	Dropdown: All/Chat/Email/WhatsApp
	ADM-7.3.4
	Agent filter
	Dropdown: All agents
	ADM-7.3.5
	Date filter
	Date range selector
	7.4 Search
ID
	Requirement
	Details
	ADM-7.4.1
	Search box
	Text input for search
	ADM-7.4.2
	Search by name
	Match customer name
	ADM-7.4.3
	Search by email
	Match customer email
	ADM-7.4.4
	Search by content
	Match message content
	ADM-7.4.5
	Instant search
	Filter as user types
	ADM-7.4.6
	Clear search
	X button to clear
	User Stories - Conversation Management
US-7.1: View All Conversations
AS AN administrator
I WANT TO see a list of all conversations
SO THAT I can monitor support activity


US-7.2: Filter Conversations
AS AN administrator
I WANT TO filter conversations by status, handler, and channel
SO THAT I can focus on specific types of conversations


US-7.3: Search Conversations
AS AN administrator
I WANT TO search for conversations by customer name or email
SO THAT I can quickly find specific customer interactions


US-7.4: Sort Conversations
AS AN administrator
I WANT TO sort conversations by different columns
SO THAT I can prioritize viewing (e.g., oldest escalated first)


US-7.5: Assign Escalated Conversations
AS AN administrator
I WANT TO assign escalated conversations to available agents
SO THAT customers get help quickly


Acceptance Criteria - Conversation Management
AC-7.1: Conversation List Display
GIVEN I navigate to the Conversations page
WHEN the page loads
THEN I should see a table with columns: Customer, Subject, Status, Handler, Channel, Time, Action
AND conversations should be sorted by newest first
AND I should see "Showing 1-20 of [total]" at the bottom
AND pagination controls should be visible


AC-7.2: Status Filter
GIVEN I am on the Conversations page with all statuses shown
WHEN I select "Escalated" from the Status dropdown
THEN only conversations with "Escalated" status should be shown
AND the total count should update to show filtered count
AND other filters should remain unchanged


AC-7.3: Multi-Filter
GIVEN I am on the Conversations page
WHEN I select "Escalated" status AND "Chat" channel
THEN only escalated chat conversations should be shown
AND clearing one filter should still apply the other


AC-7.4: Search Functionality
GIVEN I am on the Conversations page
WHEN I type "john@email.com" in the search box
THEN conversations should filter as I type
AND only conversations from john@email.com should be shown
AND search should match against customer name, email, and message content


AC-7.5: Column Sorting
GIVEN I am on the Conversations page
WHEN I click the "Time" column header
THEN conversations should sort by oldest first
AND an arrow indicator should show sort direction
WHEN I click "Time" again
THEN conversations should sort by newest first


AC-7.6: Pagination
GIVEN there are 50 conversations
WHEN I am on page 1 showing items 1-20
AND I click "Next" or page "2"
THEN I should see items 21-40
AND "Showing 21-40 of 50" should display


AC-7.7: Empty State
GIVEN I apply filters that match no conversations
WHEN the page updates
THEN I should see message "No conversations found"
AND I should see suggestion "Try adjusting your filters"


________________


8. Conversation Detail View
8.1 Detail Header
ID
	Requirement
	Details
	ADM-8.1.1
	Back button
	Return to conversation list
	ADM-8.1.2
	Conversation ID
	Display conversation number
	ADM-8.1.3
	Status badge
	Current status
	ADM-8.1.4
	Export button
	Export conversation transcript
	8.2 Message History
ID
	Requirement
	Details
	ADM-8.2.1
	Full transcript
	All messages in conversation
	ADM-8.2.2
	Customer messages
	Distinct style for customer
	ADM-8.2.3
	AI messages
	Labeled with AI indicator
	ADM-8.2.4
	Agent messages
	Show agent name
	ADM-8.2.5
	System messages
	Escalation, transfer notices
	ADM-8.2.6
	Timestamps
	Time for each message
	ADM-8.2.7
	Internal notes
	Show agent notes (highlighted)
	8.3 Conversation Info Panel
Field
	Description
	Customer
	Name and email
	Channel
	Source channel
	Duration
	Total conversation time
	Messages
	Message count
	Handled by
	AI → Agent name
	CSAT
	Customer rating if given
	8.4 AI Analysis Panel
Field
	Description
	Detected intent
	Primary intent
	Confidence
	AI confidence score
	Entities
	Extracted entities
	Escalation reason
	Why escalated (if applicable)
	KB articles used
	Articles referenced
	User Stories - Conversation Detail
US-8.1: View Conversation Detail
AS AN administrator
I WANT TO view the full transcript of a conversation
SO THAT I can understand what happened and evaluate quality


US-8.2: Understand AI Decisions
AS AN administrator
I WANT TO see why AI made certain decisions (intent, escalation)
SO THAT I can improve AI configuration


US-8.3: Export Conversation
AS AN administrator
I WANT TO export a conversation transcript
SO THAT I can share it or keep records outside the system


US-8.4: Review Agent Performance
AS AN administrator
I WANT TO see which agent handled a conversation and the outcome
SO THAT I can evaluate agent performance


Acceptance Criteria - Conversation Detail
AC-8.1: View Conversation
GIVEN I am on the Conversations list
WHEN I click "View" on a conversation row
THEN I should be navigated to the conversation detail page
AND I should see the full message history
AND messages should be in chronological order


AC-8.2: Message Display
GIVEN I am viewing a conversation detail
WHEN I look at the message history
THEN customer messages should be left-aligned with customer avatar
AND AI messages should be right-aligned with "AI" badge
AND agent messages should be right-aligned with agent name
AND each message should show timestamp
AND system messages (escalation, transfer) should be centered


AC-8.3: Internal Notes
GIVEN a conversation has internal notes from agents
WHEN I view the conversation detail
THEN internal notes should display inline with messages
AND notes should have distinct yellow background
AND notes should show which agent wrote them


AC-8.4: AI Analysis Display
GIVEN I am viewing a conversation that was escalated
WHEN I look at the AI Analysis panel
THEN I should see:
  - Detected intent: [intent name]
  - Confidence: [percentage]
  - Escalation reason: [reason]
  - Entities found: [list]


AC-8.5: Export Conversation
GIVEN I am viewing a conversation detail
WHEN I click "Export" button
THEN I should see format options (PDF, CSV, TXT)
WHEN I select PDF and click download
THEN a PDF file should download containing:
  - Conversation ID and date
  - Customer information
  - Full message transcript
  - AI analysis summary


AC-8.6: Back Navigation
GIVEN I am viewing a conversation detail
WHEN I click the "← Back" button
THEN I should return to the Conversations list
AND my previous filters should still be applied


________________


9. Conversation Assignment
9.1 Assign Modal
ID
	Requirement
	Details
	ADM-9.1.1
	Open modal
	Click Assign button
	ADM-9.1.2
	Conversation info
	Show customer and subject
	ADM-9.1.3
	Agent list
	List of available agents
	ADM-9.1.4
	Agent status
	Show Online/Busy/Offline
	ADM-9.1.5
	Agent workload
	Show current chat count
	ADM-9.1.6
	Select agent
	Click to select
	ADM-9.1.7
	Confirm button
	Assign to selected agent
	ADM-9.1.8
	Cancel button
	Close without assigning
	9.2 Agent Display
Field
	Description
	Avatar
	Agent initials/photo
	Name
	Full name
	Status
	Online/Busy/Offline indicator
	Active chats
	Current conversation count
	9.3 Assignment Rules
ID
	Requirement
	Details
	ADM-9.3.1
	Online only
	Can only assign to online agents
	ADM-9.3.2
	Capacity check
	Warning if agent at capacity
	ADM-9.3.3
	Offline disabled
	Cannot assign to offline agents
	ADM-9.3.4
	Notification
	Notify agent of assignment
	ADM-9.3.5
	Customer notify
	Optionally notify customer
	User Stories - Conversation Assignment
US-9.1: Assign to Agent
AS AN administrator
I WANT TO assign an escalated conversation to a specific agent
SO THAT the customer gets help from an appropriate team member


US-9.2: View Agent Availability
AS AN administrator
I WANT TO see which agents are online and their current workload
SO THAT I can make informed assignment decisions


US-9.3: Capacity Warning
AS AN administrator
I WANT TO be warned if I'm assigning to an agent at capacity
SO THAT I don't overload team members


Acceptance Criteria - Conversation Assignment
AC-9.1: Open Assignment Modal
GIVEN I am on the Conversations page
WHEN I click "Assign" on an escalated conversation
THEN an assignment modal should open
AND I should see conversation details (customer name, subject)
AND I should see a list of agents


AC-9.2: Agent List Display
GIVEN the assignment modal is open
WHEN I look at the agent list
THEN I should see each agent with:
  - Avatar and name
  - Status (green dot = Online, yellow = Busy, gray = Offline)
  - Current chat count (e.g., "2 active chats")
AND online agents should appear at the top
AND offline agents should be grayed out


AC-9.3: Select and Assign
GIVEN the assignment modal is open
WHEN I click on "Sarah Martinez (Online - 2 active chats)"
THEN Sarah should be highlighted as selected
WHEN I click "Assign to Sarah M."
THEN the modal should close
AND the conversation status should change to "Open"
AND the Handler column should show "Sarah M."
AND Sarah should receive a notification


AC-9.4: Capacity Warning
GIVEN agent "Emily" has 5 active chats (at capacity)
WHEN I select Emily in the assignment modal
THEN I should see warning "Emily is at maximum capacity (5/5 chats)"
AND the Assign button should still work but show "Assign Anyway"


AC-9.5: Cannot Assign to Offline
GIVEN agent "Tom" is offline
WHEN I view the assignment modal
THEN Tom's row should be grayed out
AND clicking on Tom should not select him
AND tooltip should show "Agent is offline"


AC-9.6: Assignment Notification
GIVEN I assign a conversation to Sarah
WHEN the assignment completes
THEN Sarah should receive:
  - In-app notification
  - Browser notification (if enabled)
  - Sound alert (if enabled)
AND the notification should show customer name and subject


________________


10. Real-time Activity Monitor
10.1 Live Metrics
Metric
	Description
	Active Conversations
	Current open count
	Queue Length
	Waiting for agent
	Avg Wait Time
	Queue wait time
	Agents Online
	Available agents
	10.2 Agent Status Grid
ID
	Requirement
	Details
	ADM-10.2.1
	Agent cards
	Card for each agent
	ADM-10.2.2
	Avatar
	Agent photo/initials
	ADM-10.2.3
	Name
	Agent name
	ADM-10.2.4
	Status
	Online/Busy/Away/Offline
	ADM-10.2.5
	Active chats
	Current conversation count
	ADM-10.2.6
	Real-time update
	Update status live
	10.3 Live Indicators
ID
	Requirement
	Details
	ADM-10.3.1
	Pulsing dot
	Animated indicator showing live data
	ADM-10.3.2
	Last update
	Show when data was updated
	ADM-10.3.3
	Connection status
	Show if real-time connected
	ADM-10.3.4
	Auto-reconnect
	Reconnect if disconnected
	User Stories - Real-time Monitor
US-10.1: Live Overview
AS AN administrator
I WANT TO see real-time activity on a single screen
SO THAT I can monitor operations during business hours


US-10.2: Agent Status Visibility
AS AN administrator
I WANT TO see all agents' status at a glance
SO THAT I can ensure adequate coverage


US-10.3: Connection Awareness
AS AN administrator
I WANT TO know if real-time updates are working
SO THAT I can trust the data I'm seeing


Acceptance Criteria - Real-time Monitor
AC-10.1: Live Metrics Update
GIVEN I am on the Live Activity page
WHEN a new conversation is opened
THEN "Active Conversations" should increment within 2 seconds
AND no page refresh should be required
AND the pulsing green dot should indicate live status


AC-10.2: Agent Status Grid
GIVEN I am viewing the agent status grid
WHEN agent Sarah changes her status from Online to Away
THEN Sarah's card should update within 2 seconds
AND her status badge should change from green "Online" to gray "Away"


AC-10.3: Queue Alert
GIVEN queue length is currently 3
WHEN 5 more customers enter the queue (total 8)
THEN the Queue widget should show "8 waiting"
AND the widget should display warning styling (orange background)
AND I should receive an in-app alert


AC-10.4: Connection Lost
GIVEN I am on the Live Activity page
WHEN the WebSocket connection is lost
THEN the live indicator should change from green to red
AND message "Connection lost. Reconnecting..." should appear
WHEN connection is restored
THEN the indicator should return to green
AND message "Connected" should briefly appear


AC-10.5: No Agents Alert
GIVEN all agents go offline
WHEN I view the Live Activity page
THEN I should see prominent alert "No agents online!"
AND the Agents Online widget should show "0" in red


________________


11. Admin Permissions
11.1 Role: Administrator
Permission
	Access
	Dashboard
	Full access
	Conversations
	View all, assign
	Knowledge Base
	Full CRUD
	AI Config
	Full access
	Team Management
	Full access
	Settings
	Full access
	Audit Log
	View all
	11.2 Role: Supervisor
Permission
	Access
	Dashboard
	Full access
	Conversations
	View all, assign
	Knowledge Base
	View, edit
	AI Config
	View only
	Team Management
	View team only
	Settings
	Limited
	Audit Log
	View team only
	11.3 Role: Agent
Permission
	Access
	Dashboard
	Personal stats only
	Conversations
	Assigned only
	Knowledge Base
	View only
	AI Config
	No access
	Team Management
	No access
	Settings
	Personal only
	Audit Log
	No access
	User Stories - Permissions
US-11.1: Role-Based Access
AS A system administrator
I WANT different user roles to have different permissions
SO THAT sensitive features are protected


US-11.2: Hidden Features
AS A supervisor
I WANT TO only see features I have access to
SO THAT the interface is not cluttered with unavailable options


Acceptance Criteria - Permissions
AC-11.1: Admin Full Access
GIVEN I am logged in as Administrator
WHEN I view the navigation sidebar
THEN I should see all menu items including Settings and Audit Log


AC-11.2: Agent Limited Access
GIVEN I am logged in as Agent
WHEN I view the navigation sidebar
THEN I should NOT see AI Config, Team Management, or Audit Log
AND attempting to access /admin/ai-config via URL should redirect to Dashboard
AND I should see message "You don't have permission to access this page"


AC-11.3: Supervisor Mixed Access
GIVEN I am logged in as Supervisor
WHEN I navigate to AI Config
THEN I should see the configuration in read-only mode
AND edit buttons should be hidden or disabled
AND attempting to modify via API should return 403 Forbidden


________________


12. Performance Requirements
Metric
	Target
	Login time
	<2 seconds
	Dashboard load
	<3 seconds
	Real-time update
	<1 second delay
	Search results
	<1 second
	Page navigation
	<1 second
	Acceptance Criteria - Performance
AC-12.1: Dashboard Load Time
GIVEN I am logged in
WHEN I navigate to the Dashboard
THEN the page should fully load within 3 seconds
AND all metrics should be populated
AND charts should be rendered


AC-12.2: Real-time Latency
GIVEN a conversation status changes
WHEN I am viewing the Dashboard
THEN the change should reflect within 1 second


________________


13. Security Requirements
ID
	Requirement
	SEC-1
	All traffic over HTTPS
	SEC-2
	JWT token authentication
	SEC-3
	Role-based access control
	SEC-4
	Session timeout enforcement
	SEC-5
	Audit logging for all actions
	SEC-6
	CSRF protection on all forms
	SEC-7
	XSS prevention in all inputs
	SEC-8
	SQL injection prevention
	Acceptance Criteria - Security
AC-13.1: HTTPS Enforcement
GIVEN I try to access the dashboard via HTTP
WHEN the request is made
THEN I should be automatically redirected to HTTPS


AC-13.2: Session Expiry Enforcement
GIVEN my session has expired
WHEN I try to perform any action
THEN I should be redirected to the login page
AND I should see message "Your session has expired. Please log in again."


AC-13.3: XSS Prevention
GIVEN I enter "<script>alert('xss')</script>" in any input field
WHEN the input is saved and displayed
THEN the script should NOT execute
AND the text should be displayed as plain text


AC-13.4: Unauthorized API Access
GIVEN I am logged in as Agent
WHEN I try to call the API endpoint /api/admin/settings
THEN I should receive 403 Forbidden response
AND the action should be logged in the audit log


________________


14. Audit Logging
14.1 Logged Events
Event
	Details Logged
	Login
	User, time, IP, success/fail
	Logout
	User, time
	View conversation
	User, conversation ID, time
	Assign conversation
	User, conversation, assignee
	Change settings
	User, setting, old/new value
	Create/edit KB article
	User, article, changes
	Modify AI config
	User, intent, changes
	14.2 Audit Log Display
ID
	Requirement
	Details
	ADM-14.2.1
	Log list
	Paginated list of events
	ADM-14.2.2
	Filter by user
	Show events for specific user
	ADM-14.2.3
	Filter by type
	Show specific event types
	ADM-14.2.4
	Filter by date
	Date range filter
	ADM-14.2.5
	Search
	Search log entries
	ADM-14.2.6
	Export
	Export audit log
	User Stories - Audit Logging
US-14.1: View Audit Log
AS AN administrator
I WANT TO see a log of all actions taken in the system
SO THAT I can track changes and investigate issues


US-14.2: Filter Audit Log
AS AN administrator
I WANT TO filter the audit log by user, event type, and date
SO THAT I can find specific events quickly


US-14.3: Export Audit Log
AS AN administrator
I WANT TO export the audit log
SO THAT I can keep records for compliance purposes


Acceptance Criteria - Audit Logging
AC-14.1: Event Logging
GIVEN I assign a conversation to an agent
WHEN I check the audit log
THEN I should see an entry with:
  - Event type: "conversation_assigned"
  - User: my email
  - Details: conversation ID, assignee name
  - Timestamp: current time
  - IP address: my IP


AC-14.2: Filter by User
GIVEN I am viewing the audit log
WHEN I select "Sarah Martinez" from the user filter
THEN only events performed by Sarah should be shown
AND the count should update to show filtered total


AC-14.3: Immutable Logs
GIVEN there are entries in the audit log
WHEN I try to delete or modify an entry
THEN no delete/edit options should be available
AND attempting via API should return 403 Forbidden


AC-14.4: Export Audit Log
GIVEN I am viewing the audit log
WHEN I click "Export" and select CSV format
THEN a CSV file should download
AND it should contain all filtered entries
AND it should include all columns (timestamp, user, event, details, IP)






—-----—-----—-----—-----—-----—-----—-----—-----—-----—-----—-----—-----—-----—-----—-----
  
  
  
  

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard - Module 5 Screens</title>
    <style>
        *{margin:0;padding:0;box-sizing:border-box}
        body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f0f0f0;min-height:100vh;padding:20px}
        .page-header{text-align:center;margin-bottom:30px}
        .page-header h1{font-size:24px;color:#1a1a2e;margin-bottom:8px}
        .page-header p{color:#666;font-size:14px}
        .screens-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(580px,1fr));gap:30px;max-width:1500px;margin:0 auto}
        .screen-card{background:#fff;border-radius:12px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,0.1)}
        .screen-card h3{font-size:14px;color:#666;margin-bottom:12px;padding-bottom:8px;border-bottom:1px solid #eee}
        
        /* Admin Layout */
        .admin-layout{display:flex;height:500px;border-radius:8px;overflow:hidden;border:1px solid #e5e7eb}
        .admin-sidebar{width:220px;background:#1a1a2e;color:#fff}
        .sidebar-header{padding:16px;border-bottom:1px solid #2a2a4e}
        .sidebar-header h4{font-size:16px;display:flex;align-items:center;gap:8px}
        .sidebar-nav{padding:12px 0}
        .nav-section{padding:8px 16px;font-size:11px;color:#666;text-transform:uppercase}
        .nav-item{padding:10px 16px;font-size:13px;cursor:pointer;display:flex;align-items:center;gap:10px}
        .nav-item:hover{background:#2a2a4e}
        .nav-item.active{background:#3b82f6}
        .nav-item .badge{margin-left:auto;background:#ef4444;padding:2px 6px;border-radius:8px;font-size:10px}
        
        .admin-main{flex:1;background:#f8f9fa;overflow-y:auto}
        .main-header{padding:16px 24px;background:#fff;border-bottom:1px solid #e5e7eb;display:flex;justify-content:space-between;align-items:center}
        .main-header h2{font-size:20px}
        .main-content{padding:24px}
        
        /* Stat Cards */
        .stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:24px}
        .stat-card{background:#fff;padding:20px;border-radius:10px;border:1px solid #e5e7eb}
        .stat-card .label{font-size:12px;color:#666;margin-bottom:6px}
        .stat-card .value{font-size:28px;font-weight:700;margin-bottom:4px}
        .stat-card .change{font-size:12px}
        .stat-card .change.up{color:#10b981}
        .stat-card .change.down{color:#ef4444}
        .stat-card.highlight{border-left:4px solid #3b82f6}
        
        /* Charts */
        .chart-container{background:#fff;border-radius:10px;border:1px solid #e5e7eb;padding:20px;margin-bottom:20px}
        .chart-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px}
        .chart-header h4{font-size:14px}
        .chart-placeholder{height:200px;background:#f8f9fa;border-radius:8px;display:flex;align-items:flex-end;padding:20px;gap:8px}
        .bar{background:linear-gradient(180deg,#3b82f6,#8b5cf6);border-radius:4px 4px 0 0;flex:1}
        
        /* Tables */
        table{width:100%;border-collapse:collapse;font-size:13px}
        th{text-align:left;padding:12px;background:#f8f9fa;font-weight:600;font-size:11px;text-transform:uppercase;color:#666;border-bottom:1px solid #e5e7eb}
        td{padding:12px;border-bottom:1px solid #f0f0f0}
        tr:hover{background:#f8f9fa}
        
        /* Buttons */
        .btn{padding:8px 16px;border-radius:6px;font-size:13px;cursor:pointer;border:none}
        .btn-primary{background:#3b82f6;color:#fff}
        .btn-secondary{background:#fff;border:1px solid #e5e7eb}
        .btn-sm{padding:6px 12px;font-size:12px}
        
        /* Status Badges */
        .status{padding:4px 10px;border-radius:12px;font-size:11px;font-weight:500}
        .status.online{background:#dcfce7;color:#166534}
        .status.busy{background:#fef3c7;color:#92400e}
        .status.offline{background:#f3f4f6;color:#6b7280}
        .status.active{background:#dbeafe;color:#1d4ed8}
        
        /* Date Filter */
        .date-filter{display:flex;gap:8px}
        .date-btn{padding:6px 12px;border:1px solid #e5e7eb;border-radius:6px;font-size:12px;cursor:pointer;background:#fff}
        .date-btn.active{background:#3b82f6;color:#fff;border-color:#3b82f6}
        
        /* Progress Bar */
        .progress-bar{height:8px;background:#e5e7eb;border-radius:4px;overflow:hidden}
        .progress-fill{height:100%;border-radius:4px;background:linear-gradient(90deg,#3b82f6,#8b5cf6)}
        
        /* Login Form */
        .login-container{display:flex;align-items:center;justify-content:center;height:100%;background:linear-gradient(135deg,#1a1a2e,#2a2a4e)}
        .login-box{background:#fff;padding:40px;border-radius:16px;width:380px;box-shadow:0 20px 60px rgba(0,0,0,0.3)}
        .login-box h2{text-align:center;margin-bottom:8px}
        .login-box p{text-align:center;color:#666;font-size:14px;margin-bottom:24px}
        .form-group{margin-bottom:16px}
        .form-group label{display:block;font-size:13px;font-weight:500;margin-bottom:6px}
        .form-group input{width:100%;padding:12px;border:1px solid #e5e7eb;border-radius:8px;font-size:14px}
        .form-group input:focus{outline:none;border-color:#3b82f6}
        .login-btn{width:100%;padding:14px;background:linear-gradient(135deg,#3b82f6,#8b5cf6);color:#fff;border:none;border-radius:8px;font-size:14px;font-weight:600;cursor:pointer;margin-top:8px}
        .forgot-link{display:block;text-align:center;margin-top:16px;color:#3b82f6;font-size:13px;text-decoration:none}
        
        /* Realtime Widget */
        .realtime-widget{background:#fff;border-radius:10px;border:1px solid #e5e7eb;padding:16px}
        .realtime-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px}
        .realtime-header h5{font-size:13px}
        .live-dot{width:8px;height:8px;background:#10b981;border-radius:50%;animation:pulse 2s infinite}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.5}}
        .realtime-value{font-size:36px;font-weight:700;margin-bottom:4px}
        .realtime-label{font-size:12px;color:#666}
        
        /* Donut Chart Mock */
        .donut-chart{width:120px;height:120px;border-radius:50%;background:conic-gradient(#3b82f6 0% 45%,#10b981 45% 70%,#f59e0b 70% 85%,#8b5cf6 85% 100%);position:relative;margin:0 auto}
        .donut-chart::after{content:'';position:absolute;width:70px;height:70px;background:#fff;border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%)}
        .donut-legend{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;margin-top:16px;font-size:12px}
        .legend-item{display:flex;align-items:center;gap:6px}
        .legend-dot{width:10px;height:10px;border-radius:2px}
        
        /* Agent List */
        .agent-row{display:flex;align-items:center;padding:12px 0;border-bottom:1px solid #f0f0f0}
        .agent-row:last-child{border:none}
        .agent-avatar{width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#3b82f6,#8b5cf6);display:flex;align-items:center;justify-content:center;color:#fff;font-size:13px;margin-right:12px}
        .agent-info{flex:1}
        .agent-name{font-weight:600;font-size:13px}
        .agent-email{font-size:11px;color:#666}
        .agent-stats{text-align:right;font-size:12px}
    </style>
</head>
<body>
    <div class="page-header">
        <h1>Module 5: Admin Dashboard Screens</h1>
        <p>ADM-5.1 to ADM-5.3 Requirements Coverage</p>
    </div>


    <div class="screens-grid">
        <!-- Screen 1: Login Page -->
        <div class="screen-card">
            <h3>5.1 Admin Login (ADM-5.1.1, ADM-5.1.2)</h3>
            <div style="height:480px" class="login-container">
                <div class="login-box">
                    <div style="text-align:center;margin-bottom:20px">
                        <div style="width:60px;height:60px;background:linear-gradient(135deg,#3b82f6,#8b5cf6);border-radius:12px;margin:0 auto 16px;display:flex;align-items:center;justify-content:center;font-size:28px">🤖</div>
                    </div>
                    <h2>Welcome Back</h2>
                    <p>Sign in to your admin dashboard</p>
                    <div class="form-group">
                        <label>Email Address</label>
                        <input type="email" placeholder="admin@company.com">
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" placeholder="••••••••">
                    </div>
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
                        <label style="display:flex;align-items:center;gap:6px;font-size:13px;cursor:pointer">
                            <input type="checkbox"> Remember me
                        </label>
                    </div>
                    <button class="login-btn">Sign In</button>
                    <a href="#" class="forgot-link">Forgot your password?</a>
                </div>
            </div>
        </div>


        <!-- Screen 2: Login Error State -->
        <div class="screen-card">
            <h3>5.2 Login Error State (ADM-5.1.2)</h3>
            <div style="height:480px" class="login-container">
                <div class="login-box">
                    <div style="text-align:center;margin-bottom:20px">
                        <div style="width:60px;height:60px;background:linear-gradient(135deg,#3b82f6,#8b5cf6);border-radius:12px;margin:0 auto 16px;display:flex;align-items:center;justify-content:center;font-size:28px">🤖</div>
                    </div>
                    <h2>Welcome Back</h2>
                    <p>Sign in to your admin dashboard</p>
                    <div style="background:#fee2e2;border:1px solid #fecaca;border-radius:8px;padding:12px;margin-bottom:16px;font-size:13px;color:#dc2626">
                        ⚠️ Invalid email or password. Please try again.
                    </div>
                    <div class="form-group">
                        <label>Email Address</label>
                        <input type="email" placeholder="admin@company.com" value="admin@company.com" style="border-color:#ef4444">
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" placeholder="••••••••" style="border-color:#ef4444">
                    </div>
                    <button class="login-btn">Sign In</button>
                    <a href="#" class="forgot-link">Forgot your password?</a>
                </div>
            </div>
        </div>


        <!-- Screen 3: Dashboard Home -->
        <div class="screen-card">
            <h3>5.3 Dashboard Home - Overview (ADM-5.2.1 to ADM-5.2.5)</h3>
            <div class="admin-layout">
                <div class="admin-sidebar">
                    <div class="sidebar-header">
                        <h4>🤖 AI Support</h4>
                    </div>
                    <div class="sidebar-nav">
                        <div class="nav-section">Overview</div>
                        <div class="nav-item active">📊 Dashboard</div>
                        <div class="nav-item">💬 Conversations <span class="badge">12</span></div>
                        <div class="nav-section">Manage</div>
                        <div class="nav-item">📚 Knowledge Base</div>
                        <div class="nav-item">🤖 AI Config</div>
                        <div class="nav-item">👥 Team</div>
                        <div class="nav-section">Settings</div>
                        <div class="nav-item">⚙️ Settings</div>
                    </div>
                </div>
                <div class="admin-main">
                    <div class="main-header">
                        <h2>Dashboard</h2>
                        <div class="date-filter">
                            <button class="date-btn active">Today</button>
                            <button class="date-btn">7 Days</button>
                            <button class="date-btn">30 Days</button>
                        </div>
                    </div>
                    <div class="main-content">
                        <div class="stats-grid">
                            <div class="stat-card highlight">
                                <div class="label">Active Conversations</div>
                                <div class="value">47</div>
                                <div class="change up">↑ 12% from yesterday</div>
                            </div>
                            <div class="stat-card">
                                <div class="label">Resolved Today</div>
                                <div class="value">156</div>
                                <div class="change up">↑ 8% from yesterday</div>
                            </div>
                            <div class="stat-card">
                                <div class="label">AI Automation Rate</div>
                                <div class="value">73%</div>
                                <div class="change up">↑ 5% from yesterday</div>
                            </div>
                            <div class="stat-card">
                                <div class="label">Avg Response Time</div>
                                <div class="value">28s</div>
                                <div class="change down">↓ 15% faster</div>
                            </div>
                        </div>
                        <div style="display:grid;grid-template-columns:2fr 1fr;gap:20px">
                            <div class="chart-container">
                                <div class="chart-header">
                                    <h4>Conversations Over Time</h4>
                                </div>
                                <div class="chart-placeholder">
                                    <div class="bar" style="height:60%"></div>
                                    <div class="bar" style="height:75%"></div>
                                    <div class="bar" style="height:45%"></div>
                                    <div class="bar" style="height:90%"></div>
                                    <div class="bar" style="height:70%"></div>
                                    <div class="bar" style="height:85%"></div>
                                    <div class="bar" style="height:95%"></div>
                                </div>
                            </div>
                            <div class="realtime-widget">
                                <div class="realtime-header">
                                    <h5>Live Activity</h5>
                                    <div class="live-dot"></div>
                                </div>
                                <div class="realtime-value">47</div>
                                <div class="realtime-label">Active conversations right now</div>
                                <div style="margin-top:16px;padding-top:16px;border-top:1px solid #e5e7eb">
                                    <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:8px">
                                        <span>Queue</span><span style="font-weight:600">5 waiting</span>
                                    </div>
                                    <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:8px">
                                        <span>Agents Online</span><span style="font-weight:600">8</span>
                                    </div>
                                    <div style="display:flex;justify-content:space-between;font-size:12px">
                                        <span>Avg Wait Time</span><span style="font-weight:600">45s</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- Screen 4: Conversations by Status -->
        <div class="screen-card">
            <h3>5.4 Conversations by Status (ADM-5.2.5)</h3>
            <div class="admin-layout">
                <div class="admin-sidebar">
                    <div class="sidebar-header"><h4>🤖 AI Support</h4></div>
                    <div class="sidebar-nav">
                        <div class="nav-item active">📊 Dashboard</div>
                        <div class="nav-item">💬 Conversations</div>
                    </div>
                </div>
                <div class="admin-main">
                    <div class="main-header">
                        <h2>Conversation Analytics</h2>
                        <div class="date-filter">
                            <button class="date-btn">Today</button>
                            <button class="date-btn active">7 Days</button>
                            <button class="date-btn">30 Days</button>
                        </div>
                    </div>
                    <div class="main-content">
                        <div class="stats-grid">
                            <div class="stat-card">
                                <div class="label">Open</div>
                                <div class="value" style="color:#3b82f6">47</div>
                                <div style="margin-top:8px"><div class="progress-bar"><div class="progress-fill" style="width:15%;background:#3b82f6"></div></div></div>
                            </div>
                            <div class="stat-card">
                                <div class="label">Escalated</div>
                                <div class="value" style="color:#f59e0b">12</div>
                                <div style="margin-top:8px"><div class="progress-bar"><div class="progress-fill" style="width:8%;background:#f59e0b"></div></div></div>
                            </div>
                            <div class="stat-card">
                                <div class="label">Resolved</div>
                                <div class="value" style="color:#10b981">892</div>
                                <div style="margin-top:8px"><div class="progress-bar"><div class="progress-fill" style="width:72%;background:#10b981"></div></div></div>
                            </div>
                            <div class="stat-card">
                                <div class="label">Closed</div>
                                <div class="value" style="color:#6b7280">156</div>
                                <div style="margin-top:8px"><div class="progress-bar"><div class="progress-fill" style="width:12%;background:#6b7280"></div></div></div>
                            </div>
                        </div>
                        <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px">
                            <div class="chart-container">
                                <div class="chart-header"><h4>Status Distribution</h4></div>
                                <div class="donut-chart"></div>
                                <div class="donut-legend">
                                    <div class="legend-item"><span class="legend-dot" style="background:#3b82f6"></span>Open (15%)</div>
                                    <div class="legend-item"><span class="legend-dot" style="background:#10b981"></span>Resolved (72%)</div>
                                    <div class="legend-item"><span class="legend-dot" style="background:#f59e0b"></span>Escalated (5%)</div>
                                    <div class="legend-item"><span class="legend-dot" style="background:#8b5cf6"></span>Closed (8%)</div>
                                </div>
                            </div>
                            <div class="chart-container">
                                <div class="chart-header"><h4>Handler Distribution</h4></div>
                                <div style="padding:20px 0">
                                    <div style="margin-bottom:20px">
                                        <div style="display:flex;justify-content:space-between;margin-bottom:6px;font-size:13px">
                                            <span>🤖 AI Handled</span>
                                            <span style="font-weight:600">73%</span>
                                        </div>
                                        <div class="progress-bar" style="height:24px;border-radius:6px">
                                            <div class="progress-fill" style="width:73%"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div style="display:flex;justify-content:space-between;margin-bottom:6px;font-size:13px">
                                            <span>👤 Human Handled</span>
                                            <span style="font-weight:600">27%</span>
                                        </div>
                                        <div class="progress-bar" style="height:24px;border-radius:6px">
                                            <div class="progress-fill" style="width:27%;background:linear-gradient(90deg,#10b981,#06b6d4)"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- Screen 5: Conversation Management -->
        <div class="screen-card">
            <h3>5.5 Conversation Management (ADM-5.3.1 to ADM-5.3.4)</h3>
            <div class="admin-layout">
                <div class="admin-sidebar">
                    <div class="sidebar-header"><h4>🤖 AI Support</h4></div>
                    <div class="sidebar-nav">
                        <div class="nav-item">📊 Dashboard</div>
                        <div class="nav-item active">💬 Conversations <span class="badge">12</span></div>
                        <div class="nav-item">📚 Knowledge Base</div>
                    </div>
                </div>
                <div class="admin-main">
                    <div class="main-header">
                        <h2>Conversations</h2>
                        <div style="display:flex;gap:10px">
                            <input type="text" placeholder="Search customer..." style="padding:8px 12px;border:1px solid #e5e7eb;border-radius:6px;font-size:13px;width:200px">
                            <select style="padding:8px 12px;border:1px solid #e5e7eb;border-radius:6px;font-size:13px">
                                <option>All Status</option>
                                <option>Open</option>
                                <option>Escalated</option>
                                <option>Resolved</option>
                            </select>
                            <select style="padding:8px 12px;border:1px solid #e5e7eb;border-radius:6px;font-size:13px">
                                <option>All Handlers</option>
                                <option>AI</option>
                                <option>Human</option>
                            </select>
                        </div>
                    </div>
                    <div class="main-content" style="padding:0">
                        <table>
                            <thead>
                                <tr>
                                    <th>Customer</th>
                                    <th>Subject</th>
                                    <th>Status</th>
                                    <th>Handler</th>
                                    <th>Channel</th>
                                    <th>Time</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div style="display:flex;align-items:center;gap:10px">
                                            <div style="width:32px;height:32px;border-radius:50%;background:#3b82f6;display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px">JD</div>
                                            <div>
                                                <div style="font-weight:500">John Doe</div>
                                                <div style="font-size:11px;color:#666">john@email.com</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>API webhook issue</td>
                                    <td><span class="status active">Open</span></td>
                                    <td>Sarah M.</td>
                                    <td>💬 Chat</td>
                                    <td>2 min ago</td>
                                    <td><button class="btn btn-sm btn-secondary">View</button></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div style="display:flex;align-items:center;gap:10px">
                                            <div style="width:32px;height:32px;border-radius:50%;background:#10b981;display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px">SM</div>
                                            <div>
                                                <div style="font-weight:500">Sarah Miller</div>
                                                <div style="font-size:11px;color:#666">sarah@email.com</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Refund request</td>
                                    <td><span class="status busy">Escalated</span></td>
                                    <td>Queue</td>
                                    <td>📧 Email</td>
                                    <td>15 min ago</td>
                                    <td><button class="btn btn-sm btn-primary">Assign</button></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div style="display:flex;align-items:center;gap:10px">
                                            <div style="width:32px;height:32px;border-radius:50%;background:#8b5cf6;display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px">MC</div>
                                            <div>
                                                <div style="font-weight:500">Mike Chen</div>
                                                <div style="font-size:11px;color:#666">mike@email.com</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Order tracking</td>
                                    <td><span class="status online">Resolved</span></td>
                                    <td>🤖 AI</td>
                                    <td>📱 WhatsApp</td>
                                    <td>1 hour ago</td>
                                    <td><button class="btn btn-sm btn-secondary">View</button></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div style="display:flex;align-items:center;gap:10px">
                                            <div style="width:32px;height:32px;border-radius:50%;background:#f59e0b;display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px">LW</div>
                                            <div>
                                                <div style="font-weight:500">Lisa Wong</div>
                                                <div style="font-size:11px;color:#666">lisa@email.com</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Password reset help</td>
                                    <td><span class="status online">Resolved</span></td>
                                    <td>🤖 AI</td>
                                    <td>💬 Chat</td>
                                    <td>2 hours ago</td>
                                    <td><button class="btn btn-sm btn-secondary">View</button></td>
                                </tr>
                            </tbody>
                        </table>
                        <div style="padding:16px;display:flex;justify-content:space-between;align-items:center;border-top:1px solid #e5e7eb">
                            <span style="font-size:13px;color:#666">Showing 1-4 of 156 conversations</span>
                            <div style="display:flex;gap:4px">
                                <button class="btn btn-sm btn-secondary">← Prev</button>
                                <button class="btn btn-sm btn-primary">1</button>
                                <button class="btn btn-sm btn-secondary">2</button>
                                <button class="btn btn-sm btn-secondary">3</button>
                                <button class="btn btn-sm btn-secondary">Next →</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- Screen 6: Assign Conversation -->
        <div class="screen-card">
            <h3>5.6 Assign Conversation to Agent (ADM-5.3.6)</h3>
            <div style="display:flex;justify-content:center;padding:40px">
                <div style="background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:24px;width:420px;box-shadow:0 4px 20px rgba(0,0,0,0.1)">
                    <h4 style="font-size:16px;margin-bottom:20px">Assign Conversation</h4>
                    <div style="background:#f8f9fa;border-radius:8px;padding:14px;margin-bottom:20px">
                        <div style="font-size:12px;color:#666;margin-bottom:4px">Customer</div>
                        <div style="font-weight:600">Sarah Miller</div>
                        <div style="font-size:12px;color:#666;margin-top:8px">Subject</div>
                        <div>Refund request for order #12345</div>
                    </div>
                    <div style="margin-bottom:20px">
                        <label style="display:block;font-size:13px;font-weight:500;margin-bottom:8px">Select Agent</label>
                        <div style="max-height:200px;overflow-y:auto;border:1px solid #e5e7eb;border-radius:8px">
                            <div class="agent-row" style="padding:12px;cursor:pointer;background:#eff6ff">
                                <div class="agent-avatar">SM</div>
                                <div class="agent-info">
                                    <div class="agent-name">Sarah Martinez</div>
                                    <div class="agent-email"><span style="color:#10b981">●</span> Online • 2 active chats</div>
                                </div>
                                <div style="color:#3b82f6">✓</div>
                            </div>
                            <div class="agent-row" style="padding:12px;cursor:pointer">
                                <div class="agent-avatar" style="background:#10b981">MJ</div>
                                <div class="agent-info">
                                    <div class="agent-name">Mike Johnson</div>
                                    <div class="agent-email"><span style="color:#10b981">●</span> Online • 1 active chat</div>
                                </div>
                            </div>
                            <div class="agent-row" style="padding:12px;cursor:pointer">
                                <div class="agent-avatar" style="background:#f59e0b">ED</div>
                                <div class="agent-info">
                                    <div class="agent-name">Emily Davis</div>
                                    <div class="agent-email"><span style="color:#f59e0b">●</span> Busy • 4 active chats</div>
                                </div>
                            </div>
                            <div class="agent-row" style="padding:12px;cursor:pointer;opacity:0.5">
                                <div class="agent-avatar" style="background:#9ca3af">TW</div>
                                <div class="agent-info">
                                    <div class="agent-name">Tom Wilson</div>
                                    <div class="agent-email"><span style="color:#9ca3af">●</span> Offline</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="display:flex;gap:10px;justify-content:flex-end">
                        <button class="btn btn-secondary">Cancel</button>
                        <button class="btn btn-primary">Assign to Sarah M.</button>
                    </div>
                </div>
            </div>
        </div>


        <!-- Screen 7: Real-time Dashboard -->
        <div class="screen-card">
            <h3>5.7 Real-time Activity Monitor (ADM-5.2.1)</h3>
            <div class="admin-layout">
                <div class="admin-sidebar">
                    <div class="sidebar-header"><h4>🤖 AI Support</h4></div>
                    <div class="sidebar-nav">
                        <div class="nav-item active">📊 Dashboard</div>
                        <div class="nav-item">💬 Conversations</div>
                    </div>
                </div>
                <div class="admin-main">
                    <div class="main-header">
                        <h2>Live Activity</h2>
                        <div style="display:flex;align-items:center;gap:8px;font-size:13px;color:#10b981">
                            <div class="live-dot"></div> Real-time updates enabled
                        </div>
                    </div>
                    <div class="main-content">
                        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:24px">
                            <div class="realtime-widget">
                                <div class="realtime-header"><h5>Active Conversations</h5><div class="live-dot"></div></div>
                                <div class="realtime-value">47</div>
                                <div class="realtime-label">Conversations in progress</div>
                            </div>
                            <div class="realtime-widget">
                                <div class="realtime-header"><h5>Queue</h5><div class="live-dot"></div></div>
                                <div class="realtime-value" style="color:#f59e0b">5</div>
                                <div class="realtime-label">Customers waiting • Avg 45s</div>
                            </div>
                            <div class="realtime-widget">
                                <div class="realtime-header"><h5>Agents Online</h5><div class="live-dot"></div></div>
                                <div class="realtime-value" style="color:#10b981">8</div>
                                <div class="realtime-label">Available to take chats</div>
                            </div>
                        </div>
                        <div class="chart-container">
                            <div class="chart-header"><h4>Agent Status</h4></div>
                            <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px">
                                <div style="text-align:center;padding:16px;background:#f8f9fa;border-radius:8px">
                                    <div class="agent-avatar" style="margin:0 auto 8px">SM</div>
                                    <div style="font-weight:600;font-size:13px">Sarah M.</div>
                                    <div style="font-size:11px;color:#666">2 chats</div>
                                    <span class="status online" style="margin-top:8px;display:inline-block">Online</span>
                                </div>
                                <div style="text-align:center;padding:16px;background:#f8f9fa;border-radius:8px">
                                    <div class="agent-avatar" style="margin:0 auto 8px;background:#10b981">MJ</div>
                                    <div style="font-weight:600;font-size:13px">Mike J.</div>
                                    <div style="font-size:11px;color:#666">3 chats</div>
                                    <span class="status online" style="margin-top:8px;display:inline-block">Online</span>
                                </div>
                                <div style="text-align:center;padding:16px;background:#f8f9fa;border-radius:8px">
                                    <div class="agent-avatar" style="margin:0 auto 8px;background:#f59e0b">ED</div>
                                    <div style="font-weight:600;font-size:13px">Emily D.</div>
                                    <div style="font-size:11px;color:#666">5 chats</div>
                                    <span class="status busy" style="margin-top:8px;display:inline-block">Busy</span>
                                </div>
                                <div style="text-align:center;padding:16px;background:#f8f9fa;border-radius:8px">
                                    <div class="agent-avatar" style="margin:0 auto 8px;background:#9ca3af">TW</div>
                                    <div style="font-weight:600;font-size:13px">Tom W.</div>
                                    <div style="font-size:11px;color:#666">Away</div>
                                    <span class="status offline" style="margin-top:8px;display:inline-block">Away</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- Screen 8: Date Filtering -->
        <div class="screen-card">
            <h3>5.8 Date Filter Options (ADM-5.2.6)</h3>
            <div class="admin-layout" style="height:400px">
                <div class="admin-sidebar">
                    <div class="sidebar-header"><h4>🤖 AI Support</h4></div>
                    <div class="sidebar-nav">
                        <div class="nav-item active">📊 Dashboard</div>
                    </div>
                </div>
                <div class="admin-main">
                    <div class="main-header">
                        <h2>Analytics</h2>
                        <div style="display:flex;gap:12px;align-items:center">
                            <div class="date-filter">
                                <button class="date-btn">Today</button>
                                <button class="date-btn active">7 Days</button>
                                <button class="date-btn">30 Days</button>
                                <button class="date-btn">Custom</button>
                            </div>
                        </div>
                    </div>
                    <div class="main-content">
                        <div style="background:#fff;border:1px solid #e5e7eb;border-radius:10px;padding:20px;margin-bottom:20px">
                            <h4 style="font-size:14px;margin-bottom:16px">Custom Date Range</h4>
                            <div style="display:flex;gap:16px;align-items:end">
                                <div>
                                    <label style="display:block;font-size:12px;margin-bottom:6px">Start Date</label>
                                    <input type="date" value="2025-01-01" style="padding:10px;border:1px solid #e5e7eb;border-radius:6px">
                                </div>
                                <div>
                                    <label style="display:block;font-size:12px;margin-bottom:6px">End Date</label>
                                    <input type="date" value="2025-01-15" style="padding:10px;border:1px solid #e5e7eb;border-radius:6px">
                                </div>
                                <button class="btn btn-primary">Apply</button>
                            </div>
                        </div>
                        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px">
                            <div class="stat-card">
                                <div class="label">Total Conversations</div>
                                <div class="value">1,247</div>
                                <div style="font-size:11px;color:#666">Jan 1 - Jan 15, 2025</div>
                            </div>
                            <div class="stat-card">
                                <div class="label">Resolution Rate</div>
                                <div class="value">89%</div>
                                <div class="change up">↑ 4% vs previous period</div>
                            </div>
                            <div class="stat-card">
                                <div class="label">AI Automation</div>
                                <div class="value">71%</div>
                                <div class="change up">↑ 2% vs previous period</div>
                            </div>
                            <div class="stat-card">
                                <div class="label">Avg CSAT</div>
                                <div class="value">4.6</div>
                                <div class="change up">↑ 0.2 vs previous period</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- Screen 9: Session Management -->
        <div class="screen-card">
            <h3>5.9 Session & Logout (ADM-5.1.3, ADM-5.1.4)</h3>
            <div class="admin-layout" style="height:380px">
                <div class="admin-sidebar">
                    <div class="sidebar-header"><h4>🤖 AI Support</h4></div>
                    <div class="sidebar-nav">
                        <div class="nav-item">📊 Dashboard</div>
                        <div class="nav-item">💬 Conversations</div>
                        <div style="margin-top:auto;padding:16px;border-top:1px solid #2a2a4e">
                            <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
                                <div style="width:36px;height:36px;border-radius:50%;background:#3b82f6;display:flex;align-items:center;justify-content:center;color:#fff;font-size:13px">AD</div>
                                <div>
                                    <div style="font-size:13px">Admin User</div>
                                    <div style="font-size:11px;color:#666">admin@company.com</div>
                                </div>
                            </div>
                            <button style="width:100%;padding:10px;background:#2a2a4e;border:none;color:#fff;border-radius:6px;cursor:pointer;font-size:13px">🚪 Logout</button>
                        </div>
                    </div>
                </div>
                <div class="admin-main">
                    <div class="main-content">
                        <div style="max-width:500px">
                            <h3 style="margin-bottom:20px">Session Information</h3>
                            <div style="background:#fff;border:1px solid #e5e7eb;border-radius:10px;padding:20px">
                                <div style="display:flex;justify-content:space-between;padding:12px 0;border-bottom:1px solid #f0f0f0">
                                    <span style="color:#666">Logged in as</span>
                                    <span style="font-weight:500">admin@company.com</span>
                                </div>
                                <div style="display:flex;justify-content:space-between;padding:12px 0;border-bottom:1px solid #f0f0f0">
                                    <span style="color:#666">Role</span>
                                    <span style="font-weight:500">Administrator</span>
                                </div>
                                <div style="display:flex;justify-content:space-between;padding:12px 0;border-bottom:1px solid #f0f0f0">
                                    <span style="color:#666">Session started</span>
                                    <span style="font-weight:500">Jan 15, 2025 9:30 AM</span>
                                </div>
                                <div style="display:flex;justify-content:space-between;padding:12px 0;border-bottom:1px solid #f0f0f0">
                                    <span style="color:#666">Session expires</span>
                                    <span style="font-weight:500">Jan 22, 2025 9:30 AM</span>
                                </div>
                                <div style="display:flex;justify-content:space-between;padding:12px 0">
                                    <span style="color:#666">Last activity</span>
                                    <span style="font-weight:500">Just now</span>
                                </div>
                            </div>
                            <div style="margin-top:20px;padding:16px;background:#fef3c7;border-radius:8px;font-size:13px;color:#92400e">
                                ⚠️ Your session will expire in 7 days. You will be automatically logged out.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- Screen 10: View Conversation Detail -->
        <div class="screen-card">
            <h3>5.10 View Conversation Detail (ADM-5.3.5)</h3>
            <div class="admin-layout">
                <div class="admin-sidebar">
                    <div class="sidebar-header"><h4>🤖 AI Support</h4></div>
                    <div class="sidebar-nav">
                        <div class="nav-item">📊 Dashboard</div>
                        <div class="nav-item active">💬 Conversations</div>
                    </div>
                </div>
                <div class="admin-main">
                    <div class="main-header">
                        <div style="display:flex;align-items:center;gap:12px">
                            <button class="btn btn-sm btn-secondary">← Back</button>
                            <h2>Conversation #4521</h2>
                            <span class="status online">Resolved</span>
                        </div>
                        <button class="btn btn-secondary btn-sm">Export</button>
                    </div>
                    <div class="main-content" style="display:grid;grid-template-columns:1fr 280px;gap:20px;padding:16px">
                        <div style="background:#fff;border:1px solid #e5e7eb;border-radius:10px;padding:16px;max-height:350px;overflow-y:auto">
                            <div style="margin-bottom:16px;padding-bottom:16px;border-bottom:1px solid #f0f0f0">
                                <div style="display:flex;gap:10px;margin-bottom:12px">
                                    <div style="width:32px;height:32px;border-radius:50%;background:#3b82f6;display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px">JD</div>
                                    <div style="flex:1">
                                        <div style="background:#f0f0f0;padding:10px 14px;border-radius:12px;font-size:14px">My webhook returns 403 on POST requests</div>
                                        <div style="font-size:11px;color:#999;margin-top:4px">John Doe • 2:40 PM</div>
                                    </div>
                                </div>
                                <div style="display:flex;gap:10px;margin-bottom:12px;flex-direction:row-reverse">
                                    <div style="width:32px;height:32px;border-radius:50%;background:#8b5cf6;display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px">🤖</div>
                                    <div style="flex:1;text-align:right">
                                        <div style="background:#eff6ff;padding:10px 14px;border-radius:12px;font-size:14px;display:inline-block;text-align:left">I understand you're having an API issue. Could you provide more details?</div>
                                        <div style="font-size:11px;color:#999;margin-top:4px">AI • 2:40 PM</div>
                                    </div>
                                </div>
                                <div style="text-align:center;font-size:11px;color:#666;padding:8px;background:#fef3c7;border-radius:6px;margin:12px 0">
                                    ⚠️ Escalated to human - Low AI confidence (47%)
                                </div>
                                <div style="display:flex;gap:10px;flex-direction:row-reverse">
                                    <div style="width:32px;height:32px;border-radius:50%;background:#10b981;display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px">SM</div>
                                    <div style="flex:1;text-align:right">
                                        <div style="background:#dcfce7;padding:10px 14px;border-radius:12px;font-size:14px;display:inline-block;text-align:left">I see the issue. Your API key doesn't have write permissions. Let me fix that.</div>
                                        <div style="font-size:11px;color:#999;margin-top:4px">Sarah M. • 2:42 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style="background:#fff;border:1px solid #e5e7eb;border-radius:10px;padding:16px;margin-bottom:16px">
                                <h5 style="font-size:12px;color:#666;margin-bottom:12px">Conversation Info</h5>
                                <div style="font-size:13px">
                                    <div style="display:flex;justify-content:space-between;margin-bottom:8px"><span style="color:#666">Customer</span><span>John Doe</span></div>
                                    <div style="display:flex;justify-content:space-between;margin-bottom:8px"><span style="color:#666">Channel</span><span>💬 Chat</span></div>
                                    <div style="display:flex;justify-content:space-between;margin-bottom:8px"><span style="color:#666">Duration</span><span>8 min</span></div>
                                    <div style="display:flex;justify-content:space-between;margin-bottom:8px"><span style="color:#666">Messages</span><span>6</span></div>
                                    <div style="display:flex;justify-content:space-between;margin-bottom:8px"><span style="color:#666">Handled by</span><span>AI → Sarah M.</span></div>
                                    <div style="display:flex;justify-content:space-between"><span style="color:#666">CSAT</span><span>⭐ 5/5</span></div>
                                </div>
                            </div>
                            <div style="background:#fff;border:1px solid #e5e7eb;border-radius:10px;padding:16px">
                                <h5 style="font-size:12px;color:#666;margin-bottom:12px">AI Analysis</h5>
                                <div style="font-size:13px">
                                    <div style="margin-bottom:8px"><span style="color:#666">Intent:</span> technical_support</div>
                                    <div style="margin-bottom:8px"><span style="color:#666">Confidence:</span> 47%</div>
                                    <div><span style="color:#666">Entities:</span> error_code: 403</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>