import React, { Component } from 'react';

import {withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

import './map.css'

class Map extends Component {
// {markers.map((marker, index)=> <Marker {...marker}/>)}
    render () {

        const markers = this.props.markers || [];

        return (
            <GoogleMap
                defaultZoom={this.props.zoom}
                defaultCenter={this.props.center}>
                {<Marker position={{ lat: -34.397, lng: 150.644 }} />}
            </GoogleMap>
        )
    }
}


export default  withScriptjs(withGoogleMap(Map));

