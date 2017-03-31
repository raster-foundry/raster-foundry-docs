import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-resource-item',
  template: `
    <a class="sidebar-item">{{resource.name}}</a>
    <app-sidebar-section>
      <a *ngFor="let method of matchingMethods" class="sidebar-item">{{method.summary}}</a>
    </app-sidebar-section>
  `
})
export class SidebarResourceItemComponent implements OnInit {

  constructor() { }
  // @TODO: this will be dynamic and default to false when we begin to detect which resource is in view
  @HostBinding('class.expanded') private isExpanded: boolean = true;
  @Input('resource') resource: any = { };
  @Input('spec') spec: any = { };

  ngOnInit() { }

  get matchingPaths(): any[] {
    if (this.spec && this.resource) {
      const paths = Object.keys(this.spec.paths).map(key => this.spec.paths[key]);
      return paths.filter(path => path['x-resource'] == this.resource.name);
    }
    return [];
  }

  get matchingMethods(): any[] {
    const paths = this.matchingPaths;
    if (paths.length) {
      const methods = paths.map(path => {
        return Object.keys(path).map(key => path[key]).filter(method => method.hasOwnProperty('summary'))
      });
      return [].concat.apply([], methods);
    }
    return [];
  }
}
