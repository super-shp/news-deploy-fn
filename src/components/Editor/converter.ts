import { default as Quill, Delta } from 'quill';
import { query } from '@/util';

const converter: Quill = new Quill(query('null'));

export const convert = (value: string | Delta): Delta => {
  typeof value === 'string' ? converter.pasteHTML(value) : converter.setContents(value);

  return converter.getContents();
};
