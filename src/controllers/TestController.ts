import { Request, Response } from "express";
import BaseController from "../core/BaseController";

export default class TestController extends BaseController {


  constructor() {
    super();

  }

  /**
   *
   */
  public getTest = async (req: Request, res: Response) => {
    res.status(200).json("Success");
  };
}