import { TypeField, TypeFieldEnum } from '@all-knowledge/core/enums/type-field.enum';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, AbstractControl } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import moment from 'moment';
import { TranslatePipe } from '@ngx-translate/core';

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'ak-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    TranslatePipe
  ],
})
export class InputComponent implements OnInit {

  @Output() blur: EventEmitter<any> = new EventEmitter();

  @Input() name: string;
  @Input() frmGroup: FormGroup;
  @Input() frmControlName: string;
  @Input() type: TypeField = TypeFieldEnum.NUMBER;
  @Input() icon: string;
  @Input() hints: any;
  @Input() disabled: (_?: any) => boolean | boolean;
  @Input() formFieldClass: (_?: any) => any  | string;
  @Input() inputClass: (_?: any) => any  | string;

  @Input()
  set placeholder(value) {
    this._placeholder = this.setPlaceholder(value);
  }
  get placeholder() {
    return this._placeholder;
  }
  private _placeholder: string = this.setPlaceholder(null);

  @Input()
  set mask(value) {
    this._mask = value;
    this.format = value;
  }
  get mask() {
    return this._mask;
  }
  private _mask: any;

  readonly typeFieldEnum = TypeFieldEnum;
  format: string = 'DD/MM/AAAA';
  date;

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.buildFormGroup();
    this.checkIsDisabled();
    this.frmGroup.get(this.frmControlName).valueChanges.subscribe((val) => {
      console.log(this.frmGroup.get(this.frmControlName).errors);
    });
    console.log(this.name);
  }

  buildFormGroup() {
    if (this.frmGroup.get(this.frmControlName) == null) {
      this.frmGroup = this.formBuilder.group({
        [this.frmControlName]: new FormControl(null),
      });
    }
  }

  checkIsDisabled() {
    if (this.disabled) {
      this.frmGroup.get(this.frmControlName).disable();
    }
  }

  markTouched() {
    this.frmGroup.get(this.frmControlName).markAsTouched();
    this.frmGroup.get(this.frmControlName).updateValueAndValidity();
  }

  /**
   * Emite o evento blur
   * @param event - Evento do blur
   */
  onBlur(event: any) {
    this.markTouched();
    this.blur.emit(event);
  }

  setPlaceholder(placeholder): string {
    if (this.frmGroup) {
      const req: any = 'required';
      return placeholder == null && this.frmGroup.get(this.frmControlName).validator(req).required  ? 'validacao.campoObrigatorio' : placeholder;
    } else {
      return 'validacao.campoObrigatorio';
    }
  }

}
