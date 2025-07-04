# Context Engineering Framework

A comprehensive framework for managing context, tasks, and quality in AI-assisted software development projects using Claude Code.

## 🎯 Purpose

The Context Engineering Framework provides:
- **Structured documentation templates** for maintaining project context
- **Task management systems** for systematic development
- **Testing frameworks** ensuring quality at every step
- **Workflow guides** for consistent execution
- **Prompting patterns** optimized for Claude Code

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- Git (optional, for cloning)

### 1. Get the Framework
```bash
# Clone the framework
git clone <repository-url> context-engineering
cd context-engineering

# Run setup (optional - adds helpful aliases)
bash scripts/setup.sh
```

### 2. Create Your Project
```bash
# One command to set up everything!
node scripts/init-project.js my-awesome-project

# Navigate to your new project
cd my-awesome-project
```

### 3. Start with Claude Code
Open your project in Claude Code and begin with:
```
@memory-bank/PRD.md
Help me create a PRD for [your project description].
Let's define the requirements comprehensively.
```

That's it! Your project is ready with all templates, structure, and documentation in place.

## 📁 Framework Structure

```
context-engineering/
├── CLAUDE.md                    # AI context for this framework
├── README.md                    # This file
├── context-templates/           # Core documentation templates
│   ├── prd-template.md         # Product Requirements Document
│   ├── architecture-template.md # Technical Architecture
│   ├── task-tracker-template.md # Task Management
│   ├── task-generation-template.md # Task Creation Guide
│   ├── test-framework-template.md # Testing Strategy
│   └── defect-tracking-template.md # Defect Management
├── memory-bank/                # Project-specific context (empty)
├── workflows/                  # Development workflows
│   ├── development-workflow.md # Core development process
│   ├── testing-workflow.md     # Testing procedures
│   └── deployment-workflow.md  # Deployment guide
├── prompting/                  # AI interaction patterns
│   ├── session-protocols.md    # Session management
│   └── context-patterns.md     # Context optimization
├── scripts/                    # Automation tools
│   ├── init-project.js         # Project initialization
│   ├── setup.sh                # Framework setup
│   ├── validate-context.js     # Validation tool
│   └── generate-claude-md.js   # CLAUDE.md generator
├── examples/                   # Example implementations (coming soon)
└── docs/                       # Additional documentation
```

## 🔄 Core Workflow

### 1. **Define** → Create PRD
Define what you're building with comprehensive requirements.

### 2. **Design** → Architecture Document
Design how you'll build it with technical specifications.

### 3. **Plan** → Generate Tasks
Break down the work into manageable, testable tasks.

### 4. **Execute** → Development Workflow
Build systematically with continuous testing and validation.

### 5. **Validate** → Testing & User Acceptance
Ensure quality through comprehensive testing and user feedback.

### 6. **Deploy** → Controlled Release
Deploy safely with monitoring and rollback capabilities.

### 7. **Maintain** → Living Documentation
Keep all documentation current as the project evolves.

## 📚 Key Components

### 1. Memory Bank System
Your project's persistent context storage:
- **PRD.md** - Living requirements document
- **ARCHITECTURE.md** - Technical decisions and status
- **TASK-TRACKER.md** - Current progress and tasks
- **TEST-FRAMEWORK.md** - Testing strategy and results
- **DEFECTS.md** - Issue tracking and resolution

### 2. Template Library
Comprehensive templates for:
- Product requirements with implementation tracking
- Architecture with component status dashboards
- Task management with phase-based execution
- Test planning with coverage requirements
- Defect tracking with severity management

### 3. Workflow Guides
Step-by-step procedures for:
- Development execution with TDD
- Testing at all levels (unit, integration, E2E)
- Safe deployment practices
- Context management with AI

### 4. Prompting Patterns
Optimized patterns for:
- Session initialization
- Task execution
- Context switching
- Progress tracking
- Quality validation

## 🛠️ Available Scripts

The framework includes several helpful automation scripts:

### `init-project.js`
Creates a new project with all necessary structure and templates.
```bash
node scripts/init-project.js <project-name>
```

### `validate-context.js`
Validates your project setup and reports any missing components.
```bash
node scripts/validate-context.js
# Add --verbose for detailed output
```

### `generate-claude-md.js`
Updates CLAUDE.md based on your project's current state.
```bash
node scripts/generate-claude-md.js
```

### `setup.sh`
One-time setup script for the framework (adds helpful aliases).
```bash
bash scripts/setup.sh
```

## 🎓 Getting Started Guide

### For New Projects
1. Clone this framework repository
2. Run `node scripts/init-project.js your-project-name`
3. Navigate to your new project directory
4. Open in Claude Code and start with `@memory-bank/PRD.md`

### For Existing Projects
1. Clone this framework to a nearby directory
2. Run the init script from your project: `node ../context-engineering/scripts/init-project.js .`
3. Or manually copy the templates you need
4. Run validation to ensure setup is complete

### Development Flow
1. **Define** → Create comprehensive PRD
2. **Design** → Document technical architecture
3. **Plan** → Generate and organize tasks
4. **Execute** → Implement with TDD
5. **Validate** → Test thoroughly
6. **Deploy** → Release safely
7. **Maintain** → Keep docs current

## 💡 Best Practices

### Context Management
- ✅ Load essential context at session start
- ✅ Update status in real-time
- ✅ Reference specific document sections
- ✅ Maintain focused, scannable documentation
- ✅ Archive completed work regularly

### Task Execution
- ✅ One task at a time
- ✅ Clear acceptance criteria
- ✅ Test-driven development
- ✅ Continuous integration
- ✅ Regular user validation

### Quality Assurance
- ✅ Comprehensive test coverage
- ✅ Automated testing in CI/CD
- ✅ Performance benchmarking
- ✅ Security scanning
- ✅ Accessibility compliance

### Documentation
- ✅ Living documents that evolve
- ✅ Clear status indicators
- ✅ Cross-referenced content
- ✅ Regular accuracy reviews
- ✅ Version control everything

## 🚀 Advanced Usage

### Custom Templates
Extend templates for your specific needs:
1. Fork existing templates
2. Add domain-specific sections
3. Create reusable patterns
4. Share with your team

### Automation
Automate common tasks:
- Project initialization
- Status report generation
- Context validation
- Test execution
- Deployment procedures

### Integration
Integrate with your tools:
- CI/CD pipelines
- Issue tracking systems
- Monitoring platforms
- Communication tools
- Version control hooks

## 🔧 Troubleshooting

### Common Issues

**"node: command not found"**
- Install Node.js from [nodejs.org](https://nodejs.org)
- Ensure Node.js v14 or higher is installed

**"Permission denied" when running scripts**
- Make scripts executable: `chmod +x scripts/*.js`
- Or run with node directly: `node scripts/init-project.js`

**"Directory already exists" error**
- Choose a different project name
- Or remove the existing directory first

**Scripts not finding templates**
- Ensure you're running from the framework root directory
- Check that all directories were cloned/downloaded properly
- Run `node scripts/validate-context.js` to check setup

## 🤝 Contributing

We welcome contributions! Please:
1. Fork the repository
2. Create a feature branch
3. Add your improvements
4. Submit a pull request
5. Update documentation

## 📖 Additional Resources

### Documentation
- [CLAUDE.md](CLAUDE.md) - AI context for this framework
- [Session Protocols](prompting/session-protocols.md) - Detailed prompting guide
- [Context Patterns](prompting/context-patterns.md) - Context optimization
- [Development Workflow](workflows/development-workflow.md) - Step-by-step process

### Examples
Coming soon:
- Sample PRD for a web application
- Architecture for microservices
- Task breakdown for API development
- Test suite for React components

## 🎯 Success Metrics

Track your project health:
- **Task velocity**: Tasks completed per sprint
- **Test coverage**: Maintain above 80%
- **Defect escape rate**: Catch issues before production
- **Documentation currency**: Keep docs within 24 hours of reality
- **Deployment frequency**: Ship regularly and safely

## 📝 License

[Your License Here]

## 🙏 Acknowledgments

This framework is inspired by best practices in:
- Agile development methodologies
- Test-driven development
- DevOps practices
- AI-assisted programming
- Context-driven documentation

---

**Ready to start?** Load this README in Claude Code along with your project requirements and let's build something amazing with proper context management!

```
@README.md @CLAUDE.md
I want to start a new project: [describe your project]
Help me set up the Context Engineering Framework.
```