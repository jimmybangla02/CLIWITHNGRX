import { HttpParams } from '@angular/common/http';

export interface IApiGetModel {
  readonly path: string;
  readonly params?: HttpParams;
}
