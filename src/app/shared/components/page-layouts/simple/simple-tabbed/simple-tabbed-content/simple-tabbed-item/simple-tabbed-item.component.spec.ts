import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTabbedItemComponent } from './simple-tabbed-item.component';

describe('SimpleTabbedItemComponent', () => {
  let component: SimpleTabbedItemComponent;
  let fixture: ComponentFixture<SimpleTabbedItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleTabbedItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleTabbedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
