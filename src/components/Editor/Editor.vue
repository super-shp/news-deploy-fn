<template>
  <div class="quill-editor">
    <slot name="toolbar"></slot>
    <div ref="editor"></div>
  </div>
</template>

<script lang="ts">
/// <reference path="./vue-quill-editor.d.ts">

import Vue from 'vue';
import { options } from './quillSet';
import { default as Quill } from 'quill';

const Delta = Quill.import('delta');

export default Vue.extend({
  name: 'quill-editor',
  props: {
    content: [String, Delta],
    disabled: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Object,
      required: false,
      default: () => ({}),
    },
  },
  data() {
    return {
      editor: null as (Quill | null),
      delta: new Delta(),
    };
  },
  mounted() {
    this.initializeEditor();
  },

  methods: {
    initializeEditor() {
      if (this.$el) {
        const editorOptions = Object.assign({}, options, this.options);

        // instance
        this.editor = new Quill(this.$refs.editor as HTMLElement, editorOptions);

        this.editor.enable(false);

        // set editor content
        if (!this.disabled) {
          this.editor.enable(true);
        }

        // make model as touched if editor lost focus
        this.editor.on('selection-change', range => {
          if (!range) {
            this.$emit('blur', this.editor);
          } else {
            this.$emit('focus', this.editor);
          }
        });
        // update model if text changes
        this.editor.on('text-change', (delta, oldDelta, source) => {
          const editor = this.editor;

          if (editor) {
            const html = (this.$refs.editor as Element).children[0].innerHTML;
            this.delta = editor.getContents();
            this.$emit('input', this.delta);
            this.$emit('change', { html, editor });
          }
        });

        // emit ready event
        this.$emit('ready', this.editor);
      }
    },
  },
  watch: {
    content(val, oldVal) {
      debugger;
      if ((this as any).editor) {
        if (val && val !== this.delta) {
          if (typeof val === 'string') {
            (this as any).editor.pasteHTML(val);
          } else {
            (this as any).editor.setContents(val);
          }
          this.delta = (this as any).editor.getContents();
        }
      }
    },
    disabled(val, oldVal) {
      if ((this as any).editor) {
        (this as any).editor.enable(!val);
      }
    },
  },
});
</script>

<style lang="scss">
.ql-toolbar {
  border: 0 !important;
}

.ql-container {
  border: 0 !important;
}
</style>


