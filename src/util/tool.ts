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
