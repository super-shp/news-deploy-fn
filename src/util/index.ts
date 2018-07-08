import Vue from 'vue';

export const findParentComponent = (vm: Vue, parentName: string) => {
  const root = vm.$root;
  // @ts-ignore
  while ((vm._name !== `<${parentName}>`) && vm.$parent && (vm !== root)) {
    vm = vm.$parent;
  }
  // @ts-ignore
  if ((vm === root) && (vm._name !== parentName)) {
    throw Error(`not found ${parentName}`);
  } else {
    return vm;
  }
};

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

