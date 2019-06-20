import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ak-simple-tabbed-item',
  templateUrl: './simple-tabbed-item.component.html',
  styleUrls: ['./simple-tabbed-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SimpleTabbedItemComponent implements OnInit {

  @Input() label: string;

  constructor() { }

  ngOnInit() {
  }

}
