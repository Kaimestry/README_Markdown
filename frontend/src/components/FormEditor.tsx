import { Copy } from "lucide-react";
import { useRef, useState } from "react";

import Container from "./Container";
import Icon from "./Icon";

export default function FormEditor() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // The editor always keeps one extra newline at the end
  const [text, setText] = useState("\n");

  const lineCount = text.split("\n").length;

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

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    let value = event.target.value;

    // Always keep one empty line after the user's content
    if (!value.endsWith("\n")) {
      value += "\n";
    }

    setText(value);
  };

  const handleCopy = async () => {
    // Remove the editor-only trailing newline
    const markdown = text.replace(/\n$/, "");

    await navigator.clipboard.writeText(markdown);
  };

  return (
    <Container
      header={
        <div className="pl-3 pr-2 py-1 flex justify-between items-center">
          <h1 className="text-sm font-semibold p-2 text-text">editor</h1>

          <button
            type="button"
            onClick={handleCopy}
            className="p-2 rounded-md hover:bg-border"
            aria-label="Copy markdown"
          >
            <Icon icon={Copy} />
          </button>
        </div>
      }
    >
      <form className="w-full py-2">
        <div className="flex w-full font-code text-xs leading-relaxed">
          {/* Line numbers */}
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

          {/* Editor */}
          <textarea
            ref={textareaRef}
            value={text}
            onChange={handleChange}
            onInput={handleInput}
            spellCheck={false}
            className="
              block
              w-full
              resize-none
              overflow-hidden
              bg-transparent
              border-none
              p-0
              font-code
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
