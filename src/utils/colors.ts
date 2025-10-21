function hashString(str: string): number {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function randomDarkColorFromSeed(seed: string): string {
  const h = hashString(seed) % 360;
  const s = 55 + (hashString(seed + 's') % 30); // 55-85
  const l = 20 + (hashString(seed + 'l') % 20); // 20-40
  return `hsl(${h}, ${s}%, ${l}%)`;
}
