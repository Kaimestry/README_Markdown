import type { markdownFormats } from "../configs/markdownFormats";

type MarkdownFormat = (typeof markdownFormats)[keyof typeof markdownFormats];

export function applyMarkdownFormat(
  text: string,
  start: number,
  end: number,
  format: MarkdownFormat,
) {
  /*
   * Inline / wrapping formats
   */
  if (format.type === "wrap") {
    let selectionStart = start;
    let selectionEnd = end;

    /*
     * Don't include a trailing newline in an inline format.
     *
     * Example:
     *
     * hello world\n
     *            ^
     *
     * should become:
     *
     * **hello world**
     *
     * rather than:
     *
     * **hello world
     * **
     */
    if (selectionEnd > selectionStart && text[selectionEnd - 1] === "\n") {
      selectionEnd -= 1;
    }

    const selectedText = text.slice(selectionStart, selectionEnd);

    const newText =
      text.slice(0, selectionStart) +
      format.before +
      selectedText +
      format.after +
      text.slice(selectionEnd);

    return {
      text: newText,
      start: selectionStart + format.before.length,
      end: selectionEnd + format.before.length,
    };
  }

  /*
   * Block formats
   */
  if (format.type === "block") {
    const selectedText = text.slice(start, end);

    const newText =
      text.slice(0, start) +
      format.before +
      selectedText +
      format.after +
      text.slice(end);

    return {
      text: newText,
      start: start + format.before.length,
      end: end + format.before.length,
    };
  }

  /*
   * Headings
   */
  if (format.type === "heading") {
    const lineStart = text.lastIndexOf("\n", start - 1) + 1;

    const lineEndIndex = text.indexOf("\n", end);

    const lineEnd = lineEndIndex === -1 ? text.length : lineEndIndex;

    const selectedLines = text.slice(lineStart, lineEnd);

    const marker = `${"#".repeat(format.level)} `;

    const newLines = selectedLines.split("\n").map((line) => {
      const cleanLine = line.replace(/^#{1,6}\s/, "");

      return marker + cleanLine;
    });

    const formattedLines = newLines.join("\n");

    const newText =
      text.slice(0, lineStart) + formattedLines + text.slice(lineEnd);

    const lengthDifference = formattedLines.length - selectedLines.length;

    let newStart = start + lengthDifference;

    let newEnd = end + lengthDifference;

    if (start === end) {
      newStart = start + marker.length;

      newEnd = newStart;
    }

    return {
      text: newText,
      start: newStart,
      end: newEnd,
    };
  }

  /*
  QUOTE
  */

  if (format.type === "quote") {
    const lineStart = text.lastIndexOf("\n", start - 1) + 1;

    const lineEndIndex = text.indexOf("\n", end);

    const lineEnd = lineEndIndex === -1 ? text.length : lineEndIndex;

    const selectedText = text.slice(lineStart, lineEnd);

    const quotedText = selectedText
      .split("\n")
      .map((line) => `> ${line}`)
      .join("\n");

    const newText = text.slice(0, lineStart) + quotedText + text.slice(lineEnd);

    const lengthDifference = quotedText.length - selectedText.length;

    return {
      text: newText,
      start: start + lengthDifference,
      end: end + lengthDifference,
    };
  }

  return {
    text,
    start,
    end,
  };
}
