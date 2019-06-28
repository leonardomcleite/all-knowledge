import { SimpleTabbedModule } from '@all-knowledge/shared/components/page-layouts/simple/simple-tabbed/simple-tabbed.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { ExampleSimpleTabbedRoutingModule } from './example-simple-tabbed-routing.module';
import { ExampleSimpleTabbedComponent } from './example-simple-tabbed.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from '@all-knowledge/shared/components/card/card.module';
import { MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ExampleSimpleTabbedRoutingModule,

    SimpleTabbedModule,
    CardModule,
    TranslateModule,

    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ],
  declarations: [
    ExampleSimpleTabbedComponent
  ]
})
export class ExampleSimpleTabbedModule { }
