import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerComponent } from './drawer.component';
import { MatButtonModule } from '@angular/material';
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
    // Angular
    CommonModule,

    // Angular Material
    MatButtonModule
  ],
  providers: [
    DrawerService
  ]
})
export class DrawerModule { }
