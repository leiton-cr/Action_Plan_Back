import Database from "../config/Database";

export interface IBaseService {
    PROCEDURES: {
        GET_ALL: string,
        GET_BY_ID: string,
        DELETE: string
        UPDATE: string
        CREATE: string
    }
    
    db: Database;

    getAll: Function;
    getById: Function;
    delete: Function;

}