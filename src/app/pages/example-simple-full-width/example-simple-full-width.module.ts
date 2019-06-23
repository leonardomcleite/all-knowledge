import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleSimpleFullWidthComponent } from './example-simple-full-width.component';
import { SimpleFullWidthModule } from 'src/app/shared/page-layouts/simple/simple-full-width/simple-full-width.module';
import { MatIconModule, MatButtonModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { ExampleSimpleFullWidthRoutingModule } from './example-simple-full-width-routing.module';

@NgModule({
  declarations: [ExampleSimpleFullWidthComponent],
  imports: [
    CommonModule,
    ExampleSimpleFullWidthRoutingModule,

    SimpleFullWidthModule,

    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
  ]
})
export class ExampleSimpleFullWidthModule { }
