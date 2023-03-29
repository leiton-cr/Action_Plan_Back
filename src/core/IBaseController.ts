import { IBaseService } from "./IBaseService";

export interface IBaseController {

    service: IBaseService;

    getAll: Function;
    getOne: Function;
    delete: Function;

}