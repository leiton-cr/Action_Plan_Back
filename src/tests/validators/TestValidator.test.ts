import TestValidator from "../../validators/TestValidator";
import { describe, expect, test } from '@jest/globals';


describe("Unit test of testing module", () => {

    // This UT checks if the middleware calls the next function.
    test('Should -> pass the middleware', () => {
        const req: any = {};
        const res: any = {};
        const next: any = jest.fn();

        const validator: TestValidator = new TestValidator();

        validator.validateTest(req, res, next);

        expect(next).toHaveBeenCalled()
    })

})

