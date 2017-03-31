import { Component, OnInit, HostBinding, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-operation-parameters',
  template: `
    <h4>Parameters</h4>
    <app-operation-parameter *ngFor="let parameter of method.parameters" [parameter]="parameter" (onChange)="emitChange($event)"></app-operation-parameter>
  `,
  styles: []
})
export class OperationParametersComponent implements OnInit {

  constructor() { }
  @HostBinding('class')
  private classNames: string = 'parameters';

  @Input('method') method: any = { };

  @Output() onParameterChange: EventEmitter<any> = new EventEmitter;

  ngOnInit() {
  }

  emitChange(event): void {
    this.onParameterChange.emit(event);
  }

}
