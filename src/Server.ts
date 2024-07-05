import express from 'express'
import { Application } from 'express'
import { RoutesApp } from './routes/RoutesApp'

interface ServerOptions {
    port: any
}

export class Server {
    private app: Application
    private opts: ServerOptions

    constructor(opts: ServerOptions){
        this.app = express()
        this.opts = opts
    }

    public start = async () => {
        this.app.use(express.json())
        this.app.use(RoutesApp.routes)
        this.app.listen(this.opts.port, () => {
            console.log(`Listening on port ${this.opts.port}`)
        })
    }
}