import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFullWidthComponent } from './simple-full-width.component';

describe('SimpleFullWidthComponent', () => {
  let component: SimpleFullWidthComponent;
  let fixture: ComponentFixture<SimpleFullWidthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleFullWidthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleFullWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
