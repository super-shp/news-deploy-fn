import { VueConstructor } from 'vue';
import { default as Buefy } from 'buefy';
import { Button } from './button';
import 'buefy/lib/buefy.css';
import './style.scss';

const {
  Icon,
  Dropdown,
  DropdownItem,
  Input,
} = Buefy as any;

export const initUI = (Vue: VueConstructor) => {
  Vue.component('Icon', Icon);
  Vue.component('Button', Button);
  Vue.component('Dropdown', Dropdown);
  Vue.component('DropdownItem', DropdownItem);
  Vue.component('Input', Input);
};
