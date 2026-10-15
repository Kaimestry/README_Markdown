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
  return (
    <div className="flex gap-5">
      <label className="flex flex-1 flex-col gap-2">
        <span className="text-sm text-text">Row amount</span>

        <input
          type="number"
          min={1}
          value={rows}
          onChange={(event) =>
            onRowsChange(Math.max(1, Number(event.target.value)))
          }
          className="
            w-full
            rounded-md
            border
            border-border
            bg-background
            px-3
            py-2
            text-sm
            text-text
            outline-none
            focus:border-link
          "
        />

        <span className="text-xs text-subtext">Includes the header row</span>
      </label>

      <label className="flex flex-1 flex-col gap-2">
        <span className="text-sm text-text">Column amount</span>

        <input
          type="number"
          min={1}
          value={columns}
          onChange={(event) =>
            onColumnsChange(Math.max(1, Number(event.target.value)))
          }
          className="
            w-full
            rounded-md
            border
            border-border
            bg-background
            px-3
            py-2
            text-sm
            text-text
            outline-none
            focus:border-link
          "
        />
      </label>
    </div>
  );
}
