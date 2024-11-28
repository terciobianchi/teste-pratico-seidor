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
exports.movimentationController = void 0;
const MovimentationService_1 = require("../service/MovimentationService");
const Controller_1 = require("./Controller");
class MovimentationController extends Controller_1.Controller {
    list(req, res) {
        const _super = Object.create(null, {
            responseHandler: { get: () => super.responseHandler },
            errorHandler: { get: () => super.errorHandler }
        });
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const movimentations = yield MovimentationService_1.movimentationService.list();
                return yield _super.responseHandler.call(this, res, movimentations);
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
                const result = yield MovimentationService_1.movimentationService.create(req.body);
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
                const result = yield MovimentationService_1.movimentationService.finish(req.body);
                return yield _super.responseHandler.call(this, res, result);
            }
            catch (error) {
                return yield _super.errorHandler.call(this, res, error);
            }
        });
    }
}
exports.movimentationController = new MovimentationController();
//# sourceMappingURL=MovimentationController.js.map