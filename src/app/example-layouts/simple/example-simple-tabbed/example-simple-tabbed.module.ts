import { SimpleTabbedModule } from '@all-knowledge/shared/components/page-layouts/simple/simple-tabbed/simple-tabbed.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule } from '@ngx-translate/core';
import { ExampleSimpleTabbedRoutingModule } from './example-simple-tabbed-routing.module';
import { ExampleSimpleTabbedComponent } from './example-simple-tabbed.component';

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
