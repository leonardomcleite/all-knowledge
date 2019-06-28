import { AfterViewInit, Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'ak-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.scss']
})
export class CardHeaderComponent implements OnInit, AfterViewInit {

  showAvatar: boolean = true;
  @ViewChild('avatar', {static: true}) avatar: ElementRef;

  constructor(
    private renderer: Renderer2
  ) {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (this.avatar && !this.avatar.nativeElement.lastElementChild) {
      this.renderer.setStyle( this.avatar.nativeElement, 'display', 'none');
    }
  }

}
