import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavResourceListComponent } from './nav-resource-list.component';

describe('NavResourceListComponent', () => {
  let component: NavResourceListComponent;
  let fixture: ComponentFixture<NavResourceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavResourceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavResourceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
