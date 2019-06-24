import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardedFullWidthHeaderComponent } from './carded-full-width-header.component';

describe('CardedFullWidthHeaderComponent', () => {
  let component: CardedFullWidthHeaderComponent;
  let fixture: ComponentFixture<CardedFullWidthHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardedFullWidthHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardedFullWidthHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
