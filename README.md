# kineto-stack

A Turborepo monorepo for hosting and managing reusable project templates with an integrated CLI tool for easy scaffolding.

## Purpose

This repository serves as a centralized hub for all your project templates. It provides:

- **Template Management**: All templates in one place for easy maintenance and updates
- **CLI Tool**: Quick scaffolding of projects using `kineto-stack-cli` CLI
- **Version Control**: Track template changes and improvements over time
- **Build Optimization**: Turborepo caching for faster template builds

## What's Inside?

This Turborepo includes:

### Templates (`packages/templates/`)

1. **Next.js + Bun + Mantine** (`packages/templates/next/next-js-bun-mantine`)
   - Next.js 16 with App Router
   - Bun runtime and package manager
   - Mantine UI components
   - TanStack Query for data fetching
   - Jotai for state management
   - TypeScript with strict mode

2. **Vite + ShadCN** (`packages/templates/vite/vite-bun-shadcn`)
   - Vite for lightning-fast development
   - ShadCN UI components
   - Tailwind CSS for styling
   - TanStack Router for type-safe routing
   - TanStack Query for data synchronization
   - Jotai for atomic state management
   - TypeScript with full type safety

### CLI Tool (`packages/cli/kineto-stack-cli`)

A command-line tool that allows you to scaffold new projects from templates:

```bash
kineto-stack-cli create my-project
```

The CLI automatically:

- Clones the selected template from this repository
- Initializes a fresh Git repository
- Installs dependencies
- Sets up the project structure

## Getting Started

### Prerequisites

- **Node.js**: >= 18.0.0
- **Bun**: >= 1.2.4 (recommended package manager)
- **Git**: For version control

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/KennethAduan/kineto-stack.git
   cd kineto-stack
   ```

2. **Install dependencies**:

   ```bash
   bun install
   ```

3. **Build all packages**:
   ```bash
   bun run build
   ```

### Using the CLI

#### Install the CLI Globally

From the CLI package directory:

```bash
cd packages/cli/kineto-stack-cli
bun install
bun run build
bun link
```

#### Or Install from npm

```bash
npm install -g kineto-stack-cli
```

#### Or Use via npx (no installation needed)

```bash
npx kineto-stack-cli create my-project
```

#### Create a New Project

```bash
kineto-stack-cli create my-project
```

You'll be prompted to:

1. Select a template (Next.js Mantine or Vite ShadCN)
2. Choose a package manager (for Vite template)
3. Wait for automatic setup to complete

## Development

### Available Scripts

From the root directory:

```bash
# Build all templates and CLI
bun run build

# Run development servers for all packages
bun run dev

# Lint all packages
bun run lint

# Check TypeScript types
bun run check-types

# Format code with Prettier
bun run format
```

### Working with Specific Packages

#### Build a Specific Template

```bash
# Build Next.js template
turbo build --filter=kineto-stack-bun-nextjs-mantine

# Build Vite template
turbo build --filter=kineto-stack-bun-shadcn-vite

# Build CLI
turbo build --filter=kineto-stack-cli
```

#### Run Development Server for a Template

```bash
# Next.js template
turbo dev --filter=kineto-stack-bun-nextjs-mantine

# Vite template
turbo dev --filter=kineto-stack-bun-shadcn-vite
```

#### Lint a Specific Package

```bash
turbo lint --filter=kineto-stack-bun-nextjs-mantine
turbo lint --filter=kineto-stack-bun-shadcn-vite
turbo lint --filter=kineto-stack-cli
```

### Project Structure

```
kineto-stack/
├── packages/
│   ├── cli/
│   │   └── kineto-stack-cli/          # CLI tool for scaffolding
│   │       ├── bin/                   # Executable entry point
│   │       ├── src/                   # Source code
│   │       └── dist/                 # Compiled output
│   └── templates/
│       ├── next/
│       │   └── next-js-bun-mantine/  # Next.js + Mantine template
│       └── vite/
│           └── vite-bun-shadcn/      # Vite + ShadCN template
├── package.json                       # Root workspace config
├── turbo.json                         # Turborepo configuration
└── README.md                          # This file
```

## Adding New Templates

To add a new template:

1. Create a new directory in `packages/templates/` following the structure:

   ```
   packages/templates/
   └── [category]/
       └── [template-name]/
           ├── package.json
           └── ...
   ```

2. Update `turbo.json` if needed to handle new build outputs

3. Add the template to `packages/cli/kineto-stack-cli/src/utils/templates.ts`:

   ```typescript
   {
     id: "template-id",
     name: "Template Name",
     description: "Template description",
     repository: `${KINETO_STACK_REPO}#packages/templates/category/template-name`,
     packageManager: "bun",
   }
   ```

4. Rebuild the CLI:
   ```bash
   cd packages/cli/kineto-stack-cli
   bun run build
   ```

## Features

- **Monorepo Management**: All templates and tooling in one repository
- **Fast Builds**: Turborepo caching for efficient builds
- **Type Safety**: Full TypeScript support across all packages
- **CLI Integration**: Easy project scaffolding with the integrated CLI
- **Git Subdirectory Support**: Templates cloned from specific subdirectories
- **Package Manager Flexibility**: Support for Bun, npm, yarn, and pnpm

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-template`)
3. Make your changes
4. Test your changes
5. Commit your changes (`git commit -m 'Add amazing template'`)
6. Push to the branch (`git push origin feature/amazing-template`)
7. Open a Pull Request

## License

This project is licensed under the MIT License.

## Author

**Kenneth Aduan**

- GitHub: [@KennethAduan](https://github.com/KennethAduan)

## Useful Links

- [Turborepo Documentation](https://turborepo.org/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vite Documentation](https://vitejs.dev/)
- [Mantine Documentation](https://mantine.dev/)
- [ShadCN UI](https://ui.shadcn.com/)

## Acknowledgments

- [Turborepo](https://turborepo.org/) for the amazing monorepo tooling
- [Next.js](https://nextjs.org/) for the React framework
- [Vite](https://vitejs.dev/) for the build tool
- [Mantine](https://mantine.dev/) for the UI components
- [ShadCN UI](https://ui.shadcn.com/) for the accessible components
- [Bun](https://bun.sh/) for the fast runtime and package manager

---

**Happy Coding!**
