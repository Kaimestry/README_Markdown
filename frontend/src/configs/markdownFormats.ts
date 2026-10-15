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
  Superscript,
  Subscript,
  Quote,
  Link,
  List,
  ListOrdered,
  SquareCheck,
  StickyNoteX,
  MessageCircleCode,
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
    before: "<ins>",
    after: "</ins>",
  },

  subscript: {
    label: "Subscript",
    icon: Subscript,
    type: "wrap",
    before: "<sub>",
    after: "</sub>",
  },
  superscript: {
    label: "Superscript",
    icon: Superscript,
    type: "wrap",
    before: "<sup>",
    after: "</sup>",
  },

  strikethrough: {
    label: "Strikethrough",
    icon: Strikethrough,
    type: "wrap",
    before: "~~",
    after: "~~",
  },
  comment: {
    label: "Comment",
    icon: MessageCircleCode,
    type: "wrap",
    before: "<!--",
    after: "-->",
  },
  escape: {
    label: "Escape Markdown",
    icon: StickyNoteX,
    type: "escape",
    before: "\\",
  },
  "inline-code": {
    label: "Inline Code",
    icon: ChevronsLeftRightEllipsis,
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
    icon: SquareText,
    type: "block",
    before: "```",
    after: "```",
  },

  quote: {
    label: "Quote",
    icon: Quote,
    type: "quote",
    before: "> ",
  },

  link: {
    label: "Link",
    icon: Link,
    type: "link",
  },

  "unordered-list": {
    label: "Unordered List",
    icon: List,
    type: "list",
    marker: "- ",
  },

  "ordered-list": {
    label: "Ordered List",
    icon: ListOrdered,
    type: "list",
    marker: "1. ",
  },
  "task-list": {
    label: "Task List",
    icon: SquareCheck,
    type: "task-list",
  },
} as const;
