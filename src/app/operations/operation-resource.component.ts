import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-operation-resource',
  template: `
    <app-operation-container>
      <app-operation-details [id]="resource.name"
                             [title]="resource.name"
                             [content]="resource.description"
                             [level]=2></app-operation-details>
      <app-operation-samples></app-operation-samples>
    </app-operation-container>
    <ng-container *ngFor="let path of matchingPaths">
      <app-operation-resource-method
        *ngFor="let method of matchingMethods(path)"
        [path]="path"
        [method]="method"
        [resource]="resource"
      ></app-operation-resource-method>
    </ng-container>
  `
})
export class OperationResourceComponent {

  constructor() { }

  @Input('resource') resource: any = {};
  @Input('spec') spec: any = {};

  headers: any = {};

  get matchingPaths(): any[] {
    if (this.spec && this.resource) {
      return Object.keys(this.spec.paths)
        .map(key => Object.assign(this.spec.paths[key], { path: key }))
        .filter(path => path['x-resource'] == this.resource.name);
    }
    return [];
  }

  matchingMethods(path): any[] {
    return Object.keys(path)
      .map(key => Object.assign(path[key], { methodType: key }))
      .filter(method => method.summary);
  }
}
