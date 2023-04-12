
import { describe, expect, test } from '@jest/globals';
import PlanValidator from '../../validators/PlanValidator';

describe("Unit test of plan validation", () => {

    // This UT checks if the middleware calls the next function.
    test('Should -> pass the middleware', () => {
        const req: any = {body:{id:"abc"}};
        const res: any = {};
        const next: any = jest.fn();

        const validator: PlanValidator = new PlanValidator();

        validator.validateId(req, res, next);

        expect(next).toHaveBeenCalled()
    })

})

