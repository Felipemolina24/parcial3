const socketController = (socket, io) => {
    console.log('Cliente Conectado', socket.id);

    socket.on('desconectado', () => {
        console.log('Cliente desconectado', socket.id);
    })

    socket.on('mensaje-cliente', (payload, callback) => {
        callback('Tu mensaje fue recibido')

        payload.from = 'desde el server'
        socket.broadcast.emit('mensaje-server', payload)
    })
}

module.exports = {socketController}