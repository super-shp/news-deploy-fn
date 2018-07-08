import { default as Quill, Delta } from 'quill';
import { query } from '@/util';

const div: Element = document.createElement('div');
document.body.appendChild(div);

(div as HTMLElement).style.display = 'none';

const converter: Quill = new Quill(div, {});

export const convert = (value: string | Delta): Delta => {
  typeof value === 'string' ? converter.pasteHTML(value) : converter.setContents(value);

  return converter.getContents();
};
