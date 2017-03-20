import { Component, OnInit } from '@angular/core';
import { SwaggerService } from '../swagger.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  providers: [SwaggerService],
})
export class ApiPageComponent implements OnInit {
  spec: any = {};
  resources: Array<any>;
  paths: Array<any>;

  constructor(private swaggerService: SwaggerService) { }

  ngOnInit() {
    this.swaggerService.fetchSpec().then((spec) => {
      this.spec = spec;
      this.resources = this.parseResources();
      this.paths = this.parsePaths();
    }, (err) => {
      console.error(err);
    })
  }

  filterPathsByResource(resourceName: string):Array<any> {
    return this.paths.filter(p => p['x-resource'] === resourceName);
  }

  parseResources():Array<any> {
    return this.spec['x-resources'];
  }

  parsePaths():Array<any> {
    let paths = [];
    (<any>Object).keys(this.spec.paths).forEach(path => {
      paths.push(
        (<any>Object).assign({ path }, this.spec.paths[path])
      );
    });
    return paths;
  }

}
