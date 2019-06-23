import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ak-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent implements OnInit {

  @Input() sidenav;

  constructor() { }

  ngOnInit() {
  }

}
