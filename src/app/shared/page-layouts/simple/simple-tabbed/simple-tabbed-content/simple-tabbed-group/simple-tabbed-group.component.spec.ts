import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTabbedGroupComponent } from './simple-tabbed-group.component';

describe('SimpleTabbedGroupComponent', () => {
  let component: SimpleTabbedGroupComponent;
  let fixture: ComponentFixture<SimpleTabbedGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleTabbedGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleTabbedGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
