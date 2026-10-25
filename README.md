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
  return (
    <Image src={gravatar(email, 200)} alt="Avatar" width={200} height={200} />
  );
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
import { gravatar } from "next-gravatar";

gravatar(email: string, size?: number, defaultAvatar?: DefaultAvatar): string
```

| Parameter       | Type            | Default       | Description                              |
| --------------- | --------------- | ------------- | ---------------------------------------- |
| `email`         | `string`        | —             | User email (auto-trimmed & lowercased)   |
| `size`          | `number`        | `80`          | Image size in px (1–2048)                |
| `defaultAvatar` | `DefaultAvatar` | `"identicon"` | Fallback avatar if no email match exists |

### Fallback Options (`DefaultAvatar`)

You can pass one of the following fallback types:

- `"initials"`: Dynamically generated avatar using display name / initials with background and foreground colors.
- `"color"`: A dynamically generated solid background color derived uniquely from the email hash.
- `"mp"` / `"mystery person"` / `"mystery-person"` / `"mystery"`: A simple, cartoon-style silhouetted outline of a person.
- `"identicon"`: A geometric pattern based on the email hash.
- `"monsterid"`: A generated monster with different colors and faces.
- `"wavatar"`: Generated faces with differing features and backgrounds.
- `"retro"`: 8-bit arcade-style pixelated faces.
- `"robohash"`: A generated robot with different colors and faces.
- `"blank"`: A transparent PNG.
- `"404"`: Returns an HTTP 404 response.
- **Custom URL**: A custom image URL (e.g. `https://example.com/avatar.png`). Custom URLs are automatically URL-encoded.

## License

MIT
