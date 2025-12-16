# Publishing Guide for kineto-stack-cli

This guide explains how to publish new updates of `kineto-stack-cli` to npm.

## Prerequisites

1. **npm Account**: Make sure you're logged in to npm

   ```bash
   npm login
   ```

   Verify with:

   ```bash
   npm whoami
   ```

2. **Build the Package**: Ensure the package is built before publishing
   ```bash
   npm run build
   ```

## Version Bumping

Follow [Semantic Versioning](https://semver.org/) (semver):

- **PATCH** (0.1.3 → 0.1.4): Bug fixes, small changes
- **MINOR** (0.1.3 → 0.2.0): New features, backward compatible
- **MAJOR** (0.1.3 → 1.0.0): Breaking changes

## Publishing Methods

### Method 1: Using npm Scripts (Recommended)

Navigate to the CLI package directory:

```bash
cd packages/cli/kineto-stack-cli
```

#### Publish a Patch Update (Bug Fixes)

```bash
npm run publish:patch
```

#### Publish a Minor Update (New Features)

```bash
npm run publish:minor
```

#### Publish a Major Update (Breaking Changes)

```bash
npm run publish:major
```

### Method 2: Manual Version Bump + Publish

1. **Bump version manually**:

   ```bash
   # For patch
   npm run version:patch

   # For minor
   npm run version:minor

   # For major
   npm run version:major
   ```

2. **Review the changes**:
   - Check `package.json` to verify the new version
   - Review `dist/` folder to ensure build is up to date

3. **Publish to npm**:
   ```bash
   npm publish
   ```

### Method 3: Using npm version (with Git tags)

If you want to create Git tags automatically:

```bash
# Patch update
npm version patch
git push && git push --tags
npm publish

# Minor update
npm version minor
git push && git push --tags
npm publish

# Major update
npm version major
git push && git push --tags
npm publish
```

## Pre-Publishing Checklist

Before publishing, make sure:

- [ ] All changes are tested locally
- [ ] Code is linted (`npm run lint`)
- [ ] TypeScript compiles without errors (`npm run build`)
- [ ] Version is updated in `package.json`
- [ ] `dist/` folder contains the latest build
- [ ] `README.md` is up to date
- [ ] You're logged in to npm (`npm whoami`)

## Dry Run (Test Before Publishing)

Test what will be published without actually publishing:

```bash
npm run publish:dry-run
```

This will:

1. Build the package
2. Show what files would be published
3. **NOT** actually publish to npm

## Publishing Steps (Complete Workflow)

### Step 1: Make Your Changes

Make all necessary code changes in the `src/` directory.

### Step 2: Test Locally

```bash
# Build the package
npm run build

# Test the CLI locally
npm link
kineto-stack-cli create test-project
```

### Step 3: Update Version

```bash
# Choose appropriate version bump
npm run version:patch   # or version:minor or version:major
```

### Step 4: Build for Production

```bash
npm run build
```

### Step 5: Dry Run (Optional but Recommended)

```bash
npm run publish:dry-run
```

### Step 6: Publish

```bash
npm publish
```

### Step 7: Verify Publication

Check npm registry:

```bash
npm view kineto-stack-cli version
```

Or visit: https://www.npmjs.com/package/kineto-stack-cli

### Step 8: Commit and Push (if using Git)

```bash
git add package.json
git commit -m "chore: bump version to X.X.X"
git push
```

## Publishing to Different Registries

### Public npm Registry (Default)

```bash
npm publish
```

### Scoped Package (if needed)

If your package is scoped (e.g., `@your-org/kineto-stack-cli`), you might need:

```bash
npm publish --access public
```

## Troubleshooting

### "You do not have permission to publish"

- Make sure you're logged in: `npm login`
- Verify you own the package: `npm owner ls kineto-stack-cli`
- If it's a new package, make sure the name is available

### "Package name already exists"

- The package name `kineto-stack-cli` is already taken or you don't have publish rights
- Check npm registry: https://www.npmjs.com/package/kineto-stack-cli

### "Version already exists"

- The version you're trying to publish already exists on npm
- Bump to a higher version

### "Cannot publish over existing version"

- You need to unpublish first (not recommended) or bump the version
- Unpublishing should be avoided; always bump version instead

## Unpublishing (Not Recommended)

⚠️ **Warning**: Unpublishing can break users' projects. Only do this in extreme cases.

```bash
# Unpublish a specific version (within 72 hours)
npm unpublish kineto-stack-cli@0.1.3

# Unpublish entire package (within 72 hours, requires special permissions)
npm unpublish kineto-stack-cli --force
```

## Best Practices

1. **Always test locally** before publishing
2. **Use dry-run** to preview what will be published
3. **Follow semantic versioning** strictly
4. **Update CHANGELOG.md** (if you have one) with each release
5. **Tag releases in Git** for better version tracking
6. **Never unpublish** unless absolutely necessary
7. **Publish during business hours** so you can monitor for issues

## Automated Publishing (CI/CD)

For automated publishing, you can set up GitHub Actions or similar CI/CD:

```yaml
# Example GitHub Actions workflow
name: Publish to npm
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: "18"
          registry-url: "https://registry.npmjs.org"
      - run: cd packages/cli/kineto-stack-cli && npm ci
      - run: cd packages/cli/kineto-stack-cli && npm run build
      - run: cd packages/cli/kineto-stack-cli && npm publish
        env:
          NODE_AUTH_TOKEN: ${{secrets.NPM_TOKEN}}
```

## Current Version

Current version: Check `package.json` in this directory.

To check published version:

```bash
npm view kineto-stack-cli version
```

---

**Need Help?** Open an issue on [GitHub](https://github.com/KennethAduan/kineto-stack/issues)
