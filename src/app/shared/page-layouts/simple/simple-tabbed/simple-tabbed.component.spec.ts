import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTabbedComponent } from './simple-tabbed.component';

describe('SimpleTabbedComponent', () => {
  let component: SimpleTabbedComponent;
  let fixture: ComponentFixture<SimpleTabbedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleTabbedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleTabbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
