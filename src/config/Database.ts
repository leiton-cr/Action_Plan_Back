import mysql2, { Pool } from "mysql2";
import { DatabaseResult } from "../models/DatabaseResult";

export default class Database {

  private static instance: Database = null

  /**
   * Database connection
   */
  private connection: Pool;

  private constructor() {
    console.log("Create database");
    this.connection = mysql2.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DATABASE,
    });
  }

  public static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database()
    }

    return Database.instance
  }


  /**
   * This method create returns the configured connection
   * @returns The configured connection
   */
  private getConnection(): Pool {
    return this.connection;
  }

  /**
   * This method execute all the stored procedures.
   * @param procedure Stored procedure to execute.
   * @param params  Array of params to set the procedure.
   * @returns Result of execution.
   */
  public async executeProcedure(procedure: string, params?: Array<any>) {
    return await this.getConnection()
      .promise()
      .query(`CALL ${procedure}`, params)
      .then((data: any) => {
        const info = this.processResult(data)
        return info;
      })
      .catch((err) => {
        console.log(err.sqlMessage);
        return { state: 400, data: err.sqlMessage };
      });
  }

  private processResult(data) {
    let one = undefined;
    let all = [];
    let affected = false

    if (("affectedRows" in data[0])) {
      affected = data[0].affectedRows > 0
    } else {
      one = data[0][0][0]
      all = data[0][0]
      affected = data[0][1].affectedRows > 0
    }

    const result: DatabaseResult<any> = { one, all, affected }

    return result
  }
}
