import React, {FC} from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBModal,MDBModalBody, MDBModalHeader, MDBModalFooter, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
// import "./searchPage.scss";


// import Popup from 'react-popup';


import { connect } from 'react-redux';

 import { Store } from 'redux';
 import { createStore, applyMiddleware } from 'redux';
 import { ActionCreator, Dispatch } from 'redux';
import SearchArtist from "~/molecules/search-artist";
import SearchInput from "~/molecules/search-artist/input-search";
import FavouriteAlbum from "~/molecules/search-artist/Favourite-albums";




const imgStyle = {
    width: '50px',
    height: '50px'
}

const formStyle = {
    margin: '20px'
}
const tbodyScrollBarStyle = {
    height: '300px',
    overflow: 'auto',
    display: 'block'
}
const tableHeight = {
  height: '700px'
}


// Create the containers interface
/*interface IProps {
//  artists: IArtist[];
  fetchResults?: () => void
}*/
interface IProps {
    [x: string]: any;
    albums: []
}

const FavouritePage:  FC<any> = (props: IProps) => {

    return (

        <MDBContainer>
            <FavouriteAlbum />
        </MDBContainer>
    )



}

export default FavouritePage
