import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MaskNumberModel } from './mask.-number.type';

@Directive({
  selector: '[akMaskNumber]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: MaskNumberDirective,
    multi: true
  }]
})

export class MaskNumberDirective implements ControlValueAccessor, OnInit {

  // Parametros da interface ControlValueAccessor
  onTouched: any;
  onChange: any;

  @Input()
  set akMaskNumber(mask: any) { this.akMaskNumberChange = mask; this.ngOnInit(); }
  get akMaskNumber() { return this.akMaskNumberChange; }
  private akMaskNumberChange: MaskNumberModel = new MaskNumberModel();

  constructor(
    private elementRef?: ElementRef
  ) {}

  ngOnInit() {
    if (this.akMaskNumber == null) {
      this.akMaskNumber = new MaskNumberModel();
    } else if (!(this.akMaskNumber instanceof MaskNumberModel)) {
      this.akMaskNumber = new MaskNumberModel(this.akMaskNumber.integers, this.akMaskNumber.decimals, this.akMaskNumber.decimalSeparator, this.akMaskNumber.thousandSeparator);
    }
  }

  /**
   * Implementação da interface ControlValueAccessor
   * @param value - value
   */
  writeValue(value: any): void {
    if (value != null && value !== '') {
      if (!isNaN(value)) {
        value = parseFloat(value).toFixed(this.akMaskNumber.decimals).replace('.', this.akMaskNumber.decimalSeparator);
      }
      if (this.elementRef) {
        this.elementRef.nativeElement.value = this.aplicarMascara(value.toString());
      }
    } else {
      if (this.elementRef) {
        this.elementRef.nativeElement.value = '';
      }
    }
  }

  /**
   * Implementação da interface ControlValueAccessor
   * @param fn - fn
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /**
   * Implementação da interface ControlValueAccessor
   * @param fn - fn
   */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  @HostListener('input', ['$event'])
  onKeyup($event: any) {
    let value = '';
    if ($event.target.value == null || $event.target.value === '') { this.onChange(null); return; }
    if ($event.target.value === this.akMaskNumber.decimalSeparator) {
      $event.target.value = '0' + this.akMaskNumber.decimalSeparator;
      value = $event.target.value;
    } else {
      value = this.aplicarMascara($event.target.value);
    }
    this.atualizaInput($event, value);
  }

  @HostListener('blur', ['$event'])
  onBlur($event: any) {
    if ($event.target.value == null || $event.target.value === '') { this.onChange(null); return; }
    const value: string = this.aplicaMascaraFaltante($event.target.value);
    this.atualizaInput($event, value);
  }

  private atualizaInput($event: any, value: string) {
    $event.target.value = value;
    // Altera separador decimal conforme informado
    if (this.akMaskNumber.decimalSeparator === ',') {
      this.onChange(value.replace(/\./g, '').replace(',', '.'));
    } else {
      this.onChange(value.replace(/\,/g, ''));
    }
  }

  private aplicaMascaraFaltante(value: string): string {
    let { rightComma, leftComma } = this.separateDecimals(value);

    if (rightComma.length < this.akMaskNumber.decimals) {
      rightComma = `${this.akMaskNumber.decimalSeparator}${rightComma}${Array((this.akMaskNumber.decimals - rightComma.length) + 1).join('0')}`;
    } else {
      rightComma = this.akMaskNumber.decimals !== 0 ? this.akMaskNumber.decimalSeparator + rightComma : '';
    }

    return `${leftComma}${rightComma}`;
  }

  private aplicarMascara(value: string): string {
    let { rightComma, leftComma } = this.separateDecimals(value);
    if (rightComma.length > 0 && leftComma.length === 0) { leftComma = '0'; }
    leftComma = leftComma.replace(/\D/g, '');
    const t = parseInt(leftComma, 10);
    leftComma = isNaN(t) ? leftComma : t.toString();

    if (rightComma === '' && value.includes(this.akMaskNumber.decimalSeparator) && this.akMaskNumber.decimals !== 0) { rightComma = this.akMaskNumber.decimalSeparator; }

    // valida digits a esquerda do separador decimal
    if (leftComma.length > this.akMaskNumber.integers) {
      rightComma = `${leftComma.substr(this.akMaskNumber.integers)}${rightComma}`;
      leftComma = leftComma.substr(0, this.akMaskNumber.integers);
    }
    // valida digits a esquerda do separador decimal
    if (rightComma.length > this.akMaskNumber.decimals) {
      rightComma = rightComma.substr(0, this.akMaskNumber.decimals);
    }
    if (rightComma) {
      rightComma = rightComma.replace(/\D/g, '');
      rightComma = `${this.akMaskNumber.decimalSeparator}${rightComma}`;
    }

    leftComma = this.insertThousandSeparator(leftComma);
    return `${leftComma}${rightComma}`;
  }

  private separateDecimals(value: string) {
    const leftComma: string = value.includes(this.akMaskNumber.decimalSeparator) ? (value.substring(0, value.indexOf(this.akMaskNumber.decimalSeparator))) : value;
    const rightComma: string = value.includes(this.akMaskNumber.decimalSeparator) ? (value.substring(value.indexOf(this.akMaskNumber.decimalSeparator) + 1, value.length)).replace(/\D/g, '') : '';
    return { rightComma, leftComma };
  }

  private insertThousandSeparator(leftComma: string): string {
    let thousandSep = 0;
    let valueWithSeparatorThousand = '';
    for (let i = (leftComma.length - 1); i >= 0; i--) {
      if (thousandSep === 3) {
        valueWithSeparatorThousand = this.akMaskNumber.thousandSeparator + valueWithSeparatorThousand;
        thousandSep = 0;
      }
      valueWithSeparatorThousand = leftComma.charAt(i) + valueWithSeparatorThousand;
      thousandSep++;
    }

    return valueWithSeparatorThousand;
  }
}
