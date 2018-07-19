import { Delta } from 'quill';
import { convert } from '@/components/Editor';
import * as types from '@/pages/Publish/store/mutation-types';
import { ActionContext, ActionTree, MutationTree } from 'vuex';

export interface PublishState {
  title: string;
  draft: Delta;
}

export const publishState: PublishState = {
  title: '',
  draft: convert(''),
};

export const mutations: MutationTree<PublishState> = {
  [types.PUBLISH_TITLE_CHANGE](state: PublishState, payload: any) {
    state.title = payload.title;
  },
  [types.PUBLISH_SAVE_ARTICLE_CHANGE](state: PublishState, payload: any) {
    state.draft = payload.draft;
  },
  [types.PUBLISH_NEW_AERTICLE](state: PublishState, payload: any) {
    state.title = '';
    state.draft = convert('');
  },
};

export const actions: ActionTree<PublishState, any> = {
  updateTitle(context, title: string) {
    context.commit({
      type: types.PUBLISH_TITLE_CHANGE,
      title,
    });
  },
};
