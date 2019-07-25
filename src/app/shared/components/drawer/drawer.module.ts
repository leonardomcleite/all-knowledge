import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { DrawerComponent } from './drawer.component';
import { FactoryService } from '@all-knowledge/core/services/factory/factory.service';
import { DrawerService } from './drawer.service';

@NgModule({
  declarations: [
    DrawerComponent,
  ],
  exports: [
    DrawerComponent,
  ],
  entryComponents: [
    DrawerComponent
  ],
  imports: [
    // Angular Core
    CommonModule,

    // Ngx Translate
    TranslateModule,

    // Angular Material
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    FactoryService,
    DrawerService
  ]
})
export class DrawerModule { }
