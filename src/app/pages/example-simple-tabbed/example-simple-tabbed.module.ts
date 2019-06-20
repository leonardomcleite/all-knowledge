import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleSimpleTabbedComponent } from './example-simple-tabbed.component';
import { SimpleTabbedModule } from '../../shared/page-layouts/simple/simple-tabbed/simple-tabbed.module';
import { ExampleSimpleTabbedRoutingModule } from './example-simple-tabbed-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    CommonModule,
    SimpleTabbedModule,
    ExampleSimpleTabbedRoutingModule,

    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  declarations: [
    ExampleSimpleTabbedComponent
  ]
})
export class ExampleSimpleTabbedModule { }
