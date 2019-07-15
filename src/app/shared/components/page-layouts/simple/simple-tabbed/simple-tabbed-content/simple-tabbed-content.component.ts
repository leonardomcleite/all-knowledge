import { AfterViewInit, Component, ContentChildren, QueryList, ViewChild, Input } from '@angular/core';
import { MatTab, MatTabGroup } from '@angular/material';
import { SimpleTabbedItemComponent } from '../simple-tabbed-item/simple-tabbed-item.component';

@Component({
  selector: 'ak-simple-tabbed-content',
  templateUrl: './simple-tabbed-content.component.html',
  styleUrls: ['./simple-tabbed-content.component.scss'],
})
export class SimpleTabbedContentComponent implements AfterViewInit {

  @Input()
  set selectedIndex(value) {
    this._selectedIndex = value != null && !isNaN(value) ? parseInt(value, 10) : value;
  }
  get selectedIndex() {
    return this._selectedIndex;
  }
  private _selectedIndex: any = 0;

  @ViewChild(MatTabGroup, {static: true}) matTabGroup: MatTabGroup;
  @ContentChildren(MatTab) tabsFromNgContent: QueryList<MatTab>;
  @ContentChildren(SimpleTabbedItemComponent) tabbedItems: QueryList<MatTab>;

  ngAfterViewInit() {
    let tabItems = [];
    this.tabbedItems.toArray().forEach((item: any) => {
      tabItems = [...tabItems, ...item.inclusiveTabs.toArray()];
     });
    this.matTabGroup._tabs.reset([...this.tabsFromNgContent.toArray(), ...tabItems]);
    this.matTabGroup.selectedIndex = this.selectedIndex;
  }

}
