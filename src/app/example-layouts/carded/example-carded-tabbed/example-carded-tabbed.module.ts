import { CardModule } from '@all-knowledge/shared/components/card/card.module';
import { InputModule } from '@all-knowledge/shared/components/input/input.module';
import { CardedTabbedModule } from '@all-knowledge/shared/components/page-layouts/carded/carded-tabbed/carded-tabbed.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { ExampleCardedTabbedRoutingModule } from './example-carded-tabbed-routing.module';
import { ExampleCardedTabbedComponent } from './example-carded-tabbed.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ExampleCardedTabbedComponent
  ],
  imports: [
    // Angular
    CommonModule,
    ReactiveFormsModule,

    // App
    ExampleCardedTabbedRoutingModule,
    CardedTabbedModule,
    TranslateModule,
    CardModule,
    InputModule,

    // Ngx Tranlate
    TranslateModule,

    // Angular Material
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
  ]
})
export class ExampleCardedTabbedModule { }
