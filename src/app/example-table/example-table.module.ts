import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleTableComponent } from './example-table.component';
import { TableModule } from '@all-knowledge/shared/components/table/table.module';

@NgModule({
  declarations: [
    ExampleTableComponent
  ],
  exports: [
    ExampleTableComponent
  ],
  imports: [
    // Angular Core
    CommonModule,

    // App
    TableModule,
  ]
})
export class ExampleTableModule { }
