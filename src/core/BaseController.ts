import { Request, Response } from "express";
import { DatabaseResult } from "../models/DatabaseResult";
import { IBaseController } from "./IBaseController";
import { IBaseService } from "./IBaseService";

/**
 * This base controller inherits all the other controllers.
 * Contains methods to validate data from DB results
 */
export default class BaseController<Model> implements IBaseController {

  service: IBaseService;

  getAll = async (req: Request, res: Response) => {

    const result: DatabaseResult<Model> = await this.service.getAll()

    if(!result.all){
      return res.status(500).json({data: 'Error extracting the items'});
    }

    const items = result.all;

    res.status(200).json({data: items});
  };

  getOne = async (req: Request, res: Response) => {
    const id = req.params.id

    const result: DatabaseResult<Model> = await this.service.getById(id)
    const item: Model = result.one;

    if(!item){
      return res.status(404).json({data: `Item with id [${id}] not found`});
    }

    res.status(200).json({data: item});
  };

  delete = async (req: Request, res: Response) => {
    const id = req.params.id
  
    const record: DatabaseResult<Model> = await this.service.getById(id)
    const item: Model = record.one;

    if(!item){
      return res.status(404).json({data: `Item with id [${id}] not found`});
    }

    const result: DatabaseResult<Model> = await this.service.delete(id)
    
    if(!result || !result.affected){
      return res.status(500).json({data: `Error deleting item with id [${id}]`});
    }

    res.status(200).json({data: `Sucessfully deleted item with id [${id}]`});
  };

}