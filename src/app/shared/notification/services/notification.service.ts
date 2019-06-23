import { Injectable, OnDestroy } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { OptionsNotification } from 'src/app/core/models/options-notifications.model';
import { NotificationComponent } from '../notification.component';
import { Subject } from 'rxjs/internal/Subject';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';

@Injectable()
export class NotificationService implements OnDestroy {

  private snackQueue: Array<any> = Array<any>();
  private isInstanceVisible = false;
  private subject: Subject<void> = new Subject<void>();
  private close = new ReplaySubject<any>(1);
  closeNotification = this.close.asObservable();

  constructor(
    public snackBar: MatSnackBar,
    public dom: DomSanitizer,
  ) {}

  ngOnDestroy(): void {
    this.subject.next();
    this.subject.complete();
    this.subject.unsubscribe();
  }

  error(option: any) {
    const options: OptionsNotification = new OptionsNotification();
    options.title = option.title;
    options.message = option.message;
    options.type =  'error',
    options.actionLabel =  'btn.fechar',
    options.error =  option.error,
    options.verticalPosition =  'top',
    options.horizontalPosition =  'right',
    options.time =  null,
    options.showAction =  true,
    options.callbackAction =  (ret) => {
      console.log(ret);
      if (option.callbackAction && option.callbackAction instanceof Function) {
        option.callbackAction(ret);
      }
    };
    this.notification(options);
  }

  notification(options: OptionsNotification) {
    this.snackQueue.push(options);

    if (!this.isInstanceVisible) {
      this.showNext();
    }
  }

  showNext(): any {
    if (this.snackQueue.length === 0) { return; }

    const options = this.snackQueue.shift();
    this.isInstanceVisible = true;

    const snackBarRef = this.snackBar.openFromComponent(NotificationComponent, this.createConfigSnackbar(options));
    snackBarRef.afterDismissed().subscribe(returnSnackBar => {
      this.close.next(options);
      this.isInstanceVisible = false;
      this.showNext();
      if (options.callbackAction && options.callbackAction instanceof Function) {
        options.callbackAction(options);
      }
    });
  }

  createConfigSnackbar(options: OptionsNotification) {
    const config = new MatSnackBarConfig();
    config.duration = options.time;
    config.verticalPosition = options.verticalPosition;
    config.horizontalPosition = options.horizontalPosition;
    config.data = {
      options: options
    };
    return config;
  }

}
