import { default as Quill, Delta } from 'quill';

const DeltaKlass = Quill.import('delta');

let convertor: Quill | null = null;

const wrapper = document.querySelector('.convertor-wrapper');
const div: Element = wrapper ? wrapper : ((): HTMLElement => {
  const convertorWrapper: Element = document.createElement('div');
  document.body.appendChild(convertorWrapper);
  (convertorWrapper as HTMLElement).style.display = 'none';
  convertorWrapper.classList.add('convertor-wrapper');
  return convertorWrapper as HTMLElement;
})();


export const convert = (value: string | Delta): Delta => {
  if (convertor) {
    typeof value === 'string' ? convertor.pasteHTML(value) : convertor.setContents(value);
    const delta: Delta = convertor.getContents();
    convertor.setContents(new DeltaKlass());

    return delta;
  } else {
    return new DeltaKlass();
  }
};

export const getConvertor = (): Quill | null => convertor;

export const createConvertor = (): Quill => {
  if (!convertor) {
    convertor = new Quill(div, {});
  }
  return convertor;
};

export const destroyConvertor = () => {
  /**
   * &#138
   * 1.remove domNode from its parents & remenber clear classlist
   * 2. Remove the editor from the Quill.editors array.
   * 3. Clear the editor update tick: clearInterval(quill.editor.timer)
   * 4. remove converter pointer
   */
};