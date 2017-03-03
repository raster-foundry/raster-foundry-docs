import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHelpPageComponent } from './app-help-page.component';

describe('AppHelpPageComponent', () => {
  let component: AppHelpPageComponent;
  let fixture: ComponentFixture<AppHelpPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppHelpPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHelpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
