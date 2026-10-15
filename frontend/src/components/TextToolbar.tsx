import { Table2 } from "lucide-react";
import { markdownFormats } from "../configs/markdownFormats";

import Icon from "./Icon";
import ToolbarButton from "./ToolbarButton";

type FormatName = keyof typeof markdownFormats;

type TextToolbarProps = {
  onFormat: (format: FormatName) => void;
  onInsertTable: () => void;
};

const toolbarItems: FormatName[] = [
  "bold",
  "italic",
  "underline",
  "strikethrough",
  "subscript",
  "superscript",
  "heading-1",
  "heading-2",
  "heading-3",
  "inline-code",
  "code-block",
  "quote",
  "link",
  "unordered-list",
  "ordered-list",
  "task-list",
  "escape",
];

export default function TextToolbar({
  onFormat,
  onInsertTable,
}: TextToolbarProps) {
  return (
    <div className="flex gap-5 justify-center p-2 bg-header border-b border-border sticky top-0 z-50 ">
      {toolbarItems.map((formatName) => {
        const format = markdownFormats[formatName];

        return (
          <ToolbarButton key={formatName} onClick={() => onFormat(formatName)}>
            <Icon icon={format.icon} />
          </ToolbarButton>
        );
      })}

      <ToolbarButton onClick={onInsertTable}>
        <Icon icon={Table2} />
      </ToolbarButton>
    </div>
  );
}
