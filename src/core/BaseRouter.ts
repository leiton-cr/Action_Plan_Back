import { Router } from 'express';

export default class BaseRouter {

    protected router: Router;
    protected route: string;

    constructor() {
        this.router = Router();
    }

    getRouter() {
        return this.router;
    }

    getRoute() {
        return this.route;
    }
}