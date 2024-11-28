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
exports.Controller = void 0;
class Controller {
    errorHandler(res, error) {
        return __awaiter(this, void 0, void 0, function* () {
            console.error('ERROR', error);
            res.status(500);
            return res.json({ message: error.message });
        });
    }
    responseHandler(res, data) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('RESPONSE', JSON.stringify(data));
            return res.json(data);
        });
    }
}
exports.Controller = Controller;
//# sourceMappingURL=Controller.js.map