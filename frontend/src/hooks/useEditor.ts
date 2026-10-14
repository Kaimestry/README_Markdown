import { useRef } from "react";

import useClipboard from "./useClipboard";
import useEditorFormatting from "./useEditorFormatting";
import useEditorInput from "./useEditorInput";
import useEditorSelection from "./useEditorSelection";

export default function useEditor(
  text: string,
  setText: React.Dispatch<React.SetStateAction<string>>,
) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { selectionRef, selection, updateSelection, handleSelect } =
    useEditorSelection(textareaRef);

  const { handleInput } = useEditorInput(textareaRef);

  const { copied, handleCopy } = useClipboard();

  const {
    toggleBold,
    toggleItalic,
    toggleUnderline,
    toggleStrikethrough,
    toggleInlineCode,
    toggleCodeBlock,
    toggleHeading1,
    toggleHeading2,
    toggleHeading3,
  } = useEditorFormatting(
    text,
    setText,
    textareaRef,
    selectionRef,
    updateSelection,
  );

  return {
    textareaRef,

    selectionRef,
    selection,
    handleSelect,

    handleInput,

    copied,
    handleCopy,

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
