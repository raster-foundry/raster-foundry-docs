import { Injectable } from '@angular/core';

declare var SwaggerParser:any;

@Injectable()
export class SwaggerService {

  constructor() { }

  public fetchSpec(): Promise<any> {
    return new Promise((resolve, reject) => {
      let hostname = location.host;
      let specUrl: string;
      if (hostname.includes('localhost')) {
        specUrl = '/assets/spec.yml';
      } else {
        let parts = hostname.split('.');
        parts[0] = 'spec';
        specUrl = 'http://' + parts.join('.');
      }
      SwaggerParser.dereference(specUrl).then((file: Object) => {
        resolve(file);
      }, (err) => {
        reject(err)
      });
    })
  }
}
