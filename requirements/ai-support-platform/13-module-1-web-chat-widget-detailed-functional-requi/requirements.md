# Module 1: Web Chat Widget - Detailed Functional Requirements

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





