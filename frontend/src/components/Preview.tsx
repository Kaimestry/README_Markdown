import { useEffect, useState } from "react";

import { renderMarkdown } from "../../../backend/src/services/githubMarkdown";
import Container from "./Container";

type PreviewProps = {
  text: string;
};

export default function Preview({ text }: PreviewProps) {
  const [html, setHtml] = useState("");

  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        const renderedHtml = await renderMarkdown(text);

        setHtml(renderedHtml);
      } catch (error) {
        console.error("Failed to render Markdown:", error);
      }
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [text]);

  return (
    <Container
      header={
        <div className="pl-3 pr-2 py-1 flex justify-between items-center">
          <h1 className="text-sm font-semibold p-2 text-text">preview</h1>
        </div>
      }
    >
      <div
        className="
          m-5
          pb-3
          text-sm
          text-text
          wrap-anywhere
        "
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    </Container>
  );
}
