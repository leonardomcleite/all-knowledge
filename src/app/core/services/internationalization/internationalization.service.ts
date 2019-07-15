import { environment } from '@all-knowledge/env/environment.js';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs/internal/Observable';
import * as ptBR from '../../../../assets/i18n/pt-BR.json';

@Injectable()
export class InternationalizationService {

  /**
   * Setar o idioma nativo para tradução
   */
  public set language(language: string) {
    this.translateService.use(language);
  }

  constructor(
    private translateService: TranslateService
  ) {}

  /**
   * Inicializar o tradutor
   */
  public init() {
    let translates: any;
    translates = JSON.parse(JSON.stringify(ptBR));
    this.translateService.setTranslation(environment.defaultLanguage , translates.default);
    this.language = environment.defaultLanguage;
  }

  /**
   * Tradutor
   * @param value - Frase, palavra
   */
  public translate(value: string): Observable<any> {
    return this.translateService.get(value);
  }

}
