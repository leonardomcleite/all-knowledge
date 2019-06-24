import { CardedTabbedModule } from '@all-knowledge/shared/components/page-layouts/carded/carded-tabbed/carded-tabbed.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule } from '@ngx-translate/core';
import { ExampleCardedTabbedRoutingModule } from './example-carded-tabbed-routing.module';
import { ExampleCardedTabbedComponent } from './example-carded-tabbed.component';

@NgModule({
  declarations: [ExampleCardedTabbedComponent],
  imports: [
    CommonModule,
    ExampleCardedTabbedRoutingModule,

    CardedTabbedModule,
    TranslateModule,

    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTabsModule
  ]
})
export class ExampleCardedTabbedModule { }
