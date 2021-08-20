const express = require('express');
const engine = require('ejs-mate');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http'); 

// Initializations
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

//Setting Server
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//routes
app.use(require('./routes/'));

//socket
require('./sockets')(io);

//static Files
app.use(express.static(path.join(__dirname, 'public')));

//Starting the server
server.listen(3000, () =>{
    console.log('Server on port 3000')
});