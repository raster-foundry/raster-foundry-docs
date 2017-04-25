import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {

  constructor() { }

  public domain: string = 'https://app.staging.rasterfoundry.com/api';

}
