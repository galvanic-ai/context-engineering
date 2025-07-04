# Task Generation Guide

*This template helps generate comprehensive task lists for new features or projects. Use it to ensure all aspects of implementation are covered.*

## Pre-Generation Checklist

Before generating tasks, ensure you have:
- [ ] Read and understood the PRD
- [ ] Reviewed the architecture document
- [ ] Identified all stakeholders
- [ ] Understood the success criteria
- [ ] Identified dependencies and risks

## Task Generation Framework

### 1. Analyze Requirements

#### Functional Requirements Breakdown
For each functional requirement in the PRD:
```
Requirement: [FR-XXX from PRD]
Tasks Needed:
- [ ] Database schema changes
- [ ] API endpoint implementation
- [ ] Business logic development
- [ ] Frontend implementation
- [ ] Unit tests
- [ ] Integration tests
- [ ] Documentation updates
```

#### Non-Functional Requirements
For each NFR (performance, security, accessibility):
```
NFR: [NFR-XXX from PRD]
Tasks Needed:
- [ ] Implementation tasks
- [ ] Validation/testing tasks
- [ ] Monitoring setup
- [ ] Documentation
```

### 2. Standard Task Categories

#### Environment Setup Tasks
```markdown
- [ ] Repository initialization
- [ ] Development environment configuration
- [ ] Dependency installation
- [ ] Build tool configuration
- [ ] CI/CD pipeline setup
- [ ] Environment variables configuration
- [ ] Database setup
- [ ] Third-party service configuration
```

#### Backend Development Tasks
```markdown
- [ ] Database schema design
- [ ] Migration scripts
- [ ] Model/entity creation
- [ ] Repository layer implementation
- [ ] Service layer implementation
- [ ] API endpoint creation
- [ ] Input validation
- [ ] Error handling
- [ ] Authentication/authorization
- [ ] API documentation
```

#### Frontend Development Tasks
```markdown
- [ ] Component design
- [ ] Page layout implementation
- [ ] Form creation and validation
- [ ] State management setup
- [ ] API integration
- [ ] Error handling UI
- [ ] Loading states
- [ ] Responsive design
- [ ] Accessibility implementation
- [ ] Browser compatibility
```

#### Testing Tasks
```markdown
- [ ] Unit test creation
- [ ] Integration test development
- [ ] E2E test scenarios
- [ ] Performance testing
- [ ] Security testing
- [ ] Accessibility testing
- [ ] Cross-browser testing
- [ ] Mobile testing
- [ ] Load testing
- [ ] Regression test updates
```

#### Documentation Tasks
```markdown
- [ ] API documentation
- [ ] Code documentation
- [ ] User guide creation
- [ ] Administrator guide
- [ ] Deployment documentation
- [ ] Troubleshooting guide
- [ ] Architecture updates
- [ ] README updates
```

### 3. Task Prioritization Matrix

| Priority | Criteria | Examples |
|----------|----------|----------|
| **Critical** | Blocks other work or core functionality | Database setup, authentication |
| **High** | Essential for MVP | Core features, basic UI |
| **Medium** | Important but not blocking | Enhanced features, optimizations |
| **Low** | Nice to have | Polish, minor enhancements |

### 4. Task Estimation Guidelines

| Task Complexity | Time Estimate | Factors |
|----------------|---------------|----------|
| **Simple** | 1-4 hours | Clear requirements, minimal dependencies |
| **Medium** | 4-16 hours | Some complexity, moderate dependencies |
| **Complex** | 16-40 hours | High complexity, many dependencies |
| **Epic** | 40+ hours | Should be broken down further |

### 5. Task Dependencies Mapping

```
Task A (Database Schema)
  └── Task B (Model Creation)
      └── Task C (Service Layer)
          └── Task D (API Endpoints)
              └── Task E (Frontend Integration)
```

## Task Template Structure

### Individual Task Format
```markdown
#### [Task Number] [Task Title]
- **Description**: Clear, actionable description
- **Acceptance Criteria**: 
  - [ ] Specific measurable outcome 1
  - [ ] Specific measurable outcome 2
- **Dependencies**: [List any dependent tasks]
- **Estimated Effort**: [Hours/Days]
- **Priority**: [Critical/High/Medium/Low]
- **Testing Requirements**:
  - [ ] Unit tests written
  - [ ] Integration tests passed
  - [ ] Manual testing completed
- **Documentation**:
  - [ ] Code documented
  - [ ] User documentation updated
```

## Quality Assurance Integration

### For Each Task, Include:

1. **Testing Requirements**
   - Unit test coverage target
   - Integration test scenarios
   - Manual testing checklist

2. **Review Checkpoints**
   - Code review required
   - Architecture review (if applicable)
   - Security review (if applicable)

3. **Definition of Done**
   - Code complete and tested
   - Documentation updated
   - Reviewed and approved
   - Deployed to appropriate environment

## Defect Prevention Strategies

### Common Task Additions for Quality:

1. **Input Validation Tasks**
   - Client-side validation
   - Server-side validation
   - Error message implementation

2. **Error Handling Tasks**
   - Exception handling
   - User-friendly error messages
   - Error logging

3. **Performance Tasks**
   - Query optimization
   - Caching implementation
   - Load testing

4. **Security Tasks**
   - Authentication checks
   - Authorization implementation
   - Security header configuration

## Task Generation Checklist

After generating tasks, verify:

- [ ] All functional requirements have corresponding tasks
- [ ] All non-functional requirements are addressed
- [ ] Testing tasks are included for each feature
- [ ] Documentation tasks are included
- [ ] Dependencies are clearly mapped
- [ ] Priorities are assigned
- [ ] Effort estimates are realistic
- [ ] Quality gates are defined
- [ ] No critical path items are missing

## Special Considerations

### For AI-Assisted Development:
- Break tasks into clear, atomic units
- Include explicit success criteria
- Add context references (PRD sections, architecture components)
- Define clear boundaries for each task
- Include rollback/recovery tasks where appropriate

### For Different Project Types:

#### New Feature Development
- Focus on incremental delivery
- Include feature flag tasks
- Plan for A/B testing if needed

#### Bug Fixes
- Include regression test tasks
- Add root cause analysis tasks
- Update test suite to prevent recurrence

#### Performance Improvements
- Include baseline measurement tasks
- Add monitoring setup tasks
- Plan for gradual rollout

#### Security Updates
- Include security audit tasks
- Add penetration testing
- Update security documentation

## Task Tracking Integration

Once tasks are generated:

1. Transfer to TASK-TRACKER.md
2. Link to relevant PRD sections
3. Set up defect tracking
4. Configure progress monitoring
5. Establish communication protocols

---
*Use this template to ensure comprehensive task coverage and maintain quality throughout the development lifecycle.*