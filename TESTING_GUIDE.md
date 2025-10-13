# Testing Guide: Notepad Hint Features

## How to Test the New Features

### Step 1: Navigate to the Notepad
1. Open your browser and go to `http://localhost:3000/admin/dashboard/notepad`
2. Log in if required

### Step 2: Create a Test Note

#### Test Mathematical Expression Feature
1. In the notepad editor, type a mathematical expression, for example:
   ```
   E = mc²
   ```
2. Select the text you just typed
3. Look for the **Sigma (Σ)** button in the toolbar (it should be after the regular Code Block button)
4. Click the **Sigma** button
5. The text should now be wrapped in a special math block
6. Save the note

#### Test Enhanced Code Block Feature
1. In the notepad editor, type some code, for example:
   ```
   function hello() {
     console.log("Hello World");
   }
   ```
2. Select the code you just typed (or just position cursor in that paragraph)
3. Look for the **Terminal** button in the toolbar (it should be right after the Sigma button)
4. Click the **Terminal** button
5. The text should now be wrapped in a special code block
6. Save the note

### Step 3: View the Note
1. Navigate to the Notes page (e.g., `http://localhost:3000/notes/[your-note-id]`)
2. Observe the differences:

**For Mathematical Expression:**
- Should have a **"Math Expression" badge** in blue at the top-left
- Should have a **dark slate background** (slate-800/slate-900)
- Should display **centered, large text**
- Should have a **blue border** with glow effect and shadow
- Should show a **copy button** when you hover over it (just like code blocks)

**For Enhanced Code Block:**
- Should have a **"Enhanced Code" badge** in green at the top-left
- Should have a **gradient dark background** (gray-900 to black)
- Should have a **green glowing border**
- Should have enhanced shadow effects
- Should show a **copy button** when you hover over it

### Step 4: Compare with Regular Blocks
To see the difference, also create:
1. A regular code block (using the **Code** button instead of Terminal)
2. Regular text

You'll notice the enhanced blocks stand out much more prominently.

---

## Visual Indicators to Look For

### ✅ Math Block Working Correctly
- [ ] "Math Expression" badge visible at top-left (blue theme)
- [ ] Dark slate background (no gradient)
- [ ] Centered, large text display
- [ ] 2px blue border with glow effect
- [ ] Shadow effects visible
- [ ] Copy button appears on hover
- [ ] Copy button shows "Copied!" feedback when clicked

### ✅ Enhanced Code Block Working Correctly
- [ ] "Enhanced Code" green badge visible
- [ ] Gradient background from gray-900 to black
- [ ] Green border with glow effect
- [ ] Copy button appears on hover
- [ ] Enhanced shadow effects

### ✅ Regular Code Block (for comparison)
- [ ] Simple dark gray background
- [ ] Language label at top-left
- [ ] Standard gray border
- [ ] Copy button on hover

---

## Troubleshooting

### If Math Block doesn't appear enhanced:
1. Check that you used the **Sigma (Σ)** button, not regular text
2. Inspect the HTML - should see `data-type="math-block"` attribute
3. Check browser console for any errors

### If Code Block doesn't appear enhanced:
1. Make sure you used the **Terminal** button, not the regular **Code** button
2. Inspect the HTML - should see `data-type="special-code"` attribute
3. Check browser console for any errors

### General Issues:
1. Clear browser cache and reload
2. Check that both frontend servers are running
3. Check the browser console for TypeScript/React errors
4. Verify the note was saved successfully

---

## Expected Behavior Summary

| Feature | Button | Output HTML | Visual Styling |
|---------|--------|-------------|----------------|
| **Enhanced Math** | Σ (Sigma) | `<div data-type="math-block">` | Blue badge, dark slate bg, centered text, copy button |
| **Enhanced Code** | Terminal | `<pre data-type="special-code">` | Green badge, gradient bg, green border |
| **Regular Math** | Auto-detect | `.math`, `.katex` classes | Simple purple left border |
| **Regular Code** | Code | `<pre><code>` | Dark gray bg, language label |

---

## Next Steps After Testing

1. ✅ Verify both features work as expected
2. ✅ Create sample notes with various content types
3. ✅ Test the Table of Contents still works correctly
4. ✅ Ensure image zoom functionality still works
5. ✅ Check responsive design on mobile devices

---

## Screenshots to Capture (Optional)

1. Notepad editor showing the new Sigma and Terminal buttons
2. Enhanced Math block in rendered note
3. Enhanced Code block in rendered note
4. Side-by-side comparison of regular vs enhanced blocks

