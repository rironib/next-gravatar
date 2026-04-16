import { createHash } from "node:crypto";

export function gravatar(email: string, size: number = 80): string {
  if (!email || !email.trim()) {
    return `https://www.gravatar.com/avatar/b58996ad97b40d6f22c830953a3fe87d?s=${size}&d=identicon`;
  }
  const hash = createHash("sha256")
    .update(email.trim().toLowerCase())
    .digest("hex");
  return `https://www.gravatar.com/avatar/${hash}?s=${size}&d=identicon`;
}
