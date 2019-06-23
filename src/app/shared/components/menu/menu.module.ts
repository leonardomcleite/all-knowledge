import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MenuComponent } from './menu.component';
import { MenuService } from './services/menu.service';

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
    TranslateModule
  ],
  providers: [
    MenuService
  ],
})
export class MenuModule { }
