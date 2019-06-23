import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleSimpleFullWidthComponent } from './example-simple-full-width.component';

describe('ExampleSimpleFullWidthComponent', () => {
  let component: ExampleSimpleFullWidthComponent;
  let fixture: ComponentFixture<ExampleSimpleFullWidthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleSimpleFullWidthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleSimpleFullWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
