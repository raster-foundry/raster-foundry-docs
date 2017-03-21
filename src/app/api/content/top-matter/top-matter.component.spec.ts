import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMatterComponent } from './top-matter.component';

describe('TopMatterComponent', () => {
  let component: TopMatterComponent;
  let fixture: ComponentFixture<TopMatterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopMatterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
