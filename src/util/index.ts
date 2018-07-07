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
