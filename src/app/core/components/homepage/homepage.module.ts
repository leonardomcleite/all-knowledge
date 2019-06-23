import { SimpleFullWidthModule } from '@all-knowledge/shared/components/page-layouts/simple/simple-full-width/simple-full-width.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,

    TranslateModule,

    SimpleFullWidthModule,
  ]
})
export class HomepageModule { }
