import { Repository } from "./Repository";

class CarRepository extends Repository {
    
    constructor() {
        super('cars');
    }
  
}

export const carRepository = new CarRepository();