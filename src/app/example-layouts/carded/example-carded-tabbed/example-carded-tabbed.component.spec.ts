import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleCardedTabbedComponent } from './example-carded-tabbed.component';

describe('ExampleCardedTabbedComponent', () => {
  let component: ExampleCardedTabbedComponent;
  let fixture: ComponentFixture<ExampleCardedTabbedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleCardedTabbedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleCardedTabbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
