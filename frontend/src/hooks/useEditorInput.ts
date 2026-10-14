export default function useEditorInput(
  textareaRef: React.RefObject<HTMLTextAreaElement | null>,
) {
  const handleInput = () => {
    const textarea = textareaRef.current;

    if (!textarea) return;

    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "auto",
    });
  };

  return {
    handleInput,
  };
}
