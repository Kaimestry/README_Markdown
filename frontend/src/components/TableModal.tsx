import { X } from "lucide-react";

import Container from "./Container";
import Icon from "./Icon";
import TableSettings from "./TableSettings";
import { useEffect, useState } from "react";
import TableEditor from "./TableEditor";
import { generateMarkdownTable } from "../utils/markdownTable";

type TableModalProps = {
  rows: number;
  columns: number;
  onRowsChange: (rows: number) => void;
  onColumnsChange: (columns: number) => void;
  onClose: () => void;
  onInsert: (table: string) => void;
};

function createTableCells(rows: number, columns: number) {
  return Array.from({ length: rows }, (_, row) =>
    Array.from({ length: columns }, (_, column) =>
      row === 0 ? `Header ${column + 1}` : "",
    ),
  );
}

export default function TableModal({
  rows,
  columns,
  onRowsChange,
  onColumnsChange,
  onClose,
  onInsert,
}: TableModalProps) {
  const [cells, setCells] = useState<string[][]>(
    createTableCells(rows, columns),
  );
  useEffect(() => {
    setCells((current) =>
      Array.from({ length: rows }, (_, row) =>
        Array.from({ length: columns }, (_, column) => {
          if (current[row]?.[column] !== undefined) {
            return current[row][column];
          }

          return row === 0 ? `Header ${column + 1}` : "";
        }),
      ),
    );
  }, [rows, columns]);
  const handleCellChange = (row: number, column: number, value: string) => {
    setCells((current) => {
      const next = current.map((row) => [...row]);

      next[row][column] = value;

      return next;
    });
  };
  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-background/50 p-5">
      <div className="w-full max-w-2xl">
        <Container
          header={
            <div className="flex items-center justify-between px-5 py-4">
              <h2 className="text-base font-semibold text-text">
                Insert Table
              </h2>

              <button
                type="button"
                onClick={onClose}
                className="
                  rounded-md
                  p-1.5
                  text-subtext
                  hover:bg-background
                  hover:text-text
                "
                aria-label="Close"
              >
                <Icon icon={X} size={18} />
              </button>
            </div>
          }
        >
          <div className="space-y-5 px-5 py-5 bg-background">
            <TableSettings
              rows={rows}
              columns={columns}
              onRowsChange={onRowsChange}
              onColumnsChange={onColumnsChange}
            />

            <TableEditor
              rows={rows}
              columns={columns}
              cells={cells}
              onChange={handleCellChange}
            />
          </div>

          <div className="flex justify-end gap-3 border-t border-border bg-surface rounded-b-lg px-5 py-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded-md border border-border px-4 py-2 text-sm text-text hover:bg-background"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={() => onInsert(generateMarkdownTable(cells))}
              className="rounded-md bg-green px-4 py-2 text-sm font-medium text-white hover:opacity-90"
            >
              Insert table
            </button>
          </div>
        </Container>
      </div>
    </div>
  );
}
