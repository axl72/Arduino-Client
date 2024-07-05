import { Response, Request } from "express"

export class DataController {
    getDataFromArduino = ( req: Request, res: Response ) => {
        const data =  {
           data1: Math.random() * 300,
           data2: Math.random() * 100,
           data3: Math.random() * Math.PI
        }

        res.status(200).json(data)
    }
}