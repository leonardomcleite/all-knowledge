import { Component, OnInit, Output, EventEmitter, Input, QueryList, ContentChildren, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { TypeField, TypeFieldEnum } from '@all-knowledge/core/enums/type-field.enum';
import { OptionComponent } from './option/option.component';
import { MatOption, MatSelect } from '@angular/material';

@Component({
  selector: 'ake-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSelect, {static: false}) matSelect: MatSelect;
  @ContentChildren(OptionComponent) optionItems: QueryList<MatOption>;
  @ContentChildren(MatOption) optionsFromNgContent: QueryList<MatOption>;

  @Output() blur: EventEmitter<any> = new EventEmitter();
  @Output() selectionChange: EventEmitter<any> = new EventEmitter();

  // options = [{code: 20, desciption: 20}];

  @Input() outline: string = 'outline';
  @Input() name: string;
  @Input() frmGroup: FormGroup;
  @Input() frmControlName: string;
  @Input() type: TypeField = TypeFieldEnum.NUMBER;
  @Input() icon: string;
  @Input() suffix: string;
  @Input() hints: Array<string>;
  @Input() appearance: string;
  @Input() options: Array<any>;
  @Input() disabled: (_?: any) => boolean | boolean;
  @Input() classInput: (_?: any) => any | string;
  @Input() classFormField: (_?: any) => any | string;
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

  ngAfterViewInit() {
    let optionsItems = [];
    if (this.optionItems) {
      this.optionItems.toArray().forEach((item: any) => {
        optionsItems = [...optionsItems, ...item.inclusiveOptions.toArray()];
      });
    }
    this.matSelect.options.reset([...this.optionsFromNgContent.toArray(), ...optionsItems]);
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

  onSelectionChange(event: any) {
    this.markTouched();
    this.selectionChange.emit(event);
  }

  /**
   * Seta placeholder interno como "Campo obrigatório" quando não informado e o campo seja obrigatório
   * @param placeholder - string
   */
  setPlaceholder(placeholder: string): string {
    // if (this.frmGroup) {
    //   const req: any = 'required';
    //   return placeholder == null && this.frmGroup.get(this.frmControlName).validator && this.frmGroup.get(this.frmControlName).validator(req).required  ? 'validacao.campoObrigatorio' : placeholder;
    // } else {
    //   return 'validacao.campoObrigatorio';
    // }
    return placeholder;
  }

}
