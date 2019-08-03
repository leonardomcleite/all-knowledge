import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { InputModule } from '../input/input.module';
import { SelectModule } from '../select/select.module';
import { TableComponent } from './table.component';

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
