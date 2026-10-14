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
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;

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

  return {
    applyFormat,
    toggleBold,
    toggleItalic,
    toggleUnderline,
    toggleStrikethrough,
    toggleInlineCode,
    toggleCodeBlock,
  };
}
