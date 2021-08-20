module.exports = io => {
    io.on('connection', (socket) => {
        console.log('socket conecting');

        socket.on('userCoordinates', coords => {
            //Se puede almacenar con una funcion las coord de los usuarios que se conectan.
            socket.broadcast.emit('newUserCoordinates', coords); //envia las coord a todos los usuarios
        });
    });
}