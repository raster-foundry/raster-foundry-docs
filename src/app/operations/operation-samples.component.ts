import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-operation-samples',
  template: `
    <ng-content></ng-content>
  `
})
export class OperationSamplesComponent {

  constructor() { }

  @HostBinding('class')
  private classNames: string = 'operation-samples';

}
