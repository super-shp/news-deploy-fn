import { VueConstructor } from 'vue';
import { default as Buefy } from 'buefy';
import { default as VueHolder } from 'vue-holderjs';
import { Button } from './button';
import { Image } from './image';
import { Input } from './input';
import { Modal } from './modal';
import 'buefy/lib/buefy.css';
import './style.scss';

const { Icon, Dropdown, DropdownItem, Select, Field } = Buefy as any;

export const initUI = (Vue: VueConstructor) => {
  Vue.use(VueHolder);

  Vue.component('Icon', Icon);
  Vue.component('Button', Button);
  Vue.component('Dropdown', Dropdown);
  Vue.component('DropdownItem', DropdownItem);
  Vue.component('Input', Input);
  Vue.component('iImage', Image);
  Vue.component('Modal', Modal);
  Vue.component('Select', Select);
  Vue.component('Field', Field);
};
