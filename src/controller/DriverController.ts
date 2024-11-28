import { Request, Response } from "express";
import { driverService } from "../service/DriverService";
import { Controller } from "./Controller";

class DriverController extends Controller {
    
    public async filter(req: Request, res: Response) {
        try {
            const drivers = await driverService.filter(req.query);
            return await super.responseHandler(res, drivers);
        } catch (error) {
            return await super.errorHandler(res, error);
        }
    }
    
    public async get(req: Request, res: Response) {
        try {
            const result = await driverService.finById(req.params.id);
            return await super.responseHandler(res, result);
        } catch (error) {
            return await super.errorHandler(res, error);            
        }
    }

    public async post(req: Request, res: Response) {
        try {
            const result = await driverService.save(req.body);
            return await super.responseHandler(res, result);
        } catch (error) {
            return await super.errorHandler(res, error);            
        }
    }    

    public async put(req: Request, res: Response) {
        try {
            const result = await driverService.update(req.body);
            return await super.responseHandler(res, result);
        } catch (error) {
            return await super.errorHandler(res, error);            
        }
    }    
    
    public async delete(req: Request, res: Response) {
        try {
            const result = await driverService.delete(req.params.id);
            return await super.responseHandler(res, result);
        } catch (error) {
            return await super.errorHandler(res, error);            
        }
    }    
    
}

export const driverController = new DriverController();