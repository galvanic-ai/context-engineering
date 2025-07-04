#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// ANSI color codes
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
  dim: '\x1b[2m'
};

// Helper function to print colored output
function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// Helper to read file safely
function readFileSafe(filePath) {
  try {
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, 'utf-8');
    }
  } catch (error) {
    log(`Warning: Could not read ${path.basename(filePath)}: ${error.message}`, 'yellow');
  }
  return '';
}

// Extract project information from memory bank files
function extractProjectInfo(projectRoot) {
  const memoryBankDir = path.join(projectRoot, 'memory-bank');
  const info = {
    projectName: path.basename(projectRoot),
    description: '',
    techStack: [],
    features: [],
    currentPhase: '',
    completedTasks: 0,
    totalTasks: 0,
    testCoverage: 'Not specified',
    lastUpdated: new Date().toISOString().split('T')[0]
  };
  
  // Extract from PRD.md
  const prdContent = readFileSafe(path.join(memoryBankDir, 'PRD.md'));
  if (prdContent) {
    // Extract project description
    const descMatch = prdContent.match(/## (?:Project Overview|Overview|Description)\s*\n([^\n#]+)/i);
    if (descMatch) {
      info.description = descMatch[1].trim();
    }
    
    // Extract features
    const featuresMatch = prdContent.match(/## (?:Features|Requirements|Functional Requirements)([\s\S]*?)(?=\n##|\n#|$)/i);
    if (featuresMatch) {
      const features = featuresMatch[1].match(/^[\s\-\*]*(.+)$/gm);
      if (features) {
        info.features = features
          .map(f => f.replace(/^[\s\-\*]+/, '').trim())
          .filter(f => f.length > 0)
          .slice(0, 5); // Top 5 features
      }
    }
  }
  
  // Extract from ARCHITECTURE.md
  const archContent = readFileSafe(path.join(memoryBankDir, 'ARCHITECTURE.md'));
  if (archContent) {
    // Extract tech stack
    const techMatch = archContent.match(/## (?:Tech Stack|Technology Stack|Technologies)([\s\S]*?)(?=\n##|\n#|$)/i);
    if (techMatch) {
      const techs = techMatch[1].match(/^[\s\-\*]*(.+)$/gm);
      if (techs) {
        info.techStack = techs
          .map(t => t.replace(/^[\s\-\*]+/, '').trim())
          .filter(t => t.length > 0 && !t.includes(':'));
      }
    }
  }
  
  // Extract from TASK-TRACKER.md
  const taskContent = readFileSafe(path.join(memoryBankDir, 'TASK-TRACKER.md'));
  if (taskContent) {
    // Count tasks
    const completedMatches = taskContent.match(/✅|Completed|DONE/gi);
    const pendingMatches = taskContent.match(/⏳|🔄|Pending|In Progress|TODO/gi);
    
    info.completedTasks = completedMatches ? completedMatches.length : 0;
    info.totalTasks = info.completedTasks + (pendingMatches ? pendingMatches.length : 0);
    
    // Extract current phase
    const phaseMatch = taskContent.match(/## (?:Current Phase|Phase \d+|Active Phase)[:\s]*([^\n]+)/i);
    if (phaseMatch) {
      info.currentPhase = phaseMatch[1].trim();
    }
  }
  
  // Extract from TEST-FRAMEWORK.md
  const testContent = readFileSafe(path.join(memoryBankDir, 'TEST-FRAMEWORK.md'));
  if (testContent) {
    const coverageMatch = testContent.match(/(?:Coverage|Test Coverage)[:\s]*(\d+%)/i);
    if (coverageMatch) {
      info.testCoverage = coverageMatch[1];
    }
  }
  
  return info;
}

// Generate CLAUDE.md content
function generateClaudeMd(projectInfo, projectRoot) {
  const isFramework = fs.existsSync(path.join(projectRoot, 'context-templates'));
  
  if (isFramework) {
    // For the framework itself, use the existing CLAUDE.md
    return readFileSafe(path.join(projectRoot, 'CLAUDE.md'));
  }
  
  // For projects, generate custom content
  let content = `# CLAUDE.md - ${projectInfo.projectName}

This file provides guidance to Claude Code when working with the ${projectInfo.projectName} project.

## Project Overview

${projectInfo.description || 'This project uses the Context Engineering Framework for structured development.'}

### Key Information
- **Current Phase**: ${projectInfo.currentPhase || 'Planning'}
- **Progress**: ${projectInfo.completedTasks}/${projectInfo.totalTasks} tasks completed
- **Test Coverage**: ${projectInfo.testCoverage}
- **Last Updated**: ${projectInfo.lastUpdated}
`;

  if (projectInfo.techStack.length > 0) {
    content += `
### Technology Stack
${projectInfo.techStack.map(tech => `- ${tech}`).join('\n')}
`;
  }

  if (projectInfo.features.length > 0) {
    content += `
### Main Features
${projectInfo.features.map(feature => `- ${feature}`).join('\n')}
`;
  }

  content += `
## Quick Commands

\`\`\`bash
# Validate project setup
node ../context-engineering/scripts/validate-context.js

# View current task status
cat memory-bank/TASK-TRACKER.md | grep -E "✅|⏳|🔄"

# Check test coverage
npm test -- --coverage

# Run linting
npm run lint

# Build project
npm run build
\`\`\`

## Project Structure

\`\`\`
${projectInfo.projectName}/
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

### Starting a Session
1. **Load Context**: Always start by loading the current state
   \`\`\`
   @memory-bank/TASK-TRACKER.md @memory-bank/PRD.md @memory-bank/ARCHITECTURE.md
   \`\`\`

2. **Check Progress**: Review current task status and any blockers

3. **Continue Work**: Pick up from the last completed task

### Working on Tasks
1. **One Task at a Time**: Focus on single tasks for clarity
2. **Test First**: Follow TDD - write tests before implementation
3. **Update Docs**: Keep documentation current with changes
4. **User Approval**: Get confirmation before moving to next task

### Quality Standards
- **Test Coverage**: Maintain minimum ${projectInfo.testCoverage === 'Not specified' ? '80%' : projectInfo.testCoverage} coverage
- **Code Style**: Follow established patterns in the codebase
- **Documentation**: Update relevant docs with each change
- **Commits**: Make atomic commits with clear messages

## Key Files Reference

### Essential Context Files
- \`memory-bank/TASK-TRACKER.md\` - Current progress and next tasks
- \`memory-bank/PRD.md\` - Requirements and acceptance criteria
- \`memory-bank/ARCHITECTURE.md\` - Technical decisions and constraints
- \`memory-bank/TEST-FRAMEWORK.md\` - Testing strategy and status
- \`memory-bank/DEFECTS.md\` - Known issues and resolutions

### When to Update Each File
- **TASK-TRACKER.md**: After completing each task
- **ARCHITECTURE.md**: When making technical decisions
- **TEST-FRAMEWORK.md**: When adding new test suites
- **DEFECTS.md**: When discovering or fixing bugs
- **PRD.md**: When requirements change

## Common Workflows

### Adding a New Feature
1. Update PRD with new requirements
2. Update Architecture if needed
3. Add tasks to TASK-TRACKER
4. Write tests for the feature
5. Implement the feature
6. Update documentation

### Fixing a Bug
1. Log in DEFECTS.md
2. Write failing test
3. Fix the issue
4. Verify test passes
5. Update defect status
6. Add to regression tests

### Refactoring Code
1. Ensure good test coverage exists
2. Document refactoring plan
3. Make incremental changes
4. Run tests after each change
5. Update architecture docs if needed

## Important Reminders

- 🧪 Always run tests before marking a task complete
- 📝 Keep documentation synchronized with code
- 🔍 Use TodoWrite/TodoRead for task management
- 💬 Communicate progress clearly to the user
- 🎯 Focus on one task at a time
- ✅ Get explicit approval before proceeding

## Project-Specific Notes

Add any project-specific guidelines, conventions, or important information here.

---

*Generated on ${projectInfo.lastUpdated} by Context Engineering Framework*
`;

  return content;
}

// Main function
function main() {
  log('\n📝 Context Engineering Framework - CLAUDE.md Generator\n', 'bright');
  
  const projectRoot = process.cwd();
  const outputPath = path.join(projectRoot, 'CLAUDE.md');
  const backupPath = path.join(projectRoot, `CLAUDE.md.backup.${Date.now()}`);
  
  // Check if we're in a valid directory
  const isFramework = fs.existsSync(path.join(projectRoot, 'context-templates'));
  const isProject = fs.existsSync(path.join(projectRoot, 'memory-bank'));
  
  if (!isFramework && !isProject) {
    log('Error: Not in a valid framework or project directory', 'red');
    log('Run this from either:', 'yellow');
    log('  - The context-engineering framework directory', 'dim');
    log('  - A project created with the framework', 'dim');
    process.exit(1);
  }
  
  // Backup existing CLAUDE.md if it exists
  if (fs.existsSync(outputPath)) {
    fs.copyFileSync(outputPath, backupPath);
    log(`✓ Backed up existing CLAUDE.md to ${path.basename(backupPath)}`, 'green');
  }
  
  try {
    // Extract project information
    log('Analyzing project...', 'cyan');
    const projectInfo = extractProjectInfo(projectRoot);
    
    // Generate CLAUDE.md content
    log('Generating CLAUDE.md...', 'cyan');
    const content = generateClaudeMd(projectInfo, projectRoot);
    
    // Write the file
    fs.writeFileSync(outputPath, content);
    log('✓ Generated CLAUDE.md successfully', 'green');
    
    // Display summary
    if (!isFramework) {
      log('\nProject Summary:', 'bright');
      log(`  Name: ${projectInfo.projectName}`, 'dim');
      log(`  Phase: ${projectInfo.currentPhase || 'Planning'}`, 'dim');
      log(`  Progress: ${projectInfo.completedTasks}/${projectInfo.totalTasks} tasks`, 'dim');
      log(`  Test Coverage: ${projectInfo.testCoverage}`, 'dim');
      
      if (projectInfo.features.length > 0) {
        log(`  Features: ${projectInfo.features.length} defined`, 'dim');
      }
      
      if (projectInfo.techStack.length > 0) {
        log(`  Tech Stack: ${projectInfo.techStack.join(', ')}`, 'dim');
      }
    }
    
    log('\n✨ CLAUDE.md has been updated!', 'bright');
    log('\nTip: Load this file at the start of Claude Code sessions:', 'cyan');
    log('  @CLAUDE.md', 'yellow');
    
  } catch (error) {
    log(`\nError: Failed to generate CLAUDE.md`, 'red');
    log(error.message, 'red');
    
    // Restore backup if generation failed
    if (fs.existsSync(backupPath)) {
      fs.copyFileSync(backupPath, outputPath);
      log('Restored previous CLAUDE.md from backup', 'yellow');
    }
    
    process.exit(1);
  }
}

// Parse command line arguments
const args = process.argv.slice(2);
if (args.includes('--help') || args.includes('-h')) {
  log('Context Engineering Framework - CLAUDE.md Generator', 'bright');
  log('\nUsage: node generate-claude-md.js [options]', 'cyan');
  log('\nOptions:', 'cyan');
  log('  -h, --help     Show this help message', 'dim');
  log('\nThis tool generates or updates CLAUDE.md based on your project\'s current state.', 'dim');
  log('Run it from your project root directory.', 'dim');
  process.exit(0);
}

// Run the generator
main();