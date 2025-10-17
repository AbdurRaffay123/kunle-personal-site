/**
 * Custom Tiptap Extension for Special Code Blocks
 * Allows users to explicitly mark code blocks with enhanced styling
 */

import { Node, mergeAttributes, textblockTypeInputRule } from '@tiptap/core';

export const SpecialCodeBlock = Node.create({
  name: 'specialCodeBlock',

  group: 'block',

  content: 'text*',

  marks: '',

  code: true,

  defining: true,

  addOptions() {
    return {
      languagePrefixes: [],
      HTMLAttributes: {},
    };
  },

  parseHTML() {
    return [
      {
        tag: 'pre[data-type="special-code"]',
        preserveWhitespace: 'full',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      'pre',
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
        'data-type': 'special-code',
        'data-enhanced': 'true',
      }),
      [
        'code',
        {},
        0,
      ],
    ];
  },

  addCommands() {
    return {
      setSpecialCodeBlock:
        () =>
        ({ commands }: { commands: any }) => {
          return commands.setNode(this.name);
        },
      toggleSpecialCodeBlock:
        () =>
        ({ commands }: { commands: any }) => {
          return commands.toggleNode(this.name, 'paragraph');
        },
    } as any;
  },

  addInputRules() {
    return [
      textblockTypeInputRule({
        find: /^```special$/,
        type: this.type,
      }),
    ];
  },
});

export default SpecialCodeBlock;

