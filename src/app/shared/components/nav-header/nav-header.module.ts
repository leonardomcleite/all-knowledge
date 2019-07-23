import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavHeaderComponent } from './nav-header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavHeaderComponent
  ],
  exports: [
    NavHeaderComponent
  ],
  imports: [
    // Angular Core
    CommonModule,
    RouterModule,

    // Angular Material
    MatButtonModule,
    MatIconModule,
  ]
})
export class NavHeaderModule { }
