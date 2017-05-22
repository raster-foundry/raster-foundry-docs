import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-operation-resource-method',
  template: `
<app-operation-container>
  <app-operation-details
    [id]="pathId"
    [parent]="resource.name"
    [title]="method.summary"
    [content]="method.description"
    [level]=3
  >
    <app-operation-path [methodType]="method.methodType" [path]="path.path">
    </app-operation-path>
    <app-operation-parameters
      [method]="method"
      *ngIf="method.parameters && method.parameters.length"
      (onParameterChange)="handleParameterChange($event)">
    </app-operation-parameters>
  </app-operation-details>
  <app-operation-samples>
    <app-operation-sample-request [path]="path.path"
                                  [headers]="headers"
                                  [methodType]="method.methodType"
                                  [uriParameters]="uriParameters"
                                  [queryParameters]="queryParameters"
                                  [bodyParameters]="bodyParameters"
    ></app-operation-sample-request>
  </app-operation-samples>
</app-operation-container>
  `
})
export class OperationResourceMethodComponent {

  uriParameters: any = {};
  queryParameters: any = {};
  bodyParameters: any = {};

  constructor() { }

  @Input('resource') resource: any;
  @Input('path') path: any;
  @Input('method') method: any;

  headers: any = { };

  handleParameterChange(event): void {
    let updatedParameter = {};
    updatedParameter[event.name] = event.value;
    if (event.type === 'path') {
      if (event.value.length) {
        this.uriParameters = Object.assign({}, this.uriParameters || {}, updatedParameter);
      } else if (this.uriParameters){
        delete this.uriParameters[event.name]
        this.uriParameters = Object.assign({}, this.uriParameters);
      }
    } else if (event.type === 'query') {
      if (event.value.length) {
        this.queryParameters = Object.assign({}, this.queryParameters || {}, updatedParameter);
      } else if (this.queryParameters){
        delete this.queryParameters[event.name]
        this.queryParameters = Object.assign({}, this.queryParameters);
      }
    } else if (event.type === 'body') {
      if (event.value.length) {
        this.bodyParameters = Object.assign({}, this.bodyParameters || {}, event);
      } else if (this.bodyParameters){
        delete this.bodyParameters[event.name]
        this.bodyParameters = Object.assign({}, this.bodyParameters);
      }
    }
  }

  get pathId() {
    return `${this.path.path}#${this.method.methodType}`;
  }
}
