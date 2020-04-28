import {ADD_ALBUM_TO_FAVOURITES, SEARCH_ARTIST, SEARCH_ARTIST_SUCCESS} from '../actions';
import {IArtist, IArtistState} from '../interfaces';

const initialArtistState: IArtistState = {
  payload: [],
  isLoading: false,
}

const postsReducer = (artistState: IArtistState = initialArtistState, action: any) => {
  const { type, newData } = action;
  console.info('Reducer data: ', newData);
  console.info('Reducer data Type: ', type);

  switch (type) {

    case SEARCH_ARTIST:
      return {
        ...artistState,
        isLoading: true,
        payload: [],
      };
    case SEARCH_ARTIST_SUCCESS:
      return {
        ...artistState,
        isLoading: false,
        payload: newData,
      };
    case ADD_ALBUM_TO_FAVOURITES:
      return {
        ...artistState,
        isLoading: true,
        payload: newData,
      };
    default:
      return artistState;
  }
};

export default postsReducer;
