import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardedFullWidthComponent } from './carded-full-width.component';
import { CardedFullWidthContentComponent } from './carded-full-width-content/carded-full-width-content.component';
import { CardedFullWidthHeaderComponent } from './carded-full-width-header/carded-full-width-header.component';

@NgModule({
  declarations: [
    CardedFullWidthComponent,
    CardedFullWidthContentComponent,
    CardedFullWidthHeaderComponent
  ],
  exports: [
    CardedFullWidthComponent,
    CardedFullWidthContentComponent,
    CardedFullWidthHeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CardedFullWidthModule { }
