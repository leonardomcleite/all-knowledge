import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { OptionComponent } from './option/option.component';
import { SelectComponent } from './select.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    SelectComponent,
    OptionComponent
  ],
  exports: [
    SelectComponent,
    OptionComponent
  ],
  imports: [
    // Angular Core
    CommonModule,
    ReactiveFormsModule,

    // Ngx Translate
    TranslateModule,

    // Angular Material
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
  ]
})
export class SelectModule { }
