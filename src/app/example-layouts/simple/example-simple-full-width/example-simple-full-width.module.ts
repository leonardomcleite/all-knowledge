import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleSimpleFullWidthComponent } from './example-simple-full-width.component';
import { ExampleSimpleFullWidthRoutingModule } from './example-simple-full-width-routing.module';
import { SimpleFullWidthModule } from '@all-knowledge/shared/components/page-layouts/simple/simple-full-width/simple-full-width.module';
import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [ExampleSimpleFullWidthComponent],
  imports: [
    CommonModule,
    ExampleSimpleFullWidthRoutingModule,

    SimpleFullWidthModule,
    TranslateModule,

    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
  ]
})
export class ExampleSimpleFullWidthModule { }
