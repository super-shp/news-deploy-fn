import { isString } from '@/util/type';

/**
 * return el found by querySelector
 * @param el
 */
export function query(el: string | Element): Element {
  if (typeof el === 'string') {
    const selected = document.querySelector(el);
    if (!selected) {
      return document.createElement('div');
    }

    return selected;
  } else {
    return el;
  }
}

export const isBase64 = (source: any) => {
  if (isString(source) && source.indexOf('data:image/jpg;base64,') > -1) {
    return true;
  } else {
    return false;
  }
};
