# Notepad Enhanced Features Guide

## Overview
The Notepad editor now includes special hint features that allow you to explicitly mark coding areas and mathematical expressions for enhanced display in the Notes page.

## New Toolbar Buttons

### 🎯 Mark as Mathematical Expression (Sigma Icon: Σ)
This button allows you to explicitly mark selected text or content as a mathematical expression. When rendered in the Notes page, it will be displayed with:
- **"Math Expression" badge** in blue theme (top-left)
- **Dark slate background** (simple, clean design)
- **Centered, large text** for easy reading
- **Blue border with glow effect** for visual distinction
- **Copy button** that appears on hover (same as code blocks)
- **Enhanced shadow effects** for prominence

**How to Use:**
1. Write or select the mathematical expression/formula in the editor
2. Click the **Sigma (Σ)** button in the toolbar
3. The content will be wrapped in a special math block
4. When viewing the note, this content will be rendered with enhanced styling

**Example:**
```
E = mc²
∫[a,b] f(x)dx
x = (-b ± √(b²-4ac)) / 2a
```

---

### 💻 Mark as Special Code Block (Terminal Icon)
This button allows you to explicitly mark code blocks for enhanced display. When rendered in the Notes page, it will be displayed with:
- **"Enhanced Code" badge** in green theme
- **Gradient dark background** (from gray-900 to black)
- **Green border with glow effect**
- **Copy button** that appears on hover
- **Enhanced shadow effects** for prominence

**How to Use:**
1. Write your code in the editor
2. Select the code block or position cursor in the paragraph
3. Click the **Terminal** button in the toolbar
4. The content will be wrapped in a special code block
5. When viewing the note, this code will be rendered with enhanced styling

**Example:**
```javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```

---

## Visual Differences

### Regular vs. Enhanced Rendering

#### Regular Code Block (Using Code Icon)
- Standard dark gray background
- Simple language label at top-left
- Standard border and shadow
- Copy button on hover

#### Enhanced Code Block (Using Terminal Icon)
- **Gradient background** with special effects
- **Green "Enhanced Code" badge** with icon
- **Green glowing border**
- **Enhanced shadow** effects
- Copy button on hover

#### Regular Math (Auto-detected)
- Simple purple border on left
- Small "📐 Mathematical Expression" label
- Light purple background

#### Enhanced Math (Using Sigma Icon)
- **Blue "Math Expression" badge** with icon
- **Dark slate background** with centered text
- **Blue glowing border**
- **Copy button on hover** (just like code blocks)
- **Enhanced shadow** effects
- **Clean, simple design** similar to enhanced code blocks

---

## Additional Features

### Images
All images in notes are displayed with:
- Rounded corners and shadows
- Zoom functionality (click to enlarge)
- Auto-generated captions from alt text
- Hover effects with magnifying glass icon

### Inline Code
Code snippets within text are styled with:
- Blue background and text
- Border and rounded corners
- Monospace font

### Tables
Tables are rendered with:
- Proper borders and spacing
- Header row highlighting
- Responsive design

---

## Tips for Best Results

1. **Mathematical Expressions**: Use the Sigma button for important formulas, equations, or mathematical content you want to stand out.

2. **Code Blocks**: 
   - Use the regular **Code** button for simple code snippets
   - Use the **Terminal** button for important code examples, algorithms, or code you want to emphasize

3. **Combining Features**: You can mix regular and enhanced blocks in the same note to create visual hierarchy.

4. **Visual Organization**: 
   - Enhanced blocks draw more attention
   - Use them sparingly for the most important content
   - Regular blocks work well for supporting examples

---

## Keyboard Shortcuts in Editor

While editing in the notepad:
- **Bold**: Ctrl/Cmd + B
- **Italic**: Ctrl/Cmd + I
- **Underline**: Ctrl/Cmd + U
- **Undo**: Ctrl/Cmd + Z
- **Redo**: Ctrl/Cmd + Shift + Z

---

## Technical Details

### Math Block
- Rendered as `<div data-type="math-block" data-math="true">`
- Detected by `NotesHtmlRenderer` for special styling
- Maintains content as editable text in the editor

### Special Code Block
- Rendered as `<pre data-type="special-code" data-enhanced="true">`
- Includes automatic copy-to-clipboard functionality
- Preserves whitespace and formatting

---

## Example Note Structure

```
# My Study Notes

## Important Formula
[Click Sigma button]
E = mc²

## Sample Code
[Click Terminal button]
function example() {
  console.log("Enhanced code");
}

## Regular Content
This is normal text with `inline code` and regular formatting.
```

When rendered, the formula and code will have enhanced visual styling while regular content maintains standard formatting.

