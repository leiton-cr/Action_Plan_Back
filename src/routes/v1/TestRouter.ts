
import BaseRouter from "../../core/BaseRouter";
import TestValidations from "../../validators/TestValidator";
import TestController from "../../controllers/TestController";

export default class TestRouter extends BaseRouter {

    private controller: TestController;
    private validations: TestValidations;

    constructor() {
        super();

        this.route = "/api/v1/test"
        this.controller = new TestController();
        this.validations = new TestValidations();

        /**
         * @openapi
         * 
         * /api/v1/test:
         * 
         *   get:
         *     summary: Return all tests
         *     tags:
         *       - Tests
         *     responses:
         *       200:
         *         description: OK
         *         content:
         *           application/json:
         *              schema:
         *                  type: array
         *                  example: [{"id": "3b08b6d9-fc2b-4e6e-8061-7f666f7c404c","status": "Success"}]
         */
        this.router.get('/',
            this.validations.validateTest,
            this.controller.getAll
        );

       /**
        * @openapi
        * /api/v1/test/{id}:
        *   get:
        *     summary: Get an specific test by its id
        *     tags:
        *       - Tests
        *     parameters:
        *       - in: path
        *         description: Test id
        *         name: id
        *         schema:
        *           type: string
        *           example: 3b08b6d9-fc2b-4e6e-8061-7f666f7c404c
        *         required: true
        *           
        *     responses:
        *       200:
        *         description: OK
        *         content:
        *           application/json:
        *             schema:
        *               type: object
        *               example: {"id": "3b08b6d9-fc2b-4e6e-8061-7f666f7c404c","status": "Success"}
        *
        *       406:
        *         description: ERROR INVALID ID
        *         content:
        *           application/json:
        *             schema:
        *               type: object
        *               example: { "data":"Error, invalid id" }
        */
        this.router.get('/:id',
            this.validations.validateTest,
            this.controller.getOne
        );
    }
}