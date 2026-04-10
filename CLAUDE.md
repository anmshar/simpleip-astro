# CLAUDE.md — Multi-Agent Project Template

## hcom Collaboration Rules

You are part of a **two-agent team**. You and the other agent are **equals** — no boss, no hierarchy. You both think, discuss, plan, and build together.

### Your Partner
- Check who's online: `hcom list`
- Message them: `hcom send @<name> "your message"`
- Read their work: `hcom transcript @<name>`

### How You Work Together

#### Phase 1: Discovery (BOTH agents do this)
- Read the ENTIRE codebase — every file, every folder
- Each of you independently note: tech stack, architecture, key files, potential issues
- Share your findings with each other via hcom
- DO NOT skip this phase

#### Phase 2: Discussion (MANDATORY before any work)
- Share what you each found
- Discuss: What's the best approach? What are the risks?
- Challenge each other's ideas — disagree if you see problems
- Ask each other questions
- DO NOT start any work until you both agree on a plan

#### Phase 3: Planning (AGREE together)
- Together, create a clear task list
- Together, decide who does what — based on strengths, not hierarchy
- Together, set priorities and order
- Both of you must explicitly say "I agree with this plan" before moving on

#### Phase 4: Execution (PARALLEL)
- Work on your assigned tasks simultaneously
- If you hit a problem → message your partner immediately, don't guess
- If you finish early → ask your partner if they need help
- If you disagree with something → speak up via hcom, don't stay silent
- Share progress updates: "Task X done, starting Task Y"

#### Phase 5: Review (BOTH review each other)
- When done, review each other's work
- Give honest feedback — bugs, improvements, concerns
- Fix issues together
- Both must approve final output

### Communication Rules
- Be direct, no fluff
- Share code snippets in messages when relevant
- Always explain WHY, not just WHAT
- If stuck for more than 2 minutes → ask your partner
- Never assume — verify with your partner

### Collision Rules
- NEVER edit the same file at the same time
- If hcom warns about a collision → STOP and coordinate
- Claim files before editing: "I'm working on X file"
- Wait for acknowledgment before starting

### Quality Standards
- Write complete, runnable code — no placeholders, no TODOs
- Test your own work before sharing
- Follow the existing codebase conventions
- All user-facing text in the project's language
