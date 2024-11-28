import {carController} from "./controller/CarController";
import {driverController} from "./controller/DriverController";
import {movimentationController} from "./controller/MovimentationController";

/**
 * All application routes.
 */
export const routes = [
    {
        path: "/cars",
        method: "get",
        action: carController.filter
    },
    {
        path: "/cars/:id",
        method: "get",
        action: carController.get
    },    
    {
        path: "/cars",
        method: "post",
        action: carController.post
    },     
    {
        path: "/cars",
        method: "put",
        action: carController.put
    }, 
    {
        path: "/cars/:id",
        method: "delete",
        action: carController.delete
    },         
    {
        path: "/drivers",
        method: "get",
        action: driverController.filter
    },
    {
        path: "/drivers/:id",
        method: "get",
        action: driverController.get
    },    
    {
        path: "/drivers",
        method: "post",
        action: driverController.post
    },     
    {
        path: "/drivers",
        method: "put",
        action: driverController.put
    }, 
    {
        path: "/drivers/:id",
        method: "delete",
        action: driverController.delete
    },         
    {
        path: "/movimentations",
        method: "get",
        action: movimentationController.list
    }, 
    {
        path: "/movimentations",
        method: "post",
        action: movimentationController.post
    },     
    {
        path: "/movimentations",
        method: "put",
        action: movimentationController.put
    }, 
];