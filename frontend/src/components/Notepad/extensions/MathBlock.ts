/**
 * Custom Tiptap Extension for Mathematical Expressions
 * Allows users to explicitly mark text as mathematical content
 */

import { Node, mergeAttributes } from '@tiptap/core';

export const MathBlock = Node.create({
  name: 'mathBlock',

  group: 'block',

  content: 'inline*',

  parseHTML() {
    return [
      {
        tag: 'div[data-type="math-block"]',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      'div',
      mergeAttributes(HTMLAttributes, {
        'data-type': 'math-block',
        'data-math': 'true',
        class: 'math-block-content',
      }),
      0,
    ];
  },

  addCommands() {
    return {
      setMathBlock:
        () =>
        ({ commands }) => {
          return commands.setNode(this.name);
        },
      toggleMathBlock:
        () =>
        ({ commands }) => {
          return commands.toggleNode(this.name, 'paragraph');
        },
    };
  },
});

export default MathBlock;

