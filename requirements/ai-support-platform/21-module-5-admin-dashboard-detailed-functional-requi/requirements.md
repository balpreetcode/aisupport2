# Module 5: Admin Dashboard - Detailed Functional Requirements

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