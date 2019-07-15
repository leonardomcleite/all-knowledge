import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaskDateDirective } from './mask-date.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MaskDateDirective
  ],
  exports: [
    MaskDateDirective
  ],
  providers: [],
})
export class MaskDateModule {}
