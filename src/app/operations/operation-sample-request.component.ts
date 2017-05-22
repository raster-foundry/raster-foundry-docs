import { Component, OnInit, OnChanges, HostBinding, Input } from '@angular/core';
import { SettingsService } from '../services/settings.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-operation-sample-request',
  template: `
    <div class="sample-block-title">Example Request</div>
    <pre><code>\
curl -i \\
     -H "Accept: application/json" \\\
<span *ngIf="authService.token">
     -H "Authorization: Bearer {{authService.token}}" \\</span>\
<span *ngIf="methodType && methodType.length">
     -X {{methodType.toUpperCase()}}\
<span *ngIf="bodyParameters && bodyParameters.value"> -d '{{bodyParameters.value}}'</span> \\</span>
     '{{domain}}{{uriParams}}<span *ngFor="let parameter of parsedQueryParameters; let first = first; let last = last"><span *ngIf="first">?</span>{{parameter.name}}={{parameter.value}}<span *ngIf="!last">&</span></span>'</code></pre>
  `,
  providers: [ SettingsService ]
})
export class OperationSampleRequestComponent implements OnInit, OnChanges {

  private parsedUriParameters: any;
  parsedQueryParameters: any;
  uriParams: string;
  domain: string;

  constructor(private settingsService: SettingsService, public authService: AuthService) { }

  @HostBinding('class')
  private classNames: string = 'sample-block';

  @Input('path') path: string = '';
  @Input('headers') headers: any = { };
  @Input('methodType') methodType: string = '';
  @Input('uriParameters') uriParameters: any = { };
  @Input('queryParameters') queryParameters: any = { };
  @Input('bodyParameters') bodyParameters: any = { };


  ngOnInit() {
    this.domain = this.settingsService.apiUrl;
  }

  ngOnChanges(changes) {
    if (changes.uriParameters && changes.uriParameters.currentValue) {
      this.parsedUriParameters =  Object.keys(changes.uriParameters.currentValue)
        .map((key) => {
          return {name: key, value: changes.uriParameters.currentValue[key]}
        });
      this.uriParams = this.injectUriParams();
    }
    if (changes.queryParameters && changes.queryParameters.currentValue) {
      this.parsedQueryParameters =  Object.keys(changes.queryParameters.currentValue)
        .map((key) => {
          return {name: key, value: changes.queryParameters.currentValue[key]}
        });
    }
  }

  injectUriParams() {
    return this.path.replace(
        /{([^{}]*)}/g,
      (a, b) => {
          var r = this.uriParameters && this.uriParameters[b] || a;
          return r.toString();
        }
    );
  }
}
