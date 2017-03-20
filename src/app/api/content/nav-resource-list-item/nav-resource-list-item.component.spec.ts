import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavResourceListItemComponent } from './nav-resource-list-item.component';

describe('NavResourceListItemComponent', () => {
  let component: NavResourceListItemComponent;
  let fixture: ComponentFixture<NavResourceListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavResourceListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavResourceListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
