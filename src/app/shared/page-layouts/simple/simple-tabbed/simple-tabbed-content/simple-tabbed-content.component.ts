import { AfterViewInit, Component, ContentChildren, QueryList, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatTab, MatTabGroup } from '@angular/material';
import { SimpleTabbedItemComponent } from './simple-tabbed-item/simple-tabbed-item.component';

@Component({
  selector: 'ak-simple-tabbed-content',
  templateUrl: './simple-tabbed-content.component.html',
  styleUrls: ['./simple-tabbed-content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SimpleTabbedContentComponent implements AfterViewInit {

  @ViewChild(MatTabGroup, {static: true}) matTabGroup: MatTabGroup;
  @ContentChildren(MatTab) tabsFromNgContent: QueryList<MatTab>;
  @ContentChildren(SimpleTabbedItemComponent) tabbedItems: QueryList<MatTab>;

  ngAfterViewInit() {
    let tabItems = [];
    this.tabbedItems.toArray().forEach((item: any) => {
      tabItems = [...tabItems, ...item.inclusiveTabs.toArray()];
     });
    this.matTabGroup._tabs.reset([...this.tabsFromNgContent.toArray(), ...tabItems]);
  }

}