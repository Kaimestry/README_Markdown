import {
  Bold,
  ChevronsLeftRightEllipsis,
  Heading1,
  Heading2,
  Heading3,
  Italic,
  SquareText,
  Strikethrough,
  Underline,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import Icon from "./Icon";
import ToolbarButton from "./ToolbarButton";

type ToolbarItem = {
  icon: LucideIcon;
  label: string;
  action: string;
};

const textTools: ToolbarItem[] = [
  {
    icon: Bold,
    label: "Bold",
    action: "bold",
  },
  {
    icon: Italic,
    label: "Italic",
    action: "italic",
  },
  {
    icon: Underline,
    label: "Underline",
    action: "underline",
  },
  {
    icon: Strikethrough,
    label: "Strikethrough",
    action: "strikethrough",
  },
];

const headingTools: ToolbarItem[] = [
  {
    icon: Heading1,
    label: "Heading 1",
    action: "heading-1",
  },
  {
    icon: Heading2,
    label: "Heading 2",
    action: "heading-2",
  },
  {
    icon: Heading3,
    label: "Heading 3",
    action: "heading-3",
  },
];

type TextToolbarProps = {
  onBold: () => void;
  onItalic: () => void;
  onUnderline: () => void;
  onStrikethrough: () => void;
  onInlineCode: () => void;
  onCodeBlock: () => void;
  onHeading1: () => void;
  onHeading2: () => void;
  onHeading3: () => void;
};

export default function TextToolbar({
  onBold,
  onItalic,
  onUnderline,
  onStrikethrough,
  onInlineCode,
  onCodeBlock,
  onHeading1,
  onHeading2,
  onHeading3,
}: TextToolbarProps) {
  const textHandlers: Record<string, () => void> = {
    bold: onBold,
    italic: onItalic,
    underline: onUnderline,
    strikethrough: onStrikethrough,
  };
  const headingHandlers: Record<string, () => void> = {
    "heading-1": onHeading1,
    "heading-2": onHeading2,
    "heading-3": onHeading3,
  };

  const renderTools = (
    tools: ToolbarItem[],
    handlers?: Record<string, () => void>,
  ) =>
    tools.map((tool) => (
      <ToolbarButton
        key={tool.action}
        onClick={() => handlers?.[tool.action]?.()}
      >
        <Icon icon={tool.icon} />
      </ToolbarButton>
    ));

  return (
    <main className="bg-header flex justify-center gap-10 p-2 border-b border-border">
      <div className="flex gap-5">{renderTools(textTools, textHandlers)}</div>
      <div className="flex gap-5">
        {renderTools(headingTools, headingHandlers)}
      </div>
      <div className="flex gap-5">
        <ToolbarButton onClick={onInlineCode}>
          <Icon icon={ChevronsLeftRightEllipsis} />
        </ToolbarButton>
        <ToolbarButton onClick={onCodeBlock}>
          <Icon icon={SquareText} />
        </ToolbarButton>
      </div>{" "}
    </main>
  );
}
