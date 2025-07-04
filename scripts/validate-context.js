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

// Validation results
const results = {
  passed: [],
  warnings: [],
  errors: []
};

// Helper to check if a file exists and log result
function checkFile(filePath, required = true, description = '') {
  const exists = fs.existsSync(filePath);
  const fileName = path.basename(filePath);
  const status = exists ? 'passed' : (required ? 'errors' : 'warnings');
  
  results[status].push({
    type: 'file',
    path: filePath,
    name: fileName,
    description: description || `${required ? 'Required' : 'Optional'} file`,
    exists
  });
  
  return exists;
}

// Helper to check if a directory exists
function checkDirectory(dirPath, required = true, description = '') {
  const exists = fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory();
  const dirName = path.basename(dirPath);
  const status = exists ? 'passed' : (required ? 'errors' : 'warnings');
  
  results[status].push({
    type: 'directory',
    path: dirPath,
    name: dirName,
    description: description || `${required ? 'Required' : 'Optional'} directory`,
    exists
  });
  
  return exists;
}

// Helper to check file content
function checkFileContent(filePath, checks = []) {
  if (!fs.existsSync(filePath)) return false;
  
  const content = fs.readFileSync(filePath, 'utf-8');
  const fileName = path.basename(filePath);
  
  checks.forEach(check => {
    const found = check.pattern.test(content);
    const status = found ? 'passed' : (check.required ? 'errors' : 'warnings');
    
    results[status].push({
      type: 'content',
      path: filePath,
      name: fileName,
      description: check.description,
      found
    });
  });
  
  return true;
}

// Main validation function
function validateContext() {
  log('\n🔍 Context Engineering Framework - Project Validator\n', 'bright');
  
  const projectRoot = process.cwd();
  const isFrameworkDir = fs.existsSync(path.join(projectRoot, 'context-templates'));
  const isProjectDir = fs.existsSync(path.join(projectRoot, 'memory-bank'));
  
  if (!isFrameworkDir && !isProjectDir) {
    log('Error: Not in a valid framework or project directory', 'red');
    log('Run this from either:', 'yellow');
    log('  - The context-engineering framework directory', 'dim');
    log('  - A project created with the framework', 'dim');
    process.exit(1);
  }
  
  if (isFrameworkDir) {
    log('Validating Framework Installation...', 'cyan');
    validateFramework(projectRoot);
  } else {
    log('Validating Project Setup...', 'cyan');
    validateProject(projectRoot);
  }
  
  // Display results
  displayResults();
}

// Validate framework installation
function validateFramework(frameworkRoot) {
  log('\n📁 Checking Framework Structure:', 'cyan');
  
  // Check directories
  checkDirectory(path.join(frameworkRoot, 'context-templates'), true, 'Context templates directory');
  checkDirectory(path.join(frameworkRoot, 'workflows'), true, 'Workflow guides directory');
  checkDirectory(path.join(frameworkRoot, 'prompting'), true, 'Prompting patterns directory');
  checkDirectory(path.join(frameworkRoot, 'scripts'), true, 'Scripts directory');
  checkDirectory(path.join(frameworkRoot, 'docs'), false, 'Documentation directory');
  
  // Check template files
  log('\n📄 Checking Templates:', 'cyan');
  const templatesDir = path.join(frameworkRoot, 'context-templates');
  checkFile(path.join(templatesDir, 'prd-template.md'), true, 'Product Requirements template');
  checkFile(path.join(templatesDir, 'architecture-template.md'), true, 'Architecture template');
  checkFile(path.join(templatesDir, 'task-tracker-template.md'), true, 'Task tracker template');
  checkFile(path.join(templatesDir, 'test-framework-template.md'), true, 'Test framework template');
  checkFile(path.join(templatesDir, 'defect-tracking-template.md'), true, 'Defect tracking template');
  
  // Check workflow files
  log('\n📋 Checking Workflows:', 'cyan');
  const workflowsDir = path.join(frameworkRoot, 'workflows');
  checkFile(path.join(workflowsDir, 'development-workflow.md'), true, 'Development workflow guide');
  checkFile(path.join(workflowsDir, 'testing-workflow.md'), false, 'Testing workflow guide');
  checkFile(path.join(workflowsDir, 'deployment-workflow.md'), false, 'Deployment workflow guide');
  
  // Check scripts
  log('\n🔧 Checking Scripts:', 'cyan');
  const scriptsDir = path.join(frameworkRoot, 'scripts');
  checkFile(path.join(scriptsDir, 'init-project.js'), true, 'Project initialization script');
  checkFile(path.join(scriptsDir, 'setup.sh'), true, 'Setup script');
  checkFile(path.join(scriptsDir, 'validate-context.js'), true, 'Validation script (this file)');
  
  // Check root files
  log('\n📄 Checking Root Files:', 'cyan');
  checkFile(path.join(frameworkRoot, 'README.md'), true, 'Framework README');
  checkFile(path.join(frameworkRoot, 'CLAUDE.md'), true, 'Framework AI context');
  checkFile(path.join(frameworkRoot, 'package.json'), true, 'Package configuration');
}

// Validate project setup
function validateProject(projectRoot) {
  log('\n📁 Checking Project Structure:', 'cyan');
  
  // Check directories
  checkDirectory(path.join(projectRoot, 'memory-bank'), true, 'Memory bank directory');
  checkDirectory(path.join(projectRoot, 'workflows'), false, 'Workflows directory');
  checkDirectory(path.join(projectRoot, 'prompting'), false, 'Prompting patterns directory');
  checkDirectory(path.join(projectRoot, 'src'), false, 'Source code directory');
  checkDirectory(path.join(projectRoot, 'tests'), false, 'Tests directory');
  checkDirectory(path.join(projectRoot, 'docs'), false, 'Documentation directory');
  
  // Check memory bank files
  log('\n🧠 Checking Memory Bank:', 'cyan');
  const memoryBankDir = path.join(projectRoot, 'memory-bank');
  
  const prdExists = checkFile(path.join(memoryBankDir, 'PRD.md'), true, 'Product Requirements Document');
  const archExists = checkFile(path.join(memoryBankDir, 'ARCHITECTURE.md'), true, 'Architecture Document');
  const taskExists = checkFile(path.join(memoryBankDir, 'TASK-TRACKER.md'), true, 'Task Tracker');
  const testExists = checkFile(path.join(memoryBankDir, 'TEST-FRAMEWORK.md'), true, 'Test Framework');
  const defectExists = checkFile(path.join(memoryBankDir, 'DEFECTS.md'), true, 'Defect Tracker');
  
  // Check file contents
  log('\n📝 Checking Document Status:', 'cyan');
  
  if (prdExists) {
    checkFileContent(path.join(memoryBankDir, 'PRD.md'), [
      {
        pattern: /## Implementation Status/i,
        description: 'PRD has implementation status section',
        required: false
      },
      {
        pattern: /## Requirements|## Features/i,
        description: 'PRD has requirements or features defined',
        required: false
      }
    ]);
  }
  
  if (taskExists) {
    checkFileContent(path.join(memoryBankDir, 'TASK-TRACKER.md'), [
      {
        pattern: /\|\s*Task ID\s*\|/i,
        description: 'Task tracker has proper table structure',
        required: false
      },
      {
        pattern: /## Overall Progress|## Progress/i,
        description: 'Task tracker has progress tracking',
        required: false
      }
    ]);
  }
  
  // Check root files
  log('\n📄 Checking Project Files:', 'cyan');
  checkFile(path.join(projectRoot, 'README.md'), false, 'Project README');
  checkFile(path.join(projectRoot, 'CLAUDE.md'), true, 'Project AI context');
  checkFile(path.join(projectRoot, '.gitignore'), false, 'Git ignore file');
}

// Display validation results
function displayResults() {
  log('\n' + '='.repeat(60), 'dim');
  log('\n📊 Validation Results\n', 'bright');
  
  // Display passed checks
  if (results.passed.length > 0) {
    log(`✅ Passed: ${results.passed.length} checks`, 'green');
    if (process.argv.includes('--verbose') || process.argv.includes('-v')) {
      results.passed.forEach(item => {
        log(`   ✓ ${item.description}`, 'dim');
      });
    }
  }
  
  // Display warnings
  if (results.warnings.length > 0) {
    log(`\n⚠️  Warnings: ${results.warnings.length}`, 'yellow');
    results.warnings.forEach(item => {
      log(`   - ${item.description}`, 'yellow');
      log(`     Missing: ${item.name}`, 'dim');
    });
  }
  
  // Display errors
  if (results.errors.length > 0) {
    log(`\n❌ Errors: ${results.errors.length}`, 'red');
    results.errors.forEach(item => {
      log(`   - ${item.description}`, 'red');
      log(`     Missing: ${item.name}`, 'dim');
    });
  }
  
  // Summary
  log('\n' + '='.repeat(60), 'dim');
  
  if (results.errors.length === 0) {
    if (results.warnings.length === 0) {
      log('\n✨ Perfect! Your setup is complete and ready to use.', 'green');
    } else {
      log('\n✅ Setup is functional. Consider addressing warnings for best experience.', 'green');
    }
  } else {
    log('\n❌ Setup has errors that need to be fixed.', 'red');
    log('\nTo fix:', 'yellow');
    
    if (fs.existsSync(path.join(process.cwd(), 'context-templates'))) {
      log('  - Ensure all framework files are present', 'dim');
      log('  - Re-download or clone the repository if needed', 'dim');
    } else {
      log('  - Run initialization: node ../context-engineering/scripts/init-project.js', 'dim');
      log('  - Or manually create missing files from templates', 'dim');
    }
  }
  
  log('\nRun with --verbose or -v flag to see all checks\n', 'dim');
  
  // Exit code
  process.exit(results.errors.length > 0 ? 1 : 0);
}

// Run validation
validateContext();