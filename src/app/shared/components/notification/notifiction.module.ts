import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslateModule } from '@ngx-translate/core';
import { NotificationComponent } from './notification.component';
import { NotificationService } from './services/notification.service';

@NgModule({
  imports: [
    // Angular
    CommonModule,
    FormsModule,

    // Ngx Translate
    TranslateModule,

    // Angular Material
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  declarations: [
    NotificationComponent
  ],
  entryComponents: [
    NotificationComponent
  ],
  providers: [
    NotificationService
  ]
})
export class NotificationModule { }
