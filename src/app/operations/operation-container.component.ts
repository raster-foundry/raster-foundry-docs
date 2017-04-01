import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-operation-container',
  template: `
    <div class="operation-area">
      <ng-content></ng-content>
    </div>
  `
})
export class OperationContainerComponent {

  constructor() { }

  @HostBinding('class')
  private classNames: string = 'operation';

}
