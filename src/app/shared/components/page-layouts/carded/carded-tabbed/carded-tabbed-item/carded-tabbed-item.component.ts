import { Component, OnInit, ViewChildren, QueryList, ContentChildren, Input } from '@angular/core';
import { MatTab } from '@angular/material';

@Component({
  selector: 'ak-carded-tabbed-item',
  templateUrl: './carded-tabbed-item.component.html',
  styleUrls: ['./carded-tabbed-item.component.scss']
})
export class CardedTabbedItemComponent implements OnInit {

  @ViewChildren(MatTab) inclusiveTabs: QueryList<MatTab>;
  @ContentChildren(MatTab) tabsFromNgContent: QueryList<MatTab>;
  @Input() label: string;

  constructor() { }

  ngOnInit() {
  }

}
