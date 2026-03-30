# next-gravatar

[![GitHub](https://img.shields.io/badge/GitHub-View%20on%20GitHub-blue?logo=github)](https://github.com/rironib/next-gravatar)

A modern, high-performance, and ultra-lightweight utility to generate Gravatar URLs using SHA-256. Zero dependencies, built-in TypeScript support, and optimized for speed.

## Install

Choose your package manager:

```bash
# npm
npm install next-gravatar

# pnpm
pnpm add next-gravatar

# yarn
yarn add next-gravatar

# bun
bun add next-gravatar
```

## Quick Start

It's as easy as this:

```typescript
import { gravatar } from "next-gravatar";

// 1. Basic usage (default size: 80, default: identicon)
const url = gravatar("user@example.com");

// 2. Custom photo size (1px to 2048px)
const largePhoto = gravatar("user@example.com", 200);

// 3. Smart fallback if email is empty
const fallback = gravatar("");
```

## Features

- **Modern Hashing**: Uses SHA-256 (the current Gravatar standard).
- **Lightweight**: Extremely small bundle size.
- **Fast**: Zero external dependencies.
- **TypeScript**: High-quality code suggestions and error checking built-in.

## License

MIT
