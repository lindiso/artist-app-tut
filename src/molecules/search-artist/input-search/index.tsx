import React, {Component, FC} from 'react';
import { isEmpty } from 'lodash';
import { IArtist } from '../interfaces';
// import { PostWrapper } from './style';
import { connect } from 'react-redux';
import {mapStateToProps, mapDispatchToProps, mapAddFavouritesToProps} from '../container';
import { Loader } from '~/atoms';
import {MDBContainer, MDBTable, MDBTableBody, MDBTableHead} from "mdbreact";
import SearchArtist from "~/molecules/search-artist";
import FavouriteAlbum from "~/molecules/search-artist/Favourite-albums";

interface IComponentProps {
  [x: string]: any;
}

interface IContainerProps {
  isLoading?: boolean;
  artist?: IArtist[];
  addToFavourites?: (favourites) => void;
  searchArtist?: (search) => void;
  favourites?: string;
}

interface IArtistState {
  [x: string]: any;
}

type IProps = IComponentProps & IContainerProps;

const SearchInput: FC<any> = (props: IProps) => {
let search : string = '';

 const handleSearchChange = (e: any) => {
    console.info('Search value changed : '+ e.target.value);
    search = e.target.value;
  }

  const handleSubmit = () => {
    const { searchArtist, addToFavourites,searchInput, artists,favourites } = props;
    console.info('Props search input : ', searchInput);
    console.info('search value : ', search);
    props.searchArtist(search)
    let result = props.addToFavourites('Cher');
      console.info('ADD ALBUMS DONE : ', result);

      console.info('ALL PROPS :', props);
      console.info('Favourites from props :', favourites);


      // searchArtist(search);
    console.info('props data: ', artists);

  };

    return (

      <MDBContainer>
          <div className="input-wrapper"><input className="custom-input mr-sm-2" type="text" placeholder="Search Artist" aria-label="Search" onChange={handleSearchChange}  />
            <button className="btn blue-gradient btn-rounded btn-sm my-0 button-wrapper" type="submit" onClick={handleSubmit}>Search</button></div>

              <SearchArtist artists={props.artists} />

      </MDBContainer>
    );
 }

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
