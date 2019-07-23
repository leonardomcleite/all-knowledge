import { SimpleFullWidthModule } from '@all-knowledge/shared/components/page-layouts/simple/simple-full-width/simple-full-width.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule } from '@ngx-translate/core';
import { ExampleSimpleFullWidthRoutingModule } from './example-simple-full-width-routing.module';
import { ExampleSimpleFullWidthComponent } from './example-simple-full-width.component';

@NgModule({
  declarations: [
    ExampleSimpleFullWidthComponent,
  ],
  imports: [
    // Angular Core
    CommonModule,

    // App
    ExampleSimpleFullWidthRoutingModule,
    SimpleFullWidthModule,

    // Ngx Translate
    TranslateModule,

    // Angular Material
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
})
export class ExampleSimpleFullWidthModule { }
