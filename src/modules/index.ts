import clickerReducer from './clicker/reducer';
import postsReducer from '~/modules/posts/reducer';
import artistReducer from '~/modules/artists/reducer';

export const moduleReducers = {
  clicker: clickerReducer,
  posts: postsReducer,
  artists: artistReducer,
};
