# Module 4: Agent Interface - Detailed Functional Requirements

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

