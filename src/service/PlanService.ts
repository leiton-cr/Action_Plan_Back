
import BaseService from '../core/BaseService';

export default class PlanService extends BaseService {

    constructor() {
        super();

        this.PROCEDURES = {
            GET_ALL: "sp_plans_getAll()",
            GET_BY_ID: "sp_plans_getById(?)",
            DELETE: "sp_plans_delete(?)",
            UPDATE: "", 
            CREATE: ""
        }
    }
    
}