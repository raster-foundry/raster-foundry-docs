import { Injectable } from '@angular/core';
declare var SwaggerParser:any;

@Injectable()
export class SwaggerService {

  constructor() { }

  public fetchSpec(): Promise<any> {
    return new Promise((resolve, reject) => {
      SwaggerParser.parse('/assets/spec.yml').then((file: Object) => {
        resolve(file);
      }, (err) => {
        reject(err)
      });
    })
  }
}
