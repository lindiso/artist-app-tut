import React, {Component, FC} from 'react';
import { isEmpty } from 'lodash';
import { IArtist } from '../interfaces';
import { connect } from 'react-redux';
import {
    mapStateToProps,
    mapDispatchToProps,
    mapAddFavouritesToProps,
} from '../container';
import {MDBContainer, MDBTable, MDBTableBody, MDBTableHead} from "mdbreact";

interface IComponentProps {
  [x: string]: any;
}

interface IContainerProps {
  isLoading?: boolean;
  artist?: IArtist[];
  addToFavourites?: (favourites) => any;
  getAllFavouritesAlbums?: () => void;
  searchArtist?: (search) => void;
}

interface IArtistState {
  [x: string]: any;
}

const tableHeight = {
    height: '700px'
}

type IProps = IComponentProps & IContainerProps;

class FavouriteAlbum extends Component<IProps, IArtistState> {

componentDidMount() {
   console.info('Favourites albums Did Mount triggered...');
   this.props.getAllFavouritesAlbums();
}
render() {
        const {favourites} = this.props;
        this.props.getAllFavouritesAlbums()
        console.info('Favourites albums: ', favourites);

        if (!isEmpty(favourites)) {

            return (
                <MDBContainer>

                    <MDBTable scrollY style={tableHeight} className="my-custom-scrollbar">
                        <MDBTableHead>
                            <tr>
                                <th>#</th>
                                <th>Artist Name</th>
                                <th>Album Name</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            {this.props.favourites.favourites.map((favourite, key) => (
                                <tr key={key}>
                                    <th scope="row">{key}</th>
                                    <td>{favourite.artist}</td>
                                    <td>{favourite.name}</td>

                                </tr>
                            ))}
                        </MDBTableBody>
                    </MDBTable>
                </MDBContainer>

            );

        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteAlbum);
