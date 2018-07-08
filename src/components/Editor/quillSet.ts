import { default as Quill } from 'quill';
import { ImageDropper } from './module';
import ImageResize from 'quill-image-resize-module';

Quill.register('modules/imageDropper', ImageDropper);
Quill.register('modules/imageResize', ImageResize);


export const options = {
  theme: 'snow',
  boundary: document.body,
  placeholder: 'Insert text here ...',
  readOnly: false,
  modules: {
    toolbar: [
      [{ header: 1 }, { header: 2 }],
      [],
      ['bold', 'italic', 'underline', 'strike'],
      [],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [],
      ['link', 'image', 'code-block'],
      [],
      ['clean'],
    ],
    history: {
      delay: 1000,
      maxStack: 20,
      userOnly: false,
    },
    imageDropper: {
      method: 'readAsDataURL',
      dropCallback: (data: string) => Promise.resolve(data),
      pasteCallback: (data: string) => Promise.resolve(data),
    },
    imageResize: {
      displayStyles: {
        backgroundColor: 'black',
        border: 'none',
        color: 'white',
      },
      modules: ['Resize', 'DisplaySize', 'Toolbar'],
    },
  },
};


