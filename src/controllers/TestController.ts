import BaseController from "../core/BaseController";
import { TestModel } from "../models/TestModel";

import TestService from "../service/TestService";

export default class TestController extends BaseController<TestModel> {

  constructor() {
    super();
    this.service = new TestService()
  }

}