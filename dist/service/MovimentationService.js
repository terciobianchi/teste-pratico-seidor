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
exports.movimentationService = void 0;
const Service_1 = require("./Service");
const MovimentationRepository_1 = require("../repository/MovimentationRepository");
const CarRepository_1 = require("../repository/CarRepository");
const DriverRepository_1 = require("../repository/DriverRepository");
class MovimentationService extends Service_1.Service {
    constructor() {
        super(MovimentationRepository_1.movimentationRepository);
    }
    list() {
        const _super = Object.create(null, {
            findAll: { get: () => super.findAll }
        });
        return __awaiter(this, void 0, void 0, function* () {
            // const cars = await carRepository.findAll();
            const drivers = yield DriverRepository_1.driverRepository.findAll();
            let result = yield _super.findAll.call(this);
            result = result.map((movimentation) => {
                const driver = drivers.find((x) => x.id === movimentation.driverId);
                movimentation.driverName = driver.name;
                return movimentation;
            });
            return result;
        });
    }
    create(obj) {
        const _super = Object.create(null, {
            findAll: { get: () => super.findAll },
            save: { get: () => super.save }
        });
        return __awaiter(this, void 0, void 0, function* () {
            if (!obj.carId || !obj.driverId || !obj.startDate || !obj.description) {
                throw new Error('Campos obrigatórios não foram preenchidos!');
            }
            obj.startDate = new Date(obj.startDate);
            if (isNaN(obj.startDate)) {
                throw new Error('Data inválida!');
            }
            let check = yield CarRepository_1.carRepository.finById(obj.carId);
            if (!check) {
                throw new Error('Carro não cadastrado!');
            }
            check = yield DriverRepository_1.driverRepository.finById(obj.driverId);
            if (!check) {
                throw new Error('Motorista não cadastrado!');
            }
            const movimentations = yield _super.findAll.call(this);
            check = movimentations.find((x) => x.carId === obj.carId && !x.finishDate);
            if (check) {
                throw new Error('O carro já está em uso!');
            }
            check = movimentations.find((x) => x.driverId === obj.driverId && !x.finishDate);
            if (check) {
                throw new Error('O motorista já está usando outro carro!');
            }
            return _super.save.call(this, obj);
        });
    }
    finish(obj) {
        const _super = Object.create(null, {
            finById: { get: () => super.finById },
            update: { get: () => super.update }
        });
        return __awaiter(this, void 0, void 0, function* () {
            if (!obj.id || !obj.finishDate) {
                throw new Error('Campos obrigatórios não foram preenchidos!');
            }
            obj.finishDate = new Date(obj.finishDate);
            if (isNaN(obj.finishDate)) {
                throw new Error('Data inválida!');
            }
            const check = yield _super.finById.call(this, obj.id);
            if (!check) {
                throw new Error('Movimento não registrado!');
            }
            check.finishDate = obj.finishDate;
            return _super.update.call(this, check);
        });
    }
}
exports.movimentationService = new MovimentationService();
//# sourceMappingURL=MovimentationService.js.map