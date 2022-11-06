const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const socketIO = require("socket.io");
const cors = require("cors");
const db = require("../models");


const PORT = process.env.PORT || 6786;

const app = express();
app.use(cors());

//for pase requests of content-type: application/json
app.use(bodyParser.json());

//for pase requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
    res.header("Access-Controll-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', "x-access-token, Origin, X-Requested-With, Content-Type, Accept")
    next();
});

db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database.");
    })
    .catch(err => {
        console.log("Cannot connect to the database.", err);
        process.exit();
    });
const server = http.createServer(app);

const IOServer = socketIO(server, {
    cors: {
        origin: "*"
    }
});
IOServer.on('connection', (socket) => {
    console.log('Client connected to server: ', socket.id)
    socket.emit('initialData', {data: []});
});
require("../routes/userMarker.routes.js")(app);
server.listen(PORT, '0.0.0.0', () => console.log('Server is running on port: '+PORT))