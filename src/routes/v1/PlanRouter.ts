import BaseRouter from "../../core/BaseRouter";
import PlanValidator from "../../validators/PlanValidator";
import PlanController from "../../controllers/PlanController";

export default class PlanRouter extends BaseRouter {

    private controller: PlanController;
    private validations: PlanValidator;
   
    constructor() {
        super();

        this.route = "/api/v1/plan"
        this.controller = new PlanController();
        this.validations = new PlanValidator();

        /**
         * @openapi
         * 
         * /api/v1/plan:
         * 
         *   get:
         *     summary: Return all plans
         *     tags:
         *       - Plans
         *     responses:
         *       200:
         *         description: OK
         *         content:
         *           application/json:
         *              schema:
         *                  type: object
         *                  example: {"data":[{"id":"3b08b6d9-fc2b-4e6e-8061-7f666f7c404c","company":1000,"project":"Mastery","manager":10000,"goal":"Win","issue":"Money","outcome":"Exit","updateAt":null}]}
         */
        this.router.get('/',
            this.controller.getAll
        );

       /**
        * @openapi
        * /api/v1/plan/{id}:
        *   get:
        *     summary: Get an specific plan by its id
        *     tags:
        *       - Plans
        *     parameters:
        *       - in: path
        *         description: Plan id
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
        *               example: {"data":{"plan":{"id":"3b08b6d9-fc2b-4e6e-8061-7f666f7c404c","company":1000,"project":"Mastery","manager":10000,"goal":"Win","issue":"Money","outcome":"Exit","updateAt":null},"details":[{"id":"3b08b6d9-fc2b-4e6e-8061-7f666f7c4041","task":"Make Money","responsible":10001,"priority":1001,"status":1001,"start":"2023-03-27T06:00:00.000Z","end":"2023-03-27T06:00:00.000Z","resources":"No resources","blockers":"No blockers","stakeholder":10001,"milestone":"Be alive","notes":"None"},{"id":"3b08b6d9-fc2b-4e6e-8061-7f666f7c4042","task":"Money","responsible":10001,"priority":1001,"status":1001,"start":"2023-03-27T06:00:00.000Z","end":"2023-03-27T06:00:00.000Z","resources":"Resources","blockers":"Blockers","stakeholder":10001,"milestone":"Be alive","notes":"None"}]}}
        *
        *       400:
        *         description: ERROR INVALID ID
        *         content:
        *           application/json:
        *             schema:
        *               type: object
        *               example: { "data":"Error, invalid id" }
        */
        this.router.get('/:id',
            this.validations.validateId,
            this.controller.getOne
        );
    }
}