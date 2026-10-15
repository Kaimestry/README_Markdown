import { useState } from "react";

type TableSettingsProps = {
  rows: number;
  columns: number;
  onRowsChange: (rows: number) => void;
  onColumnsChange: (columns: number) => void;
};

export default function TableSettings({
  rows,
  columns,
  onRowsChange,
  onColumnsChange,
}: TableSettingsProps) {
  const [rowInput, setRowInput] = useState(String(rows));
  const [columnInput, setColumnInput] = useState(String(columns));

  const rowsValid = rowInput !== "" && Number(rowInput) >= 1;
  const columnsValid = columnInput !== "" && Number(columnInput) >= 1;

  const handleRowsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setRowInput(value);

    if (value !== "" && Number(value) >= 1) {
      onRowsChange(Number(value));
    }
  };

  const handleColumnsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setColumnInput(value);

    if (value !== "" && Number(value) >= 1) {
      onColumnsChange(Number(value));
    }
  };

  return (
    <div className="flex gap-5">
      <label className="flex flex-col gap-2 text-sm text-text">
        Row amount
        <input
          type="number"
          min={1}
          value={rowInput}
          onChange={handleRowsChange}
          className={`
            w-24
            rounded-md
            border
            bg-background
            px-3
            py-2
            text-text
            outline-none
            ${rowsValid ? "border-border" : "border-red-500"}
          `}
        />
      </label>

      <label className="flex flex-col gap-2 text-sm text-text">
        Column amount
        <input
          type="number"
          min={1}
          value={columnInput}
          onChange={handleColumnsChange}
          className={`
            w-24
            rounded-md
            border
            bg-background
            px-3
            py-2
            text-text
            outline-none
            ${columnsValid ? "border-border" : "border-red-500"}
          `}
        />
      </label>
    </div>
  );
}
