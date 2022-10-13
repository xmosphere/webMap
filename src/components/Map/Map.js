import  React from "react";
import 
    {
    MapContainer,
    TileLayer,
    Marker,
    Polygon,
    Popup,
    LayerGroup,
    useMap,
    GeoJSON,
    LayerGroup
    } from "react-leaflet"
    
import 'leaflet/dist/leaflet.css';

//const { render } = require("@testing-library/react")
class MapComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            latitude: 17.5,
            longitude: 80.5,
            zoom: 5
        }
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
            Co
        </div>
    );
}
}
export default MapComponent;