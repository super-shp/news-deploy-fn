import { Delta } from 'quill';
import { convert } from '@/components/Editor';

export interface PublishState {
  title: string;
  draft: Delta;
}

export const state: PublishState = {
  title: '',
  draft: convert(''),
};

export const mutations = {};

export const actions = {};
