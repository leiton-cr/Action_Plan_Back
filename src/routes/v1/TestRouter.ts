
import BaseRouter from "../../core/BaseRouter";
import TestValidations from "../../validators/TestValidator";
import TestController from "../../controllers/TestController";

export default class TestRouter extends BaseRouter {

    private controller: TestController;
    private validations: TestValidations;

    constructor() {
        super();

        this.controller = new TestController();
        this.validations = new TestValidations();

        this.router.get('/',
            this.validations.validateTest,
            this.controller.getTest
        );
    }
}