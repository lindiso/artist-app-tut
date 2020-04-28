import React, {FC} from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBModal,MDBModalBody, MDBModalHeader, MDBModalFooter, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./searchPage.scss";


// import Popup from 'react-popup';


import { connect } from 'react-redux';

 import { Store } from 'redux';
 import { createStore, applyMiddleware } from 'redux';
 import { ActionCreator, Dispatch } from 'redux';
import SearchArtist from "~/molecules/search-artist";
import SearchInput from "~/molecules/search-artist/input-search";




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

const Search:  FC<any> = (props: IProps) => {
//store.dispatch(searchArtist());

    return (
          <MDBContainer>
           {/*<MDBContainer>
              <MDBModal isOpen={props.state} toggle={props.toggle}>
                <MDBModalHeader toggle={props.toggle}>{props.state} Album list</MDBModalHeader>
                <MDBModalBody>
                <h1>{props.state} </h1>
                      <MDBTable scrollY>
                        <MDBTableHead>
                          <tr>
                            <th>#</th>
                            <th>Album Name</th>
                            <th>Artist Name</th>
                          </tr>
                         </MDBTableHead>
                         <MDBTableBody>
                             {props.albums.map((album, key ) => (
                             <tr key={key}>
                               <th scope="row">{key}</th>
                                   <td>{album.name}</td>
                                   <td>{album.artist}</td>
                                   <td>
                                       <button type="button" onClick={e => this.handleAddToFavourites(album)} className="btn btn-teal btn-rounded btn-sm m-0">Add to Favourites</button>
                                   </td>
                             </tr>
                            ))}
                         </MDBTableBody>
                      </MDBTable>
                </MDBModalBody>

              </MDBModal>
           </MDBContainer>
*/}

      <MDBContainer>
          <SearchInput />

          {/*  <div className="input-wrapper"><input className="custom-input mr-sm-2" type="text" placeholder="Search" aria-label="Search"  />
              <button className="btn blue-gradient btn-rounded btn-sm my-0 button-wrapper" type="submit">Search</button></div>*/}

            {/* <MDBTable scrollY style={tableHeight}>
                 <MDBTableHead>
                   <tr>
                     <th>#</th>
                     <th>Artist Image</th>
                     <th>Artist Name</th>
                   </tr>
                 </MDBTableHead>
                 <MDBTableBody>
                    <SearchArtist />
                 </MDBTableBody>
               </MDBTable>*/}
         </MDBContainer>
          </MDBContainer>);



}

export default Search
