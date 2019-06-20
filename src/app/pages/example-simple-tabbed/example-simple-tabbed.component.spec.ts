import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleSimpleTabbedComponent } from './example-simple-tabbed.component';

describe('ExampleSimpleTabbedComponent', () => {
  let component: ExampleSimpleTabbedComponent;
  let fixture: ComponentFixture<ExampleSimpleTabbedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleSimpleTabbedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleSimpleTabbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
