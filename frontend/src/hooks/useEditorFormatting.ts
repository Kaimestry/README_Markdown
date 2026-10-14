import type { Dispatch, SetStateAction } from "react";

import { markdownFormats } from "../configs/markdownFormats";
import { applyMarkdownFormat } from "../utils/markdownFormatter";

type Selection = {
  start: number;
  end: number;
};

type FormatName = keyof typeof markdownFormats;

export default function useEditorFormatting(
  text: string,
  setText: Dispatch<SetStateAction<string>>,
  textareaRef: React.RefObject<HTMLTextAreaElement | null>,
  selectionRef: React.RefObject<Selection>,
  updateSelection: (selection: Selection) => void,
) {
  const applyFormat = (formatName: FormatName) => {
    const textarea = textareaRef.current;

    if (!textarea) return;

    const { start, end } = selectionRef.current;

    const format = markdownFormats[formatName];

    const result = applyMarkdownFormat(text, start, end, format);

    setText(result.text);

    requestAnimationFrame(() => {
      textarea.focus();

      textarea.setSelectionRange(result.start, result.end);

      updateSelection({
        start: result.start,
        end: result.end,
      });

      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    });
  };

  return {
    applyFormat,
  };
}
