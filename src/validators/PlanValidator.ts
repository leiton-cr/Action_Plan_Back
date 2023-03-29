import { Request, Response, NextFunction } from "express";

export default class PlanValidator {

    public async validatePlan(req: Request, res: Response, next: NextFunction) {
        next();
    }

    public async validateId(req: Request, res: Response, next: NextFunction) {
        const id = req.params.id || req.body.id;
        
        if (!id) {
            res.status(400).json({data: "Id not found."});
        } else {
            next();
        }

    }

}
