import { Component, HostBinding } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import { AuthService } from '../services/auth.service';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-topbar-container',
  template: `
<nav class="nav-left">
  <div *ngIf="useRefreshToken && apiTokenEnabled" class="nav-form">
    <input type="text"
           class="form-control nav-control"
           placeholder="Refresh Token"
           [(ngModel)]="refreshToken">
    <span class="btn-group">
      <button type="button"
              class="btn btn-default btn-navbar"
              (click)="onGetSessionTokenClick(refreshToken)"
              [disabled]="!refreshToken.length">Get Session Token</button>
      <button type="button"
              class="btn btn-navbar"
              (click)="useRefreshToken = false;">Enter Session Token</button>
    </span>
  </div>
  <div *ngIf="!useRefreshToken && apiTokenEnabled" class="nav-form">
    <input type="text"
           class="form-control nav-control"
           placeholder="Session Token"
           [value]="token"
           (input)="onTokenChange($event.target.value)">
    <span class="btn-group">
      <button type="button"
              class="btn btn-default btn-navbar"
              [disabled]="isSetTokenDisabled"
              (click)="onSetSessionTokenClick()">
        Use Session Token
      </button>
      <button type="button"
              class="btn btn-navbar"
              (click)="useRefreshToken = true">
        Change Refresh Token
      </button>
    </span>
  </div>
  <button *ngIf="loginEnabled" class="btn btn-navbar">Login</button>
</nav>
<nav class="nav-right">
  <a href="#" class="btn btn-secondary">curl</a>
  {{error}}
</nav>
  `
})
export class TopbarContainerComponent {
  apiTokenEnabled: boolean = true;
  loginEnabled: boolean = false;

  error: string | void = 'No Token';
  private jwtHelper: JwtHelper = new JwtHelper();
  token: string = '';
  refreshToken: string = '';
  useRefreshToken: boolean = true;

  constructor(private authService: AuthService, private settingsService: SettingsService) { }

  @HostBinding('class')
  private classNames: string = 'navbar';

  onTokenChange(token) {
    let cleanToken = token && token.length && token.replace(/['"]+/g, '');
    if (cleanToken) {
      let validationResult = this.authService.validateToken(token);
      if (validationResult instanceof Error) {
        this.error = validationResult.toString();
      } else {
        this.error = null;
      }
    } else {
      this.error = 'No Token';
    }
  }

  onGetSessionTokenClick() {
    console.log(`Getting a session token using refresh token: ${this.refreshToken}`);
    this.authService.getSessionToken(this.refreshToken)
      .subscribe((response) => {
        let apiTokenResponse = response.json();
        this.token = apiTokenResponse.id_token;
        this.onTokenChange(this.token);
        this.useRefreshToken = false;
      });
  }

  onSetSessionTokenClick() {
    console.log(this.token);
    this.authService.token = this.token;
  }

  get isSetTokenDisabled() {
    return this.error;
  }
}
