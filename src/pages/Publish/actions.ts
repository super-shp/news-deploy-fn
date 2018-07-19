import { api } from '@/api';
import { Delta } from 'quill';

export const URL = {
  PUBLISH: '/article/post-article',
};

export const publish = async (op: {
  title: string;
  cid: string;
  cover: string;
  content: Delta;
}) => {
  const { title, cid, cover, content } = op;
  const words = content.length();
  let intro: string = '';

  content.forEach(line => {
    const insert = line.insert;
    if (typeof insert === 'string') {
      const len =
        intro.length + insert.length >= 100
          ? intro.length >= 100
            ? 0
            : 100 - intro.length
          : insert.length;

      intro = intro.concat(insert.slice(len));
    }
  });

  return api.post(URL.PUBLISH, {
    title,
    cid,
    cover,
    content,
    intro,
    words,
  });
};
