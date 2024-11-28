import { Response } from "express";

export class Controller {

    public async errorHandler(res: Response, error: any) {
        console.error('ERROR', error);
        res.status(500);
        return res.json({ message: error.message });
    }


    public async responseHandler(res: Response, data: any) {
        console.log('RESPONSE', JSON.stringify(data));
        return res.json(data);
    }    

}