import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-topbar-container',
  template: `
    <nav class="nav-left">
      <a *ngIf="apiTokenEnabled" class="btn btn-default">Set API Token</a>
      <a *ngIf="loginEnabled" class="login-link">Login</a>
    </nav>
    <nav class="nav-right">
      <a href="#" class="btn btn-secondary">curl</a>
    </nav>
  `
})
export class TopbarContainerComponent {

  constructor() { }

  @HostBinding('class')
  private classNames: string = 'navbar';

  private apiTokenEnabled: boolean = false;
  private loginEnabled: boolean = false;
}
