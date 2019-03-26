import { HttpParams } from '@angular/common/http';

export interface APIDeleteModel {
  readonly path: string;
  readonly params?: HttpParams;
}
