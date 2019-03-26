import { IApiGetModel } from './api-get.model';

export interface IApiPostModel extends IApiGetModel {
  body?: any;
}
