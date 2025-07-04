# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

The Context Engineering Framework is a comprehensive system designed to maintain context continuity and ensure quality execution throughout large-scale development projects. It provides structured templates, workflows, and tools optimized for AI-assisted development with Claude Code.

### Core Components

1. **Memory Bank System** - Structured documentation that persists project context
2. **Task Management Framework** - Systematic approach to planning and executing development tasks
3. **Test-Driven Development** - Integrated testing at every stage
4. **Progress Tracking** - Real-time visibility into implementation status
5. **Quality Gates** - Validation checkpoints throughout the development lifecycle

## Quick Start Commands

```bash
# Initialize a new project with templates
node scripts/init-project.js <project-name>

# Validate context completeness
node scripts/validate-context.js

# Generate updated CLAUDE.md from templates
node scripts/generate-claude-md.js
```

## Framework Structure

```
context-engineering/
├── context-templates/      # Core documentation templates
│   ├── prd-template.md    # Product Requirements Document
│   ├── architecture-template.md
│   ├── task-template.md
│   └── test-framework-template.md
├── memory-bank/           # Project-specific context storage
├── workflows/             # Development workflows and guides
├── prompting/            # AI interaction patterns
└── scripts/              # Automation tools
```

## Workflow Overview

1. **Project Initialization** → Create PRD using template
2. **Architecture Design** → Define technical architecture
3. **Task Planning** → Break down into manageable tasks
4. **Test Framework Setup** → Define unit/integration/regression tests
5. **Task Execution** → Implement with continuous testing
6. **User Validation** → Checkpoint for user feedback
7. **Documentation Update** → Maintain living documentation

## Key Files Reference

### Essential Context Files
- `memory-bank/PRD.md` - Current project requirements and status
- `memory-bank/ARCHITECTURE.md` - Technical implementation details
- `memory-bank/TASK-TRACKER.md` - Active task list with progress
- `memory-bank/TEST-RESULTS.md` - Testing status and coverage

### When Starting a Session
1. Read `memory-bank/TASK-TRACKER.md` to understand current progress
2. Check `memory-bank/PRD.md` for requirements context
3. Review `memory-bank/ARCHITECTURE.md` for technical decisions
4. Verify test status in `memory-bank/TEST-RESULTS.md`

## Development Guidelines

### Task Execution Pattern
1. Select task from TASK-TRACKER.md
2. Review relevant PRD section
3. Check architecture constraints
4. Write tests first (TDD approach)
5. Implement solution
6. Run tests and validate
7. Update documentation
8. Mark task complete

### Context Optimization
- Use structured markdown with clear headers
- Include implementation status in all documents
- Reference specific sections rather than entire files
- Maintain focused, scannable documentation
- Update progress indicators after each task

### Testing Requirements
- Unit tests for all new functions
- Integration tests for feature workflows
- Regression tests for critical paths
- Minimum 80% code coverage
- All tests must pass before task completion

## Important Notes

- Always update memory-bank documents after completing tasks
- Use TodoWrite/TodoRead tools for task management
- Reference specific document sections to optimize context usage
- Engage user for validation at defined checkpoints
- Maintain implementation dashboards in PRD and Architecture docs