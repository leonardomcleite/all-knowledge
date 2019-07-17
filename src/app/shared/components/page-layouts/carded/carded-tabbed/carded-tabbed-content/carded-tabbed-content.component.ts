import { AfterViewInit, Component, ContentChildren, Input, QueryList, ViewChild } from '@angular/core';
import { MatTab, MatTabGroup } from '@angular/material';
import { Router } from '@angular/router';
import { CardedTabbedItemComponent } from '../carded-tabbed-item/carded-tabbed-item.component';

@Component({
  selector: 'ak-carded-tabbed-content',
  templateUrl: './carded-tabbed-content.component.html',
  styleUrls: ['./carded-tabbed-content.component.scss'],
})
export class CardedTabbedContentComponent implements AfterViewInit {

  @ContentChildren(CardedTabbedItemComponent) tabbedItems: QueryList<MatTab>;
  @ContentChildren(MatTab) tabsFromNgContent: QueryList<MatTab>;

  @ViewChild(MatTabGroup, {static: true}) matTabGroup: MatTabGroup;

  @Input() setTabInRoute: boolean;
  @Input()
  set selectedIndex(value) {
    this.selectedIndexChange = value != null && !isNaN(value) ? parseInt(value, 10) : value;
  }
  get selectedIndex() {
    return this.selectedIndexChange;
  }
  private selectedIndexChange: any = 0;

  constructor(
    private router: Router,
  ) {}

  ngAfterViewInit() {
    let tabItems = [];
    this.tabbedItems.toArray().forEach((item: any) => {
      tabItems = [...tabItems, ...item.inclusiveTabs.toArray()];
     });
    this.matTabGroup._tabs.reset([...this.tabsFromNgContent.toArray(), ...tabItems]);
    this.matTabGroup.selectedIndex = this.selectedIndex;
  }

  setParamRoute(indexTab: number) {
    if (this.setTabInRoute) {
      this.router.navigate([this.router.url, indexTab]);
    }
  }

}
