import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { APIDeleteModel } from './api-delete.model';
import { IApiGetModel } from './api-get.model';
import { IApiPostModel } from './api-post.model';
import { APIPutModel } from './api-put.model';
import { isNil } from 'ramda';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) {
    this.http = http;
  }

  private createURL(path: string): string {
    return `${environment.apiUrl}${path}`;
  }

  get<T>(model: IApiGetModel): Observable<T> {
    const url = this.createURL(model.path);
    return this.http.get<T>(url, { params: model.params });
  }

  post<T>(model: IApiPostModel): Observable<T> {
    const url = this.createURL(model.path);
    // prod env requires body to not be null so we send an empty JSON object
    if (isNil(model.body)) {
      model.body = {};
    }
    return this.http.post<T>(url, model.body, { params: model.params });
  }

  put<T>(model: APIPutModel): Observable<T> {
    const url = this.createURL(model.path);
    return this.http.put<T>(url, model.body, { params: model.params });
  }

  delete<T>(model: APIDeleteModel): Observable<T> {
    const url = this.createURL(model.path);
    return this.http.delete<T>(url, { params: model.params });
  }
}
