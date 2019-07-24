import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { TableComponent } from './table.component';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { InputModule } from '../input/input.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from '../select/select.module';

@NgModule({
  declarations: [
    TableComponent
  ],
  exports: [
    TableComponent
  ],
  imports: [
    // Angular Core
    CommonModule,
    ReactiveFormsModule,

    // App
    InputModule,
    SelectModule,

    // Ngx Translate
    TranslateModule,

    // Angular Material
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ]
})
export class TableModule { }
