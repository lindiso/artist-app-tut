import {FETCH_POSTS_ERROR} from "~/modules/posts/actions";

export const SEARCH_ARTIST = 'artists/SEARCH_ARTIST';
export const SEARCH_ARTIST_SUCCESS = 'artists/SEARCH_ARTIST_SUCCESS';
export const SEARCH_ARTIST_ERROR = 'artists/SEARCH_ARTIST_ERROR';
export const ADD_ALBUM_TO_FAVOURITES = 'artists/ADD_ALBUM_TO_FAVOURITES';
export const GET_ALL_FAVOURITES_ALBUMS = 'artists/GET_ALL_FAVOURITES_ALBUMS';

export const findArtist = (search) => {
    console.info('Action param value: '+ search);
   return {
     type: SEARCH_ARTIST, search,
   };
};
export const addAlbumToFavourites = (favourites) => {
    console.info('Add To Favourites action triggered.');
    return {
        type: ADD_ALBUM_TO_FAVOURITES, favourites,
    };
};
export const getAllFavouriteAlbums = () => {
    console.info('Get all Favourite albums action triggered.');
    return {
        type: GET_ALL_FAVOURITES_ALBUMS,
    }

}
export const findArtistSuccess = (data) => {
    console.info('Action response data: ', data.results.artistmatches);
    //let newData = data.results.artistmatches;
    let newData = JSON.parse(JSON.stringify(data.results.artistmatches).split('"#text":').join('"text":'));

    return {
    type: SEARCH_ARTIST_SUCCESS, newData
  };
};
export const findArtistError = () => {
    return {
        type: SEARCH_ARTIST_ERROR,
    };
};


