import { put, call, take, takeLatest } from 'redux-saga/effects';

import {SEARCH_ARTIST, findArtistSuccess, findArtistError, GET_ALL_FAVOURITES_ALBUMS} from '~/modules/artists/actions';

export function getAllFavouriteAlbums() {
  function* sagaWorker(type) {
    try {
      console.info('saga to get All albums triggered... ');
      const {favourites}  = yield take(GET_ALL_FAVOURITES_ALBUMS);
      console.info('Fav on saga on get : ', favourites);
     /* return yield put({
        type: GET_ALL_FAVOURITES_ALBUMS
      });*/
    } catch (error) {
      return yield put(findArtistError());
    }
  }

  function* mySaga() {
    yield takeLatest([
      GET_ALL_FAVOURITES_ALBUMS,
      // ADD OTHER ACTIONS IN HERE SO THIS RUNS WHEN THOSE ARE CALLED
    ], sagaWorker);
  }
}

// export default mySaga;
