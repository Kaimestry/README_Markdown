import { Check, Copy } from "lucide-react";

import Container from "./Container";
import EditorTextarea from "./EditorTextarea";
import Icon from "./Icon";

type Selection = {
  start: number;
  end: number;
};

type FormEditorProps = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;

  textareaRef: React.RefObject<HTMLTextAreaElement | null>;
  selection: Selection;

  handleSelect: () => void;
  handleInput: () => void;
  handleCopy: (text: string) => void;

  copied: boolean;
};

export default function FormEditor({
  text,
  setText,
  textareaRef,
  selection,
  handleSelect,
  handleInput,
  handleCopy,
  copied,
}: FormEditorProps) {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = event.target;

    const scrollTop = textarea.scrollTop;
    const scrollLeft = textarea.scrollLeft;

    console.log({
      selectionStart: textarea.selectionStart,
      selectionEnd: textarea.selectionEnd,
      scrollTop: textarea.scrollTop,
    });

    setText(textarea.value);

    requestAnimationFrame(() => {
      textarea.scrollTop = scrollTop;
      textarea.scrollLeft = scrollLeft;
    });
  };

  return (
    <Container
      header={
        <div className="pl-3 pr-2 py-1 flex justify-between items-center">
          <h1 className="text-sm font-semibold p-2 text-text">editor</h1>

          <button
            type="button"
            onClick={() => handleCopy(text)}
            className="p-2 rounded-md hover:bg-border"
            aria-label={copied ? "Copied" : "Copy markdown"}
          >
            <Icon
              icon={copied ? Check : Copy}
              color={copied ? "var(--color-green)" : "currentColor"}
            />
          </button>
        </div>
      }
    >
      <form className="w-full py-5 px-3">
        <div className="flex w-full font-mono text-xs leading-relaxed">
          <EditorTextarea
            text={text}
            selection={selection}
            textareaRef={textareaRef}
            handleChange={handleChange}
            handleInput={handleInput}
            handleSelect={handleSelect}
          />
        </div>
      </form>
    </Container>
  );
}
