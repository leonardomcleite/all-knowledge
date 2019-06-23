import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleSimpleTabbedComponent } from './example-simple-tabbed.component';
import { ExampleSimpleTabbedRoutingModule } from './example-simple-tabbed-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material';
import { SimpleTabbedModule } from '@all-knowledge/shared/components/page-layouts/simple/simple-tabbed/simple-tabbed.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    ExampleSimpleTabbedRoutingModule,

    SimpleTabbedModule,
    TranslateModule,

    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTabsModule
  ],
  declarations: [
    ExampleSimpleTabbedComponent
  ]
})
export class ExampleSimpleTabbedModule { }
