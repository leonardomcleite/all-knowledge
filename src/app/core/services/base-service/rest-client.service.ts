import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { RequestMethod } from '../../enums/requst-method.enum';
import { PathModel } from '../../models/path.model';
import { CustomHttpEventObserverService } from './custom-http-event-observer.service';
import { RESTClientBuilder } from './rest-client.builder';
import { HandleErrorService } from './handle-error.service';

@Injectable({
  providedIn: 'root'
})
export class RestClient {

  constructor(
    protected http: HttpClient,
    public customHttpEventObserverService: CustomHttpEventObserverService,
    public router: Router,
    public handleErrorService: HandleErrorService,
  ) {}

  public request(method: any) {
    if (typeof method === 'string') {
      method = RequestMethod[method];
    }
    return new RESTClientBuilder(this.http, method as RequestMethod, this.customHttpEventObserverService, this.router, this.handleErrorService);
  }

  public get<T>(path: string | PathModel, pathParams: Array<string>, queryOptions ?: any): Observable <T> {
    const request = this.request(RequestMethod.Get).url(path).buildPathParams(pathParams).addOptions(queryOptions);
    const customCatchError = queryOptions && queryOptions.customCatchError ? true : false;
    return request.send(customCatchError);
  }

  public post<T>(path: string | PathModel, body: any, pathParams: Array<string>, queryOptions ?: any): Observable <T> {
    const request = this.request(RequestMethod.Post).url(path).buildPathParams(pathParams).addOptions(queryOptions);
    const customCatchError = queryOptions && queryOptions.customCatchError ? true : false;
    return request.body(body).send(customCatchError);
  }

  public put<T>(path: string | PathModel, body: any, pathParams: Array<string>, queryOptions ?: any): Observable <T> {
    const request = this.request(RequestMethod.Put).url(path).buildPathParams(pathParams).addOptions(queryOptions);
    const customCatchError = queryOptions && queryOptions.customCatchError ? true : false;
    return request.body(body).send(customCatchError);
  }

  public delete<T>(path: string | PathModel, pathParams: Array<string>, queryOptions ?: any): Observable <T> {
    const request = this.request(RequestMethod.Delete).url(path).buildPathParams(pathParams).addOptions(queryOptions);
    const customCatchError = queryOptions && queryOptions.customCatchError ? true : false;
    return request.send(customCatchError);
  }

  public patch<T>(path: string | PathModel, body: any, pathParams: Array<string>, queryOptions ?: any): Observable <T> {
    const request = this.request(RequestMethod.Patch).url(path).buildPathParams(pathParams).addOptions(queryOptions);
    const customCatchError = queryOptions && queryOptions.customCatchError ? true : false;
    return request.body(body).send(customCatchError);
  }

}
