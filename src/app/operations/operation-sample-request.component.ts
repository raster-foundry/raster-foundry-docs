import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-operation-sample-request',
  template: `
    <div class="sample-block-title">Example Request</div>
    <pre><code>curl {{domain}}{{path}}</code></pre>
  `,
  providers: [ SettingsService ]
})
export class OperationSampleRequestComponent implements OnInit {

  constructor(private settingsService: SettingsService) { }

  @HostBinding('class')
  private classNames: string = 'sample-block';

  @Input('path') path: string = '';
  @Input('parameters') parameters: any = { };

  private domain: string;

  ngOnInit() {
    this.domain = this.settingsService.domain;
  }

}
