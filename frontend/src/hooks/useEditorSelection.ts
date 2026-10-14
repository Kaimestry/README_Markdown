import { useRef, useState } from "react";

type Selection = {
  start: number;
  end: number;
};

export default function useEditorSelection(
  textareaRef: React.RefObject<HTMLTextAreaElement | null>,
) {
  const selectionRef = useRef<Selection>({
    start: 0,
    end: 0,
  });

  const [selection, setSelection] = useState<Selection>({
    start: 0,
    end: 0,
  });

  const updateSelection = (newSelection: Selection) => {
    selectionRef.current = newSelection;
    setSelection(newSelection);
  };

  const handleSelect = () => {
    const textarea = textareaRef.current;

    if (!textarea) return;

    updateSelection({
      start: textarea.selectionStart,
      end: textarea.selectionEnd,
    });
  };

  return {
    selectionRef,
    selection,
    updateSelection,
    handleSelect,
  };
}
