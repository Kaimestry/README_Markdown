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
  return (
    <div className="relative w-full">
      {/* Highlight layer */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          pointer-events-none
          whitespace-pre-wrap
          break-word
          font-mono
          text-xs
          leading-relaxed
          text-transparent
        "
      >
        {text.slice(0, selection.start)}

        <span className="bg-link/40">
          {text.slice(selection.start, selection.end)}
        </span>

        {text.slice(selection.end)}
      </div>

      {/* Actual textarea */}
      <textarea
        ref={textareaRef}
        value={text}
        onChange={handleChange}
        onInput={handleInput}
        onSelect={handleSelect}
        rows={1}
        spellCheck={false}
        placeholder="Enter files content here"
        style={{
          whiteSpace: "pre-wrap",
        }}
        className="
          relative
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
  );
}
