import { NotificationService } from '@all-knowledge/shared/components/notification/services/notification.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Subject } from 'rxjs/internal/Subject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class HandleErrorService {

  public unsubscribe = new Subject();

  constructor(
    private router: Router,
    private notificationService: NotificationService
  ) {}

  getErrorByCode(err: any, customCatchError: boolean): Observable<any> {
    // Se erro for timeout
    if (err.name === 'TimeoutError') {
      this.exibirMensagemDeErro(err, 'erro.timeout');
      this.breakCatchErros();
      return throwError(err);
    }

    // Se erro for por falta de permisão, redirecionar para página não autorizado
    if (err.status === 401) {
      this.exibirMensagemDeErro(err, 'erro.401');
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
    const message = customMessage != null ? customMessage : error.message;
    this.notificationService.error(`label.erro`, message);
  }

}
