import { AfterViewInit, ContentChildren, Input, QueryList, Type, ViewChild } from '@angular/core';
import { MatTab, MatTabGroup } from '@angular/material';
import { Router } from '@angular/router';

export abstract class TabbedClass implements AfterViewInit {

  @ViewChild(MatTabGroup, {static: true}) matTabGroup: MatTabGroup;

  @ContentChildren(MatTab) tabsFromNgContent: QueryList<MatTab>;

  @Input() setTabInRoute: boolean;
  @Input()
  set selectedIndex(value) {
    this.selectedIndexChange = value != null && !isNaN(value) ? parseInt(value, 10) : value;
  }
  get selectedIndex() {
    return this.selectedIndexChange;
  }
  private selectedIndexChange: any = 0;

  tabbedItems: any;

  constructor(
    private router?: Router,
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
