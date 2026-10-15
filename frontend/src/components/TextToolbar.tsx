import { markdownFormats } from "../configs/markdownFormats";

import Icon from "./Icon";
import ToolbarButton from "./ToolbarButton";

type FormatName = keyof typeof markdownFormats;

type TextToolbarProps = {
  onFormat: (format: FormatName) => void;
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
];

export default function TextToolbar({ onFormat }: TextToolbarProps) {
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
    </div>
  );
}
