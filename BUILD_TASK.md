# AI Support Platform - Build Task

## Objective
Build a complete AI Customer Support Platform from scratch using OpenSpec methodology.

## Requirements Location
- Full requirements: `FULL_REQUIREMENTS.md` (10k+ lines)
- Module breakdowns: `requirements/ai-support-platform/*/requirements.md`

## Tech Stack (suggested)
- **Frontend**: React + TypeScript + Tailwind CSS
- **Backend**: Node.js + Express + TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Real-time**: Socket.io for WebSocket
- **AI**: OpenAI API for intent recognition

## Modules to Build (in order)
1. **Module 8: User Management** - Foundation (roles, auth, permissions)
2. **Module 1: Web Chat Widget** - Customer-facing embed
3. **Module 2: AI Engine** - Intent recognition, NLU
4. **Module 3: Human Handoff** - Escalation, queues
5. **Module 4: Agent Interface** - Agent workspace
6. **Module 6: Knowledge Base** - Article management
7. **Module 7: AI Configuration** - Intent/response templates
8. **Module 5: Admin Dashboard** - Analytics, reporting
9. **Module 9: Notifications** - Alerts, emails

## OpenSpec Workflow
For each module:
1. `/opsx:new module-X-name` - Create change folder
2. `/opsx:ff` - Generate proposal, specs, design, tasks
3. Review/adjust the generated artifacts
4. `/opsx:apply` - Implement the tasks
5. `/opsx:archive` - Archive when done

## Directory Structure (target)
```
/home/usr1/code2/aisupport2/
├── packages/
│   ├── frontend/          # React app
│   ├── backend/           # Express API
│   ├── widget/            # Embeddable chat widget
│   └── shared/            # Shared types/utils
├── openspec/              # OpenSpec artifacts
├── requirements/          # Source requirements
└── docker-compose.yml     # Local dev setup
```

## Completion Criteria
- All 9 modules implemented
- Backend API functional
- Frontend dashboard working
- Chat widget embeddable
- Basic tests passing

## Notify When Done
When completely finished, run:
```bash
clawdbot gateway wake --text "Done: AI Support Platform v2 built with OpenSpec - all 9 modules complete" --mode now
```
