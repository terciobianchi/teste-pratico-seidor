import { Repository } from "./Repository";

class DriverRepository extends Repository {
    
    constructor() {
        super('drivers');
    }
  
}

export const driverRepository = new DriverRepository();