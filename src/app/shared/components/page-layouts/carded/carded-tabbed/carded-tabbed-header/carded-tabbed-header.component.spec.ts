import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardedTabbedHeaderComponent } from './carded-tabbed-header.component';

describe('CardedTabbedHeaderComponent', () => {
  let component: CardedTabbedHeaderComponent;
  let fixture: ComponentFixture<CardedTabbedHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardedTabbedHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardedTabbedHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
