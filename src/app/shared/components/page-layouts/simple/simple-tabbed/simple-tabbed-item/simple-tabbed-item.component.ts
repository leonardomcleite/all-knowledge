import { Component, ContentChildren, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MatTab } from '@angular/material';

@Component({
  selector: 'ake-simple-tabbed-item',
  templateUrl: './simple-tabbed-item.component.html',
  styleUrls: ['./simple-tabbed-item.component.scss'],
})
export class SimpleTabbedItemComponent implements OnInit {

  @ViewChildren(MatTab) inclusiveTabs: QueryList<MatTab>;
  @ContentChildren(MatTab) tabsFromNgContent: QueryList<MatTab>;
  @Input() label: string;

  constructor() { }

  ngOnInit() {
  }

}
