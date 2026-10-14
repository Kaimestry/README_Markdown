import { useRef, useState } from "react";

export default function useEditorSelection(
  textareaRef: React.RefObject<HTMLTextAreaElement | null>,
) {
  const selectionRef = useRef({
    start: 0,
    end: 0,
  });

  const [selection, setSelection] = useState({
    start: 0,
    end: 0,
  });

  const handleSelect = () => {
    const textarea = textareaRef.current;

    if (!textarea) return;

    const newSelection = {
      start: textarea.selectionStart,
      end: textarea.selectionEnd,
    };

    selectionRef.current = newSelection;
    setSelection(newSelection);
  };

  return {
    selectionRef,
    selection,
    handleSelect,
  };
}
