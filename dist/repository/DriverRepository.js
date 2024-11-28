"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.driverRepository = void 0;
const Repository_1 = require("./Repository");
class DriverRepository extends Repository_1.Repository {
    constructor() {
        super('drivers');
    }
}
exports.driverRepository = new DriverRepository();
//# sourceMappingURL=DriverRepository.js.map