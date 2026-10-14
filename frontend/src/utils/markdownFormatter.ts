import type { markdownFormats } from "../configs/markdownFormats";

type MarkdownFormat = (typeof markdownFormats)[keyof typeof markdownFormats];

export function applyMarkdownFormat(
  text: string,
  start: number,
  end: number,
  format: MarkdownFormat,
) {
  if (format.type === "wrap" || format.type === "block") {
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

  return {
    text,
    start,
    end,
  };
}
