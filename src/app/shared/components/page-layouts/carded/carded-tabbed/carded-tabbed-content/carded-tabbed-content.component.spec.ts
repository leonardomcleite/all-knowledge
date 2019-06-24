import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardedTabbedContentComponent } from './carded-tabbed-content.component';

describe('CardedTabbedContentComponent', () => {
  let component: CardedTabbedContentComponent;
  let fixture: ComponentFixture<CardedTabbedContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardedTabbedContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardedTabbedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
