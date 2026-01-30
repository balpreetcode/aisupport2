# Module 3: Human Handoff - Detailed Functional Requirements

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

