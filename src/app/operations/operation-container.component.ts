import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-operation-container',
  template: `
    <div class="operation-area">
      <ng-content></ng-content>
    </div>
  `,
  styles: []
})
export class OperationContainerComponent implements OnInit {

  constructor() { }

  @HostBinding('class')
  private classNames: string = 'operation';

  ngOnInit() {
  }

}
