import { HttpErrorResponse } from '@angular/common/http';
import { NotificationType } from './notification.model';

export type TypesVerticalPosition = 'top' | 'bottom';
export type TypesHorizontalPosition = 'start' | 'center' | 'end' | 'left' | 'right';

export class OptionsNotificationModel {
  title: string;
  message: string;
  type: NotificationType;
  actionLabel?: string = 'botao.fechar';
  showAction: boolean = true;
  verticalPosition: TypesVerticalPosition;
  horizontalPosition: TypesHorizontalPosition;
  time?: number;
  callbackAction?: Function;
  error?: HttpErrorResponse;
  killPrevious: boolean = true;
}
