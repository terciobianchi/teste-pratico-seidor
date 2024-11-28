
import { Service } from "./Service";
import { carRepository } from "../repository/CarRepository";

class CarService extends Service {
    
    constructor() {
        super(carRepository);
    }

    public async filter(query: any) {

        const collor = query.collor as string;
        const brand = query.brand as string;

        let result = await super.findAll();

        result = result.filter((car: any) => {
            let cf = collor ? car.collor.indexOf(collor) !== -1 : true;
            let cb = brand ? car.brand.indexOf(brand) !== -1 : true;
            return  cf && cb;
        }); 

        return result;
    }    

    public async save(obj: any) {
        if (!obj.id || !obj.collor || !obj.collor) {
            throw new Error('Campos obrigatórios não foram preenchidos!');
        }      
        const check = await super.finById(obj.id);
        if (check) {
            throw new Error('Carro já cadastrado!');
        }
        return super.save(obj);
    }    

    public async update(obj: any) {
        if (!obj.id || !obj.collor || !obj.collor) {
            throw new Error('Campos obrigatórios não foram preenchidos!');
        }      
        return super.update(obj);
    }    
 

}

export const carService = new CarService();