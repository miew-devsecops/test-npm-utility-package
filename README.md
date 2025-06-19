# test-npm-utility-package

A simple CLI tool that asks for your favorite color and responds accordingly.

## Usage

### Prerequisites

Since this package is published to GitHub Packages under the `@miew-devsecops` organization, you'll need proper authentication and permissions:

**Requirements:**
- Your GitHub account must have access to the `miew-devsecops` organization
- You need a Personal Access Token with the `read:packages` scope
- The token must be authorized for the organization (if SSO is enabled)

**Create a Personal Access Token:**
1. Go to [GitHub Settings → Personal access tokens → Tokens (classic)](https://github.com/settings/tokens)
2. Click "Generate new token (classic)"
3. Give it a descriptive name (e.g., "NPM GitHub Packages")
4. Select the `read:packages` scope (required for downloading packages)
5. Click "Generate token"
6. **Important**: If the organization has SSO enabled, authorize your token:
   - After creating the token, you'll see "Configure SSO" next to it
   - Click "Configure SSO" and authorize for `miew-devsecops`
7. Copy the generated token
8. Configure npm with your token:

```bash
npm config set //npm.pkg.github.com/:_authToken YOUR_TOKEN_HERE
```

Replace `YOUR_TOKEN_HERE` with the token you just created.

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
//npm.pkg.github.com/:_authToken=YOUR_TOKEN_HERE
```

**Note:** Replace `YOUR_TOKEN_HERE` with your actual PAT created in the Prerequisites section above.

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

### Troubleshooting

If you get a 403 error when trying to install the package:

1. **Check organization access**: Ensure your GitHub account is a member of the `miew-devsecops` organization
2. **Verify token scopes**: Your PAT must have `read:packages` scope
3. **SSO Authorization**: If the organization uses SSO, make sure your token is authorized for the organization
4. **Package visibility**: Contact the organization admin if the package isn't visible to your account

Common error messages:
- `403 Forbidden`: Usually means missing organization access or incorrect token scopes
- `404 Not Found`: Package doesn't exist or you don't have permission to see it

**Check your current token configuration:**

```bash
# View all npm config settings
npm config list

# Check specifically for GitHub Packages token
npm config get //npm.pkg.github.com/:_authToken

# View npm config file location
npm config get userconfig

# Edit npm config file directly
npm config edit
```

**Token storage locations:**
- **Windows**: `%USERPROFILE%\.npmrc` (e.g., `C:\Users\YourName\.npmrc`)
- **macOS/Linux**: `~/.npmrc`

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