import { Delta } from 'quill';
import { convert } from '@/components/Editor';
import * as types from './mutation-types';

export interface PublishState {
  title: string;
  draft: Delta;
}

export const publishState: PublishState = {
  title: '',
  draft: convert(''),
};

export const mutations = {
  [types.PUBLISH_TITLE_CHANGE](state: PublishState, payload: any) {
    state.title = payload.title;
  },
  [types.PUBLISH_SAVE_ARTICLE_CHANGE](state: PublishState, payload: any) {
    state.draft = payload.draft;
  },
};

export const actions = {};
