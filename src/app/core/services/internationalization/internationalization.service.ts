import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs/internal/Observable';
import * as ptBR from '../../../../assets/i18n/pt-BR.json';
import { environment } from '@all-knowledge/env/environment.js';

@Injectable()
export class InternationalizationService {

  constructor(
    private translateService: TranslateService
  ) {}

  init() {
    let translates: any;
    translates = JSON.parse(JSON.stringify(ptBR));
    this.translateService.setTranslation(environment.defaultLanguage , translates.default);
    this.language = environment.defaultLanguage;
  }

  set language(language: string) {
    this.translateService.use(language);
  }

  translate(value: string): Observable<any> {
    return this.translateService.get(value);
  }

}
