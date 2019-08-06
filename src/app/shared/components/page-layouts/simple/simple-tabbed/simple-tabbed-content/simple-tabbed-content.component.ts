import { AfterViewInit, Component, ContentChildren, Input, QueryList, ViewChild } from '@angular/core';
import { MatTab, MatTabGroup } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { SimpleTabbedItemComponent } from '../simple-tabbed-item/simple-tabbed-item.component';

@Component({
  selector: 'ake-simple-tabbed-content',
  templateUrl: './simple-tabbed-content.component.html',
  styleUrls: ['./simple-tabbed-content.component.scss'],
})
export class SimpleTabbedContentComponent implements AfterViewInit {

  @ContentChildren(SimpleTabbedItemComponent) tabbedItems: QueryList<MatTab>;
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
    private activatedRoute: ActivatedRoute
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
    if (this.setTabInRoute && this.activatedRoute.snapshot.params) {
      if (this.activatedRoute.snapshot.params.tab) {
        this.router.navigateByUrl(this.router.url.replace(this.activatedRoute.snapshot.params.tab, indexTab.toString()));
      } else {
        this.router.navigate([this.router.url, indexTab]);
      }
    }
  }

}
