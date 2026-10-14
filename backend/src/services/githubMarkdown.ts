export async function renderMarkdown(text: string): Promise<string> {
  const response = await fetch("http://localhost:3000/api/markdown", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });

  if (!response.ok) {
    const errorText = await response.text();

    throw new Error(`Backend error ${response.status}: ${errorText}`);
  }

  const data = await response.json();

  return data.html;
}
