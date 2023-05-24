const {socketController} = require('./controller')

class Server {


    sockets() {
        this.io.on('connection', socket => {
            console.log('Cliente conectado', socket.id);

            socket.on('msg-cliente', (payload, callback) => {
                console.log(payload);

                callback('Mensaje recibido')

                payload.from = 'desde el server'
                this.io.emit('mensaje-server', payload)
            })

            socket.on('desconectado', () => {
                console.log('Cliente desconectado');
            })
        })
    }

}