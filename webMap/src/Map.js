import {React, useState} from "react";
import 
    {
    MapContainer,
    TileLayer,
    Marker,
    Polygon,
    Popup,
    LayerGroup,
    useMapEvents
    } from "react-leaflet"


const { render } = require("@testing-library/react")

class MapComponent extends React.Component () {
    render () {
        const position = [51.505, -0.09];
        return (
        <MapContainer center={position}
            zoom={10}
            scrollWheelZoom={true}
            style={{width: '100vw', height: '100vh'}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
}
}

export default MapComponent;