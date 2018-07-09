import { default as Quill } from 'quill';

const Embed = Quill.import('blots/embed');

const ATTRIBUTES = ['alt', 'height', 'width'];

const PLACE_HOLDER = {
  UPLOADING: 'http://placehold.it/300x200/dddddd.jpg/ffffff?text=Picture+uploading',
};

export class Image extends Embed {
  public static blotName = 'image';
  public static tagName = 'IMG';

  public static create(value: any) {
    const node = super.create(value);
    if (typeof value === 'string') {
      node.setAttribute('src', PLACE_HOLDER.UPLOADING);
    }
    return node;
  }

  public static formats(domNode: Element) {
    return ATTRIBUTES.reduce((formats, attribute) => {
      if (domNode.hasAttribute(attribute)) {
        // @ts-ignore
        formats[attribute] = domNode.getAttribute(attribute);
      }
      return formats;
    }, {});
  }

  public static match(url: string): boolean {
    return /\.(jpe?g|gif|png)$/.test(url) || /^data:image\/.+;base64/.test(url);
  }

  public static register() {
    if (/Firefox/i.test(navigator.userAgent)) {
      setTimeout(() => {
        // Disable image resizing in Firefox
        document.execCommand('enableObjectResizing', false, false);
      }, 1);
    }
  }

  public static sanitize(url: string) {
    return sanitize(url, ['http', 'https', 'data']) ? url : '//:0';
  }

  public static value(domNode: Element): string | null {
    return domNode.getAttribute('src');
  }

  constructor(node: any, data: any) {
    super(node);
  }

  public format(name: string, value: string) {
    if (ATTRIBUTES.indexOf(name) > -1) {
      if (value) {
        // @ts-ignore
        this.domNode.setAttribute(name, value);
      } else {
        // @ts-ignore
        this.domNode.removeAttribute(name);
      }
    } else {
      super.format(name, value);
    }
  }
}
Image.blotName = 'image';
Image.tagName = 'IMG';

function sanitize(url: string, protocols: string[]): boolean {
  const anchor = document.createElement('a');
  anchor.href = url;
  const protocol = anchor.href.slice(0, anchor.href.indexOf(':'));
  return protocols.indexOf(protocol) > -1;
}

export default Image;
