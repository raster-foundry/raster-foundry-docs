import { Component, HostBinding, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-operation-parameters',
  template: `
    <h4 *ngIf="pathParams && pathParams.length">URI Parameters</h4>
    <app-operation-query-parameter
      *ngFor="let parameter of pathParams"
      [parameter]="parameter"
      (onChange)="emitChange($event)"></app-operation-query-parameter>
    <h4 *ngIf="queryParams && queryParams.length">Query Parameters</h4>
    <app-operation-query-parameter
      *ngFor="let parameter of queryParams"
      [parameter]="parameter"
      (onChange)="emitChange($event)"></app-operation-query-parameter>
    <h4 *ngIf="bodyParams && bodyParams.length">Request Body</h4>
    <app-operation-body-parameter
      *ngIf="bodyParams && bodyParams.length"
      [parameters]="bodyParams"
      (onChange)="emitChange($event)"></app-operation-body-parameter>
  `
})
export class OperationParametersComponent implements OnInit {

  private queryParams: string[];
  private pathParams: string[];
  private bodyParams: Object[];

  constructor() { }

  ngOnInit() {
    this.pathParams = this.method.parameters.filter((param) => param.in === 'path');
    this.queryParams = this.method.parameters.filter((param) => param.in === 'query');
    this.bodyParams = this.method.parameters.filter((param) => param.in === 'body');
  }

  @HostBinding('class')
  private classNames: string = 'parameters';

  @Input('method') method: any = { };

  @Output() onParameterChange: EventEmitter<any> = new EventEmitter;

  emitChange(event): void {
    this.onParameterChange.emit(event);
  }

}
