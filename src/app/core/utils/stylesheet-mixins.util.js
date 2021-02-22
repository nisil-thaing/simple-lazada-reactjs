export const FONT_BASE = 16;

export function pixelsToRem(size) {
  return `${ (size / FONT_BASE) }rem`;
}

export function truncateText (lines) {
  return `
    display: -webkit-box;
    -webkit-line-clamp: ${ lines };
    -webkit-box-orient: vertical;  
    overflow: hidden;
  `;
}