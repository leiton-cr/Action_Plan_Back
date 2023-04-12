
import BaseService from '../core/BaseService';
import { DatabaseResult } from '../models/DatabaseResult';
import { DetailModel } from '../models/DetailModel';

export default class DetailService extends BaseService {

    constructor() {
        super();

        this.PROCEDURES = {
            GET_ALL: "sp_details_getAll()",
            GET_BY_ID: "sp_details_getById(?)",
            DELETE: "sp_details_delete(?)",
            UPDATE: "",
            CREATE: "sp_details_create(?,?,?,?,?,?,?,?,?,?,?,?,?)"
        }
    }

    async getByPlan(id:string) {
        const result = await this.db.executeProcedure("sp_details_getByPlan(?)", [id]);
        return result;
    }

    async create(details:Array<DetailModel> ) {
        const results:Array<DatabaseResult<DetailModel>> = []

        let params:Array<any>;
        details.map( async (detail:DetailModel) => {
            params = this.getParams(detail)
            
            results.push(await this.db.executeProcedure(this.PROCEDURES.CREATE, params));
        })
 
        return results;
    }

    private getParams(detail:DetailModel){
        let params = [...Object.values(detail)]
        return params;
    }

}