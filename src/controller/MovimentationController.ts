import { Request, Response } from "express";
import { movimentationService } from "../service/MovimentationService";
import { Controller } from "./Controller";

class MovimentationController extends Controller {
    
    public async list(req: Request, res: Response) {
        try {
            const movimentations = await movimentationService.list();
            return await super.responseHandler(res, movimentations);
        } catch (error) {
            return await super.errorHandler(res, error);
        }
    }
    
    public async post(req: Request, res: Response) {
        try {
            const result = await movimentationService.create(req.body);
            return await super.responseHandler(res, result);
        } catch (error) {
            return await super.errorHandler(res, error);            
        }
    }    

    public async put(req: Request, res: Response) {
        try {
            const result = await movimentationService.finish(req.body);
            return await super.responseHandler(res, result);
        } catch (error) {
            return await super.errorHandler(res, error);            
        }
    }     
    
}

export const movimentationController = new MovimentationController();