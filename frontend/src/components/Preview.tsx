import { useEffect, useState } from "react";

import Container from "./Container";
import { renderMarkdown } from "../utils/markdownRenderer";
import "../styles/markdownPreview.css";

type PreviewProps = {
  text: string;
};

export default function Preview({ text }: PreviewProps) {
  const [html, setHtml] = useState("");

  useEffect(() => {
    const render = async () => {
      const result = await renderMarkdown(text);

      setHtml(result);
    };

    render();
  }, [text]);

  return (
    <Container
      header={
        <div className="pl-3 pr-2 py-1 flex justify-between items-center">
          <h1 className="text-sm font-semibold p-2 text-text">preview</h1>
        </div>
      }
    >
      <div className="m-5 overflow-x-auto">
        <div
          className="
      text-sm
      text-text
      markdown-preview
      min-w-0
    "
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
      </div>
    </Container>
  );
}
