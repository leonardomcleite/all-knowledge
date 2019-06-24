import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ak-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent implements OnInit {

  @Output() clickIcon: EventEmitter<any> = new EventEmitter<any>();
  @Input() sidenav;

  constructor() { }

  ngOnInit() {
  }

  onClickIcon() {
    this.clickIcon.next();
  }

}
