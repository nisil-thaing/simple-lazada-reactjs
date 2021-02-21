export const FONT_BASE = 16;

export function pixelsToRem(size) {
  return `${ (size / FONT_BASE) }rem`;
}