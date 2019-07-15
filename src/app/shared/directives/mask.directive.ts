import { MaskTypeEnum } from '@all-knowledge/core/enums/mask-type.enum';
import { Directive, ElementRef, Input, OnInit, HostListener } from '@angular/core';
import { MaskNumberDirective } from './mask-number/mask-number.directive';

@Directive({
  selector: '[akMask]',
})

export class MaskDirective implements OnInit {

  maskNumberDirective: MaskNumberDirective;

  readonly maskTypeEnum = MaskTypeEnum;

  @Input()
  set akMask(mask: any) {
    this._akMask = mask;
    this.ngOnInit();
  }
  get akMask() {
    return this._akMask;
  }
  private _akMask;

  constructor(
    private el: ElementRef,
  ) { }

  ngOnInit() {
    if (this._akMask != null) {
      switch (this._akMask.type) {
        case this.maskTypeEnum.NUMBER:
          this.maskNumberDirective = new MaskNumberDirective(this.el);
          this.maskNumberDirective.maskNumber = this._akMask;
          this.maskNumberDirective.ngOnInit();
          break;
      }
    }
  }

}
