import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleDrawerComponent } from './example-drawer.component';

describe('ExampleDrawerComponent', () => {
  let component: ExampleDrawerComponent;
  let fixture: ComponentFixture<ExampleDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleDrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
