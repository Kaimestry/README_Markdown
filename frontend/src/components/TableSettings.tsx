import { useState } from "react";

type TableSettingsProps = {
  rows: number;
  columns: number;
  onRowsChange: (rows: number) => void;
  onColumnsChange: (columns: number) => void;
};

type InputBoxProps = {
  label: string;
  value: string;
  valid: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function InputBox({ label, value, valid, onChange }: InputBoxProps) {
  return (
    <div className="flex flex-1 flex-col gap-2">
      <label className="flex flex-col gap-2 text-sm text-text w-full font-bold">
        {label}
      </label>
      <input
        type="number"
        min={1}
        value={value}
        onChange={onChange}
        className={`
          w-full
          rounded-md
          border
          bg-background
          px-3
          py-2
          text-text
          outline-none
          ${valid ? "border-border" : "border-red-500"}
        `}
      />
    </div>
  );
}

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
      <InputBox
        label="Row amount"
        value={rowInput}
        valid={rowsValid}
        onChange={handleRowsChange}
      />

      <InputBox
        label="Column amount"
        value={columnInput}
        valid={columnsValid}
        onChange={handleColumnsChange}
      />
    </div>
  );
}
