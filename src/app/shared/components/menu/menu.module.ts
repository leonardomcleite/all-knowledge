import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MenuComponent } from './menu.component';
import { MenuService } from './services/menu.service';
import { MatIconModule } from '@angular/material';

@NgModule({
  declarations: [
    MenuComponent,
  ],
  exports: [
    MenuComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,

    MatChipsModule,
    MatIconModule
  ],
  providers: [
    MenuService
  ],
})
export class MenuModule { }
