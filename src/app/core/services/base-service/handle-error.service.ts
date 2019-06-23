import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Subject } from 'rxjs/internal/Subject';
import { InternationalizationService } from '../internationalization/internationalization.service';

@Injectable()
export class HandleErrorService {

  public unsubscribe = new Subject();

  constructor(
    private router: Router,
    private inter: InternationalizationService,
  ) {}

  handleError(err: any, customCatchError: boolean) {
    // Se erro for por falta de permisão, redirecionar para página não autorizado
    if (err.status === 401) {
      this.exibirMensagemDeErro(err);
      this.router.navigate(['']);
      this.breakCatchErros();
      return throwError(err);
    }

    if (!customCatchError) {
      // Se erro for com arquivo
      if (err.error instanceof Blob) {
        // Instanciar um leitor de arquivos
        const fileReader = new FileReader();

        // Carrega o arquivo
        fileReader.onload = (e: Event) => {
          // Pega a mensagem de erro
          const errmsg = JSON.parse((e.target as any).result);
          this.exibirMensagemDeErro(err, errmsg);
        };
        fileReader.readAsText(err.error);
        return throwError(err);
      }

      // Se não for nenhum dos erros acima tratados
      this.exibirMensagemDeErro(err);
    }
    return throwError(err);
  }

  breakCatchErros() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    this.unsubscribe.unsubscribe();
    this.unsubscribe = new Subject();
  }

  private exibirMensagemDeErro(error: any, customMessage?: any) {
    // message = message != null ? message : this.msgDefault;
    // this.inter.translate(message).subscribe(translate => {
    //   this.msgService.msgErro(translate);
    // });
  }

}
