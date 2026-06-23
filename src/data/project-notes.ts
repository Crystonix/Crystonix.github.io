export function normalizeNotes(items) {
  return items
    .map((item) => (typeof item === 'string' ? { text: item } : item))
    .filter((item) => item.text.trim().length > 0);
}
