import { sha256 } from "js-sha256";

export function gravatar(email: string, size: number = 80): string {
  const trimmed = email?.trim().toLowerCase();
  if (!trimmed) {
    return `https://www.gravatar.com/avatar/b58996ad97b40d6f22c830953a3fe87d?s=${size}&d=identicon`;
  }
  return `https://www.gravatar.com/avatar/${sha256(trimmed)}?s=${size}&d=identicon`;
}
