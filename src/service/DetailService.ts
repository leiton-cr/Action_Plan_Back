
import BaseService from '../core/BaseService';

export default class DetailService extends BaseService {

    constructor() {
        super();

        this.PROCEDURES = {
            GET_ALL: "sp_details_getAll()",
            GET_BY_ID: "sp_details_getById(?)",
            DELETE: "sp_details_delete(?)",
            UPDATE: "",
            CREATE: ""
        }
    }

    async getByPlan(id) {
        const result = await this.db.executeProcedure("sp_details_getByPlan(?)", [id]);
        return result;
    }


}