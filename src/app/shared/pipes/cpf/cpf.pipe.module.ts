import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpfPipe } from './cpf.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CpfPipe
  ],
  exports: [
    CpfPipe
  ],
  providers: [
    CpfPipe
  ],
})
export class CpfPipeModule {}
