import { all } from 'redux-saga/effects';
import postSagas from '~/modules/posts/sagas';
import artistSagas from '~/modules/artists/sagas'

function* rootSaga() {
  yield all([
    ...postSagas,
      ...artistSagas,
  ]);
}

export default rootSaga;
