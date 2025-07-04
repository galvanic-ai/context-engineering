# Session Protocols for AI-Assisted Development

*This guide provides standardized prompting patterns and session management protocols for effective AI-assisted development using Claude Code.*

## 🚀 Session Startup Protocol

### Standard Session Initialization
```
@memory-bank/TASK-TRACKER.md @memory-bank/PRD.md @memory-bank/ARCHITECTURE.md

Context Check: Starting development session
- Current focus: [Brief description of current work]
- Last completed task: [Task ID from tracker]
- Architecture compliance required
- Test coverage target: 80%
```

### Context Loading Priority
1. **Always Load First**:
   - `TASK-TRACKER.md` - Current progress and next tasks
   - `PRD.md` - Requirements and success criteria
   - `ARCHITECTURE.md` - Technical constraints and decisions

2. **Load As Needed**:
   - `TEST-FRAMEWORK.md` - When writing tests
   - `DEFECTS.md` - When fixing bugs
   - Component-specific docs - When working on specific features

## 📋 Standardized Prompt Templates

### New Feature Implementation
```
@memory-bank/TASK-TRACKER.md @memory-bank/PRD.md @memory-bank/ARCHITECTURE.md

Implementing Task: [Task ID] - [Task Description]
- PRD Section: [Relevant section reference]
- Architecture Constraints: [Specific constraints]
- Test Requirements: Unit + Integration tests required
- Update all status indicators after completion
```

### Bug Fix Session
```
@memory-bank/DEFECTS.md @memory-bank/ARCHITECTURE.md @memory-bank/TEST-FRAMEWORK.md

Bug Fix: DEF-[XXX] - [Bug Description]
- Severity: [Critical/High/Medium/Low]
- Root Cause: [If known]
- Regression Test Required: Yes
- Architecture compliance check needed
```

### Code Review Session
```
@memory-bank/ARCHITECTURE.md @memory-bank/CODING-STANDARDS.md

Code Review Request:
- Feature/Fix: [Description]
- Files Changed: [List main files]
- Architecture Alignment: [Confirm compliance]
- Test Coverage: [Current %]
- Security Considerations: [Any concerns]
```

### Testing Session
```
@memory-bank/TEST-FRAMEWORK.md @memory-bank/TASK-TRACKER.md

Test Implementation: [Feature/Component]
- Test Categories: [ ] Unit [ ] Integration [ ] E2E
- Coverage Target: 80%
- Edge Cases: [List key scenarios]
- Performance Benchmarks: [If applicable]
```

## 🔄 Context Refresh Commands

### Quick Context Refresh
```
Context Refresh: Show current task progress from TASK-TRACKER.md
Need status of active tasks and blockers.
```

### Full Context Reload
```
Full Context Load: @memory-bank/TASK-TRACKER.md @memory-bank/PRD.md @memory-bank/ARCHITECTURE.md @memory-bank/DEFECTS.md

Resuming session - need complete project status including:
- Current implementation progress
- Open defects by severity
- Next priority tasks
- Any blockers
```

### Architecture Sync
```
Architecture Check: @memory-bank/ARCHITECTURE.md
Verify current implementation matches documented architecture.
Update any deviations found.
```

## 🎯 Task Execution Patterns

### Single Task Execution
```
Execute Task: [Task ID from TASK-TRACKER.md]
- Follow TDD approach
- Update status to "in_progress"
- Run tests after implementation
- Update documentation
- Mark complete only after all tests pass
- Request permission before next task
```

### Phased Implementation
```
Phase Implementation: [Phase Name]
Starting Phase [X] with [N] tasks.
Will complete one task at a time with your approval between each.
First task: [Task ID] - Ready to begin?
```

### Continuous Testing Mode
```
Test-Driven Session: [Feature Name]
1. Write failing tests first
2. Implement minimal code to pass
3. Refactor with confidence
4. Update test coverage metrics
5. Document any new test patterns
```

## 🚨 Critical Checkpoints

### Pre-Implementation Checkpoint
```
Pre-Implementation Check:
- [ ] Task requirements clear (check PRD)
- [ ] Architecture constraints understood
- [ ] No blocking defects
- [ ] Test approach defined
- [ ] Dependencies available

Ready to proceed with implementation?
```

### Pre-Deployment Checkpoint
```
Pre-Deployment Validation:
- [ ] All tests passing
- [ ] Coverage targets met (80%+)
- [ ] No critical/high defects
- [ ] Documentation updated
- [ ] Architecture docs current
- [ ] Performance benchmarks met

Deployment checklist complete. Proceed?
```

### Architecture Deviation Check
```
ARCHITECTURE DEVIATION DETECTED:
Proposed approach: [Description]
Current architecture: [What exists]
Reason for deviation: [Justification]

This requires approval before proceeding.
Impact analysis: [Potential impacts]
```

## 💬 Communication Protocols

### Progress Updates
```
Task Progress Update:
- Task: [ID] - [Name]
- Status: 75% complete
- Completed: [What's done]
- Remaining: [What's left]
- Blockers: [Any issues]
- ETA: [Estimated completion]
```

### Blocker Notification
```
BLOCKER IDENTIFIED:
- Task Affected: [Task ID]
- Blocker Type: [Technical/Dependency/Clarification]
- Description: [Detailed description]
- Impact: [What's blocked]
- Proposed Solutions: 
  1. [Option 1]
  2. [Option 2]
Need your input to proceed.
```

### Validation Request
```
Validation Required:
- Feature: [What was implemented]
- Test Results: [Summary]
- Manual Testing Needed:
  1. [Test scenario 1]
  2. [Test scenario 2]
- Expected Behavior: [What should happen]

Please test and confirm before I proceed to next task.
```

## 🔧 Advanced Patterns

### Multi-Component Update
```
@memory-bank/ARCHITECTURE.md @memory-bank/TASK-TRACKER.md

Multi-Component Update Required:
- Components Affected: [List]
- Coordination Needed: [Dependencies]
- Test Strategy: [Approach]
- Rollback Plan: [If needed]

Will update components in this order: [Sequence]
Approve sequence?
```

### Performance Optimization Session
```
@memory-bank/ARCHITECTURE.md @memory-bank/TEST-FRAMEWORK.md

Performance Optimization: [Component/Feature]
- Current Baseline: [Metrics]
- Target: [Goal metrics]
- Optimization Strategy: [Approach]
- Test Plan: [Performance tests]
- Risk Assessment: [Potential impacts]
```

### Refactoring Session
```
@memory-bank/ARCHITECTURE.md @memory-bank/TEST-FRAMEWORK.md

Refactoring: [Component/System]
- Objective: [Why refactoring]
- Scope: [What's included]
- Test Coverage: [Current %] → [Must maintain]
- Architecture Impact: [None/Minor/Major]
- Migration Strategy: [If needed]
```

## 📊 Status Tracking Patterns

### Regular Status Sync
```
Status Sync Request:
Please update:
1. TASK-TRACKER.md - Mark completed tasks
2. Implementation percentages
3. Test coverage metrics
4. Any new defects found
5. Architecture documentation if changed
```

### End-of-Session Summary
```
Session Summary:
- Tasks Completed: [List with IDs]
- Tests Written: [Count and type]
- Coverage Change: [Before] → [After]
- Defects Found: [Count by severity]
- Documentation Updated: [What changed]
- Next Priority: [Next task to tackle]
```

## 🎓 Best Practices

### DO:
- ✅ Load context at session start
- ✅ Update status in real-time
- ✅ Request validation between tasks
- ✅ Keep documentation current
- ✅ Follow TDD approach
- ✅ Check for defects before new tasks

### DON'T:
- ❌ Skip context loading
- ❌ Batch status updates
- ❌ Proceed without validation
- ❌ Ignore test failures
- ❌ Deviate from architecture without approval
- ❌ Mark tasks complete with failing tests

## 🔐 Security and Quality Gates

### Security Check Pattern
```
Security Review: [Component/Feature]
- Input Validation: [Implemented/Needed]
- Authentication: [Required/Implemented]
- Authorization: [Roles checked]
- Data Protection: [Encryption status]
- Audit Logging: [What's logged]
```

### Quality Gate Verification
```
Quality Gate Check:
- [ ] Code Review: Complete
- [ ] Tests: All passing
- [ ] Coverage: Above 80%
- [ ] Performance: Meets targets
- [ ] Security: No vulnerabilities
- [ ] Documentation: Updated

Gate Status: [PASS/FAIL]
```

## 🚀 Productivity Tips

### 1. Create Aliases
Set up quick commands for common patterns:
- `ctx-full` → Full context load
- `ctx-task` → Task-specific context
- `ctx-test` → Testing context
- `ctx-deploy` → Deployment checklist

### 2. Session Continuity
```
Resuming from previous session [Session ID/Date]
Last task completed: [Task ID]
Continue with next task in sequence.
```

### 3. Batch Operations
```
Batch Test Run:
Running all tests for [Component/Feature]
- Unit Tests: [Count]
- Integration Tests: [Count]
- E2E Tests: [Count]
Will report consolidated results.
```

---
*These protocols ensure consistent, high-quality AI-assisted development. Always prioritize context loading and status tracking for optimal results.*