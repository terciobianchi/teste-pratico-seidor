"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.driverService = void 0;
const Service_1 = require("./Service");
const DriverRepository_1 = require("../repository/DriverRepository");
class DriverService extends Service_1.Service {
    constructor() {
        super(DriverRepository_1.driverRepository);
    }
    filter(query) {
        const _super = Object.create(null, {
            findAll: { get: () => super.findAll }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const name = query.name;
            let result = yield _super.findAll.call(this);
            result = result.filter((driver) => {
                let cf = name ? driver.name.indexOf(name) !== -1 : true;
                return cf;
            });
            return result;
        });
    }
    save(obj) {
        const _super = Object.create(null, {
            finById: { get: () => super.finById },
            save: { get: () => super.save }
        });
        return __awaiter(this, void 0, void 0, function* () {
            if (!obj.name) {
                throw new Error('Campos obrigatórios não foram preenchidos!');
            }
            const check = yield _super.finById.call(this, obj.id);
            if (check) {
                throw new Error('Motorista já cadastrado!');
            }
            return _super.save.call(this, obj);
        });
    }
    update(obj) {
        const _super = Object.create(null, {
            update: { get: () => super.update }
        });
        return __awaiter(this, void 0, void 0, function* () {
            if (!obj.id || !obj.name) {
                throw new Error('Campos obrigatórios não foram preenchidos!');
            }
            return _super.update.call(this, obj);
        });
    }
}
exports.driverService = new DriverService();
//# sourceMappingURL=DriverService.js.map