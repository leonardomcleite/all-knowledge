import { CardedFullWidthModule } from '@all-knowledge/shared/components/page-layouts/carded/carded-full-width/carded-full-width.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { ExampleCardedFullWidthRoutingModule } from './example-carded-full-width-routing.module';
import { ExampleCardedFullWidthComponent } from './example-carded-full-width.component';

@NgModule({
  declarations: [ExampleCardedFullWidthComponent],
  imports: [
    CommonModule,
    ExampleCardedFullWidthRoutingModule,

    CardedFullWidthModule,
    TranslateModule,

    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
  ]
})
export class ExampleCardedFullWidthModule { }
