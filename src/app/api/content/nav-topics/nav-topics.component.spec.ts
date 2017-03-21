import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTopicsComponent } from './nav-topics.component';

describe('NavTopicsComponent', () => {
  let component: NavTopicsComponent;
  let fixture: ComponentFixture<NavTopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavTopicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
