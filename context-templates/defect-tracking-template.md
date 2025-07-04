# Defect Tracking Log: [Project/Feature Name]

*This document tracks all defects discovered during development, testing, and production. It serves as the central repository for issue management and resolution tracking.*

## Summary Dashboard

```
Total Defects: ___
Open: ___ | In Progress: ___ | Testing: ___ | Resolved: ___ | Closed: ___

By Severity:
🔴 Critical: ___ open (must fix immediately)
🟠 High: ___ open (fix before next release)
🟡 Medium: ___ open (fix in current sprint)
🟢 Low: ___ open (fix when possible)

Last Updated: YYYY-MM-DD HH:MM
```

## Defect Metrics

| Metric | Value | Trend |
|--------|-------|-------|
| Mean Time to Resolution | ___ hours | ↑↓→ |
| Defect Escape Rate | ___% | ↑↓→ |
| Regression Rate | ___% | ↑↓→ |
| First-Time Fix Rate | ___% | ↑↓→ |

## Active Critical Defects
*These must be resolved before continuing development*

```
⚠️ BLOCKING: [Number] critical defects are blocking progress
```

## Defect Log

### Defect Template
```markdown
### DEF-[XXX]: [Brief Description]
- **Status**: [ ] Open  [ ] In Progress  [ ] Testing  [ ] Resolved  [ ] Closed
- **Severity**: [ ] Critical  [ ] High  [ ] Medium  [ ] Low
- **Priority**: [ ] P0 (Immediate)  [ ] P1 (24hrs)  [ ] P2 (Sprint)  [ ] P3 (Backlog)
- **Reported Date**: YYYY-MM-DD
- **Reporter**: [Name/System]
- **Assigned To**: [Developer Name]
- **Environment**: [ ] Development  [ ] Staging  [ ] Production
- **Component**: [Affected system component]
- **Related Task**: [Task ID from TASK-TRACKER.md]

#### Description
[Detailed description of the defect]

#### Steps to Reproduce
1. [Step 1]
2. [Step 2]
3. [Step 3]

#### Expected Behavior
[What should happen]

#### Actual Behavior
[What actually happens]

#### Root Cause Analysis
[Required for Medium+ severity]
- **Cause**: [Technical root cause]
- **Impact**: [Systems/features affected]
- **Prevention**: [How to prevent similar issues]

#### Resolution
- **Fix Applied**: [Description of fix]
- **Files Modified**: [List of changed files]
- **Tests Added**: [New tests to prevent regression]
- **Verification Steps**: [How to verify the fix]

#### Timeline
- Reported: YYYY-MM-DD HH:MM
- Acknowledged: YYYY-MM-DD HH:MM
- Fix Started: YYYY-MM-DD HH:MM
- Fix Completed: YYYY-MM-DD HH:MM
- Testing Started: YYYY-MM-DD HH:MM
- Closed: YYYY-MM-DD HH:MM
```

---

## Defects

### DEF-001: [Example Defect Title]
- **Status**: [x] Open  [ ] In Progress  [ ] Testing  [ ] Resolved  [ ] Closed
- **Severity**: [x] Critical  [ ] High  [ ] Medium  [ ] Low
- **Priority**: [x] P0 (Immediate)  [ ] P1 (24hrs)  [ ] P2 (Sprint)  [ ] P3 (Backlog)
- **Reported Date**: YYYY-MM-DD
- **Reporter**: [Name]
- **Assigned To**: [Unassigned]
- **Environment**: [ ] Development  [x] Staging  [ ] Production
- **Component**: [Component name]
- **Related Task**: [Task ID]

#### Description
[Defect description]

#### Steps to Reproduce
1. [Step 1]
2. [Step 2]

#### Expected Behavior
[Expected outcome]

#### Actual Behavior
[Actual outcome]

#### Root Cause Analysis
*Pending investigation*

#### Resolution
*Pending*

#### Timeline
- Reported: YYYY-MM-DD HH:MM
- Other dates: Pending

---

## Severity Definitions

### 🔴 Critical
- System is completely unusable
- Data loss or corruption
- Security vulnerability with immediate risk
- Affects all users
- No workaround available

### 🟠 High
- Major functionality broken
- Significant performance degradation
- Affects many users
- Workaround is difficult

### 🟡 Medium
- Minor functionality broken
- Moderate performance impact
- Affects some users
- Workaround available

### 🟢 Low
- Cosmetic issues
- Minor inconvenience
- Affects few users
- Easy workaround available

## Priority Definitions

### P0 - Immediate
- Drop everything and fix now
- Critical production issues
- Security vulnerabilities

### P1 - Within 24 Hours
- High severity issues
- Blocking other development
- Customer-reported critical issues

### P2 - Current Sprint
- Medium severity issues
- Important but not blocking
- Performance problems

### P3 - Backlog
- Low severity issues
- Enhancements
- Technical debt

## Resolution Requirements by Severity

### Critical Defects
1. Immediate notification to team
2. Root cause analysis required
3. Fix within 4 hours
4. Executive approval for deployment
5. Post-mortem required
6. Regression test suite update

### High Defects
1. Fix within 24 hours
2. Root cause analysis required
3. Code review required
4. Regression test required
5. Documentation update if needed

### Medium Defects
1. Fix within current sprint
2. Standard code review
3. Unit tests required
4. Consider for regression suite

### Low Defects
1. Fix when convenient
2. Batch with other changes
3. Standard development process

## Defect Workflow

```
   New → Acknowledged → In Progress → Code Complete → Testing → Resolved → Closed
    ↓         ↓              ↓              ↓            ↓          ↓
  Rejected  Deferred    More Info     Failed Test   Reopened   Verified
                          Needed
```

## Testing Requirements

### For Each Defect Fix:
1. **Unit Tests**: Cover the specific fix
2. **Integration Tests**: Verify system interactions
3. **Regression Tests**: Ensure no new issues
4. **Manual Testing**: Verify in actual environment

### Before Closing:
- [ ] Original issue cannot be reproduced
- [ ] No new issues introduced
- [ ] Tests are passing
- [ ] Documentation updated if needed
- [ ] Stakeholder approval (for High/Critical)

## Prevention Strategies

### Common Defect Patterns
| Pattern | Prevention Strategy | Implementation |
|---------|-------------------|----------------|
| Null pointer exceptions | Defensive programming | Input validation |
| Race conditions | Proper synchronization | Mutex/locks |
| Memory leaks | Resource management | Auto cleanup |
| SQL injection | Parameterized queries | ORM usage |

### Lessons Learned
- **Date**: [Defect ID] - [What we learned] - [Changes made]

## Regression Test Suite

### Tests Added from Defects
```markdown
- [ ] TEST-DEF-001: [Test description] - Covers DEF-001
- [ ] TEST-DEF-002: [Test description] - Covers DEF-002
```

## Monthly Analysis

### [Month YYYY]
- Total Defects: ___
- Resolution Rate: ___%
- Escape Rate: ___%
- Most Common Category: ___
- Action Items:
  1. [Improvement action]
  2. [Process change]

## Integration with Development

### Before Starting New Task
- Check for open defects in component
- Review related resolved defects
- Update regression tests

### After Completing Task
- Run defect regression suite
- Check for new issues
- Update defect prevention strategies

### During Code Review
- Check against common patterns
- Verify tests for edge cases
- Review error handling

---
*This defect log is critical for quality management. Update immediately when defects are found or resolved.*