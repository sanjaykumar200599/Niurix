export function assetPath(...segments: string[]): string {
  const normalized = segments
    .filter(Boolean)
    .map((segment) => segment.replaceAll("\\", "/").replace(/^\/+|\/+$/g, ""));
  return encodeURI(`/${normalized.join("/")}`);
}

