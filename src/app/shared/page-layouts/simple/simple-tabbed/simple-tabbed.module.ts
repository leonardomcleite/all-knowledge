import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { SimpleTabbedContentComponent } from './simple-tabbed-content/simple-tabbed-content.component';
import { SimpleTabbedGroupComponent } from './simple-tabbed-content/simple-tabbed-group/simple-tabbed-group.component';
import { SimpleTabbedItemComponent } from './simple-tabbed-content/simple-tabbed-item/simple-tabbed-item.component';
import { SimpleTabbedHeaderComponent } from './simple-tabbed-header/simple-tabbed-header.component';
import { SimpleTabbedComponent } from './simple-tabbed.component';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule
  ],
  declarations: [
    SimpleTabbedComponent,
    SimpleTabbedContentComponent,
    SimpleTabbedHeaderComponent,
    SimpleTabbedGroupComponent,
    SimpleTabbedItemComponent
  ],
  exports: [
    SimpleTabbedComponent,
    SimpleTabbedContentComponent,
    SimpleTabbedHeaderComponent,
    SimpleTabbedGroupComponent,
    SimpleTabbedItemComponent
  ],
})
export class SimpleTabbedModule { }
