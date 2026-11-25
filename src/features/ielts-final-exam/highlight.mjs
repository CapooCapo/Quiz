/**
 * Split one paragraph into runs of plain and highlighted text.
 * Highlights are character offsets [start, end). When highlights overlap, the one added later wins.
 * @param {string} text
 * @param {{ id: string; start: number; end: number; color: string }[]} highlights
 * @returns {{ text: string; highlightId: string | null; color: string | null }[]}
 */
export function buildRuns(text, highlights) {
  const owner = Array.from({ length: text.length }, () => null)
  for (const highlight of highlights) {
    for (let index = Math.max(0, highlight.start); index < highlight.end && index < text.length; index += 1) {
      owner[index] = highlight.id
    }
  }
  const byId = new Map(highlights.map((item) => [item.id, item]))
  const runs = []
  let cursor = 0
  while (cursor < text.length) {
    const id = owner[cursor]
    let end = cursor + 1
    while (end < text.length && owner[end] === id) end += 1
    runs.push({ text: text.slice(cursor, end), highlightId: id, color: id ? byId.get(id).color : null })
    cursor = end
  }
  return runs
}

/** Remove a highlight by id; returns a new array. */
export function removeHighlight(highlights, id) {
  return highlights.filter((item) => item.id !== id)
}
