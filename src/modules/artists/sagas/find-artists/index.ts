import { put, call, takeLatest } from 'redux-saga/effects';

import {SEARCH_ARTIST, findArtistSuccess, findArtistError} from '~/modules/artists/actions';
import {getArtists} from "~/molecules/search-artist/helpers";
// import {IArtist} from "~/molecules/search-artist/interfaces";
import {IArtist} from "~/modules/artists/interfaces";

function* sagaWorker(type) {
  try {
    console.info('Saga called to execute.')
    console.info('Saga search input value: ', type.search)
    const artists: IArtist[] = yield call(getArtists, type.search);
    console.info('saga data : ', artists);
    return yield put(findArtistSuccess(artists));
  } catch (error) {
    return yield put(findArtistError());
  }
}

function* mySaga() {
  yield takeLatest([
    SEARCH_ARTIST,
    // ADD OTHER ACTIONS IN HERE SO THIS RUNS WHEN THOSE ARE CALLED
  ], sagaWorker);
}

export default mySaga;
