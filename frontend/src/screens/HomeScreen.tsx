import { useState } from "react";

import FormEditor from "../components/FormEditor";
import Preview from "../components/Preview";
import TextToolbar from "../components/TextToolbar";

export default function HomeScreen() {
  const [text, setText] = useState("");

  return (
    <main className="min-h-screen bg-black flex flex-col gap-10">
      <TextToolbar />

      <div className="flex gap-5 mx-5 items-start">
        <div className="flex-1 min-w-0">
          <FormEditor text={text} setText={setText} />
        </div>

        <div className="flex-1 min-w-0">
          <Preview text={text} />
        </div>
      </div>
    </main>
  );
}
