import { default as Quill, Delta } from 'quill';

const DeltaKlass = Quill.import('delta');

const div: Element = document.createElement('div');
document.body.appendChild(div);

(div as HTMLElement).style.display = 'none';

const converter: Quill = new Quill(div, {});

export const convert = (value: string | Delta): Delta => {
  typeof value === 'string' ? converter.pasteHTML(value) : converter.setContents(value);
  const delta: Delta = converter.getContents();
  converter.setContents(new DeltaKlass());

  return delta;
};
