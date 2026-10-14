export default function useEditorInput(
  _textareaRef: React.RefObject<HTMLTextAreaElement | null>,
) {
  const handleInput = (): void => {
    // Intentionally empty.
  };

  return {
    handleInput,
  };
}
