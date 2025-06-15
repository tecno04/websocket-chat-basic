const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const path = require("path")
const Sockets = require('./socket')


class Server {

    constructor(){

        this.app = express()
        this.port = process.env.PORT

        //HTTP Server
        this.Server = http.createServer(this.app)

        //Config. Socket
        this.io = socketio(this.Server) 
    }

    middlewares(){
        this.app.use(express.static(path.resolve(__dirname, '../public')))
    }

    configSockets(){
        new Sockets(this.io)
    }

    execute(){
        //init middleware
        this.middlewares()

        this.configSockets()

        //init server
        this.Server.listen(this.port, () => {
            console.log(`Escuchando en el puerto ${this.port}`)
        })
    }

}

module.exports = Server