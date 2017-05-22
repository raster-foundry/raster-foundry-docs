import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

declare var SwaggerParser:any;

@Injectable()
export class SwaggerService {

  spec: any;
  error: any;

  constructor(private http: Http) { }

  public fetchSpec(): Promise<any> {
    return new Promise((resolve, reject) => {
      let hostname = location.host;
      let isLocalhost = hostname.includes('localhost');
      let specUrl: string;
      if (isLocalhost) {
        specUrl = 'https://spec.staging.rasterfoundry.com';
      } else {
        let parts = hostname.split('.');
        parts[0] = 'spec';
        specUrl = 'https://' + parts.join('.');
      }

      this.http.get(specUrl).subscribe(response => {
        try {
          let parsed = SwaggerParser.YAML.parse(response.text());
          SwaggerParser.dereference(parsed).then((file: Object) => {
            resolve(file);
          }, (err) => {
            reject(err)
          });
        }
        catch(e) {
          reject(e)
        }
      }, error => {
        this.error = <any>error
        reject(error);
      });

    })
  }
}
