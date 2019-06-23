import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFullWidthHeaderComponent } from './simple-full-width-header.component';

describe('SimpleFullWidthHeaderComponent', () => {
  let component: SimpleFullWidthHeaderComponent;
  let fixture: ComponentFixture<SimpleFullWidthHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleFullWidthHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleFullWidthHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
