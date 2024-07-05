import { env } from 'process'
import { Server } from './Server'
import { envs } from './services/vars.service'

const main = async () => {

    const server = new Server({port: envs.PORT})
    server.start()
}

main()