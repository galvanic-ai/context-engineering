# Testing Workflow Guide

*This guide provides comprehensive testing workflows for ensuring quality throughout the development lifecycle using the Context Engineering Framework.*

## 🧪 Testing Philosophy

### Test Pyramid Strategy
```
         /\
        /E2E\      (10%) - Critical user journeys
       /----\
      / Integ \    (20%) - Component interactions  
     /--------\
    /   Unit   \   (70%) - Individual functions
   /____________\
```

## 🚀 Test Development Workflow

### Phase 1: Test Planning

#### 1.1 Analyze Requirements
```
@memory-bank/PRD.md @memory-bank/TEST-FRAMEWORK.md

For requirement [FR-XXX]:
1. Identify test scenarios
2. Determine test types needed
3. Define success criteria
4. Estimate test effort
```

#### 1.2 Create Test Plan
```markdown
## Test Plan: [Feature Name]
- Unit Tests: [Count] covering [components]
- Integration Tests: [Count] covering [interactions]
- E2E Tests: [Count] covering [user flows]
- Performance Tests: [Specific benchmarks]
- Security Tests: [Specific checks]
```

### Phase 2: Test Implementation

#### 2.1 Unit Test Workflow
```
Starting unit tests for [Component]:

1. Identify all public methods
2. Test happy path first
3. Add edge cases
4. Test error conditions
5. Verify test isolation
6. Check coverage
```

Example prompt:
```
@memory-bank/TEST-FRAMEWORK.md

Write unit tests for [function/component]:
- Test normal inputs
- Test boundary values
- Test null/undefined
- Test error cases
- Achieve 95% coverage
```

#### 2.2 Integration Test Workflow
```
Integration tests for [Feature]:

1. Setup test environment
2. Test component interactions
3. Test with real dependencies
4. Verify data flow
5. Test error propagation
```

Example prompt:
```
Create integration tests for:
- API endpoint interaction
- Database operations
- External service mocking
- Transaction handling
- Error scenarios
```

#### 2.3 E2E Test Workflow
```
E2E test for [User Journey]:

1. Define user scenario
2. Setup test data
3. Simulate user actions
4. Verify outcomes
5. Test across browsers
6. Clean up test data
```

Example prompt:
```
Write E2E test for complete user flow:
- Start at landing page
- Navigate through feature
- Perform key actions
- Verify success states
- Test error recovery
```

## 🔄 Test Execution Workflows

### Continuous Testing
```bash
# During development (watch mode)
npm run test:watch

# Pre-commit
npm run test:unit

# Pre-push
npm run test:all

# CI/CD Pipeline
npm run test:ci
```

### Test Execution Stages

#### Stage 1: Fast Feedback
```
Developer Machine (< 30 seconds):
├── Linting
├── Type checking  
├── Unit tests (affected only)
└── Quick smoke tests
```

#### Stage 2: Comprehensive
```
CI Pipeline (< 5 minutes):
├── All unit tests
├── Integration tests
├── Code coverage check
└── Security scan
```

#### Stage 3: Full Validation
```
Staging Environment (< 30 minutes):
├── E2E test suite
├── Performance tests
├── Cross-browser tests
├── Accessibility tests
└── Load tests
```

## 📊 Test Analysis Workflow

### 1. Coverage Analysis
```
@memory-bank/TEST-FRAMEWORK.md

Coverage Report Analysis:
- Current: [X]%
- Target: 80%
- Uncovered: [List files/functions]
- Priority: [What to cover next]

Add tests for uncovered critical paths.
```

### 2. Failure Analysis
```
Test Failure Investigation:
1. Identify failing test
2. Check recent changes
3. Reproduce locally
4. Determine root cause
5. Fix code or test
6. Verify fix
7. Run regression suite
```

### 3. Performance Analysis
```
Performance Test Results:
- Baseline: [metrics]
- Current: [metrics]
- Regression: [Yes/No]
- Bottlenecks: [identified]
- Action: [optimization needed]
```

## 🐛 Defect-Driven Testing

### From Defect to Test
```
Defect DEF-XXX found:

1. Create failing test that reproduces issue
2. Fix the defect
3. Verify test now passes
4. Add to regression suite
5. Check for similar issues
6. Update test documentation
```

### Regression Test Management
```
@memory-bank/TEST-FRAMEWORK.md#regression-tests

Adding regression test for DEF-XXX:
- Test name: test_[defect]_[scenario]
- Category: [unit/integration/e2e]
- Priority: [critical/high/medium]
- Run frequency: [always/nightly/release]
```

## 🔍 Test Debugging Workflow

### Debugging Failed Tests

#### Step 1: Isolate the Failure
```
Test debugging checklist:
- [ ] Run single test in isolation
- [ ] Check test dependencies
- [ ] Verify test data setup
- [ ] Check for timing issues
- [ ] Review recent changes
```

#### Step 2: Gather Information
```
Debugging [test name]:
1. Error message: [exact error]
2. Stack trace: [key lines]
3. Test state: [before failure]
4. Expected vs Actual: [comparison]
```

#### Step 3: Fix Strategy
```
Fixing approach:
- [ ] Fix test if test is wrong
- [ ] Fix code if code is wrong
- [ ] Add better error messages
- [ ] Improve test stability
- [ ] Document the fix
```

## 🚀 Test Optimization Workflow

### 1. Identify Slow Tests
```
Performance audit of test suite:
- Total time: [duration]
- Slowest tests: [list]
- Bottlenecks: [database/network/compute]
- Optimization targets: [specific tests]
```

### 2. Optimization Techniques
```
Speed up tests by:
- [ ] Parallel execution
- [ ] Shared test fixtures
- [ ] In-memory databases
- [ ] Mocking external services
- [ ] Reducing test data size
- [ ] Caching compiled code
```

### 3. Maintain Test Quality
```
While optimizing, ensure:
- [ ] Tests remain isolated
- [ ] Coverage maintained
- [ ] Reliability preserved
- [ ] Debugging capability retained
```

## 📈 Test Metrics Tracking

### Daily Metrics
```markdown
## Test Metrics: [Date]
- Tests Run: [count]
- Pass Rate: [%]
- Avg Duration: [time]
- Flaky Tests: [count]
- Coverage: [%]
```

### Weekly Analysis
```markdown
## Weekly Test Health
- New Tests Added: [count]
- Tests Removed: [count]
- Coverage Trend: [↑↓→]
- Reliability: [%]
- Performance: [trend]
```

## 🎯 Test Review Workflow

### Pre-Merge Checklist
```
Before merging PR:
- [ ] All new code has tests
- [ ] All tests passing
- [ ] Coverage increased or maintained
- [ ] No flaky tests introduced
- [ ] Performance benchmarks met
- [ ] Test documentation updated
```

### Test Code Review
```
Review test quality:
- [ ] Clear test names
- [ ] Proper assertions
- [ ] Good test structure
- [ ] Appropriate mocking
- [ ] Edge cases covered
- [ ] Error cases tested
```

## 🔧 Test Maintenance Workflow

### Regular Maintenance Tasks

#### Weekly
```
- Review and fix flaky tests
- Update deprecated test patterns
- Optimize slow tests
- Archive obsolete tests
```

#### Monthly
```
- Full test suite audit
- Coverage gap analysis
- Test infrastructure updates
- Performance baseline refresh
```

#### Quarterly
```
- Test strategy review
- Tool evaluation
- Training needs assessment
- Process improvement
```

## 💡 Best Practices Integration

### TDD Cycle Enforcement
```
For new feature development:
1. ❌ Write test (should fail)
2. ✅ Write minimal code to pass
3. ♻️ Refactor with confidence
4. 📝 Document what was tested
5. 🔄 Repeat for next requirement
```

### Test Naming Convention
```javascript
// Unit tests
describe('UserService', () => {
  it('should create user with valid data', () => {});
  it('should throw error when email is invalid', () => {});
});

// Integration tests  
describe('POST /api/users', () => {
  it('should return 201 when user created successfully', () => {});
  it('should return 400 when validation fails', () => {});
});

// E2E tests
describe('User Registration Flow', () => {
  it('allows new user to register and login', () => {});
});
```

## 🚨 Emergency Testing Workflows

### Hotfix Testing
```
Critical bug in production:

1. Write test that reproduces issue (5 min)
2. Implement fix (X min)
3. Run focused test suite (2 min)
4. Deploy to staging (5 min)
5. Quick smoke test (5 min)
6. Deploy to production
7. Monitor for regressions
```

### Release Testing
```
Pre-release checklist:
- [ ] Full regression suite: PASS
- [ ] Performance tests: PASS
- [ ] Security scan: PASS
- [ ] E2E critical paths: PASS
- [ ] Rollback plan tested
- [ ] Monitoring alerts ready
```

---
*Comprehensive testing is the foundation of quality software. Follow these workflows to ensure robust, reliable applications.*