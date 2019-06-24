import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CardedTabbedContentComponent } from './carded-tabbed-content/carded-tabbed-content.component';
import { CardedTabbedHeaderComponent } from './carded-tabbed-header/carded-tabbed-header.component';
import { CardedTabbedItemComponent } from './carded-tabbed-item/carded-tabbed-item.component';
import { CardedTabbedComponent } from './carded-tabbed.component';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule
  ],
  declarations: [
    CardedTabbedComponent,
    CardedTabbedContentComponent,
    CardedTabbedHeaderComponent,
    CardedTabbedItemComponent,
  ],
  exports: [
    CardedTabbedComponent,
    CardedTabbedContentComponent,
    CardedTabbedHeaderComponent,
    CardedTabbedItemComponent,
  ],
})
export class CardedTabbedModule { }
