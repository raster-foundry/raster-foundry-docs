import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationSamplesComponent } from './operation-samples.component';

describe('OperationSamplesComponent', () => {
  let component: OperationSamplesComponent;
  let fixture: ComponentFixture<OperationSamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationSamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationSamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
