export function generateMarkdownTable(cells: string[][]): string {
  if (cells.length === 0) {
    return "";
  }

  const header = cells[0];

  const separator = header.map(() => "---");

  const rows = [header, separator, ...cells.slice(1)];

  return rows.map((row) => `| ${row.join(" | ")} |`).join("\n");
}
