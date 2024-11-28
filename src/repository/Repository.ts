import fs from 'fs';
import {v4 as uuidv4} from 'uuid';

export class Repository {
    private fileName: string;

    constructor(fileName: string) {
        this.fileName = fileName;
    }

    public async findAll() {
        const content = await fs.readFileSync(`data/${this.fileName}.json`, 'utf-8');
        const result = JSON.parse(content);
        return result;
    }

    public async finById(id: string) {
        const content = await fs.readFileSync(`data/${this.fileName}.json`, 'utf-8');
        const result = JSON.parse(content);
        return result.find((x: any) => x.id === id);
    }    

    public async save(obj: any) {
        if (!obj.id) {
            obj.id = uuidv4();
        }
        const content = await fs.readFileSync(`data/${this.fileName}.json`, 'utf-8');
        const result = JSON.parse(content);
        result.push(obj);
        await fs.writeFileSync(`data/${this.fileName}.json`, JSON.stringify(result));
        return result;
    }    

    public async update(obj: any) {      
        const content = await fs.readFileSync(`data/${this.fileName}.json`, 'utf-8');
        let result = JSON.parse(content);
        result = result.filter((x: any) => x.id !== obj.id);
        result.push(obj);
        await fs.writeFileSync(`data/${this.fileName}.json`, JSON.stringify(result));7
        return result;
    }      
    
    public async delete(id: string) {
        const content = await fs.readFileSync(`data/${this.fileName}.json`, 'utf-8');
        let result = JSON.parse(content);
        result = result.filter((x: any) => x.id !== id);
        await fs.writeFileSync(`data/${this.fileName}.json`, JSON.stringify(result));
        return result;
    }     
    
}