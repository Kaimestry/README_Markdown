import express from "express";
import cors from "cors";

import markdownRouter from "./routes/markdown.js";

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Markdown Builder backend is running.");
});

app.use("/api/markdown", markdownRouter);

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
