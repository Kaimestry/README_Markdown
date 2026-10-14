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
    applyFormat,
  } = useEditor(text, setText);

  return (
    <main className="min-h-screen bg-background flex flex-col gap-10">
      <TextToolbar onFormat={applyFormat} />

      <div className="flex gap-5 mx-5 items-stretch">
        <div className="flex-1 min-w-0 h-full">
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
        <div className="flex-1 min-w-0 h-full">
          <Preview text={text} />
        </div>
      </div>
    </main>
  );
}
