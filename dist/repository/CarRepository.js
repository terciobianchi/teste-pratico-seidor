"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carRepository = void 0;
const Repository_1 = require("./Repository");
class CarRepository extends Repository_1.Repository {
    constructor() {
        super('cars');
    }
}
exports.carRepository = new CarRepository();
//# sourceMappingURL=CarRepository.js.map