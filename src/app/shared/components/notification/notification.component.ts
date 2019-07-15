import { OptionsNotificationModel } from '@all-knowledge/core/models/options-notifications.model';
import { Component } from '@angular/core';
import { MatSnackBarRef } from '@angular/material';

@Component({
  selector: 'ak-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent {

  options: OptionsNotificationModel;

  constructor(
    public snackBarRef: MatSnackBarRef < NotificationComponent >
  ) {
    this.options = snackBarRef.containerInstance.snackBarConfig.data.options;
  }

  closeSnackBarMensagem() {
    this.snackBarRef.dismiss();
  }

}
