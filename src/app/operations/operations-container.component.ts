import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-operations-container',
  template: `
    <!-- Top matter content -->
    <app-operation-container *ngFor="let section of topMatter">
      <app-operation-details [title]="section.title" [content]="section.content" [level]="section.level"></app-operation-details>
      <app-operation-samples></app-operation-samples>
    </app-operation-container>

    <!-- Operations content -->
    <app-operation-container>
      <app-operation-details title="Core Resources" [level]=1></app-operation-details>
      <app-operation-samples></app-operation-samples>
    </app-operation-container>
    <ng-container *ngFor="let resource of coreResources">
      <app-operation-resource [resource]="resource" [spec]="spec"></app-operation-resource>
    </ng-container>
  `
})
export class OperationsContainerComponent implements OnInit {

  constructor() { }

  @HostBinding('class')
  private classNames: string = 'operations';

  @Input('spec') spec: any = { };

  ngOnInit() {
  }

  get topMatter(): any[] {
    if (this.spec) {
      return this.spec['x-top-matter'];
    }
    return [];
  }

  get coreResources(): any[] {
    if (this.spec.hasOwnProperty('x-resources')) {
      return this.spec['x-resources'];
    }
    return [];
  }

}
