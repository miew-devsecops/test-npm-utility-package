# test-npm-utility-package

A simple CLI tool that asks for your favorite color and responds accordingly.

## Usage

### Quick Start (GitHub Packages)

Since this package is published to GitHub Packages, you need to configure npm to use the GitHub registry for scoped packages:

```bash
# Configure npm to use GitHub Packages for @miew-devsecops scope
npm config set @miew-devsecops:registry https://npm.pkg.github.com

# Run the package using npx
npx @miew-devsecops/test-npm-utility-package
```

### Alternative: One-time usage

You can also run it directly by specifying the registry:

```bash
npx --registry https://npm.pkg.github.com @miew-devsecops/test-npm-utility-package
```

The tool will present a selector with color options:
- Select `Blue` → Returns "FCP!"
- Select `Red` → Returns "SLB :/"
- Select `Yellow` → Returns "estoril"

### Installing in a Project

To include this package as a dependency in your project, first create or update your `.npmrc` file to configure the GitHub Packages registry:

```ini
# .npmrc
@miew-devsecops:registry=https://npm.pkg.github.com
```

Then add it to your `package.json`:

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "dependencies": {
    "@miew-devsecops/test-npm-utility-package": "^1.0.0"
  },
  "scripts": {
    "color-tool": "npx @miew-devsecops/test-npm-utility-package"
  }
}
```

After running `npm install`, you can use it in your project:

```bash
# Run directly
npm run color-tool

# Or use npx
npx @miew-devsecops/test-npm-utility-package
```

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