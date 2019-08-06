import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'ake-example-drawer',
  templateUrl: './example-drawer.component.html',
  styleUrls: ['./example-drawer.component.scss']
})
export class ExampleDrawerComponent implements OnInit {

  @Input() title = 'Teste';

  constructor() { }

  ngOnInit() {}

}
