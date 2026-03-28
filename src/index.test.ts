import { test, expect } from "bun:test";
import { gravatar } from "./index";

test("gravatar returns expected SHA-256 hash and query parameters", () => {
  const email = "user@example.com";
  // SHA-256 of 'user@example.com' is 'b4c9a289323b21a01c3e940f150eb9b8c542587f1abfd8f0e1cc1ffc5e475514'
  const url = gravatar(email, 200);
  expect(url).toBe("https://www.gravatar.com/avatar/b4c9a289323b21a01c3e940f150eb9b8c542587f1abfd8f0e1cc1ffc5e475514?s=200&d=identicon");
});

test("gravatar returns fallback URL for empty email", () => {
  const url = gravatar("", 200);
  expect(url).toBe("https://www.gravatar.com/avatar/b58996ad97b40d6f22c830953a3fe87d?s=200&d=identicon");
});


test("gravatar uses default size 80", () => {
  const email = "user@example.com";
  const url = gravatar(email);
  expect(url).toContain("s=80");
});

test("gravatar trims and lowercases email", () => {
  const email = "  USER@Example.Com  ";
  const url1 = gravatar(email);
  const url2 = gravatar("user@example.com");
  expect(url1).toBe(url2);
});
