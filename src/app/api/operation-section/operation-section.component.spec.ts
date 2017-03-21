import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationSectionComponent } from './operation-section.component';

describe('OperationSectionComponent', () => {
  let component: OperationSectionComponent;
  let fixture: ComponentFixture<OperationSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
