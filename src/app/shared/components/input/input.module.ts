import { MaskDateModule } from '@all-knowledge/shared/directives/mask-date/mask-date.module';
import { MaskNumberModule } from '@all-knowledge/shared/directives/mask-number/mask-number.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { TranslateModule } from '@ngx-translate/core';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { InputComponent } from './input.component';

export let options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  declarations: [
    InputComponent
  ],
  exports: [
    InputComponent
  ],
  imports: [
    // Angular
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,

    // Angular Material
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatMomentDateModule,

    // Angular 2 Input Mask
    NgxMaskModule.forRoot(options),

    // App
    MaskNumberModule,
    MaskDateModule
  ]
})
export class InputModule { }
