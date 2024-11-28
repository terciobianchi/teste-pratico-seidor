"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Enable CORS for all methods
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Content-Type', 'application/json');
    next();
});
// register all application routes
routes_1.routes.forEach(route => {
    if (route.method === 'get') {
        app['get'](route.path, (request, response, next) => {
            route.action(request, response).then(() => next).catch(err => next(err));
        });
    }
    else if (route.method === 'post') {
        app['post'](route.path, (request, response, next) => {
            route.action(request, response).then(() => next).catch(err => next(err));
        });
    }
    else if (route.method === 'put') {
        app['put'](route.path, (request, response, next) => {
            route.action(request, response).then(() => next).catch(err => next(err));
        });
    }
    else if (route.method === 'delete') {
        app['delete'](route.path, (request, response, next) => {
            route.action(request, response).then(() => next).catch(err => next(err));
        });
    }
    else if (route.method === 'patch') {
        app['patch'](route.path, (request, response, next) => {
            route.action(request, response).then(() => next).catch(err => next(err));
        });
    }
    else if (route.method === 'options') {
        app['options'](route.path, (request, response, next) => {
            route.action(request, response).then(() => next).catch(err => next(err));
        });
    }
    else {
        app['all'](route.path, (request, response, next) => {
            route.action(request, response).then(() => next).catch(err => next(err));
        });
    }
});
app.listen(3333, () => 'server running on port 3333');
//# sourceMappingURL=server.js.map