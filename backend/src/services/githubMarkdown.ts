export async function renderMarkdown(text: string): Promise<string> {
  const response = await fetch("http://localhost:3000/api/markdown", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });

  if (!response.ok) {
    throw new Error("Failed to render Markdown.");
  }

  const data = await response.json();

  return data.html;
}
