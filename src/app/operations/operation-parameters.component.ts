import { Component, HostBinding, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-operation-parameters',
  template: `
    <h4 *ngIf="pathParams && pathParams.length">URI Parameters</h4>
    <app-operation-query-parameter
      *ngFor="let parameter of pathParams"
      [parameter]="parameter"
      (onChange)="onPathParamChange($event)"></app-operation-query-parameter>
    <h4 *ngIf="queryParams && queryParams.length">Query Parameters</h4>
    <app-operation-query-parameter
      *ngFor="let parameter of queryParams"
      [parameter]="parameter"
      (onChange)="onQueryParamChange($event)"></app-operation-query-parameter>
    <h4 *ngIf="bodyParams && bodyParams.length">Request Body</h4>
    <app-operation-body-parameter
      *ngIf="bodyParams && bodyParams.length"
      [parameters]="bodyParams"
      (onChange)="onBodyParamChange($event)"></app-operation-body-parameter>
  `
})
export class OperationParametersComponent implements OnInit {

  queryParams: string[];
  pathParams: string[];
  bodyParams: Object[];

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

  onPathParamChange(event): void {
    this.onParameterChange.emit(Object.assign({type: 'path'}, event))
  }

  onQueryParamChange(event): void {
    this.onParameterChange.emit(Object.assign({type: 'query'}, event))
  }

  onBodyParamChange(event): void {
    this.onParameterChange.emit(Object.assign({type: 'body'}, event))
  }
}
