import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'ak-example-simple-tabbed',
  templateUrl: './example-simple-tabbed.component.html',
  styleUrls: ['./example-simple-tabbed.component.scss']
})
export class ExampleSimpleTabbedComponent implements OnInit {

  get nome(): FormControl { return (this.formGroup.get('nome') as FormControl); }

  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.buildFormGroup();
  }

  buildFormGroup() {
    this.formGroup = this.formBuilder.group({
      nome: [null, [Validators.required]]
    });
  }

}
