import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardedTabbedComponent } from './carded-tabbed.component';

describe('CardedTabbedComponent', () => {
  let component: CardedTabbedComponent;
  let fixture: ComponentFixture<CardedTabbedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardedTabbedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardedTabbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
