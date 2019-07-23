import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material';
import { MatChipsModule } from '@angular/material/chips';
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
    // Angular Core
    CommonModule,
    RouterModule,

    // Angular Material
    MatChipsModule,
    MatIconModule,

    // Ngx Translate
    TranslateModule,
  ],
  providers: [
    MenuService
  ],
})
export class MenuModule { }
