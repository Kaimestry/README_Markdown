type EditorTextareaProps = {
  text: string;
  selection: {
    start: number;
    end: number;
  };
  textareaRef: React.RefObject<HTMLTextAreaElement | null>;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleInput: () => void;
  handleSelect: () => void;
};

export default function EditorTextarea({
  text,
  selection,
  textareaRef,
  handleChange,
  handleInput,
  handleSelect,
}: EditorTextareaProps) {
  const lines = text.split("\n");

  let characterIndex = 0;

  return (
    <div className="relative w-full">
      {/* Visual editor */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          w-full
          font-mono
          text-xs
          leading-relaxed
        "
      >
        {lines.map((line, index) => {
          const lineStart = characterIndex;
          const lineEnd = lineStart + line.length;

          characterIndex += line.length + 1;

          const selectionStart = Math.max(selection.start - lineStart, 0);

          const selectionEnd = Math.min(selection.end - lineStart, line.length);

          const hasSelection =
            selection.start < lineEnd && selection.end > lineStart;

          return (
            <div key={index} className="flex w-full">
              {/* Line number */}
              <div
                className="
                  w-12
                  shrink-0
                  select-none
                  text-right
                  pr-3
                  text-border
                "
              >
                {index + 1}
              </div>

              {/* Text */}
              <div
                className="
                  min-w-0
                  flex-1
                  whitespace-pre-wrap
                  break-normal
                "
              >
                {hasSelection ? (
                  <>
                    {line.slice(0, selectionStart)}

                    <span className="bg-link/40">
                      {line.slice(selectionStart, selectionEnd)}
                    </span>

                    {line.slice(selectionEnd)}
                  </>
                ) : (
                  line || "\u00A0"
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Actual textarea */}
      <textarea
        ref={textareaRef}
        value={text}
        onChange={handleChange}
        onInput={handleInput}
        onSelect={handleSelect}
        rows={1}
        wrap="soft"
        spellCheck={false}
        placeholder="Enter files content here"
        className="
        placeholder:text-subtext
          absolute
          top-0
          left-12
          right-0
          w-auto
          h-full
          resize-none
          overflow-hidden
          bg-transparent
          border-none
          p-0
          font-mono
          text-xs
          leading-relaxed
          text-transparent
          caret-text
          outline-none
          focus:outline-none
          focus:ring-0
        "
      />
    </div>
  );
}
