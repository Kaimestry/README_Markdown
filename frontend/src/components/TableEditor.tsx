type TableEditorProps = {
  rows: number;
  columns: number;
  cells: string[][];
  onChange: (row: number, column: number, value: string) => void;
};

export default function TableEditor({
  rows,
  columns,
  cells,
  onChange,
}: TableEditorProps) {
  return (
    <div className="max-h-80 overflow-x-auto overflow-y-auto border border-border">
      <table className="w-full border-collapse text-sm">
        <tbody>
          {Array.from({ length: rows }, (_, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: columns }, (_, columnIndex) => (
                <td key={columnIndex} className="border border-border p-0">
                  <input
                    type="text"
                    value={cells[rowIndex]?.[columnIndex] ?? ""}
                    onChange={(event) =>
                      onChange(rowIndex, columnIndex, event.target.value)
                    }
                    className="
                        w-full
                        min-w-24
                        bg-transparent
                        px-3
                        py-2
                        text-sm
                        text-text
                        outline-none
                        placeholder:text-subtext
                        focus:bg-surface
                        text-center
                      "
                    placeholder={
                      rowIndex === 0 ? `Header ${columnIndex + 1}` : ""
                    }
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
