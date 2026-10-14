import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Heading1,
  Heading2,
  Heading3,
  SquareText,
  ChevronsLeftRightEllipsis,
} from "lucide-react";

export const markdownFormats = {
  bold: {
    label: "Bold",
    icon: Bold,
    type: "wrap",
    before: "**",
    after: "**",
  },

  italic: {
    label: "Italic",
    icon: Italic,
    type: "wrap",
    before: "*",
    after: "*",
  },

  underline: {
    label: "Underline",
    icon: Underline,
    type: "wrap",
    before: "<u>",
    after: "</u>",
  },

  strikethrough: {
    label: "Strikethrough",
    icon: Strikethrough,
    type: "wrap",
    before: "~~",
    after: "~~",
  },

  "inline-code": {
    label: "Inline Code",
    icon: SquareText,
    type: "wrap",
    before: "`",
    after: "`",
  },

  "heading-1": {
    label: "Heading 1",
    icon: Heading1,
    type: "heading",
    level: 1,
  },

  "heading-2": {
    label: "Heading 2",
    icon: Heading2,
    type: "heading",
    level: 2,
  },

  "heading-3": {
    label: "Heading 3",
    icon: Heading3,
    type: "heading",
    level: 3,
  },

  "code-block": {
    label: "Code Block",
    icon: ChevronsLeftRightEllipsis,
    type: "block",
    before: "```",
    after: "```",
  },
} as const;
