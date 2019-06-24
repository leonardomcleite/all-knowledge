import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardedFullWidthContentComponent } from './carded-full-width-content.component';

describe('CardedFullWidthContentComponent', () => {
  let component: CardedFullWidthContentComponent;
  let fixture: ComponentFixture<CardedFullWidthContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardedFullWidthContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardedFullWidthContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
