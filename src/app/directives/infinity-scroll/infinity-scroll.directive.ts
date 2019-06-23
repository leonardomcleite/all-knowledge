import { Directive, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[infinityScroll]'
})
export class ScrollDirective {

  @Output() hvpFixed: EventEmitter<any> = new EventEmitter();
  @Input() hvpScrollElement: any;

  @HostListener('scroll', ['$event'])
  onWindowScroll(event) {
    if (event.target.scrollTop >= 300) {
      this.hvpFixed.emit('1');
    } else if (event.target.scrollTop < 100) {
      this.hvpFixed.emit('0');
    }
  }

  constructor() {}

}
