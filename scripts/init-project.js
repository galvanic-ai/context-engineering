#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// ANSI color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
  cyan: '\x1b[36m'
};

// Helper function to print colored output
function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// Helper function to copy directory recursively
function copyDirectory(source, destination) {
  // Create destination directory if it doesn't exist
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true });
  }

  // Read source directory
  const files = fs.readdirSync(source);

  files.forEach(file => {
    const sourcePath = path.join(source, file);
    const destPath = path.join(destination, file);

    if (fs.statSync(sourcePath).isDirectory()) {
      // Recursively copy subdirectories
      copyDirectory(sourcePath, destPath);
    } else {
      // Copy file
      fs.copyFileSync(sourcePath, destPath);
    }
  });
}

// Helper function to rename template files
function renameTemplateFiles(directory) {
  const templateMappings = {
    'prd-template.md': 'PRD.md',
    'architecture-template.md': 'ARCHITECTURE.md',
    'task-tracker-template.md': 'TASK-TRACKER.md',
    'test-framework-template.md': 'TEST-FRAMEWORK.md',
    'defect-tracking-template.md': 'DEFECTS.md'
  };

  Object.entries(templateMappings).forEach(([oldName, newName]) => {
    const oldPath = path.join(directory, oldName);
    const newPath = path.join(directory, newName);
    
    if (fs.existsSync(oldPath)) {
      fs.renameSync(oldPath, newPath);
      log(`  ✓ Renamed ${oldName} → ${newName}`, 'green');
    }
  });
}

// Main initialization function
function initProject(projectName) {
  log('\n🚀 Context Engineering Framework - Project Initializer\n', 'bright');
  
  // Validate project name
  if (!projectName) {
    log('Error: Please provide a project name', 'red');
    log('Usage: node scripts/init-project.js <project-name>\n', 'yellow');
    process.exit(1);
  }

  // Sanitize project name
  const sanitizedName = projectName.replace(/[^a-zA-Z0-9-_]/g, '-');
  if (sanitizedName !== projectName) {
    log(`Note: Project name sanitized to: ${sanitizedName}`, 'yellow');
  }

  const projectPath = path.join(process.cwd(), sanitizedName);
  const frameworkRoot = path.dirname(__dirname);

  // Check if project directory already exists
  if (fs.existsSync(projectPath)) {
    log(`Error: Directory '${sanitizedName}' already exists`, 'red');
    log('Please choose a different project name or remove the existing directory\n', 'yellow');
    process.exit(1);
  }

  try {
    log(`Creating project: ${sanitizedName}`, 'blue');
    
    // Create project directory
    fs.mkdirSync(projectPath, { recursive: true });
    log('✓ Created project directory', 'green');

    // Create subdirectories
    const directories = ['memory-bank', 'workflows', 'prompting', 'src', 'tests', 'docs'];
    directories.forEach(dir => {
      fs.mkdirSync(path.join(projectPath, dir), { recursive: true });
    });
    log('✓ Created project structure', 'green');

    // Copy context templates to memory-bank
    log('\nCopying templates...', 'cyan');
    const templatesSource = path.join(frameworkRoot, 'context-templates');
    const memoryBankDest = path.join(projectPath, 'memory-bank');
    
    if (fs.existsSync(templatesSource)) {
      copyDirectory(templatesSource, memoryBankDest);
      log('✓ Copied context templates', 'green');
      
      // Rename template files
      log('\nRenaming template files...', 'cyan');
      renameTemplateFiles(memoryBankDest);
    }

    // Copy workflows
    const workflowsSource = path.join(frameworkRoot, 'workflows');
    const workflowsDest = path.join(projectPath, 'workflows');
    
    if (fs.existsSync(workflowsSource)) {
      copyDirectory(workflowsSource, workflowsDest);
      log('✓ Copied workflow guides', 'green');
    }

    // Copy prompting patterns
    const promptingSource = path.join(frameworkRoot, 'prompting');
    const promptingDest = path.join(projectPath, 'prompting');
    
    if (fs.existsSync(promptingSource)) {
      copyDirectory(promptingSource, promptingDest);
      log('✓ Copied prompting patterns', 'green');
    }

    // Create project-specific CLAUDE.md
    log('\nGenerating project-specific CLAUDE.md...', 'cyan');
    const claudeMdContent = `# CLAUDE.md - ${sanitizedName}

This file provides guidance to Claude Code when working with the ${sanitizedName} project.

## Project Overview

This project uses the Context Engineering Framework for structured development.

### Quick Commands

\`\`\`bash
# Validate project setup
node ../context-engineering/scripts/validate-context.js

# View current task status
cat memory-bank/TASK-TRACKER.md

# Run tests
npm test
\`\`\`

## Project Structure

\`\`\`
${sanitizedName}/
├── CLAUDE.md              # This file - AI context
├── memory-bank/           # Project context and documentation
│   ├── PRD.md            # Product Requirements Document
│   ├── ARCHITECTURE.md   # Technical Architecture
│   ├── TASK-TRACKER.md   # Task Management
│   ├── TEST-FRAMEWORK.md # Testing Strategy
│   └── DEFECTS.md        # Defect Tracking
├── workflows/            # Development workflows
├── prompting/           # AI interaction patterns
├── src/                 # Source code
├── tests/               # Test files
└── docs/                # Additional documentation
\`\`\`

## Development Guidelines

1. Always start sessions by reading TASK-TRACKER.md
2. Update documentation in real-time
3. Follow TDD - write tests first
4. Maintain 80% test coverage minimum
5. Get user approval between tasks

## Key Files to Load

When starting a session, load these files:
- \`@memory-bank/TASK-TRACKER.md\` - Current progress
- \`@memory-bank/PRD.md\` - Requirements
- \`@memory-bank/ARCHITECTURE.md\` - Technical decisions

## Notes

This project was initialized on ${new Date().toISOString().split('T')[0]}.
`;

    fs.writeFileSync(path.join(projectPath, 'CLAUDE.md'), claudeMdContent);
    log('✓ Created project-specific CLAUDE.md', 'green');

    // Create a basic .gitignore
    const gitignoreContent = `# Dependencies
node_modules/

# IDE files
.vscode/
.idea/
*.swp
*.swo
*~

# OS files
.DS_Store
Thumbs.db

# Build outputs
dist/
build/
*.log

# Environment files
.env
.env.local
.env.*.local

# Test coverage
coverage/
.nyc_output/

# Temporary files
tmp/
temp/
`;

    fs.writeFileSync(path.join(projectPath, '.gitignore'), gitignoreContent);
    log('✓ Created .gitignore', 'green');

    // Create initial README
    const readmeContent = `# ${sanitizedName}

A project built using the Context Engineering Framework.

## Getting Started

1. Open this project in Claude Code
2. Start with: \`@memory-bank/PRD.md\`
3. Follow the development workflow in \`workflows/development-workflow.md\`

## Project Status

- **Requirements**: See \`memory-bank/PRD.md\`
- **Architecture**: See \`memory-bank/ARCHITECTURE.md\`
- **Current Tasks**: See \`memory-bank/TASK-TRACKER.md\`
- **Test Status**: See \`memory-bank/TEST-FRAMEWORK.md\`
- **Known Issues**: See \`memory-bank/DEFECTS.md\`

## Development

This project follows:
- Test-Driven Development (TDD)
- Continuous Documentation
- Systematic Task Management
- Regular User Validation

---

*Initialized with Context Engineering Framework on ${new Date().toISOString().split('T')[0]}*
`;

    fs.writeFileSync(path.join(projectPath, 'README.md'), readmeContent);
    log('✓ Created project README.md', 'green');

    // Success message
    log('\n✨ Project initialized successfully!', 'bright');
    log(`\nNext steps:`, 'cyan');
    log(`1. cd ${sanitizedName}`, 'yellow');
    log(`2. Open in Claude Code`, 'yellow');
    log(`3. Start with: @memory-bank/PRD.md`, 'yellow');
    log(`   Say: "Help me create a PRD for [your project description]"`, 'yellow');
    log(`\nHappy coding! 🚀\n`, 'bright');

  } catch (error) {
    log(`\nError: Failed to initialize project`, 'red');
    log(error.message, 'red');
    
    // Cleanup on error
    if (fs.existsSync(projectPath)) {
      fs.rmSync(projectPath, { recursive: true, force: true });
      log('Cleaned up partial project directory', 'yellow');
    }
    
    process.exit(1);
  }
}

// Get project name from command line arguments
const projectName = process.argv[2];
initProject(projectName);