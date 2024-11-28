
import { Service } from "./Service";
import { driverRepository } from "../repository/DriverRepository";

class DriverService extends Service {
    
    constructor() {
        super(driverRepository);
    }

    public async filter(query: any) {
        const name = query.name as string;

        let result = await super.findAll();

        result = result.filter((driver: any) => {
            let cf = name ? driver.name.indexOf(name) !== -1 : true;
            return  cf;
        }); 

        return result;
    }    

    public async save(obj: any) {
        if (!obj.name) {
            throw new Error('Campos obrigatórios não foram preenchidos!');
        }      
        const check = await super.finById(obj.id);
        if (check) {
            throw new Error('Motorista já cadastrado!');
        }
        return super.save(obj);
    }    

    public async update(obj: any) {
        if (!obj.id || !obj.name) {
            throw new Error('Campos obrigatórios não foram preenchidos!');
        }      
        return super.update(obj);
    }    
 

}

export const driverService = new DriverService();