# CLAUDE.md

This file provides guidance to Claude Code when working with this npx utility package.

## Project Overview

This is a TypeScript-based npx utility package that asks users for their favorite color and returns different responses based on the answer.

## Essential Commands

```bash
# Development
npm run dev          # Run the CLI in development mode
npm run build        # Build TypeScript to JavaScript
npm run test         # Run tests
npm run lint         # Run ESLint

# Package Management
npm pack             # Create tarball for testing
npm publish          # Publish to npm registry
npx test-npm-utility-package  # Run the published package
```

## Project Structure

```
├── src/
│   ├── index.ts     # Main CLI entry point
│   └── cli.ts       # CLI logic and color handling
├── dist/            # Compiled JavaScript output
├── tests/           # Test files
├── .github/
│   └── workflows/   # GitHub Actions CI/CD
├── package.json     # Package configuration
├── tsconfig.json    # TypeScript configuration
└── README.md        # Package documentation
```

## Development Workflow

### Branch Strategy
- `main` - Production releases
- `staging` - Pre-production testing
- `dev` - Active development

### Commit Convention
Follow conventional commits:
- `feat:` - New features
- `fix:` - Bug fixes
- `chore:` - Maintenance tasks
- `docs:` - Documentation updates

### Testing Strategy
- Unit tests for CLI logic
- Integration tests for user interaction
- Test color input validation and responses

## Package Configuration

### NPX Usage
The package is designed to be run via npx:
```bash
npx test-npm-utility-package
```

### TypeScript Setup
- Strict mode enabled
- ES2020 target
- CommonJS modules for Node.js compatibility

### GitHub Actions
- Self-hosted runners configuration
- Automated testing on PR
- Automated publishing to npm on merge to main
- Branch protection rules

## CLI Behavior

### User Interaction
1. Prompts user: "What's your favorite color?"
2. Accepts input: "blue" or "red"
3. Returns responses:
   - Blue → "FCP!"
   - Red → "SLB :/"
   - Other → Error message

### Error Handling
- Invalid color input
- No input provided
- Process interruption

## Quality Gates

Before any commit:
- All tests pass
- TypeScript compilation successful
- ESLint checks pass
- No security vulnerabilities

## Automation

### CI/CD Pipeline
- Run on self-hosted GitHub Actions runners
- Test on multiple Node.js versions
- Automated security scanning
- Publish to npm registry on release

### Branch Protection
- Require PR reviews for staging/main
- Require status checks to pass
- No direct pushes to main

## Development Tips

- Use `npm link` for local testing
- Test npx execution before publishing
- Validate package.json bin configuration
- Ensure proper file permissions on CLI script