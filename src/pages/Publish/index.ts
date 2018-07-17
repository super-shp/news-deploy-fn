import { store } from '@/store';
import { store as Publishx, PublishState } from './store';

store.registerModule<PublishState>(['Publish'], Publishx);

export { default as Publish } from './Publish.vue';
