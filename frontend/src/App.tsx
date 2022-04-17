import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import 'bootstrap/dist/css/bootstrap.min.css'

//const mapStyles = {
 // width: '30%',
  //height: '30%'
//};

export class MapContainer extends Component {
  render() {
    return (
      <div class="container-sm">
      <Map
        google={this.props.google}
        zoom={14}
        //style={mapStyles}
        initialCenter={
          {
            lat: 38.5382364,
            lng: -121.7639012
          }
        }
      />
      </div>

    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCdO_herTm3v35fF-I8zbrxyUALb287WiI'
})(MapContainer);