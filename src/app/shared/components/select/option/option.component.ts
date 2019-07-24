import { Component, OnInit, Input, ViewChildren, QueryList, ContentChildren } from '@angular/core';
import { MatOption } from '@angular/material';

@Component({
  selector: 'ak-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent implements OnInit {

  @ViewChildren(MatOption) inclusiveOptions: QueryList<MatOption>;
  @ContentChildren(MatOption) optionsFromNgContent: QueryList<MatOption>;

  @Input() valueOption;

  constructor() { }

  ngOnInit() {
  }

}
