import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteDrawerComponent } from './teste-drawer.component';

describe('TesteDrawerComponent', () => {
  let component: TesteDrawerComponent;
  let fixture: ComponentFixture<TesteDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteDrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
