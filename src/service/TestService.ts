
import BaseService from '../core/BaseService';

export default class TestService extends BaseService {

    constructor() {
        super();

        this.PROCEDURES = {
            GET_ALL: "sp_tests_getAll()",
            GET_BY_ID: "sp_tests_getById(?)",
            DELETE: "sp_tests_delete(?)",
            UPDATE: "", 
            CREATE: ""
        }
    }
    
}