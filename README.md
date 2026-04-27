# next-gravatar

Ultra-lightweight Gravatar URL generator for **Next.js** (App & Pages Router). SHA-256, synchronous, and only **272 bytes**.

## Install

```bash
npm install next-gravatar
```

## Usage

**App Router** (Server Components):

```tsx
import Image from "next/image";
import { gravatar } from "next-gravatar";

export default function Avatar({ email }: { email: string }) {
  return <Image src={gravatar(email, 200)} alt="Avatar" width={200} height={200} />;
}
```

**Pages Router:**

```tsx
import { gravatar } from "next-gravatar";

export default function Avatar({ email }: { email: string }) {
  return <img src={gravatar(email)} alt="Avatar" />;
}
```

## API

```ts
gravatar(email: string, size?: number): string
```

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `email` | `string` | — | User email (auto-trimmed & lowercased) |
| `size` | `number` | `80` | Image size in px (1–2048) |

Returns a Gravatar URL. Falls back to `identicon` if email is empty.

## License

MIT
