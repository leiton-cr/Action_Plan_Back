import Database from "../config/Database";
import { IBaseService } from "./IBaseService";

/**
 * This base service inherits all the other services.
 * Contains an instance of the database
 */
export default class BaseService implements IBaseService {
  PROCEDURES: { GET_ALL: string; GET_BY_ID: string; DELETE: string; UPDATE: string; CREATE: string; };

  db: Database;

  constructor() {
    this.db = Database.getInstance();
  }

  async getAll() {
    const result = await this.db.executeProcedure(this.PROCEDURES.GET_ALL);
    return result;
  }

  async getById(id: string) {
    const result = await this.db.executeProcedure(this.PROCEDURES.GET_BY_ID, [id]);
    return result;
  }

  async delete(id: string) {
    let result = await this.db.executeProcedure(this.PROCEDURES.DELETE, [id]);
    return result;
  }

}