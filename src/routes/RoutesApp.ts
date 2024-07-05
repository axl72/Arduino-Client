import { Router } from "express";
import { DataRoutes } from "./data.routes";

export class RoutesApp {
    static get routes(): Router {
        const router = Router();
        router.use('/api/data', DataRoutes.routes)
        return router
    }
}