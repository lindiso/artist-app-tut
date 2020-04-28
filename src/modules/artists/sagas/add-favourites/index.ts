import { put, call, takeLatest } from 'redux-saga/effects';

import {
  SEARCH_ARTIST,
  findArtistSuccess,
  findArtistError,
  addAlbumToFavourites,
  ADD_ALBUM_TO_FAVOURITES
} from '~/modules/artists/actions';
import {getArtists} from "~/molecules/search-artist/helpers";
// import {IArtist} from "~/molecules/search-artist/interfaces";
import {IArtist} from "~/modules/artists/interfaces";

export function addFavourites() {
  console.info('saga for Add favourites called to execute.')

}


function* sagaWorker(type) {
  try {
    console.info('saga for Add favourites called to execute.')
    console.info('Saga search input value: ', type.favourites)
    //const artists: IArtist[] = yield call(getArtists, type.favourites);
    return yield put(addAlbumToFavourites(type.favourites));
  } catch (error) {
    return yield put(findArtistError());
  }
}

function* mySaga() {
  yield takeLatest([
    ADD_ALBUM_TO_FAVOURITES,
    // ADD OTHER ACTIONS IN HERE SO THIS RUNS WHEN THOSE ARE CALLED
  ], sagaWorker);
}

export default mySaga;
