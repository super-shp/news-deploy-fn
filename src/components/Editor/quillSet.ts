import { default as Quill } from 'quill';
import { Image } from './blots';
import { ImageDropper } from './module';
import ImageResize from 'quill-image-resize-module';

Quill.register({
  'modules/imageDropper': ImageDropper,
  'modules/imageResize': ImageResize,

  'formats/image': Image,
});

export const options = {
  theme: 'snow',
  boundary: document.body,
  placeholder: '请输入文字...',
  readOnly: false,
  formats: [
    'bold',
    'italic',
    'link',
    'clean',
    'header',
    'strike',
    'list',
    'underline',
    'image',
    'code-block',
  ],
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
    syntax: true,
  },
};
