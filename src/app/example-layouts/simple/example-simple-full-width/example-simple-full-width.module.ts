import { DrawerModule } from '@all-knowledge/shared/components/drawer/drawer.module';
import { SimpleFullWidthModule } from '@all-knowledge/shared/components/page-layouts/simple/simple-full-width/simple-full-width.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule } from '@ngx-translate/core';
import { ExampleDrawerComponent } from './example-drawer/example-drawer.component';
import { ExampleSimpleFullWidthRoutingModule } from './example-simple-full-width-routing.module';
import { ExampleSimpleFullWidthComponent } from './example-simple-full-width.component';

@NgModule({
  declarations: [
    ExampleSimpleFullWidthComponent,
    ExampleDrawerComponent,
  ],
  exports: [
    ExampleDrawerComponent
  ],
  entryComponents: [
    ExampleDrawerComponent
  ],
  imports: [
    CommonModule,
    ExampleSimpleFullWidthRoutingModule,

    SimpleFullWidthModule,
    TranslateModule,
    DrawerModule,

    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
})
export class ExampleSimpleFullWidthModule { }
