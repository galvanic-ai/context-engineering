# Installation Guide

This guide covers the installation and setup of the Context Engineering Framework on different operating systems.

## System Requirements

### Minimum Requirements
- **Node.js**: Version 14.0.0 or higher
- **npm**: Version 6.0.0 or higher (comes with Node.js)
- **Disk Space**: ~50MB for framework + space for your projects
- **OS**: Windows 10+, macOS 10.14+, Linux (any modern distribution)

### Optional Requirements
- **Git**: For cloning the repository (alternatively, download as ZIP)
- **VS Code**: Recommended editor with Claude Code extension
- **Bash**: For running setup scripts (Git Bash on Windows)

## Installation Methods

### Method 1: Git Clone (Recommended)

#### macOS/Linux
```bash
# Clone the repository
git clone https://github.com/your-username/context-engineering.git
cd context-engineering

# Make scripts executable
chmod +x scripts/*.js scripts/*.sh

# Run setup (optional - adds helpful aliases)
bash scripts/setup.sh

# Verify installation
node scripts/validate-context.js
```

#### Windows
```powershell
# Using Git Bash or WSL
git clone https://github.com/your-username/context-engineering.git
cd context-engineering

# Run setup using Git Bash
bash scripts/setup.sh

# Or use Node directly in Command Prompt/PowerShell
node scripts/validate-context.js
```

### Method 2: Download ZIP

1. Download the framework ZIP file from the repository
2. Extract to your desired location
3. Open terminal/command prompt in the extracted folder
4. Run validation:
   ```bash
   node scripts/validate-context.js
   ```

### Method 3: NPM Package (Future)

```bash
# Coming soon
npm install -g context-engineering-framework
cef init my-project
```

## Platform-Specific Instructions

### macOS

1. **Install Node.js**
   ```bash
   # Using Homebrew (recommended)
   brew install node
   
   # Or download from nodejs.org
   ```

2. **Install Git (if needed)**
   ```bash
   brew install git
   ```

3. **Clone and Setup**
   ```bash
   git clone <repository-url> ~/Projects/context-engineering
   cd ~/Projects/context-engineering
   bash scripts/setup.sh
   ```

### Windows

1. **Install Node.js**
   - Download from [nodejs.org](https://nodejs.org)
   - Run the installer (use LTS version)
   - Verify: Open Command Prompt and run `node --version`

2. **Install Git (optional)**
   - Download from [git-scm.com](https://git-scm.com)
   - During installation, select "Git Bash Here" option

3. **Clone and Setup**
   ```powershell
   # Using Git Bash
   git clone <repository-url> C:/Projects/context-engineering
   cd /c/Projects/context-engineering
   bash scripts/setup.sh
   
   # Or using PowerShell (without setup script)
   git clone <repository-url> C:\Projects\context-engineering
   cd C:\Projects\context-engineering
   node scripts\validate-context.js
   ```

### Linux (Ubuntu/Debian)

1. **Install Node.js**
   ```bash
   # Using NodeSource repository
   curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # Verify installation
   node --version
   npm --version
   ```

2. **Install Git**
   ```bash
   sudo apt-get update
   sudo apt-get install git
   ```

3. **Clone and Setup**
   ```bash
   git clone <repository-url> ~/context-engineering
   cd ~/context-engineering
   bash scripts/setup.sh
   ```

### Linux (Fedora/RHEL/CentOS)

1. **Install Node.js**
   ```bash
   # Using NodeSource repository
   curl -fsSL https://rpm.nodesource.com/setup_lts.x | sudo bash -
   sudo dnf install nodejs
   ```

2. **Install Git**
   ```bash
   sudo dnf install git
   ```

3. **Clone and Setup**
   ```bash
   git clone <repository-url> ~/context-engineering
   cd ~/context-engineering
   bash scripts/setup.sh
   ```

## Post-Installation

### Verify Installation

Run the validation script to ensure everything is properly installed:

```bash
node scripts/validate-context.js --verbose
```

You should see output like:
```
✅ Passed: 15 checks
✨ Perfect! Your setup is complete and ready to use.
```

### Set Up Shell Aliases (Optional)

If you didn't run the setup script, you can manually add these aliases to your shell configuration:

#### Bash (~/.bashrc)
```bash
# Context Engineering Framework aliases
alias cef-init='node /path/to/context-engineering/scripts/init-project.js'
alias cef-validate='node /path/to/context-engineering/scripts/validate-context.js'
alias cef-claude='node /path/to/context-engineering/scripts/generate-claude-md.js'
```

#### Zsh (~/.zshrc)
```bash
# Context Engineering Framework aliases
alias cef-init='node /path/to/context-engineering/scripts/init-project.js'
alias cef-validate='node /path/to/context-engineering/scripts/validate-context.js'
alias cef-claude='node /path/to/context-engineering/scripts/generate-claude-md.js'
```

#### PowerShell ($PROFILE)
```powershell
# Context Engineering Framework functions
function cef-init { node C:\path\to\context-engineering\scripts\init-project.js $args }
function cef-validate { node C:\path\to\context-engineering\scripts\validate-context.js $args }
function cef-claude { node C:\path\to\context-engineering\scripts\generate-claude-md.js $args }
```

### Create Your First Project

```bash
# Using the script
node scripts/init-project.js my-first-project

# Or with alias (if set up)
cef-init my-first-project

# Navigate to your project
cd my-first-project

# Open in Claude Code
# Start with: @memory-bank/PRD.md
```

## Troubleshooting

### Node.js Not Found

**Error**: `'node' is not recognized as an internal or external command`

**Solution**:
1. Ensure Node.js is installed: Download from [nodejs.org](https://nodejs.org)
2. Restart your terminal after installation
3. Check PATH includes Node.js: `echo $PATH` (Unix) or `echo %PATH%` (Windows)

### Permission Denied

**Error**: `Permission denied` when running scripts

**Solution**:
```bash
# Make scripts executable (Unix/Linux/macOS)
chmod +x scripts/*.js scripts/*.sh

# Or run with node directly
node scripts/init-project.js
```

### Script Not Found

**Error**: `Cannot find module './scripts/init-project.js'`

**Solution**:
1. Ensure you're in the framework root directory
2. Check the scripts directory exists: `ls scripts/`
3. Re-download if files are missing

### Git Not Found

**Error**: `'git' is not recognized`

**Solution**:
- Install Git from [git-scm.com](https://git-scm.com)
- Or download the framework as a ZIP file instead

### Windows Path Issues

**Error**: Paths with spaces causing issues

**Solution**:
- Install to a path without spaces (e.g., `C:\Projects\` not `C:\My Projects\`)
- Or use quotes around paths: `"C:\My Projects\context-engineering"`

## Updating the Framework

### Using Git
```bash
cd context-engineering
git pull origin main
node scripts/validate-context.js
```

### Manual Update
1. Download the latest version
2. Backup your `scripts/` directory
3. Replace with new files
4. Run validation

## Uninstalling

### Remove Framework
```bash
# Remove the framework directory
rm -rf /path/to/context-engineering

# Remove aliases from shell config
# Edit ~/.bashrc, ~/.zshrc, or $PROFILE and remove CEF aliases
```

### Remove Projects
Projects created with the framework are self-contained and can be deleted individually:
```bash
rm -rf /path/to/your-project
```

## Getting Help

If you encounter issues:

1. **Check Documentation**
   - Review this installation guide
   - See [Getting Started](getting-started.md) guide
   - Check [README.md](../README.md) for overview

2. **Validate Setup**
   ```bash
   node scripts/validate-context.js --verbose
   ```

3. **Common Solutions**
   - Restart terminal after installation
   - Ensure you're in the correct directory
   - Check Node.js version: `node --version` (must be 14+)
   - Try running scripts with full paths

4. **Report Issues**
   - GitHub Issues: [repository-url]/issues
   - Include error messages and system info

---

*Happy coding with the Context Engineering Framework!*