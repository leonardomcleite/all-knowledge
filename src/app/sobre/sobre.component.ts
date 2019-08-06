import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ake-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {

  tools: Array<string> = ['Angular 8', 'Angular Material 8', 'Ngx Translate - I18n'];

  constructor() { }

  ngOnInit() {
  }

}
