import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTabbedHeaderComponent } from './simple-tabbed-header.component';

describe('SimpleTabbedHeaderComponent', () => {
  let component: SimpleTabbedHeaderComponent;
  let fixture: ComponentFixture<SimpleTabbedHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleTabbedHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleTabbedHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
