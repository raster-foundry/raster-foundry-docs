import { Injectable } from '@angular/core';

declare var SwaggerParser:any;

@Injectable()
export class SwaggerService {

  constructor() { }

  public fetchSpec(): Promise<any> {
    return new Promise((resolve, reject) => {
      let hostname = location.host;
      let isLocalhost = hostname.includes('localhost');
      let specUrl: string;
      if (isLocalhost) {
        specUrl = 'https://spec.staging.rasterfoundry.com';
        // specUrl = '/assets/spec.yml'; // uncomment to use assets/spec.yml as the spec instead
      } else {
        let parts = hostname.split('.');
        parts[0] = 'spec';
        specUrl = 'http://' + parts.join('.');
      }
      SwaggerParser.dereference(specUrl).then((file: Object) => {
        resolve(file);
      }, (err) => {
        if (err.message === 'XHR error' && isLocalhost) {
          console.error(`Unable to fetch the spec due to CORS restrictions. Disable CORS or use a local spec in swagger.service.ts`);
        }
        reject(err)
      });
    })
  }
}
