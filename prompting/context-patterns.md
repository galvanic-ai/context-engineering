# Context Engineering Patterns

*This guide provides patterns and best practices for optimizing context usage in AI-assisted development, maximizing efficiency while working within token limits.*

## 🎯 Context Optimization Principles

### 1. Hierarchical Context Loading
Load context in order of relevance:
```
Level 1 (Always): Task tracker, active PRD sections
Level 2 (Often): Architecture constraints, test requirements  
Level 3 (As Needed): Historical decisions, completed tasks
```

### 2. Selective Section References
Instead of loading entire documents:
```
❌ Bad: @memory-bank/PRD.md
✅ Good: @memory-bank/PRD.md#functional-requirements
✅ Better: @memory-bank/PRD.md#section-4.1-authentication
```

### 3. Context Windowing
Maintain a sliding window of relevant context:
```
Active Window:
- Current task + 2 previous + 2 upcoming
- Related defects (same component)
- Relevant architecture sections only
```

## 📚 Document Structure Patterns

### 1. Progressive Disclosure Documents
Structure documents for easy scanning:

```markdown
# Document Title

## Summary Dashboard
[Key metrics and status at a glance]

## Quick Reference
[Most frequently needed information]

## Detailed Sections
### Section 1
[Detailed content with clear headers]
```

### 2. Status-First Organization
Put implementation status prominently:

```markdown
## Component: User Authentication
Status: [x] Implemented  [ ] Tested  [ ] Deployed
Coverage: 85%
Last Updated: 2024-01-15

### Implementation Details
[Details follow status]
```

### 3. Cross-Reference Network
Create explicit links between related sections:

```markdown
## API Endpoints
See also:
- Architecture: [`ARCHITECTURE.md#api-design`]
- Tests: [`TEST-FRAMEWORK.md#api-tests`]
- Security: [`SECURITY.md#api-security`]
```

## 🔄 Context Refresh Strategies

### 1. Incremental Updates
Update only changed sections:
```
Context Update: Task 3.1 completed
- Update TASK-TRACKER.md#phase-3 only
- Update test coverage in TEST-FRAMEWORK.md#metrics
- No need to reload full documents
```

### 2. Focused Context Switching
When changing focus areas:
```
Switching Context: From Backend (API) → Frontend (UI)
Unload: API implementation details, database schemas
Load: UI components, state management, user flows
Retain: Overall architecture, task progress
```

### 3. Context Summarization
Create summaries for long sessions:
```markdown
## Session Context Summary
- Working on: Authentication Flow
- Completed: Tasks 3.1-3.3
- Current: Task 3.4 (60% done)
- Blockers: None
- Key Decisions: JWT for auth, 24hr timeout
```

## 🏗️ Architecture Reference Patterns

### 1. Component-Specific Views
Create focused architecture slices:

```markdown
## Authentication Architecture Slice
Relevant Sections:
- Security: JWT implementation
- API: /auth/* endpoints  
- Database: users, sessions tables
- Frontend: Login/Register components
```

### 2. Decision Records
Track architectural decisions concisely:

```markdown
## ADR-001: Authentication Method
Date: 2024-01-15
Status: Accepted
Decision: Use JWT with refresh tokens
Rationale: Stateless, scalable, secure
Impact: All API endpoints need auth middleware
```

### 3. Implementation Checkpoints
Link architecture to implementation:

```markdown
## Database Layer
Design: [Link to design]
Implementation: [Link to code]
Tests: [Link to tests]
Status: ✅ Complete
Deviations: None
```

## 📝 Task Context Patterns

### 1. Task Context Bundle
Group related information:

```markdown
## Task Bundle: User Registration
- Task: 4.2 from TASK-TRACKER.md
- PRD: Section 3.2 - User Stories
- Architecture: Auth system design
- Tests Required: Unit (5), Integration (2)
- Dependencies: Task 4.1 (complete)
```

### 2. Progressive Task Detail
Expand detail as needed:

```markdown
## Task 4.2: Implement User Registration
Quick: Create registration endpoint
Detail: POST /api/auth/register
Full: [Expand for complete requirements]
```

### 3. Task Chaining Context
Maintain continuity between tasks:

```markdown
## Task Chain Context
Previous: 4.1 - Setup auth middleware ✅
Current: 4.2 - User registration
Next: 4.3 - Email verification
Shared Context: Auth system, JWT tokens
```

## 🧪 Test Context Patterns

### 1. Test-Focused Loading
Load only relevant test information:

```
Testing Context: User Authentication
- Test Requirements: From PRD section 3.2
- Test Categories: Unit, Integration
- Coverage Target: 80%
- Existing Tests: 15 unit, 5 integration
```

### 2. Test Result Summaries
Concise test status:

```markdown
## Test Summary: Authentication
Total: 20 | Pass: 18 | Fail: 2 | Coverage: 78%
Failing: 
- Should handle expired tokens
- Should rate limit login attempts
```

### 3. Test-Code Mapping
Link tests to implementation:

```markdown
## Test Coverage Map
`auth.service.ts`:
- login() → auth.service.test.ts:15-45
- register() → auth.service.test.ts:47-89
- refresh() → auth.service.test.ts:91-120
```

## 🚀 Performance Patterns

### 1. Metrics-First Context
Lead with performance data:

```markdown
## API Performance Context
Current: 150ms avg response
Target: <100ms
Bottleneck: Database queries (3 sequential)
Solution: Implement query batching
```

### 2. Baseline Comparisons
Track performance changes:

```markdown
## Performance Tracking
| Operation | Baseline | Current | Target |
|-----------|----------|---------|---------|
| Login | 200ms | 150ms | 100ms |
| Register | 300ms | 250ms | 150ms |
```

### 3. Optimization Context
Focus on specific improvements:

```
Optimization Target: User list query
Current: 500ms with N+1 problem
Fix: Add eager loading for roles
Expected: <100ms
Test: Load test with 1000 users
```

## 🔍 Debugging Context Patterns

### 1. Error Context Bundle
Group debugging information:

```markdown
## Debug Context: DEF-042
Error: NullPointerException in UserService
Location: user.service.ts:45
Reproduction: Login with deleted user
Related: Tasks 4.1-4.3, similar DEF-038
```

### 2. Investigation Trails
Document debugging paths:

```markdown
## Investigation: Slow Dashboard Load
1. Check: API response times ✅ (normal)
2. Check: Database queries ✅ (optimized)
3. Check: Frontend rendering ❌ (found issue)
4. Root Cause: Unnecessary re-renders
```

### 3. Fix Verification Context
Ensure fixes are complete:

```
Fix Verification: DEF-042
- Code Changed: user.service.ts:45-52
- Tests Added: null-user-handling.test.ts
- Regression Check: All auth tests pass
- Performance: No impact
- Deploy Ready: Yes
```

## 💡 Context Anti-Patterns to Avoid

### 1. ❌ Context Overload
```
Bad: Loading all 15 documents at session start
Good: Load 3 core docs + others as needed
```

### 2. ❌ Stale Context
```
Bad: Using yesterday's task status
Good: Refresh status at session start
```

### 3. ❌ Unfocused Context
```
Bad: Loading entire PRD for one feature
Good: Loading specific PRD section + references
```

### 4. ❌ Context Fragmentation
```
Bad: Information scattered across many files
Good: Centralized references with clear links
```

## 🛠️ Context Management Tools

### 1. Context Templates
Create reusable context bundles:

```bash
# context-templates/
├── feature-start.md
├── bug-fix.md
├── testing-session.md
└── deployment-prep.md
```

### 2. Context Scripts
Automate context preparation:

```javascript
// prepare-context.js
function prepareTaskContext(taskId) {
  return {
    task: loadTask(taskId),
    prd: loadPRDSection(task.prdRef),
    arch: loadArchSection(task.archRef),
    tests: loadTestRequirements(task.testRef)
  };
}
```

### 3. Context Validation
Ensure context completeness:

```markdown
## Context Checklist
- [ ] Current task loaded
- [ ] Related PRD section
- [ ] Architecture constraints
- [ ] Test requirements
- [ ] No stale information
- [ ] Cross-references valid
```

## 📈 Context Metrics

Track context efficiency:

```markdown
## Context Usage Metrics
- Avg contexts per session: 4.2
- Context switch frequency: 3 per hour
- Most used contexts: Task tracker (100%), PRD (78%)
- Stale context incidents: 2 this week
- Context load time: <2 seconds
```

---
*Effective context management is key to productive AI-assisted development. Use these patterns to maintain focus while ensuring comprehensive coverage.*