import { Check, Copy } from "lucide-react";
import Container from "./Container";
import Icon from "./Icon";
import useEditor from "../hooks/useEditor";

type FormEditorProps = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
};

export default function FormEditor({ text, setText }: FormEditorProps) {
  const { textareaRef, handleInput, handleCopy, copied } = useEditor();
  const lineCount = text.split("\n").length;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
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
          <div
            className="
              shrink-0
              select-none
              text-right
              pr-3
              text-border
            "
            aria-hidden="true"
          >
            {Array.from({ length: lineCount }, (_, index) => (
              <div key={index}>{index + 1}</div>
            ))}
          </div>

          <textarea
            ref={textareaRef}
            value={text}
            onChange={handleChange}
            onInput={handleInput}
            rows={1}
            spellCheck={false}
            placeholder="Enter files content here"
            className="
              block
              w-full
              resize-none
              bg-transparent
              border-none
              p-0
              font-mono
              text-xs
              leading-relaxed
              text-text
              outline-none
              focus:outline-none
              focus:ring-0
            "
          />
        </div>
      </form>
    </Container>
  );
}
