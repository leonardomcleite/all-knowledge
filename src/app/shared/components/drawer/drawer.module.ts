import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { DrawerComponent } from './drawer.component';

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

    // Angular Material
    MatButtonModule,
    MatIconModule
  ],
})
export class DrawerModule { }
