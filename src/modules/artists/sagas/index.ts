import findArtists from './find-artists';
import {addFavourites} from './add-favourites';
import {getAllFavouriteAlbums} from './get-favourites';

export default [
  addFavourites(),
  findArtists(),
  getAllFavouriteAlbums()
];
