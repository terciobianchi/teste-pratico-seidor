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
exports.carController = void 0;
const CarService_1 = require("../service/CarService");
const Controller_1 = require("./Controller");
class CarController extends Controller_1.Controller {
    filter(req, res) {
        const _super = Object.create(null, {
            responseHandler: { get: () => super.responseHandler },
            errorHandler: { get: () => super.errorHandler }
        });
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cars = yield CarService_1.carService.filter(req.query);
                return yield _super.responseHandler.call(this, res, cars);
            }
            catch (error) {
                return yield _super.errorHandler.call(this, res, error);
            }
        });
    }
    get(req, res) {
        const _super = Object.create(null, {
            responseHandler: { get: () => super.responseHandler },
            errorHandler: { get: () => super.errorHandler }
        });
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield CarService_1.carService.finById(req.params.id);
                return yield _super.responseHandler.call(this, res, result);
            }
            catch (error) {
                return yield _super.errorHandler.call(this, res, error);
            }
        });
    }
    post(req, res) {
        const _super = Object.create(null, {
            responseHandler: { get: () => super.responseHandler },
            errorHandler: { get: () => super.errorHandler }
        });
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield CarService_1.carService.save(req.body);
                return yield _super.responseHandler.call(this, res, result);
            }
            catch (error) {
                return yield _super.errorHandler.call(this, res, error);
            }
        });
    }
    put(req, res) {
        const _super = Object.create(null, {
            responseHandler: { get: () => super.responseHandler },
            errorHandler: { get: () => super.errorHandler }
        });
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield CarService_1.carService.update(req.body);
                return yield _super.responseHandler.call(this, res, result);
            }
            catch (error) {
                return yield _super.errorHandler.call(this, res, error);
            }
        });
    }
    delete(req, res) {
        const _super = Object.create(null, {
            responseHandler: { get: () => super.responseHandler },
            errorHandler: { get: () => super.errorHandler }
        });
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield CarService_1.carService.delete(req.params.id);
                return yield _super.responseHandler.call(this, res, result);
            }
            catch (error) {
                return yield _super.errorHandler.call(this, res, error);
            }
        });
    }
}
exports.carController = new CarController();
//# sourceMappingURL=CarController.js.map