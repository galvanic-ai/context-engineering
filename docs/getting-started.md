# Getting Started with Context Engineering Framework

*A practical guide to using the Context Engineering Framework for your first project.*

## 🎯 Prerequisites

Before starting, ensure you have:
- Claude Code (claude.ai/code) access
- A project idea or requirements
- Basic understanding of software development
- Git for version control (optional but recommended)

## 🚀 Setting Up the Framework

### Step 1: Get the Framework
```bash
# Clone the framework repository
git clone <repository-url> context-engineering
cd context-engineering

# Optional: Run the setup script for helpful aliases
bash scripts/setup.sh
```

### Step 2: Verify Installation
```bash
# Check that everything is properly installed
node scripts/validate-context.js

# You should see all green checkmarks!
```

## 📁 Initialize Your Project

### The Easy Way (Recommended)
```bash
# From the framework directory, create a new project
node scripts/init-project.js my-awesome-project

# Navigate to your new project
cd my-awesome-project

# That's it! Everything is set up and ready to go
```

### What Gets Created
The initialization script automatically:
- ✅ Creates project directory structure
- ✅ Copies all templates to memory-bank/
- ✅ Renames templates to proper filenames
- ✅ Sets up workflows and prompting directories
- ✅ Creates project-specific CLAUDE.md
- ✅ Generates .gitignore
- ✅ Creates initial README.md

### Manual Setup (If Needed)
If you prefer manual setup or need to customize:
```bash
# Create your project directory
mkdir my-project && cd my-project

# Create the structure
mkdir -p memory-bank workflows prompting src tests docs

# Copy templates from framework
cp -r ../context-engineering/context-templates/* ./memory-bank/
cp -r ../context-engineering/workflows/* ./workflows/
cp -r ../context-engineering/prompting/* ./prompting/

# Rename templates
cd memory-bank
for file in *-template.md; do
  mv "$file" "${file%-template.md}.md"
done
```

## 🔄 The Core Workflow

### Phase 1: Define - Create Your PRD

Start Claude Code and load the PRD template:

```
@memory-bank/PRD.md

Help me create a PRD for [your project description].
Let's define the requirements comprehensively.
```

Example starter:
```
@memory-bank/PRD.md

I want to build a task management application for small teams.
Main features: task creation, assignment, deadlines, and progress tracking.
Target users: Teams of 5-20 people.

Please ask clarifying questions to help me create a comprehensive PRD.
```

### Phase 2: Design - Architecture Document

After PRD is complete:

```
@memory-bank/PRD.md @memory-bank/ARCHITECTURE.md

Based on the PRD requirements, help me design the technical architecture.
Consider scalability, security, and maintainability.
Update the architecture template with our design decisions.
```

### Phase 3: Plan - Generate Tasks

With requirements and architecture defined:

```
@memory-bank/PRD.md @memory-bank/ARCHITECTURE.md @memory-bank/task-generation-template.md

Generate a comprehensive task list for implementing this project.
Use the task generation template to ensure we cover all aspects.
Save the results in TASK-TRACKER.md organized by phases.
```

### Phase 4: Execute - Development Workflow

Begin systematic development:

```
@memory-bank/TASK-TRACKER.md @memory-bank/PRD.md @memory-bank/ARCHITECTURE.md

Starting development session.
Show current progress and next priority task.
I'll follow TDD and complete one task at a time with your approval.
```

### Phase 5: Validate - Testing & Acceptance

For each completed feature:

```
@memory-bank/TEST-FRAMEWORK.md @memory-bank/TASK-TRACKER.md

Task [ID] implementation complete.
Help me:
1. Write comprehensive tests
2. Verify 80% coverage
3. Create user validation checklist
4. Update all documentation
```

### Phase 6: Deploy - Controlled Release

When ready for deployment:

```
@workflows/deployment-workflow.md @memory-bank/TASK-TRACKER.md @memory-bank/DEFECTS.md

Pre-deployment check:
- Show task completion status
- Verify all tests passing
- Check for open defects
- Generate deployment checklist
```

### Phase 7: Maintain - Living Documentation

Keep everything current:

```
Please update:
1. Implementation status in ARCHITECTURE.md
2. Task progress in TASK-TRACKER.md  
3. Test coverage in TEST-FRAMEWORK.md
4. Any new patterns discovered
```

## 📋 Daily Development Routine

### Morning Session Start
```
@memory-bank/TASK-TRACKER.md @memory-bank/DEFECTS.md

Good morning! Starting development session.
Please show:
1. Current progress percentage
2. Any open defects
3. Next priority task
4. Any blockers from yesterday
```

### During Development
For each task:
1. **Review requirements** from PRD
2. **Check architecture** constraints
3. **Write tests first** (TDD approach)
4. **Implement solution**
5. **Run all tests**
6. **Update documentation**
7. **Mark task complete**
8. **Get approval** before next task

### End of Day
```
Please update all status trackers:
1. Mark today's completed tasks
2. Update progress percentages
3. Log any new defects found
4. Note any blockers for tomorrow
5. Commit all changes

Provide a summary of today's progress.
```

## 🧪 Testing Your Project

### Setting Up Tests
```
@memory-bank/TEST-FRAMEWORK.md

Help me set up testing for [component/feature].
I need:
1. Unit tests for core logic
2. Integration tests for API
3. E2E tests for user flows

Target: 80% coverage minimum
```

### Running Tests
```bash
# Run different test suites
npm test              # All tests
npm run test:unit     # Unit tests only
npm run test:integration  # Integration tests
npm run test:e2e      # End-to-end tests
npm run test:coverage # With coverage report
```

### Handling Test Failures
```
Test failure detected: [test name]
Error: [error message]

Please help me:
1. Understand why it's failing
2. Determine if it's a test issue or code issue
3. Fix the problem
4. Verify the fix works
```

## 🐛 Managing Defects

### Logging a Defect
```
@memory-bank/DEFECTS.md

Found a defect:
- Description: [what's wrong]
- Steps to reproduce: [how to trigger]
- Expected: [what should happen]
- Actual: [what happens instead]
- Severity: [Critical/High/Medium/Low]

Please log this as DEF-XXX and help me fix it.
```

### Defect Resolution Workflow
1. Create failing test that reproduces issue
2. Fix the code
3. Verify test passes
4. Run regression tests
5. Update defect status
6. Add test to regression suite

## 🚀 Deployment Preparation

### Pre-Deployment Checklist
```
@memory-bank/TASK-TRACKER.md @memory-bank/TEST-FRAMEWORK.md @memory-bank/DEFECTS.md

Ready for deployment check:
- Are all tasks complete?
- Are all tests passing?
- Is coverage above 80%?
- Are all defects resolved?
- Is documentation updated?

Show me deployment readiness status.
```

### Deployment Process
```
Ready to deploy to [environment].

Please help me:
1. Run final test suite
2. Build for production
3. Create deployment checklist
4. Deploy application
5. Verify deployment success
6. Monitor for issues
```

## 💡 Pro Tips for Success

### 1. Context is King
Always start sessions with proper context loading. The framework is designed to maintain continuity across sessions.

### 2. Small, Focused Tasks
Break work into small, testable chunks. Complete one task fully before moving to the next.

### 3. Test Everything
The 80% coverage target isn't arbitrary - it ensures confidence in your code.

### 4. Document as You Go
Update documentation in real-time. It's much harder to recreate context later.

### 5. Regular Validation
Get user feedback frequently. Small course corrections are easier than major pivots.

## 🎯 Common Scenarios

### Starting Fresh After a Break
```
@memory-bank/TASK-TRACKER.md @memory-bank/PRD.md @memory-bank/ARCHITECTURE.md

Resuming project after [time period].
Please provide:
1. Current implementation status
2. Last completed tasks
3. Next priorities
4. Any pending issues
```

### Adding New Features
```
@memory-bank/PRD.md

I need to add a new feature: [description]
Please:
1. Update PRD with new requirements
2. Assess architecture impact
3. Generate new tasks
4. Update test plan
```

### Performance Optimization
```
@memory-bank/ARCHITECTURE.md @memory-bank/TEST-FRAMEWORK.md

Performance issue detected: [description]
Current metrics: [metrics]
Target: [goals]

Help me create optimization plan with tests.
```

### Refactoring Code
```
@memory-bank/ARCHITECTURE.md @memory-bank/TEST-FRAMEWORK.md

Need to refactor [component] because [reason].
Current test coverage: [%]

Ensure we maintain functionality and coverage.
```

## 📚 Next Steps

Once comfortable with basics:

1. **Customize Templates** - Adapt templates for your specific needs
2. **Create Shortcuts** - Set up aliases for common prompts
3. **Automate Workflows** - Script repetitive tasks
4. **Share Knowledge** - Document patterns that work well
5. **Contribute Back** - Share improvements with the community

## 🆘 Getting Help

If you're stuck:

1. **Check Documentation** - Review relevant workflow guides
2. **Load More Context** - Ensure Claude has all needed information
3. **Be Specific** - Provide clear error messages and symptoms
4. **Break It Down** - Tackle complex problems in smaller pieces
5. **Ask for Examples** - Request code samples or clarification

## 🎉 Success Checklist

You're doing great if you have:
- ✅ All memory bank documents created and current
- ✅ Clear task progress visibility
- ✅ Tests for all new code
- ✅ No high-priority defects
- ✅ Regular commits with good messages
- ✅ Happy users (or stakeholders)

---

**Remember**: The framework is here to help you build better software systematically. Take it one task at a time, maintain quality standards, and keep your documentation current. Happy coding!

*Need help?* Just ask: "I'm stuck on [problem]. Here's what I've tried: [attempts]. What should I do next?"