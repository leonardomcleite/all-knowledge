import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardedFullWidthComponent } from './carded-full-width.component';

describe('CardedFullWidthComponent', () => {
  let component: CardedFullWidthComponent;
  let fixture: ComponentFixture<CardedFullWidthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardedFullWidthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardedFullWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
