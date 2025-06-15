class Sockets {

    constructor(io) {
        this.io = io
        this.socket_events()
    }

    socket_events() {

        this.io.on('connection', (socket) => {

            console.log(`Cliente Conectado, ID : ${socket.id}`)

            socket.on('mensaje-to-server', (data) => {
                console.log(data)
                this.io.emit('mensaje-from-server', data)
                //con "io" se le envia a todo los conectados (one-to-all)
                //con "socket" solo al cliente que se conecto (one-to-one)
            })

        })
    }

}

module.exports = Sockets