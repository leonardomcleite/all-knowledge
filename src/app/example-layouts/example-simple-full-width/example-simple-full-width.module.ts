import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleSimpleFullWidthComponent } from './example-simple-full-width.component';
import { MatIconModule, MatButtonModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { ExampleSimpleFullWidthRoutingModule } from './example-simple-full-width-routing.module';
import { SimpleFullWidthModule } from '@all-knowledge/shared/components/page-layouts/simple/simple-full-width/simple-full-width.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ExampleSimpleFullWidthComponent],
  imports: [
    CommonModule,
    ExampleSimpleFullWidthRoutingModule,

    SimpleFullWidthModule,
    TranslateModule,

    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
  ]
})
export class ExampleSimpleFullWidthModule { }
