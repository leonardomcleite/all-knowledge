import { Component, OnInit, Input, ViewEncapsulation, ContentChildren, QueryList, ViewChildren } from '@angular/core';
import { MatTab } from '@angular/material';

@Component({
  selector: 'ak-simple-tabbed-item',
  templateUrl: './simple-tabbed-item.component.html',
  styleUrls: ['./simple-tabbed-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SimpleTabbedItemComponent implements OnInit {

  @ViewChildren(MatTab) inclusiveTabs: QueryList<MatTab>;
  @ContentChildren(MatTab) tabsFromNgContent: QueryList<MatTab>;
  @Input() label: string;

  constructor() { }

  ngOnInit() {
  }

}
