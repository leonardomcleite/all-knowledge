import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaskDirective } from './mask.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MaskDirective
  ],
  exports: [
    MaskDirective
  ],
  providers: [],
})
export class MaskModule {}
