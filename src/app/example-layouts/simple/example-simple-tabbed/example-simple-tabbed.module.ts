import { ExampleTableModule } from '@all-knowledge/example-table/example-table.module';
import { CardModule } from '@all-knowledge/shared/components/card/card.module';
import { InputModule } from '@all-knowledge/shared/components/input/input.module';
import { NotificationModule } from '@all-knowledge/shared/components/notification/notifiction.module';
import { SimpleTabbedModule } from '@all-knowledge/shared/components/page-layouts/simple/simple-tabbed/simple-tabbed.module';
import { SingletonModule } from '@all-knowledge/singleton/singleton.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { ExampleDrawerComponent } from './example-drawer/example-drawer.component';
import { ExampleSimpleTabbedRoutingModule } from './example-simple-tabbed-routing.module';
import { ExampleSimpleTabbedComponent } from './example-simple-tabbed.component';
import { TestService } from './services/test.service';

@NgModule({
  declarations: [
    ExampleSimpleTabbedComponent,
    ExampleDrawerComponent,
  ],
  exports: [
    ExampleDrawerComponent
  ],
  entryComponents: [
    ExampleDrawerComponent
  ],
  imports: [
    // Angular Core
    CommonModule,
    ReactiveFormsModule,

    // App
    ExampleSimpleTabbedRoutingModule,
    SimpleTabbedModule,
    CardModule,
    InputModule,
    NotificationModule,
    ExampleTableModule,

    // Ngx Tranlate
    TranslateModule,

    // Angular Material
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
  ],
  providers: [
    TestService
  ]
})
export class ExampleSimpleTabbedModule { }
