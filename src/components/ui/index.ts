import { VueConstructor } from 'vue';
import { default as Buefy } from 'buefy';
import { default as VueHolder } from 'vue-holderjs';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { Input } from '@/components/ui/input';
import { Modal } from '@/components/ui/modal';
import 'buefy/lib/buefy.css';
import './style.scss';

const {
  Icon,
  Dropdown,
  DropdownItem,
  Select,
  Field,
  Tag,
  Taginput,
} = Buefy as any;

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
  Vue.component('TagInput', Taginput);

  Vue.component('Tag', Tag);
  // alias
  Vue.component(Tag.name, Tag);
};
