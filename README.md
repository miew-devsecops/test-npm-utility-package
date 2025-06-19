# test-npm-utility-package

A simple CLI tool that asks for your favorite color and responds accordingly.

## Usage

Run the package using npx:

```bash
npx @miew-devsecops/test-npm-utility-package
```

The tool will prompt you to enter your favorite color. Valid responses are:
- `blue` → Returns "FCP!"
- `red` → Returns "SLB :/"

## Development

### Prerequisites

- Node.js 18+ 
- npm

### Setup

```bash
# Clone the repository
git clone https://github.com/miew-devsecops/test-npm-utility-package.git
cd test-npm-utility-package

# Install dependencies
npm install

# Run in development mode
npm run dev

# Build the project
npm run build

# Run the built version
npm run start
```

### Scripts

- `npm run dev` - Run in development mode with ts-node
- `npm run build` - Compile TypeScript to JavaScript
- `npm run start` - Run the compiled JavaScript version
- `npm run lint` - Run ESLint
- `npm test` - Run tests (placeholder)

## Branch Strategy

- `main` - Production releases
- `staging` - Pre-production testing  
- `dev` - Active development

## CI/CD

The project uses GitHub Actions with self-hosted runners for:

- **CI Pipeline**: Runs on push/PR to dev, staging, main
  - Tests across Node.js 18, 20, 22
  - Linting and build verification
  - Security auditing
  - CLI functionality testing

- **Publish Pipeline**: Runs on push to main/staging
  - Publishes to GitHub Packages registry
  - Staging publishes with `beta` tag
  - Main publishes as latest

## License

ISC