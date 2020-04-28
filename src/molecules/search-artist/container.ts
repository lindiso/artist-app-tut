import { getLoading } from '~/modules/posts/selectors';
import {findArtist, addAlbumToFavourites, getAllFavouriteAlbums} from '~/modules/artists/actions';
import { IApplicationState } from '~/core/reducer';
import {getArtists} from "~/modules/artists/selectors";

export const mapStateToProps = (state: IApplicationState) => {
  console.info('State : ', state )
  const artists = getArtists(state);
  const isLoading = getLoading(state);
  return {
    artists,
    isLoading,
  };
};

export const mapDispatchToProps = dispatch => ({
  searchArtist(search) {
    if(search != undefined){
      dispatch(findArtist(search));
    }
  },
  addToFavourites(favourites){
   let result =  dispatch(addAlbumToFavourites(favourites));
   if (result != undefined){
     dispatch(getAllFavouriteAlbums())
   }
  },
});

export const mapAddFavouritesToProps = dispatch => ({
  addToFavourites(favourites){
    dispatch(addAlbumToFavourites(favourites));
  },
  getAllFavouritesAlbums(){
    dispatch(getAllFavouriteAlbums());
  },
});

export const mapDispatchGetAllFavouritesToProps = dispatch => ({
  getAllFavouritesAlbums(){
    dispatch(getAllFavouriteAlbums());
  },
});


/*export const  mapSearchArtistToProps =  dispatch => ({
  searchArtist(){
    dispatch(findArtist())
  }
})*/
