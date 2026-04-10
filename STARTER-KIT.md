# 🚀 hcom Project Starter Kit

## Setup (one time per project)

### 1. Copy these files to your project root:
```bash
cp CLAUDE.md /path/to/your-project/CLAUDE.md
cp AGENTS.md /path/to/your-project/AGENTS.md
```

### 2. Launch:
```bash
cd /path/to/your-project
hcom claude       # Terminal Tab 1
hcom codex        # Terminal Tab 2
hcom              # Terminal Tab 3 (dashboard)
```

### 3. Paste the starter prompt in Claude's terminal:

---

## ⭐ THE MASTER PROMPT (copy this every time)

```
Read the entire codebase — every single file, folder, config, migration, route, view, component, test, and asset.

Then send your partner a full summary of what you found:
- Tech stack and framework
- Folder structure and architecture
- Key files and their purpose
- Database schema / models
- Routes and endpoints  
- Frontend structure
- Any issues, bugs, or concerns you spotted

Ask your partner to do the same and share their findings with you.

IMPORTANT: Do NOT start any work yet. First:
1. Both of you share what you found
2. Discuss the approach together
3. Challenge each other's ideas
4. Agree on a plan TOGETHER
5. Decide who does what
6. Both say "I agree" before starting

Then execute in parallel, communicating via hcom throughout.

Here's what I need done:

[DESCRIBE YOUR TASK HERE]

Go.
```

---

## 📋 TASK TEMPLATES (replace the [DESCRIBE YOUR TASK HERE] part)

### Testing
```
Test every flow and every design in this webapp:
- Every user flow end-to-end (registration, login, dashboard, CRUD operations, forms, checkout — whatever exists)
- Every UI element (templates render, responsive, fonts load, colors consistent, buttons/forms work, translations correct)
- Every backend flow (controllers, services, API responses, edge cases, error handling, database operations, validations)
- Every integration (third-party APIs, notifications, emails, payments — whatever is connected)
Find real bugs. Fix what you can. Report what you can't.
```

### Bug Fixing
```
Find and fix every bug in this webapp:
- Run the app and test every flow manually
- Check for console errors, broken links, 404s
- Check mobile responsiveness
- Check form validations
- Check error handling — what happens when things fail?
- Check edge cases — empty states, long text, special characters
- Check performance — slow queries, N+1 problems, large payloads
Fix every bug you find. Document what you fixed and why.
```

### Refactoring
```
Refactor this entire codebase for production quality:
- Clean up messy code, remove dead code, fix naming
- Extract repeated logic into reusable functions/services
- Add proper error handling everywhere
- Add input validation everywhere
- Improve database queries (indexes, eager loading, avoid N+1)
- Add proper logging
- Security audit — SQL injection, XSS, CSRF, auth holes
- Make sure nothing breaks — test after every change
```

### New Feature
```
Build this feature: [DESCRIBE FEATURE]

Requirements:
- [List specific requirements]
- [Expected behavior]
- [Edge cases to handle]

Must integrate with the existing codebase — match the current architecture, conventions, and design system. Write tests for everything new.
```

### Design/UI Overhaul
```
Redesign the entire frontend:
- Audit every page and component for design consistency
- Fix spacing, alignment, typography, color inconsistencies  
- Make everything fully responsive (mobile, tablet, desktop)
- Ensure accessibility (proper labels, contrast, keyboard nav)
- Match this design system: [DESCRIBE COLORS, FONTS, STYLE]
- All text must be in [LANGUAGE]
- Test every page after changes — nothing should break
```

### Code Review
```
Do a thorough code review of this entire codebase:
- Architecture — is it well structured? What would you change?
- Security — any vulnerabilities? (SQL injection, XSS, auth issues, exposed secrets)
- Performance — any bottlenecks? Slow queries? Memory leaks?
- Code quality — naming, DRY, SOLID principles, error handling
- Tests — what's missing? What's poorly tested?
- Dependencies — outdated? vulnerable? unnecessary?
Discuss your findings together. Prioritize issues by severity. Fix the critical ones.
```

### Deployment Prep
```
Prepare this app for production deployment:
- Environment config — .env.example with all required vars
- Database — migrations clean? seeders work? indexes added?
- Security — HTTPS, CORS, rate limiting, input sanitization, secrets not exposed
- Performance — caching, CDN-ready assets, optimized queries, compression
- Monitoring — error logging, health check endpoint
- CI/CD — write GitHub Actions workflow for test + deploy
- Documentation — README with setup, deploy, and architecture docs
Test everything. Make sure the app runs clean from a fresh clone.
```

---

## 💡 TIPS

1. **Be specific** — "test the booking flow" works better than "test everything"
2. **Give context** — "this is a Laravel medical cannabis telehealth platform in German" helps both agents
3. **Let them disagree** — the best plans come from debate, not agreement
4. **Watch the dashboard** — jump in via `hcom send` if they go off track
5. **Save the output** — after the session, run `hcom transcript timeline` to see everything that happened
