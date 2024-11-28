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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
const fs_1 = __importDefault(require("fs"));
const uuid_1 = require("uuid");
class Repository {
    constructor(fileName) {
        this.fileName = fileName;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const content = yield fs_1.default.readFileSync(`data/${this.fileName}.json`, 'utf-8');
            const result = JSON.parse(content);
            return result;
        });
    }
    finById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const content = yield fs_1.default.readFileSync(`data/${this.fileName}.json`, 'utf-8');
            const result = JSON.parse(content);
            return result.find((x) => x.id === id);
        });
    }
    save(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!obj.id) {
                obj.id = (0, uuid_1.v4)();
            }
            const content = yield fs_1.default.readFileSync(`data/${this.fileName}.json`, 'utf-8');
            const result = JSON.parse(content);
            result.push(obj);
            yield fs_1.default.writeFileSync(`data/${this.fileName}.json`, JSON.stringify(result));
            return result;
        });
    }
    update(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            const content = yield fs_1.default.readFileSync(`data/${this.fileName}.json`, 'utf-8');
            let result = JSON.parse(content);
            result = result.filter((x) => x.id !== obj.id);
            result.push(obj);
            yield fs_1.default.writeFileSync(`data/${this.fileName}.json`, JSON.stringify(result));
            7;
            return result;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const content = yield fs_1.default.readFileSync(`data/${this.fileName}.json`, 'utf-8');
            let result = JSON.parse(content);
            result = result.filter((x) => x.id !== id);
            yield fs_1.default.writeFileSync(`data/${this.fileName}.json`, JSON.stringify(result));
            return result;
        });
    }
}
exports.Repository = Repository;
//# sourceMappingURL=Repository.js.map