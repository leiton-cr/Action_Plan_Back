import { Router } from 'express';

export default class BaseRouter {

    protected router: Router;

    constructor() {
        this.router = Router();
    }

    getRouter() {
        return this.router;
    }
}