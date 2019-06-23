import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFullWidthContentComponent } from './simple-full-width-content.component';

describe('SimpleFullWidthContentComponent', () => {
  let component: SimpleFullWidthContentComponent;
  let fixture: ComponentFixture<SimpleFullWidthContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleFullWidthContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleFullWidthContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
