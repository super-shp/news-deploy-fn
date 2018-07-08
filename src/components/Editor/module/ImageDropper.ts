// fork from https://github.com/kensnyder/quill-image-drop-module/blob/master/index.js

import { Quill } from 'quill';

export interface ImageDropModuleOption {
  method: 'readAsArrayBuffer' | 'readAsDataURL' | 'readAsText';
  dropCallback: (data: string | ArrayBuffer) => Promise<string>;
  pasteCallback: (data: string | ArrayBuffer) => Promise<string>;
}

export class ImageDropper {
  private quill: Quill;
  private method: string;
  private dropCallback: (data: string | ArrayBuffer) => Promise<string>;
  private pasteCallback: (data: string | ArrayBuffer) => Promise<string>;

  constructor(quill: Quill, options: ImageDropModuleOption) {
    const {
      method,
      dropCallback,
      pasteCallback,
    } = options;

    this.quill = quill;
    this.method = method;
    this.dropCallback = dropCallback;
    this.pasteCallback = pasteCallback;

    // bind handlers to this instance
    this.handleDrop = this.handleDrop.bind(this);
    this.handlePaste = this.handlePaste.bind(this);
    this.insert = this.insert.bind(this);

    // listen for drop and paste evts
    this.quill.root.addEventListener('drop', this.handleDrop, false);
    this.quill.root.addEventListener('paste', this.handlePaste, false);
  }

  /**
   * handler for drop evt to read dropped files from evt.dataTransfer
   * @param evt
   */
  private handleDrop(evt: DragEvent): void {
    evt.preventDefault();

    if (evt.dataTransfer && evt.dataTransfer.files && evt.dataTransfer.files.length) {
      if (document.caretRangeFromPoint) {
        const selection: Selection = document.getSelection();
        const range: Range = document.caretRangeFromPoint(evt.clientX, evt.clientY);

        if (selection && range) {
          selection.setBaseAndExtent(range.startContainer, range.startOffset, range.startContainer, range.startOffset);
        }
      }
      readFiles(evt.dataTransfer.files, this.method, (data) => {
        this.dropCallback(data).then(this.insert);
      });
    }
  }

  private insert(dataUrl: string): void {
    const index = (this.quill.getSelection() || {}).index || this.quill.getLength();
    this.quill.insertEmbed(index, 'image', dataUrl, 'user');
  }

  private handlePaste(evt: ClipboardEvent) {
    if (evt.clipboardData && evt.clipboardData.items && evt.clipboardData.items.length) {
      readFiles(evt.clipboardData.items, this.method, data => {
        // we wait until after the paste when this.quill.getSelection()
        // will return a valid index
        setTimeout(() => {
          this.quill.focus();
          this.pasteCallback(data).then(this.insert);
        }, 0);
      });
    }
  }
}

const fileType: RegExp = /^image\/(gif|jpe?g|a?png|svg|webp|bmp|vnd\.microsoft\.icon)/i;

function readFiles(files: FileList | DataTransferItemList, method: string, callback: (evt: any) => void) {
  [].forEach.call(files, (file: File | DataTransferItem) => {
    // just support image
    if (!file.type.match(fileType)) {
      return;
    }

    // setup file reader
    const reader = new FileReader();
    reader.onload = (evt) => {
      if (evt.target) {
        callback(evt.target.result);
      }
    };
    // read the clipboard item or file
    const blob = file instanceof DataTransferItem ? file.getAsFile() : file;

    if (blob instanceof Blob) {
      // @ts-ignore
      reader[method](blob);
    }
  });
}
