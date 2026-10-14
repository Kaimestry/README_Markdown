import { useState } from "react";

import FormEditor from "../components/FormEditor";
import Preview from "../components/Preview";
import TextToolbar from "../components/TextToolbar";
import useEditor from "../hooks/useEditor";

export default function HomeScreen() {
  const [text, setText] = useState("");

  const {
    textareaRef,
    selection,
    handleSelect,
    handleInput,
    handleCopy,
    copied,
    toggleBold,
    toggleItalic,
    toggleUnderline,
    toggleStrikethrough,
    toggleInlineCode,
    toggleCodeBlock,
    toggleHeading1,
    toggleHeading2,
    toggleHeading3,
  } = useEditor(text, setText);

  return (
    <main className="min-h-screen bg-black flex flex-col gap-10">
      <TextToolbar
        onBold={toggleBold}
        onItalic={toggleItalic}
        onUnderline={toggleUnderline}
        onStrikethrough={toggleStrikethrough}
        onInlineCode={toggleInlineCode}
        onCodeBlock={toggleCodeBlock}
        onHeading1={toggleHeading1}
        onHeading2={toggleHeading2}
        onHeading3={toggleHeading3}
      />

      <div className="flex gap-5 mx-5 items-start">
        <div className="flex-1 min-w-0">
          <FormEditor
            text={text}
            setText={setText}
            textareaRef={textareaRef}
            selection={selection}
            handleSelect={handleSelect}
            handleInput={handleInput}
            handleCopy={handleCopy}
            copied={copied}
          />
        </div>

        <div className="flex-1 min-w-0">
          <Preview text={text} />
        </div>
      </div>
    </main>
  );
}
