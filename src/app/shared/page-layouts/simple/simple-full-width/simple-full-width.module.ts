import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SimpleFullWidthComponent } from './simple-full-width.component';
import { SimpleFullWidthHeaderComponent } from './simple-full-width-header/simple-full-width-header.component';
import { SimpleFullWidthContentComponent } from './simple-full-width-content/simple-full-width-content.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SimpleFullWidthComponent,
    SimpleFullWidthHeaderComponent,
    SimpleFullWidthContentComponent
  ],
  exports: [
    SimpleFullWidthComponent,
    SimpleFullWidthHeaderComponent,
    SimpleFullWidthContentComponent
  ]
})
export class SimpleFullWidthModule { }
