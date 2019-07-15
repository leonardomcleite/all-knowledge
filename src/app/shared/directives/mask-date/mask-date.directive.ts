import { AfterViewChecked, AfterViewInit, Directive, HostListener, Input, ElementRef, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NgModel, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as moment from 'moment';

@Directive({
  selector: '[akMaskDate]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: MaskDateDirective,
    multi: true
  }]
})

export class MaskDateDirective implements ControlValueAccessor {

  @Input() akMaskDate = 'DD/MM/YYYY';

  onTouched: any;
  onChange: any;

  value: any;
  initValue: boolean = false;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  @HostListener('keyup', ['$event'])
  onKeyup($event: any) {
    let valor = $event.target.value;
    if (valor.length === 2 || valor.length === 5) {
      return;
    }
    valor = valor.replace(/\D/g, '');
    if (valor.length === 3) {
      valor = valor.substr(0, 2) + '/' + valor.substr(2, 10);
    } else if (valor.length >= 4) {
      valor = valor.substr(0, 2) + '/' + valor.substr(2, 2) + '/' + valor.substr(4, 4);
    }
    $event.target.value = valor;
    this.onChange(valor);
  }

  @HostListener('blur', ['$event'])
  onBlur($event: any) {
    // const valor = $event.target.value.length;
    // this.onChange('');
    // $event.target.value = '';
  }

}
