import { Request, Response } from "express";
import BaseController from "../core/BaseController";
import { DatabaseResult } from "../models/DatabaseResult";
import { DetailModel } from "../models/DetailModel";
import { PlanModel } from "../models/PlanModel";
import DetailService from "../service/DetailService";
import PlanService from "../service/PlanService";

export default class PlanController extends BaseController<PlanModel> {

  private detailService: DetailService;

  constructor() {
    super();
    this.service = new PlanService()
    this.detailService = new DetailService();
  }

  getOne:any = async (req: Request, res: Response) => {

    const id = req.params.id;

    const result: DatabaseResult<PlanModel> = await this.service.getById(id)
    const plan = result.one;

  
    const detailsResult: DatabaseResult<DetailModel> = await this.detailService.getByPlan(id)
    const details = detailsResult.all

    if(!plan || !details){
      return res.status(404).json({data: `Item with id [${id}] not found`});
    }
    
    res.status(200).json({data: {plan: plan, details: details}});
  };

  create:any = async (req: Request, res: Response) => {

    const plan:PlanModel = {
      ...req.body.data.plan
    };

    console.log(req.body);
    

    const details: Array<DetailModel> = req.body.data.details.map(detail => {detail.plan = plan.id; return detail})
   
    const resultPlan: DatabaseResult<PlanModel> = await this.service.create(plan)
    const resultDetails: Array<DatabaseResult<DetailModel>> = await this.detailService.create(details)

   
    return res.json({})    
  }

  update:any = async (req: Request, res: Response) => {

    const plan:PlanModel = {
      ...req.body.data.plan
    };

    let details: Array<DetailModel> = req.body.data.details.map(detail => {detail.plan = plan.id; return detail})

    const deleteResult = await this.detailService.delete(plan.id)

    const resultPlan: DatabaseResult<PlanModel> = await this.service.update(plan)
    const resultDetails: Array<DatabaseResult<DetailModel>> = await this.detailService.create(details)

    return res.json({})
  }

}