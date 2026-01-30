# Module 2: AI Engine - Detailed Functional Requirements

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

