const sampleMarkdown = `# Markdown Playground

Welcome to the editor! This is sample content for testing the UI.

Bee Movie Script According to all known laws of aviation, there is no way a bee should be able to fly. 
Its wings are too small to get its fat little body off the ground. 
The bee, of course, flies anyway because bees don't care what humans think is impossible. 
Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow! 
Let's shake it up a little. Barry! Breakfast is ready! Ooming! Hang on a second. 
Hello? - Barry? - Adam? - Oan you believe this is happening? - I can't. 
I'll pick you up. Looking sharp. Use the stairs. 
Your father paid good money for those. Sorry. I'm excited. Here's the graduate.
 We're very proud of you, son. A perfect report card, all B's. Very proud. 
 Ma! I got a thing going here. - You got lint on your fuzz. - Ow! That's me! - 
 Wave to us! We'll be in row 118,000. - Bye! 
 Barry, I told you, stop flying in the house!

**Bold text**

*Italic text*

<ins>Underlined text</ins>

~~Strikethrough text~~

\`Inline code\`

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
