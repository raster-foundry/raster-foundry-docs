import { Component, OnInit, HostBinding } from '@angular/core';
import { SwaggerService } from './services/swagger.service';

@Component({
  selector: 'app-root',
  template: `
    <app-sidebar-container *ngIf="isSpecLoaded" [spec]="spec"></app-sidebar-container>
    <div class="content column">
      <app-topbar-container></app-topbar-container>
      <app-operations-container perfect-scrollbar [spec]="spec"></app-operations-container>
    </div>
  `,
  providers: [SwaggerService]
})

export class AppComponent {

  constructor(private swaggerService: SwaggerService) { }

  @HostBinding('class')
  private classNames: string = 'container row';

  spec: any = {};
  isSpecLoaded: boolean = false;

  ngOnInit() {
    let loadingHash = location.hash;
    location.hash = '';
    this.swaggerService.fetchSpec().then((spec) => {
      this.spec = spec;
      this.isSpecLoaded = true;
      setTimeout(() => {
        location.hash = loadingHash;
      });
    }, (error) => {
      console.error('There was an error while fetching the swagger spec', error);
    });
  }
}
