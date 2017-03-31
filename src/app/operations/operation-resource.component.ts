import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-operation-resource',
  template: `
    <app-operation-container>
      <app-operation-details [title]="resource.name" [content]="resource.description" [level]=2></app-operation-details>
      <app-operation-samples></app-operation-samples>
    </app-operation-container>
    <ng-container *ngFor="let path of matchingPaths">
      <app-operation-container *ngFor="let method of matchingMethods(path)">
        <app-operation-details
          [parent]="resource.name"
          [title]="method.summary"
          [content]="method.summary"
          [level]=3
        >
          <app-operation-path [methodType]="method.methodType" [path]="path.path"></app-operation-path>
          <app-operation-parameters [method]="method" *ngIf="method.parameters.length" (onParameterChange)="handleParameterChange($event)"></app-operation-parameters>
        </app-operation-details>
        <app-operation-samples>
          <app-operation-sample-request [path]="path.path" [parameters]="parameterValues"></app-operation-sample-request>
        </app-operation-samples>
      </app-operation-container>
    </ng-container>
  `,
  styles: []
})
export class OperationResourceComponent implements OnInit {

  constructor() { }

  @Input('resource') resource: any = { };
  @Input('spec') spec: any = { };

  parameterValues: any = { };

  ngOnInit() {
  }

  get matchingPaths(): any[] {
    if (this.spec && this.resource) {
      const paths = Object.keys(this.spec.paths).map(key => Object.assign(this.spec.paths[key], { path: key }));
      return paths.filter(path => path['x-resource'] == this.resource.name);
    }
    return [];
  }

  matchingMethods(path): any[] {
    const methods = Object.keys(path).map(key => Object.assign(path[key], { methodType: key })).filter(method => method.hasOwnProperty('summary'));
    return methods;
  }

  handleParameterChange(event): void {
    // TODO: handle the parameter change events
    // This will be called for a change on any parameter within this section.
    // We'll want to combine this change with the current parameter states.
    // We may want to alter the data that the event is sending at the `operation-paramater` component level.
  }

}
