import React, { useEffect } from 'react';
import MapComponent from '../components/Map/Map';
import {SocketContext, socket} from "./../components/SocketIO/socket";
const Map = () => {
    /*
    useEffect(() => {
        socket.on('initialData', (data) => console.log(data));
    }, []);
    */
    return (
        <div style={{backgroundColor: "#c0c0c0"}}>
            <MapComponent />
        </div>
    );    
};

export default Map;