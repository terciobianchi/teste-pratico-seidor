import { Repository } from "./Repository";

class MovimentationRepository extends Repository {
    
    constructor() {
        super('movimentations');
    }
  
}

export const movimentationRepository = new MovimentationRepository();