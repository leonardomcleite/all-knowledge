import { environment } from '@all-knowledge/env/environment.js';
import { Injectable } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';

@Injectable()
export class InternationalizationService {

  public onLangChange: Subject<any> = new Subject<any>();

  constructor(
    private translateService: TranslateService
  ) {}

  /**
   * Inicializar o tradutor
   */
  public init() {
    this.translateService.setDefaultLang(environment.defaultLanguage);
    this.translateService.use(environment.defaultLanguage);

    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.onLangChange.next(event.lang);
    });
  }

  /**
   * Tradutor
   * @param value - Frase, palavra
   */
  public translate(value: string): Observable<any> {
    return this.translateService.get(value);
  }

  /**
   * Setar o idioma nativo para tradução
   */
  public changeLanguage(language) {
    this.translateService.use(language);
  }

  public instant(key: string | Array<string>, interpolateParams?: Object): string | any {
    return this.translateService.instant(key, interpolateParams);
  }

}
