import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
// tslint:disable-next-line: directive-selector
  selector: '[maskNumber]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: MaskNumberDirective,
    multi: true
  }]
})

export class MaskNumberDirective implements ControlValueAccessor, OnInit {

  onTouched: any;
  onChange: any;

  sufixo: any;
  prefixo: string;
  separadorDecimal: string;
  separadorMilhar: string;
  digitos: string;
  casasDecimais: number;
  tamanhoMax: number;

  @Input() set maskNumber(mask: any) {
    this._maskNumber = mask;
    this.ngOnInit();
  }
  private _maskNumber;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.separadorDecimal = this._maskNumber.decimal || ',';
    this.separadorMilhar = this._maskNumber.milhar || '.';
    this.prefixo = this._maskNumber.prefixo || '';
    this.sufixo = this._maskNumber.sufixo || '';
    const digitos = this._maskNumber.digitos ? this._maskNumber.digitos.split(',').map(el => { if (!isNaN(el)) { return parseInt(el, 10); } }) : [];
    this.casasDecimais = digitos[1] || this._maskNumber.casasDecimais || 2;
    this.tamanhoMax = digitos[0];
  }

  writeValue(value: any): void {
    if (value != null && value !== '') {
      if (!isNaN(value)) {
        value = parseFloat(value).toFixed(this.casasDecimais).replace('.', this.separadorDecimal);
      }
      this.el.nativeElement.value = this.aplicarMascara(value.toString());
    } else {
      this.el.nativeElement.value = '';
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  @HostListener('input', ['$event'])
  onKeyup($event: any) {
    let valor = '';
    if ($event.target.value == null || $event.target.value === '') { return; }
    if ($event.target.value === this.separadorDecimal) {
      $event.target.value = '0' + this.separadorDecimal;
      valor = $event.target.value;
    } else {
      valor = this.aplicarMascara($event.target.value);
    }
    this.atualizaInput($event, valor);
  }

  @HostListener('blur', ['$event'])
  onBlur($event: any) {
    if ($event.target.value == null || $event.target.value === '') { return; }
    const valor: string = this.aplicaMascaraFaltante($event.target.value);
    this.atualizaInput($event, valor);
  }

  private atualizaInput($event: any, valor: string) {
    $event.target.value = valor;
    // Insere o prefixo caso exista
    if (this.prefixo !== '') {
      valor = valor.substring(valor.indexOf(this.prefixo) + this.prefixo.length).trim();
    }
    // Insere o sufixo caso exista
    if (this.sufixo !== '') {
      valor = valor.slice(0, valor.indexOf(this.sufixo)).trim();
    }
    // Altera separador decimal conforme informado
    if (this.separadorDecimal === ',') {
      this.onChange(valor.replace(/\./g, '').replace(',', '.'));
    } else {
      this.onChange(valor.replace(/\,/g, ''));
    }
  }

  private aplicaMascaraFaltante(valor: string): string {
    let { rightComma, leftComma } = this.separarDecimais(valor);

    if (rightComma.length < this.casasDecimais) {
      rightComma = `${this.separadorDecimal}${rightComma}${Array((this.casasDecimais - rightComma.length) + 1).join('0')}`;
    } else {
      rightComma = this.casasDecimais != 0 ? this.separadorDecimal + rightComma : '';
    }

    return `${leftComma}${rightComma}`;
  }

  private aplicarMascara(valor: string): string {
    let { rightComma, leftComma } = this.separarDecimais(valor);
    if (rightComma.length > 0 && leftComma.length === 0) { leftComma = '0'; }
    leftComma = leftComma.replace(/\D/g, '');
    const t = parseInt(leftComma, 10);
    leftComma = isNaN(t) ? leftComma : t.toString();

    if (rightComma === '' && valor.includes(this.separadorDecimal) && this.casasDecimais !== 0) { rightComma = this.separadorDecimal; }

    // valida digitos a esquerda do separador decimal
    if (leftComma.length > (this.tamanhoMax - this.casasDecimais)) {
      rightComma = `${leftComma.substr((this.tamanhoMax - this.casasDecimais))}${rightComma}`;
      leftComma = leftComma.substr(0, (this.tamanhoMax - this.casasDecimais));
    }
    // valida digitos a esquerda do separador decimal
    if (rightComma.length > this.casasDecimais) {
      rightComma = rightComma.substr(0, this.casasDecimais);
    }
    if (rightComma) {
      rightComma = rightComma.replace(/\D/g, '');
      rightComma = `${this.separadorDecimal}${rightComma}`;
    }

    leftComma = this.insereSeparadorMilhar(leftComma);
    return `${leftComma}${rightComma}`;
  }

  private separarDecimais(valor: string) {
    const leftComma: string = valor.includes(this.separadorDecimal) ? (valor.substring(0, valor.indexOf(this.separadorDecimal))) : valor;
    const rightComma: string = valor.includes(this.separadorDecimal) ? (valor.substring(valor.indexOf(this.separadorDecimal) + 1, valor.length)).replace(/\D/g, '') : '';
    return { rightComma, leftComma };
  }

  private insereSeparadorMilhar(leftComma: string): string {
    let sepMilhar = 0;
    let valorComSepMilhar = '';
    for (let i = (leftComma.length - 1); i >= 0; i--) {
      if (sepMilhar === 3) {
        valorComSepMilhar = this.separadorMilhar + valorComSepMilhar;
        sepMilhar = 0;
      }
      valorComSepMilhar = leftComma.charAt(i) + valorComSepMilhar;
      sepMilhar++;
    }

    return valorComSepMilhar;
  }
}
