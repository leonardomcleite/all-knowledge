import { OptionsNotificationModel } from '@all-knowledge/core/models/options-notifications.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { Subscription } from 'rxjs/internal/Subscription';
import { NotificationComponent } from '../notification.component';

@Injectable()
export class NotificationService implements OnDestroy {

  private snackQueue: Array<OptionsNotificationModel> = Array<OptionsNotificationModel>();
  private unsubscribe: Array<Subscription> = new Array<Subscription>();
  private isInstanceVisible = false;

  private close = new ReplaySubject<OptionsNotificationModel>(1);
  /**
   * Observable para quando algum notification for fechado
   */
  public closeNotification = this.close.asObservable();

  constructor(
    private snackBar: MatSnackBar,
  ) {}

  ngOnDestroy(): void {
    if (this.unsubscribe != null && this.unsubscribe.length > 0) {
      this.unsubscribe.forEach(element => {
        element.unsubscribe();
      });
    }
  }

  /**
   * Notificação de erro
   * @param title - Titilo da notificação
   * @param message - Mensagem da notificação
   * @param callback - Função para quando for executada alguma ação da notificação
   * @param error - Erro retornado do REQUEST
   */
  public error(title: string, message: string, callback?: (ret: any) => void, error?: HttpErrorResponse) {
    const options: OptionsNotificationModel = new OptionsNotificationModel();
    options.title = title;
    options.message = message;
    options.type =  'error';
    options.showAction =  true;
    options.actionLabel =  'btn.fechar';
    options.error =  error;
    // Notificação de erro não fecha sozinha, logo o tempo é setado como nulo
    options.time =  null;
    if (callback != null) {
      options.callbackAction = (ret) => {
        callback(ret);
      };
    }
    this.newNotification(options);
  }

  /**
   * Notificação de sucesso
   * @param title - Titilo da notificação
   * @param message - Mensagem da notificação
   * @param callback - Função para quando for executada alguma ação da notificação
   */
  public success(title: string, message: string, callback?: (ret: any) => void) {
    const options: OptionsNotificationModel = new OptionsNotificationModel();
    options.title = title;
    options.message = message;
    options.type =  'success';
    options.showAction =  true;
    options.actionLabel =  'btn.fechar';
    if (callback != null) {
      options.callbackAction = (ret) => {
        callback(ret);
      };
    }
    this.newNotification(options);
  }

  /**
   * Notificação de alerta
   * @param title - Titilo da notificação
   * @param message - Mensagem da notificação
   * @param callback - Função para quando for executada alguma ação da notificação
   */
  public warning(title: string, message: string, callback?: (ret: any) => void) {
    const options: OptionsNotificationModel = new OptionsNotificationModel();
    options.title = title;
    options.message = message;
    options.type =  'warning';
    options.showAction =  true;
    options.actionLabel =  'btn.fechar';
    if (callback != null) {
      options.callbackAction = (ret) => {
        callback(ret);
      };
    }
    this.newNotification(options);
  }

  /**
   * Notificação de informação
   * @param title - Titilo da notificação
   * @param message - Mensagem da notificação
   * @param callback - Função para quando for executada alguma ação da notificação
   */
  public information(title: string, message: string, callback?: (ret: any) => void) {
    const options: OptionsNotificationModel = new OptionsNotificationModel();
    options.title = title;
    options.message = message;
    options.type =  'information';
    options.showAction =  true;
    options.actionLabel =  'btn.fechar';
    if (callback != null) {
      options.callbackAction = (ret) => {
        callback(ret);
      };
    }
    this.newNotification(options);
  }

  /**
   * Notificação configurável
   * @param options - Opções de exibição da notificação
   */
  public newNotification(options: OptionsNotificationModel) {
    this.snackQueue.push(options);

    if (!this.isInstanceVisible) {
      this.showNext();
    }
  }

  /**
   * Coloca as notificações na fila de exibição
   */
  private showNext(): void {
    if (this.snackQueue.length === 0) { return; }

    const options = this.snackQueue.shift();
    this.isInstanceVisible = true;

    const snackBarRef = this.snackBar.openFromComponent(NotificationComponent, this.createConfigSnackbar(options));
    this.unsubscribe.push(snackBarRef.afterDismissed().subscribe(() => {
      this.close.next(options);
      this.isInstanceVisible = false;
      this.showNext();
      if (options.callbackAction && options.callbackAction instanceof Function) {
        options.callbackAction(options);
      }
    }));
  }

  /**
   * Configurações para o componente do Angular Material
   * @param optionsNotf - Configurações da notificação
   */
  private createConfigSnackbar(optionsNotf: OptionsNotificationModel) {
    const config = new MatSnackBarConfig();
    config.duration = optionsNotf.time ? optionsNotf.time : 3000;
    config.verticalPosition = optionsNotf.verticalPosition ? optionsNotf.verticalPosition : 'top';
    config.horizontalPosition = optionsNotf.horizontalPosition ? optionsNotf.horizontalPosition : 'right';
    config.data = {
      options: optionsNotf
    };
    return config;
  }

}
