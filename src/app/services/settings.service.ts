import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {
  private hostname : string;

  constructor() {
    let isLocalhost = location.host.includes('localhost');
    this.hostname = isLocalhost ? 'app.rasterfoundry.com' : location.host;
  }

  get specUrl() {
    let parts = this.hostname.split('.');

    parts[0] = 'spec';
    let specUrl = 'https://' + parts.join('.');
    // let specUrl = '/assets/spec.yml'; // uncomment to use assets/spec.yml as the spec instead

    return specUrl;
  }

  get apiUrl() {
    let parts = this.hostname.split('.');
    parts[0] = 'app';
    return `https://${parts.join('.')}/api`;
  }
}
