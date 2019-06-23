import { Component, ViewEncapsulation } from '@angular/core';
import { MatSnackBarRef } from '@angular/material';

@Component({
  selector: 'ak-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NotificationComponent {

  options: any;

  constructor(
    public snackBarRef: MatSnackBarRef < NotificationComponent >
  ) {
    this.options = snackBarRef.containerInstance.snackBarConfig.data.options;
  }

  closeSnackBarMensagem() {
    this.snackBarRef.dismiss();
  }
}
