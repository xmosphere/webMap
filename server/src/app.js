const express = require("express");
const http = require("http");
const socketIO = require("socket.io");


const PORT = 7777;

const app = express();

const server = http.createServer(app);
const IOServer = socketIO(server, {
    cors: {
        origin: "*",
        credentials: true,
    },

});

IOServer.on('connection', (socket) => {
    socket.emit('initialData', {data: []});
});

server.listen(PORT, () => console.log('Server is running on port: '+PORT))