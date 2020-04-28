import { put, call, takeLatest } from 'redux-saga/effects';
import { getPosts } from '~/molecules/post-lister/helpers';

import { FETCH_POSTS_START, fetchPostsSuccess, fetchPostsError } from '~/modules/posts/actions';
import { IPost } from '~/modules/posts/interfaces';

function* sagaWorker() {
  try {
    console.info('Post saga call.')
    const posts: IPost[] = yield call(getPosts);
    return yield put(fetchPostsSuccess(posts));
  } catch (error) {
    return yield put(fetchPostsError());
  }
}

function* mySaga() {
  yield takeLatest([
    FETCH_POSTS_START,
    // ADD OTHER ACTIONS IN HERE SO THIS RUNS WHEN THOSE ARE CALLED
  ], sagaWorker);
}

export default mySaga;
