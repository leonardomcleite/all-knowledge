import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaskNumberDirective } from './mask-number.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MaskNumberDirective
  ],
  exports: [
    MaskNumberDirective
  ],
  providers: [],
})
export class MaskNumberModule {}
