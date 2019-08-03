import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { TranslateModule } from '@ngx-translate/core';
import { SimpleTabbedContentComponent } from './simple-tabbed-content/simple-tabbed-content.component';
import { SimpleTabbedHeaderComponent } from './simple-tabbed-header/simple-tabbed-header.component';
import { SimpleTabbedItemComponent } from './simple-tabbed-item/simple-tabbed-item.component';
import { SimpleTabbedComponent } from './simple-tabbed.component';

@NgModule({
  imports: [
    // Angular Core
    CommonModule,

    // Ngx Translate
    TranslateModule,

    // Angular Material
    MatTabsModule
  ],
  declarations: [
    SimpleTabbedComponent,
    SimpleTabbedContentComponent,
    SimpleTabbedHeaderComponent,
    SimpleTabbedItemComponent,
  ],
  exports: [
    SimpleTabbedComponent,
    SimpleTabbedContentComponent,
    SimpleTabbedHeaderComponent,
    SimpleTabbedItemComponent,
  ],
})
export class SimpleTabbedModule { }
