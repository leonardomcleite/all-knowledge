import { TypeField, TypeFieldEnum } from '@all-knowledge/core/enums/type-field.enum';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MM YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MM YYYY',
  },
};

@Component({
  selector: 'ak-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class InputComponent implements OnInit {

  @Output() blur: EventEmitter<any> = new EventEmitter();

  @Input() name: string;
  @Input() frmGroup: FormGroup;
  @Input() frmControlName: string;
  @Input() type: TypeField = TypeFieldEnum.NUMBER;
  @Input() icon: string;
  @Input() suffix: string;
  @Input() hints: Array<string>;
  @Input() disabled: (_?: any) => boolean | boolean;
  @Input() formFieldClass: (_?: any) => any | string;
  @Input() inputClass: (_?: any) => any | string;
  @Input() set placeholder(value) { this.placeholderChange = this.setPlaceholder(value); } get placeholder() { return this.placeholderChange; } private placeholderChange: string = this.setPlaceholder(null);
  @Input() set mask(value) { this.maskChange = value; } get mask() { return this.maskChange; } private maskChange: string | object;

  readonly typeFieldEnum = TypeFieldEnum;

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.buildFormGroup();
    this.checkIsDisabled();
  }

  /**
   * Checa se o formGroup foi criado, caso contrário o método cria.
   */
  buildFormGroup() {
    if (this.frmGroup.get(this.frmControlName) == null) {
      this.frmGroup = this.formBuilder.group({
        [this.frmControlName]: new FormControl(null),
      });
    }
  }

  /**
   * Habilita ou desabilita o campo caso a propriedade "disable" seja informada via @Input()
   */
  checkIsDisabled() {
    if (this.disabled != null) {
      if (this.disabled instanceof Boolean) {
        this.disabled ? this.frmGroup.get(this.frmControlName).disable() : this.frmGroup.get(this.frmControlName).enable();
      } else {
        this.disabled() ? this.frmGroup.get(this.frmControlName).disable() : this.frmGroup.get(this.frmControlName).enable();
      }
    }
  }

  /**
   * Marca o campo como visitado
   */
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

  /**
   * Seta placeholder interno como "Campo obrigatório" quando não informado e o campo seja obrigatório
   * @param placeholder - string
   */
  setPlaceholder(placeholder: string): string {
    if (this.frmGroup) {
      const req: any = 'required';
      return placeholder == null && this.frmGroup.get(this.frmControlName).validator && this.frmGroup.get(this.frmControlName).validator(req).required  ? 'validacao.campoObrigatorio' : placeholder;
    } else {
      return 'validacao.campoObrigatorio';
    }
  }

}
