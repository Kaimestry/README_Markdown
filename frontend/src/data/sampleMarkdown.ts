const sampleMarkdown = `# Markdown Playground

Welcome to the editor! This is sample content for testing the UI.

**Bold text**

*Italic text*

<ins>Underlined text</ins>

~~Strikethrough text~~

\`Inline code\`

<sub>Sub Text</sub> next to normal text

<sup>Super Text</sup> next to normal text

---

## Headings

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

---

## Links

Check out [GitHub](https://github.com).

You can also have **bold text with a [link](https://github.com)** inside it.

---

## Lists

### Unordered List

- Apple
- Banana
- Orange
  - Small orange
  - Big orange
    - Extremely big orange

### Ordered List

1. First item
   1. another layer
   2. second layer
       1. even more layer 
2. Second item
3. Third item

---

## Task List

- [x] Finish the editor
- [x] Add live preview
- [x] Add formatting buttons
- [ ] Make everything responsive
- [ ] Probably add more features

---

## Blockquote

> This is a blockquote.
>
> It can span multiple lines.
>
> **It can also contain formatting.**

---

## Code

Inline code looks like \`const value = 42;\`.

A fenced code block:

\`\`\`ts
function greet(name: string) {
  return \`Hello, \${name}!\`;
}

console.log(greet("World"));
\`\`\`

---

## Table

| Feature | Status | Priority |
| --- | --- | --- |
| Bold | Done | High |
| Italic | Done | High |
| Tables | Done | Medium |
| Code blocks | Done | Medium |
| Responsive UI | In progress | High |
| More buttons | Soon | Low |

## Long Text

This is a deliberately long paragraph designed to test how the editor handles wrapping. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Donec sed odio dui. Nullam id dolor id nibh ultricies vehicula ut id elit.

---

## Weirdly Long Line

This line is intentionally very long so you can test whether the line numbers, textarea, wrapping behavior, selection, and preview all stay aligned when there is enough text to wrap across multiple visual lines without creating additional logical lines.

---

## Final Test

Mixing **bold**, *italic*, <ins>underline</ins>, ~~strikethrough~~, and \`code\` in the same paragraph.

> **Markdown is weird.**

\`\`\`python
def markdown_is_weird():
    return True
\`\`\`
`;

export default sampleMarkdown;
