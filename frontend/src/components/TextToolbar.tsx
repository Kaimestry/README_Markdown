import { useState } from "react";

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

const codeTools: ToolbarItem[] = [
  {
    icon: ChevronsLeftRightEllipsis,
    label: "Code Block",
    action: "code-block",
  },
  {
    icon: SquareText,
    label: "Inline Code",
    action: "inline-code",
  },
];

export default function TextToolbar() {
  const [activeTools, setActiveTools] = useState<string[]>([]);

  const handleToolClick = (action: string) => {
    setActiveTools((current) =>
      current.includes(action)
        ? current.filter((tool) => tool !== action)
        : [...current, action],
    );
  };

  const renderTools = (tools: ToolbarItem[]) =>
    tools.map((tool) => (
      <ToolbarButton
        key={tool.action}
        active={activeTools.includes(tool.action)}
        onClick={() => handleToolClick(tool.action)}
      >
        <Icon icon={tool.icon} />
      </ToolbarButton>
    ));

  return (
    <main className="bg-header flex justify-center gap-10 p-2 border-b-2 border-surface">
      <div className="flex gap-5">{renderTools(textTools)}</div>

      <div className="flex gap-5">{renderTools(headingTools)}</div>

      <div className="flex gap-5">{renderTools(codeTools)}</div>
    </main>
  );
}
