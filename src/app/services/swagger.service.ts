import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { SettingsService } from '../services/settings.service';

declare var SwaggerParser:any;

@Injectable()
export class SwaggerService {

  spec: any;
  error: any;

  constructor(private http: Http, private settingsService: SettingsService) { }

  public fetchSpec(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.settingsService.specUrl).subscribe(response => {
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
