import { Router } from "express";

const router = Router();

router.post("/", async (req, res) => {
  const { text } = req.body;

  if (typeof text !== "string") {
    return res.status(400).json({
      error: "Markdown text is required.",
    });
  }

  try {
    const response = await fetch("https://api.github.com/markdown", {
      method: "POST",
      headers: {
        Accept: "application/vnd.github+json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        mode: "gfm",
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();

      console.error("GitHub API error:", response.status, errorText);

      return res.status(response.status).json({
        error: "GitHub Markdown API request failed.",
        details: errorText,
      });
    }

    const html = await response.text();

    res.json({ html });
  } catch {
    res.status(500).json({
      error: "Failed to render Markdown.",
    });
  }
});

export default router;
