import React from "react";
import socketIOClient from "socket.io-client"

const ENDPOINT = "http//localhost:7777"

export const socket = socketIOClient(ENDPOINT);
export const SocketContext = React.createContext();
