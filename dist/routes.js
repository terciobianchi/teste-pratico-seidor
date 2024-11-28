"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const CarController_1 = require("./controller/CarController");
const DriverController_1 = require("./controller/DriverController");
const MovimentationController_1 = require("./controller/MovimentationController");
/**
 * All application routes.
 */
exports.routes = [
    {
        path: "/cars",
        method: "get",
        action: CarController_1.carController.filter
    },
    {
        path: "/cars/:id",
        method: "get",
        action: CarController_1.carController.get
    },
    {
        path: "/cars",
        method: "post",
        action: CarController_1.carController.post
    },
    {
        path: "/cars",
        method: "put",
        action: CarController_1.carController.put
    },
    {
        path: "/cars/:id",
        method: "delete",
        action: CarController_1.carController.delete
    },
    {
        path: "/drivers",
        method: "get",
        action: DriverController_1.driverController.filter
    },
    {
        path: "/drivers/:id",
        method: "get",
        action: DriverController_1.driverController.get
    },
    {
        path: "/drivers",
        method: "post",
        action: DriverController_1.driverController.post
    },
    {
        path: "/drivers",
        method: "put",
        action: DriverController_1.driverController.put
    },
    {
        path: "/drivers/:id",
        method: "delete",
        action: DriverController_1.driverController.delete
    },
    {
        path: "/movimentations",
        method: "get",
        action: MovimentationController_1.movimentationController.list
    },
    {
        path: "/movimentations",
        method: "post",
        action: MovimentationController_1.movimentationController.post
    },
    {
        path: "/movimentations",
        method: "put",
        action: MovimentationController_1.movimentationController.put
    },
];
//# sourceMappingURL=routes.js.map