import { Component, HostBinding, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-operation-parameters',
  template: `
    <h4>Parameters</h4>
    <app-operation-parameter *ngFor="let parameter of method.parameters"
                             [parameter]="parameter"
                             (onChange)="emitChange($event)"
    ></app-operation-parameter>
  `
})
export class OperationParametersComponent {

  constructor() { }

  @HostBinding('class')
  private classNames: string = 'parameters';

  @Input('method') method: any = { };

  @Output() onParameterChange: EventEmitter<any> = new EventEmitter;

  emitChange(event): void {
    this.onParameterChange.emit(event);
  }

}
