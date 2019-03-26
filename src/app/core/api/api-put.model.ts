import { HttpParams } from '@angular/common/http';

export interface APIPutModel {
  readonly path: string;
  readonly params?: HttpParams;
  readonly body?: any;
}
