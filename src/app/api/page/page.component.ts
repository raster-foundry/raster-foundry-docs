import { Component, OnInit } from '@angular/core';
import { SwaggerService } from '../swagger.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  providers: [SwaggerService],
})
export class ApiPageComponent implements OnInit {
  spec: any;
  paths: Array<any>;
  constructor(private swaggerService: SwaggerService) { }

  ngOnInit() {
    this.swaggerService.fetchSpec().then((spec) => {
      console.log(spec);
      this.spec = spec;
      this.paths = Object.keys(this.spec.paths);
    }, (err) => {
      console.error(err);
    })
  }

}
