import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import { connect } from 'react-redux';
import {mapStateToProps, mapDispatchToProps, mapAddFavouritesToProps} from './container';
import { Loader } from '~/atoms';
import {MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBTable, MDBTableBody, MDBTableHead} from "mdbreact";
import './index.css';
import {IArtist} from "~/molecules/search-artist/interfaces";

interface IComponentProps {
  [x: string]: any;
}

interface IContainersProps {
  addToFavourites?: (favourites) => any;
  favourites?: any;
}


interface IArtistState {
  [x: string]: any;
}

const imgStyle = {
  width: '50px',
  height: '50px'
}
const tableHeight = {
  height: '700px'
}

type IProps = IComponentProps & IContainersProps;

class SearchArtist extends Component<IProps, IArtistState> {

  state = {
    modal: false,
    name: '',
    albums:[{name:'', artist:''}],
    searchValue: '',

  }

  constructor(props: IProps) {
    super(props);
    this.renderArtist = this.renderArtist.bind(this);
  }

  getAlbumList = (artistName: string) => {
    fetch('http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist='+ artistName +'&api_key=81044b53926041ace83a0634eed4369b&format=json')
        .then(res => res.json())
        .then((data) => {
          this.setState({
            modal: !this.state.modal,
            name: artistName,
            albums: data.topalbums.album
          });
        })
        .catch(console.log)
  }


  handleAddToFavourites = (e) => {
    console.info('Person added to Favourites: ' + e );

    let favourites = {
       artist: this.state.name,
       album: e
    }
    console.info('Props: ', this.props);
    this.props.addToFavourites(favourites);

  };


  handleGetAlbums = (e: string, image_link: string) => {
    console.info('Person clicked: ' + e );
    console.info('image link : ' + image_link);

    this.setState({
      modal: !this.state.modal,
      name: e,
      searchValue: this.state.searchValue
    })

  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
      searchValue: this.state.searchValue

    });
  };


  renderArtist() {
    const { artists, isLoading,favourites } = this.props;
     console.info('Artists from props: ', artists);


    if (!isEmpty(artists)) {
      console.info('Artists from props after If: ', artists);

      return (
          <MDBTable scrollY style={tableHeight}  className="my-custom-scrollbar">
            <MDBTableHead>
              <tr>
                <th>#</th>
                <th>Artist Image</th>
                <th>Artist Name</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {this.props.artists.artist.map((artist, key ) => (
                  <tr key={key}>
                    <th scope="row">{key}</th>
                    <td><img src={artist.image[0].text} className="img-fluid z-depth-1" alt="Artist img" style={imgStyle}></img></td>
                    <td>{artist.name}</td>
                    <td>
                      <button type="button" onClick={e => this.getAlbumList(artist.name)} className="btn btn-teal btn-rounded btn-sm m-0">Get Albums</button>
                    </td>
                  </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        );
    }
   /* return (
        <Loader/>
    );*/
  }

  renderPopUp(){
    // @ts-ignore
    return (
        <MDBContainer>
          <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
            <MDBModalHeader toggle={this.toggle}>{this.state.name} Album list</MDBModalHeader>
            <MDBModalBody>
              <h1>{this.state.name} </h1>
              <MDBTable scrollY>
                <MDBTableHead>
                  <tr>
                    <th>#</th>
                    <th>Album Name</th>
                    <th>Artist Name</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  {this.state.albums.map((album, key ) => (
                      <tr key={key}>
                        <th scope="row">{key}</th>
                        <td>{album.name}</td>
                        <td>{this.state.name}</td>
                        <td>
                          <button type="button" onClick={e => this.handleAddToFavourites(album.name)} className="btn btn-teal btn-rounded btn-sm m-0">Add to Favourites</button>
                        </td>
                      </tr>
                  ))}
                </MDBTableBody>
              </MDBTable>
            </MDBModalBody>

          </MDBModal>
        </MDBContainer>
    )
  }

  render () {
   /* const {createStore} = store ;
    store.subscribe({

    })*/
    const {favourites} = this.props;
    console.info('Render :', this.props.artists)
    console.info('favourites props outside: ', favourites);
    console.info('Otherwise all props outside: ', this.props);
    return (
        <MDBContainer>
          <div>
            {this.renderPopUp()}
          </div>
        <div>
          {this.renderArtist()}
        </div>
        </MDBContainer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchArtist);
