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
            this.controller.getAll);

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
            this.controller.getOne);

        /**
        * @openapi
        * /api/v1/plan/{id}:
        *   delete:
        *     summary: Delete an specific plan by its id
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
        *               example: {"data": "Sucessfully deleted item with id 3b08b6d9-fc2b-4e6e-8061-7f666f7c404c"}
        *
        *       400:
        *         description: ERROR NOT FOUND ID
        *         content:
        *           application/json:
        *             schema:
        *               type: object
        *               example: { "data":"Item with id 3b08b6d9-fc2b-4e6e-8061-7f666f7c404c not found" }
        * 
        *       500:
        *         description: ERROR DELETING
        *         content:
        *           application/json:
        *             schema:
        *               type: object
        *               example: { "data":"Error deleting item with id id 3b08b6d9-fc2b-4e6e-8061-7f666f7c404c" }
        */
               this.router.delete('/:id',
               this.validations.validateId,
               this.controller.delete);



        /**
        * @openapi
        * /api/v1/plan:
        *   post:
        *     consumes:
        *       - application/json
        *     summary: Create a plan
        *     tags:
        *       - Plans
        *     parameters:
        *       - in: body
        *         description: Plan data
        *         name: data
        *         schema:
        *           type: object
        *           example: {"plan":{"id":"3b08b6d9-fc2b-4e6e-8061-7f666f7c404c","company":1000,"project":"Mastery","manager":10000,"goal":"Win","issue":"Money","outcome":"Exit","updateAt":null},"details":[{"id":"3b08b6d9-fc2b-4e6e-8061-7f666f7c4041","task":"Make Money","responsible":10001,"priority":1001,"status":1001,"start":"2023-03-27T06:00:00.000Z","end":"2023-03-27T06:00:00.000Z","resources":"No resources","blockers":"No blockers","stakeholder":10001,"milestone":"Be alive","notes":"None"}]}
        *         required: true
        *           
        *     responses:
        *       200:
        *         description: OK
        *         content:
        *           application/json:
        *             schema:
        *               type: object
        *               example: {"data": "Sucessfully deleted item with id 3b08b6d9-fc2b-4e6e-8061-7f666f7c404c"}
        *
        *       400:
        *         description: ERROR 
        *         content:
        *           application/json:
        *             schema:
        *               type: object
        *               example: { "data":"Item with id 3b08b6d9-fc2b-4e6e-8061-7f666f7c404c not found" }
        * 
        *       500:
        *         description: ERROR
        *         content:
        *           application/json:
        *             schema:
        *               type: object
        *               example: { "data":"Error deleting item with id id 3b08b6d9-fc2b-4e6e-8061-7f666f7c404c" }
        */
        this.router.post('/',
      
        this.controller.create);


        /**
        * @openapi
        * /api/v1/plan:
        *   put:
        *     consumes:
        *       - application/json
        *     summary: Update a plan
        *     tags:
        *       - Plans
        *     parameters:
        *       - in: body
        *         description: Plan data
        *         name: data
        *         schema:
        *           type: object
        *           example: {"plan":{"id":"3b08b6d9-fc2b-4e6e-8061-7f666f7c404c","company":1000,"project":"Mastery","manager":10000,"goal":"Win","issue":"Money","outcome":"Exit","updateAt":null},"details":[{"id":"3b08b6d9-fc2b-4e6e-8061-7f666f7c4041","task":"Make Money","responsible":10001,"priority":1001,"status":1001,"start":"2023-03-27T06:00:00.000Z","end":"2023-03-27T06:00:00.000Z","resources":"No resources","blockers":"No blockers","stakeholder":10001,"milestone":"Be alive","notes":"None"}]}
        *         required: true
        *           
        *     responses:
        *       200:
        *         description: OK
        *         content:
        *           application/json:
        *             schema:
        *               type: object
        *               example: {"data": "Sucessfully deleted item with id 3b08b6d9-fc2b-4e6e-8061-7f666f7c404c"}
        *
        *       400:
        *         description: ERROR 
        *         content:
        *           application/json:
        *             schema:
        *               type: object
        *               example: { "data":"Item with id 3b08b6d9-fc2b-4e6e-8061-7f666f7c404c not found" }
        * 
        *       500:
        *         description: ERROR
        *         content:
        *           application/json:
        *             schema:
        *               type: object
        *               example: { "data":"Error deleting item with id id 3b08b6d9-fc2b-4e6e-8061-7f666f7c404c" }
        */
        this.router.put('/', 
        this.controller.update);
    }
}