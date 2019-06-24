import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleCardedFullWidthComponent } from './example-carded-full-width.component';

describe('ExampleCardedFullWidthComponent', () => {
  let component: ExampleCardedFullWidthComponent;
  let fixture: ComponentFixture<ExampleCardedFullWidthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleCardedFullWidthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleCardedFullWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
