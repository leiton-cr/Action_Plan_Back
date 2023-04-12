
import BaseService from '../core/BaseService';
import { PlanModel } from '../models/PlanModel';

export default class PlanService extends BaseService {

    constructor() {
        super();

        this.PROCEDURES = {
            GET_ALL: "sp_plans_getAll()",
            GET_BY_ID: "sp_plans_getById(?)",
            DELETE: "sp_plans_delete(?)",
            UPDATE: "sp_plans_update(?,?,?,?,?,?,?)",
            CREATE: "sp_plans_create(?,?,?,?,?,?,?)"
        }
    }
    
    async create(header:PlanModel) {
        let params:Array<any> = this.getParams(header);
        let result = await this.db.executeProcedure(this.PROCEDURES.CREATE, params);
        return result;
    } 

    async update(header:PlanModel) {
        let params:Array<any> = this.getParams(header);
        let result = await this.db.executeProcedure(this.PROCEDURES.UPDATE, params);
        return result;
    }

    private getParams(header:PlanModel){
        let params:Array<any> = Object.values(header);
        params.pop();
        return params;
    }

}