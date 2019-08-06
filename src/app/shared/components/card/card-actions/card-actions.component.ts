import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ake-card-actions',
  templateUrl: './card-actions.component.html',
  styleUrls: ['./card-actions.component.scss']
})
export class CardActionsComponent implements OnInit {

  @Input() borderTop: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
