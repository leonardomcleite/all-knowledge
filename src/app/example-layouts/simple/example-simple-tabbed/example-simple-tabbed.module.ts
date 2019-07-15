import { CardModule } from '@all-knowledge/shared/components/card/card.module';
import { InputModule } from '@all-knowledge/shared/components/input/input.module';
import { SimpleTabbedModule } from '@all-knowledge/shared/components/page-layouts/simple/simple-tabbed/simple-tabbed.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatDatepickerModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { ExampleSimpleTabbedRoutingModule } from './example-simple-tabbed-routing.module';
import { ExampleSimpleTabbedComponent } from './example-simple-tabbed.component';

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
    MatCardModule,

    InputModule,
  ],
  declarations: [
    ExampleSimpleTabbedComponent
  ]
})
export class ExampleSimpleTabbedModule { }
