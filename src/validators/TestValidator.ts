import { Request, Response, NextFunction } from "express";

export default class TestValidator {

    public async validateTest(req: Request, res: Response, next: NextFunction) {
        next();
    }
}
