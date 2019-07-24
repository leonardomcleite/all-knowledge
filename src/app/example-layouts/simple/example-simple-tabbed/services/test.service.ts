import { HttpParamsDynamic } from '@all-knowledge/core/helpers/http-params-dynamic';
import { RestClient } from '@all-knowledge/core/services/base-service/rest-client.service';
import { REST_PATH } from '@all-knowledge/core/services/base-service/rest-paths';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';

@Injectable()
export class TestService {

  constructor(
    private restClient: RestClient,
  ) {}

  findAll() {
    const requestParams = HttpParamsDynamic({ordem: 'ASC', ordenarPor: 'nome'});
    return this.restClient.get(REST_PATH.exampleLayouts.findAll, [], {params: requestParams});
  }

  findById(id: number) {
    return this.restClient.get(REST_PATH.exampleLayouts.findById, [id.toString()]).pipe(
      map((returnQuery: any) => {
        return returnQuery.dados;
      })
    );
  }

}
