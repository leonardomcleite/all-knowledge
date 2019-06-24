import { AfterViewInit, Component, ContentChildren, QueryList, ViewChild } from '@angular/core';
import { MatTab, MatTabGroup } from '@angular/material';
import { CardedTabbedItemComponent } from '../carded-tabbed-item/carded-tabbed-item.component';

@Component({
  selector: 'ak-carded-tabbed-content',
  templateUrl: './carded-tabbed-content.component.html',
  styleUrls: ['./carded-tabbed-content.component.scss']
})
export class CardedTabbedContentComponent implements AfterViewInit {

  @ViewChild(MatTabGroup, {static: true}) matTabGroup: MatTabGroup;
  @ContentChildren(MatTab) tabsFromNgContent: QueryList<MatTab>;
  @ContentChildren(CardedTabbedItemComponent) tabbedItems: QueryList<MatTab>;

  ngAfterViewInit() {
    let tabItems = [];
    this.tabbedItems.toArray().forEach((item: any) => {
      tabItems = [...tabItems, ...item.inclusiveTabs.toArray()];
     });
    this.matTabGroup._tabs.reset([...this.tabsFromNgContent.toArray(), ...tabItems]);
  }

}
