import type { Dispatch, SetStateAction } from "react";

type Selection = {
  start: number;
  end: number;
};

export default function useEditorFormatting(
  text: string,
  setText: Dispatch<SetStateAction<string>>,
  textareaRef: React.RefObject<HTMLTextAreaElement | null>,
  selectionRef: React.RefObject<Selection>,
  updateSelection: (selection: Selection) => void,
) {
  const applyFormat = (before: string, after: string) => {
    const textarea = textareaRef.current;

    if (!textarea) return;

    const { start, end } = selectionRef.current;

    const selectedText = text.slice(start, end);

    const newText =
      text.slice(0, start) + before + selectedText + after + text.slice(end);

    setText(newText);

    requestAnimationFrame(() => {
      textarea.focus();

      if (start === end) {
        const cursorPosition = start + before.length;

        textarea.setSelectionRange(cursorPosition, cursorPosition);

        updateSelection({
          start: cursorPosition,
          end: cursorPosition,
        });
      } else {
        const newStart = start + before.length;
        const newEnd = end + before.length;

        textarea.setSelectionRange(newStart, newEnd);

        updateSelection({
          start: newStart,
          end: newEnd,
        });
      }
    });
  };

  const applyHeading = (level: number) => {
    const textarea = textareaRef.current;

    if (!textarea) return;

    const { start, end } = selectionRef.current;

    // Find the beginning of the first affected line.
    const lineStart = text.lastIndexOf("\n", start - 1) + 1;

    // Find the end of the last affected line.
    const lineEndIndex = text.indexOf("\n", end);
    const lineEnd = lineEndIndex === -1 ? text.length : lineEndIndex;

    const selectedLines = text.slice(lineStart, lineEnd);

    const marker = `${"#".repeat(level)} `;

    const newLines = selectedLines.split("\n").map((line) => {
      // Remove an existing heading first.
      const cleanLine = line.replace(/^#{1,6}\s/, "");

      return marker + cleanLine;
    });

    const formattedLines = newLines.join("\n");

    const newText =
      text.slice(0, lineStart) + formattedLines + text.slice(lineEnd);

    setText(newText);

    requestAnimationFrame(() => {
      textarea.focus();

      const lengthDifference = formattedLines.length - selectedLines.length;

      let newStart = start + lengthDifference;
      let newEnd = end + lengthDifference;

      if (start === end) {
        newStart = start + marker.length;
        newEnd = newStart;
      }

      textarea.setSelectionRange(newStart, newEnd);

      updateSelection({
        start: newStart,
        end: newEnd,
      });
    });
  };

  const toggleBold = () => {
    applyFormat("**", "**");
  };

  const toggleItalic = () => {
    applyFormat("*", "*");
  };

  const toggleUnderline = () => {
    applyFormat("<u>", "</u>");
  };

  const toggleStrikethrough = () => {
    applyFormat("~~", "~~");
  };

  const toggleInlineCode = () => {
    applyFormat("`", "`");
  };

  const toggleCodeBlock = () => {
    applyFormat("\n```\n", "\n```\n");
  };

  const toggleHeading1 = () => {
    applyHeading(1);
  };

  const toggleHeading2 = () => {
    applyHeading(2);
  };

  const toggleHeading3 = () => {
    applyHeading(3);
  };

  return {
    applyFormat,
    applyHeading,
    toggleBold,
    toggleItalic,
    toggleUnderline,
    toggleStrikethrough,
    toggleInlineCode,
    toggleCodeBlock,
    toggleHeading1,
    toggleHeading2,
    toggleHeading3,
  };
}
