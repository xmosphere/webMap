import React, { useEffect } from 'react';
import MapComponent from '../components/Map/Map';
import {SocketContext, socket} from "./../components/SocketIO/socket";

const Map = () => {
    var output;
    useEffect(() => {
        socket.on("initialData", output);
    })
    console.log(output)
    return (
        <div>
            <MapComponent />
        </div>
    );    
};

export default Map;