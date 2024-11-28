import { Repository } from "../repository/Repository";

export class Service {

    private repository: Repository;

    constructor(repository: Repository) {
        this.repository = repository;
    }

    public async findAll() {
        return this.repository.findAll();
    }    


    public async finById(id: string) {
        return this.repository.finById(id);
    }    

    public async save(obj: any) {
        return this.repository.save(obj);
    }    

    public async update(obj: any) {      
        return this.repository.update(obj);
    }      
    
    public async delete(id: string) {
        return this.repository.delete(id);
    }     

}