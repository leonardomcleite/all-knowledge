import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SobreRoutingModule } from './sobre-routing.module';
import { SobreComponent } from './sobre.component';
import { SimpleFullWidthModule } from '@all-knowledge/shared/components/page-layouts/simple/simple-full-width/simple-full-width.module';

@NgModule({
  declarations: [SobreComponent],
  imports: [
    CommonModule,
    SobreRoutingModule,

    SimpleFullWidthModule,

    TranslateModule,
  ]
})
export class SobreModule { }
