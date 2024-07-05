import { Router } from "express"
import { DataController } from "../controllers/data.controller"

export class DataRoutes {
    static get routes () {
        const router = Router()
        const controller = new DataController()
        router.get('/', controller.getDataFromArduino)
        return router;
    }
}