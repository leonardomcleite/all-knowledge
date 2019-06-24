import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardedTabbedItemComponent } from './carded-tabbed-item.component';

describe('CardedTabbedItemComponent', () => {
  let component: CardedTabbedItemComponent;
  let fixture: ComponentFixture<CardedTabbedItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardedTabbedItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardedTabbedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
