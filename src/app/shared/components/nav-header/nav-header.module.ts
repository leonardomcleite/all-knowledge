import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavHeaderComponent } from './nav-header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    NavHeaderComponent
  ],
  exports: [
    NavHeaderComponent
  ],
  imports: [
    CommonModule,

    MatButtonModule,
    MatIconModule,
  ]
})
export class NavHeaderModule { }
