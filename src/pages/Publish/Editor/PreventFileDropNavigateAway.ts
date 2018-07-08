import { isFileDragEvent, isInputElement } from '@heydovetail/editor/src/util/dom';
import Vue from 'vue';

const dragEventsToPrevent: Array<keyof DocumentEventMap> = ['drop', 'dragover'];

/**
 * Prevent files dragged and dropped onto the page from triggering the browser's
 * default behavior of navigating away and loading the dropped file.
 *
 * Example:
 *
 *   <PreventFileDropNavigateAway />
 *
 * This component has global effect, and can be rendered anywhere in in the
 * Vue tree. File form inputs are given special treatment to allow files to be
 * dropped onto the input.
 */

export class PreventFileDropNavigateAway extends Vue.extend({
  mounted() {
    for (const event of dragEventsToPrevent) {
      document!.addEventListener(event, preventFileDragEventDefault);
    }
  },

  beforeDestroy() {
    for (const event of dragEventsToPrevent) {
      document!.removeEventListener(event, preventFileDragEventDefault);
    }
  },
}) { }

function preventFileDragEventDefault(e: Event): void {
  if (isFileDragEvent(e)) {
    const { target } = e;
    if (target && (!isInputElement(target) || target.type !== 'file')) {
      e.preventDefault();
    }
  }
}
