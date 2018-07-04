import { default as Vue } from 'vue';
import { Button } from './button';
import './style.scss';

export const initUI = () => {
  Vue.component('Button', Button);
};
