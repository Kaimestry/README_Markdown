import { useRef } from "react";

import useClipboard from "./useClipboard";
import useEditorInput from "./useEditorInput";
import useEditorSelection from "./useEditorSelection";

export default function useEditor() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { selectionRef, selection, handleSelect } =
    useEditorSelection(textareaRef);

  const { handleInput } = useEditorInput(textareaRef);

  const { copied, handleCopy } = useClipboard();

  return {
    textareaRef,
    selectionRef,
    selection,
    handleSelect,
    handleInput,
    copied,
    handleCopy,
  };
}
