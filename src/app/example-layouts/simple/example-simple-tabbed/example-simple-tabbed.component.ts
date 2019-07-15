import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { TypeFieldEnum } from '@all-knowledge/core/enums/type-field.enum';
import { ActivatedRoute } from '@angular/router';
import moment from 'moment';

@Component({
  selector: 'ak-example-simple-tabbed',
  templateUrl: './example-simple-tabbed.component.html',
  styleUrls: ['./example-simple-tabbed.component.scss']
})
export class ExampleSimpleTabbedComponent implements OnInit {

  formGroup: FormGroup;
  typeFieldEnum = TypeFieldEnum;
  params: any;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.buildFormGroup();
    this.observables();
    this.getRouteParams();
  }
  getRouteParams() {
    this.activatedRoute.params.subscribe((params) => {
      this.params = params;
    });
  }

  buildFormGroup() {
    this.formGroup = this.formBuilder.group({
      name: new FormControl(null, [Validators.required]),
      date: new FormControl(null, [Validators.required]),
      value: new FormControl(null, [Validators.required])
    });
  }

  observables() {
    this.formGroup.get('name').valueChanges.subscribe(val => {
      console.log(val);
    });
  }

}
