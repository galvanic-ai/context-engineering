#!/bin/bash

# Context Engineering Framework - Quick Setup Script
# This script helps users quickly set up the framework

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
BOLD='\033[1m'
NC='\033[0m' # No Color

# Helper functions
print_header() {
    echo -e "\n${BOLD}${BLUE}$1${NC}"
    echo "================================"
}

print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

print_info() {
    echo -e "${CYAN}ℹ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

# Main setup function
main() {
    print_header "Context Engineering Framework Setup"
    
    # Check if Node.js is installed
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed"
        print_info "Please install Node.js (v14 or higher) from https://nodejs.org"
        exit 1
    fi
    
    # Get Node.js version
    NODE_VERSION=$(node -v)
    print_success "Node.js ${NODE_VERSION} detected"
    
    # Check if we're in the context-engineering directory
    if [ ! -f "package.json" ] || [ ! -d "context-templates" ]; then
        print_error "This script must be run from the context-engineering directory"
        print_info "Please navigate to the framework directory and try again"
        exit 1
    fi
    
    # Make scripts executable
    print_info "Making scripts executable..."
    chmod +x scripts/*.js 2>/dev/null || true
    chmod +x scripts/*.sh 2>/dev/null || true
    print_success "Scripts are now executable"
    
    # Create helpful aliases (optional)
    print_header "Optional: Shell Aliases"
    echo "Would you like to add helpful aliases to your shell? (y/n)"
    read -r response
    
    if [[ "$response" =~ ^[Yy]$ ]]; then
        # Detect shell
        SHELL_CONFIG=""
        if [ -n "$ZSH_VERSION" ]; then
            SHELL_CONFIG="$HOME/.zshrc"
        elif [ -n "$BASH_VERSION" ]; then
            SHELL_CONFIG="$HOME/.bashrc"
        fi
        
        if [ -n "$SHELL_CONFIG" ]; then
            # Backup existing config
            cp "$SHELL_CONFIG" "$SHELL_CONFIG.backup.$(date +%Y%m%d_%H%M%S)"
            
            # Add aliases
            cat >> "$SHELL_CONFIG" << 'EOF'

# Context Engineering Framework aliases
alias cef-init='node $(pwd)/scripts/init-project.js'
alias cef-validate='node $(pwd)/scripts/validate-context.js'
alias cef-claude='node $(pwd)/scripts/generate-claude-md.js'
EOF
            
            print_success "Aliases added to $SHELL_CONFIG"
            print_info "Run 'source $SHELL_CONFIG' to load the aliases"
            print_info "Available aliases:"
            echo "  - cef-init <project-name>    # Initialize new project"
            echo "  - cef-validate               # Validate project setup"
            echo "  - cef-claude                 # Generate CLAUDE.md"
        else
            print_warning "Could not detect shell configuration file"
        fi
    fi
    
    # Verify installation
    print_header "Verifying Installation"
    
    # Check required directories
    REQUIRED_DIRS=("context-templates" "workflows" "prompting" "scripts")
    ALL_GOOD=true
    
    for dir in "${REQUIRED_DIRS[@]}"; do
        if [ -d "$dir" ]; then
            print_success "Found $dir/"
        else
            print_error "Missing $dir/"
            ALL_GOOD=false
        fi
    done
    
    # Check key files
    if [ -f "scripts/init-project.js" ]; then
        print_success "Found initialization script"
    else
        print_error "Missing initialization script"
        ALL_GOOD=false
    fi
    
    if [ "$ALL_GOOD" = true ]; then
        print_header "✨ Setup Complete!"
        echo
        print_info "To create a new project:"
        echo "  node scripts/init-project.js my-awesome-project"
        echo
        print_info "Or if you added aliases:"
        echo "  cef-init my-awesome-project"
        echo
        print_success "Happy coding with Context Engineering Framework! 🚀"
    else
        print_error "Setup incomplete - some files are missing"
        print_info "Please ensure you have the complete framework"
    fi
    
    # Show framework path for reference
    echo
    print_info "Framework location: $(pwd)"
}

# Run main function
main