import { sha256 } from "js-sha256";

export type DefaultAvatar =
  | "initials"
  | "color"
  | "mp"
  | "mystery person"
  | "mystery-person"
  | "mystery_person"
  | "mystery"
  | "mistery person"
  | "mistery"
  | "identicon"
  | "monsterid"
  | "wavatar"
  | "retro"
  | "robohash"
  | "blank"
  | "404"
  | (string & {});

const mapDefaultAvatar = (d: string): string => {
  const norm = (d || "").trim().toLowerCase();
  if (!norm) return "identicon";
  if (/^(mp|myst|mist)/.test(norm)) return "mp";
  return norm.startsWith("http") ? encodeURIComponent(d) : norm;
};

export function gravatar(
  email: string,
  size: number = 80,
  defaultAvatar: DefaultAvatar = "identicon",
): string {
  const clean = email?.trim().toLowerCase();
  const d = mapDefaultAvatar(defaultAvatar);
  const hash = clean ? sha256(clean) : "b58996ad97b40d6f22c830953a3fe87d";
  return `https://www.gravatar.com/avatar/${hash}?s=${size}&d=${d}`;
}
