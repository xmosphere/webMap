import  React, { useState, useEffect, useRef } from "react";
import 
    {
    MapContainer,
    TileLayer,
    LayersControl,
    Marker,
    Polygon,
    Popup,
    LayerGroup,
    useMap,
    GeoJSON
    } from "react-leaflet"
import L from 'leaflet';
//import 'leaflet-routing-machine'
//import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import 'leaflet/dist/leaflet.css';
import { render } from "react-dom";
import ReturnUserMarker from "../CRUD/return.userMarker.component";

//const { render } = require("@testing-library/react")

function MyMapHook() {
    const map = useMap()
    console.log('map center: ', map.getCenter())
    return null
}

class MapComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            latitude: 17.5,
            longitude: 80.5,
            zoom: 5
        }
    }
    Map = () => {
        const [map, setMap] = useState(null);
        
        //Variables for 
        const [routingMachine, setRoutingMachine] = useState(null)

    }
    render() {
    return (
        <div>
            <MapContainer className="map" style={{ height: "90vh", width: "100vw" }}
                center={[17.5, 80.5]} zoom={5} >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </MapContainer>
        </div>
    );
}
}
export default MapComponent;