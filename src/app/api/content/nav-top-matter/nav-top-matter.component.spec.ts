import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTopMatterComponent } from './nav-top-matter.component';

describe('NavTopMatterComponent', () => {
  let component: NavTopMatterComponent;
  let fixture: ComponentFixture<NavTopMatterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavTopMatterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavTopMatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
