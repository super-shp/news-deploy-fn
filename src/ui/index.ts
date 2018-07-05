import { default as Vue } from 'vue';
import { Button } from './button';
import { default as Buefy } from 'buefy';
import 'buefy/lib/buefy.css';

const { Icon } = Buefy as any;

export const initUI = () => {
  Vue.component('Icon', Icon);
  Vue.component('Button', Button);
};
