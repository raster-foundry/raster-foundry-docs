import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-operation-details',
  template: `
    <a class="parent-tag" href="" *ngIf="parent">{{parent}}</a>
    <div [class]="headingClassNames" *ngIf="title">{{title}}</div>
    <p [innerHTML]="content" *ngIf="content"></p>
    <ng-content></ng-content>
  `
})
export class OperationDetailsComponent {

  constructor() { }

  @HostBinding('class')
  private classNames: string = 'operation-details';

  @Input('title') title: string = '';
  @Input('content') content: string = '';
  @Input('level') level: number = 5;
  @Input('parent') parent: string = '';

  get headingClassNames(): string {
    return `h${this.level}`;
  }

}
