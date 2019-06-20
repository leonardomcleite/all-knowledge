import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTabbedContentComponent } from './simple-tabbed-content.component';

describe('SimpleTabbedContentComponent', () => {
  let component: SimpleTabbedContentComponent;
  let fixture: ComponentFixture<SimpleTabbedContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleTabbedContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleTabbedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
