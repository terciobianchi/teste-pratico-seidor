import { Request, Response } from "express";
import { carService } from "../service/CarService";
import { Controller } from "./Controller";

class CarController extends Controller {
    
    public async filter(req: Request, res: Response) {
        try {
            const cars = await carService.filter(req.query);
            return await super.responseHandler(res, cars);
        } catch (error) {
            return await super.errorHandler(res, error);
        }
    }
    
    public async get(req: Request, res: Response) {
        try {
            const result = await carService.finById(req.params.id);
            return await super.responseHandler(res, result);
        } catch (error) {
            return await super.errorHandler(res, error);            
        }
    }

    public async post(req: Request, res: Response) {
        try {
            const result = await carService.save(req.body);
            return await super.responseHandler(res, result);
        } catch (error) {
            return await super.errorHandler(res, error);            
        }
    }    

    public async put(req: Request, res: Response) {
        try {
            const result = await carService.update(req.body);
            return await super.responseHandler(res, result);
        } catch (error) {
            return await super.errorHandler(res, error);            
        }
    }    
    
    public async delete(req: Request, res: Response) {
        try {
            const result = await carService.delete(req.params.id);
            return await super.responseHandler(res, result);
        } catch (error) {
            return await super.errorHandler(res, error);            
        }
    }    
    
}

export const carController = new CarController();