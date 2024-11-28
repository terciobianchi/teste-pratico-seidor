"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movimentationRepository = void 0;
const Repository_1 = require("./Repository");
class MovimentationRepository extends Repository_1.Repository {
    constructor() {
        super('movimentations');
    }
}
exports.movimentationRepository = new MovimentationRepository();
//# sourceMappingURL=MovimentationRepository.js.map