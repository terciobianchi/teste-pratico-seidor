
import { Service } from "./Service";
import { movimentationRepository } from "../repository/MovimentationRepository";
import { carRepository } from "../repository/CarRepository";
import { driverRepository } from "../repository/DriverRepository";

class MovimentationService extends Service {
    
    constructor() {
        super(movimentationRepository);
    }

    public async list() {
        // const cars = await carRepository.findAll();
        const drivers = await driverRepository.findAll();

        let result = await super.findAll();

        result = result.map((movimentation: any) => {
            const driver = drivers.find((x: any) => x.id === movimentation.driverId);
            movimentation.driverName = driver.name;
            return  movimentation;
        }); 

        return result;
    }    

    public async create(obj: any) {
        if (!obj.carId || !obj.driverId || !obj.startDate || !obj.description) {
            throw new Error('Campos obrigatórios não foram preenchidos!');
        }     

        obj.startDate = new Date(obj.startDate);
        if (isNaN(obj.startDate)) {
            throw new Error('Data inválida!');
        }

        let check = await carRepository.finById(obj.carId);
        if (!check) {
            throw new Error('Carro não cadastrado!');
        }

        check = await driverRepository.finById(obj.driverId);
        if (!check) {
            throw new Error('Motorista não cadastrado!');
        }     

        const movimentations = await super.findAll();        
        check = movimentations.find((x: any) => x.carId === obj.carId && !x.finishDate);
        if (check) {
            throw new Error('O carro já está em uso!');
        }
        
        check = movimentations.find((x: any) => x.driverId === obj.driverId && !x.finishDate);
        if (check) {
            throw new Error('O motorista já está usando outro carro!');
        }        
        return super.save(obj);
    }    

    public async finish(obj: any) {
        if (!obj.id || !obj.finishDate) {
            throw new Error('Campos obrigatórios não foram preenchidos!');
        }      

        obj.finishDate = new Date(obj.finishDate);
        if (isNaN(obj.finishDate)) {
            throw new Error('Data inválida!');
        }

        const check = await super.finById(obj.id);
        if (!check) {
            throw new Error('Movimento não registrado!');
        }        

        check.finishDate = obj.finishDate;
        return super.update(check);
    }    
 

}

export const movimentationService = new MovimentationService();