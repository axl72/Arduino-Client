import { Response, Request } from "express"

export class DataController {
    getDataFromArduino = ( req: Request, res: Response ) => {
        function getRandomNumber() {
            return Math.floor(Math.random() * enterprises.length);
        }

        const enterprises = [
            'AUSTRAL GROUP S.A.A',
            'ANDINA DE DESARROLLO ANDESA S.A.C.',
            'ANDINA DE DESARROLLO ANDESA S.A.C.',
            'INDUSTRIA PESQUERA SANTA MONICA S.A.',
            'DEXIM S.R.L',
            'PESQUERA CANTABRIA S.A',

        ]
        const number = Number(Math.random() * 1000 ).toFixed(2)
        const data =  {
           enterprise: enterprises[getRandomNumber()],
           kilograms: number,
           fishingArea: 'PACIFIC OCEAN'
        }

        res.status(200).json(data)
    }
}