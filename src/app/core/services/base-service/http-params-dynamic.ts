import { HttpParams } from '@angular/common/http';
import moment from 'moment';

export function append(params: any, httpParams: HttpParams, condicoes: Array < any > , path: string[] = []) {
  if (params != null) {
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        path.push(key);
        if (!(params[key] instanceof Date) && typeof params[key] === 'object') {
          httpParams = append(params[key], httpParams, condicoes, path);
        } else if (params[key] != null && params[key] !== '' && !condicoes.some(e => e === params[key])) {
          httpParams = httpParams.append(path.join('.'), params[key] instanceof Date ? moment(params[key]).format('YYYY-MM-DD') : params[key].toString());
        }
        path.pop();
      }
    }
    path.pop();
  }
  return httpParams;
}


/**
 * HttpParamsDynamic
 * @param params Objeto dos parametros a serem setados
 * @param condicoes Array de valores, que não deverão ser setados no HttpParams (Ja esta sendo excluidos: null, undefined e string vazia)
 */
export const HttpParamsDynamic = (params: any, condicoes ?: Array < any > ): HttpParams => {

  condicoes = condicoes || [];
  let httpParams = new HttpParams();
  httpParams = append(params, httpParams, condicoes, []);
  return httpParams;

};
