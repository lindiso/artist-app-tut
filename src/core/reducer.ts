import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from '~/core/history';

import { IClickerState } from '~/modules/clicker/interfaces';
import { IPostsState } from '~/modules/posts/interfaces';
import { IArtistState } from '~/modules/artists/interfaces';

import { moduleReducers } from '~/modules';

export interface IApplicationState {
  clicker: IClickerState;
  posts: IPostsState;
  artists: IArtistState;
}

const reducers = {
  ...moduleReducers,
  router: connectRouter(history),
};

const appReducer = combineReducers(reducers);

export default appReducer;


