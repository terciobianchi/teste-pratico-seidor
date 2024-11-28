import express from 'express'

import { Request, Response } from 'express';

import { routes } from './routes';

const app = express();

app.use(express.json());

// Enable CORS for all methods
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');  
    res.header('Content-Type', 'application/json');
    next();
});

// register all application routes
routes.forEach(route => {

    if (route.method === 'get') {
        app['get'](route.path, (request: Request, response: Response, next: Function) => {
            route.action(request, response).then(() => next).catch(err => next(err));
        }); 
    } else
    if (route.method === 'post') {
        app['post'](route.path, (request: Request, response: Response, next: Function) => {
            route.action(request, response).then(() => next).catch(err => next(err));
        }); 
    } else
    if (route.method === 'put') {
        app['put'](route.path, (request: Request, response: Response, next: Function) => {
            route.action(request, response).then(() => next).catch(err => next(err));
        }); 
    } else
    if (route.method === 'delete') {
        app['delete'](route.path, (request: Request, response: Response, next: Function) => {
            route.action(request, response).then(() => next).catch(err => next(err));
        }); 
    } else
    if (route.method === 'patch') {
        app['patch'](route.path, (request: Request, response: Response, next: Function) => {
            route.action(request, response).then(() => next).catch(err => next(err));
        }); 
    } else
    if (route.method === 'options') {
        app['options'](route.path, (request: Request, response: Response, next: Function) => {
            route.action(request, response).then(() => next).catch(err => next(err));
        }); 
    } else {
        app['all'](route.path, (request: Request, response: Response, next: Function) => {
            route.action(request, response).then(() => next).catch(err => next(err));
        });         
    }
});


app.listen(3333, () => 'server running on port 3333');

export default app;