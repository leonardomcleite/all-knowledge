import { HttpParamsDynamic } from '@all-knowledge/core/services/base-service/http-params-dynamic';
import { RestClient } from '@all-knowledge/core/services/base-service/rest-client.service';
import { REST_PATH } from '@all-knowledge/core/services/base-service/rest-paths';
import { Injectable } from '@angular/core';

@Injectable()
export class TestService {

  constructor(
    private restClient: RestClient,
  ) {}

  get() {
    const requestParams = HttpParamsDynamic({ordem: 'ASC', ordenarPor: 'nome'});
    return this.restClient.get(REST_PATH.exampleLayouts.findAll, {params: requestParams});
  }

}
