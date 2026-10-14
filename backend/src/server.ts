import express from "express";
import cors from "cors";

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Markdown Builder backend is running.");
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
