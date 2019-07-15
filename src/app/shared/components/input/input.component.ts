import { TypeField, TypeFieldEnum } from '@all-knowledge/core/enums/type-field.enum';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import moment from 'moment';

@Component({
  selector: 'ak-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {

  @Output() blur: EventEmitter<any> = new EventEmitter();

  /**
   * Dica para usuário saber o que digitar
   */
  @Input() placeholder: string;
  /**
   * Nome que aparecerá no form
   */
  @Input() name: string;
  @Input() frmGroup: FormGroup;
  @Input() frmControlName: string;
  @Input() type: TypeField = TypeFieldEnum.NUMBER;
  @Input() disabled: (_?: any) => boolean | boolean;
  @Input() formFieldClass: (_?: any) => any  | string;
  @Input() inputClass: (_?: any) => any  | string;

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

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.buildFormGroup();
    this.checkIsDisabled();
    this.frmGroup.get(this.frmControlName).valueChanges.subscribe((val) => {
      this.frmGroup.get(this.frmControlName).markAsTouched();
    });
  }

  buildFormGroup() {
    if (this.frmGroup.get(this.frmControlName) == null) {
      this.frmGroup = this.formBuilder.group({
        [this.frmControlName]: new FormControl(null),
      });
    }
    if (this.type === TypeFieldEnum.DATE) {
      this.frmGroup.addControl('dateExibition', new FormControl(this.frmGroup.get(this.frmControlName).value, this.frmGroup.get(this.frmControlName).validator));
      this.createObservable();
      this.mask = null;
    }
  }

  createObservable() {
    this.frmGroup.get('dateExibition').valueChanges.subscribe((val: any) => {
      if (val) {
        const date = moment(val).format('YYYY-MM-DD');
        this.frmGroup.get(this.frmControlName).setValue(date);
        this.frmGroup.get(this.frmControlName).setErrors(this.frmGroup.get('dateExibition').errors);
        this.frmGroup.get(this.frmControlName).updateValueAndValidity();
      }
    });
  }

  checkIsDisabled() {
    if (this.disabled) {
      this.frmGroup.get(this.frmControlName).disable();
    }
  }

  /**
   * Emite o evento blur
   * @param event - Evento do blur
   */
  onBlur(event: any) {
    this.blur.emit(event);
  }

  markTouched() {
    this.frmGroup.get(this.frmControlName).markAsTouched();
    this.frmGroup.get(this.frmControlName).markAsDirty();
    this.frmGroup.get(this.frmControlName).updateValueAndValidity();
  }

}
