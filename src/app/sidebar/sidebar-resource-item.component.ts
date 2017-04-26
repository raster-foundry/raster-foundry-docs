import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-resource-item',
  template: `
    <a [href]="'#'+resource.name"
       class="sidebar-item">
      {{resource.name}}
    </a>
    <app-sidebar-section>
      <a *ngFor="let method of matchingMethods"
         class="sidebar-item"
         [href]="method.path"
      >{{method.summary}}</a>
    </app-sidebar-section>
  `
})
export class SidebarResourceItemComponent {

  constructor() { }

  // @TODO: this will be dynamic and default to false when we begin to detect which resource is in view
  @HostBinding('class.expanded') private isExpanded: boolean = true;
  @Input('resource') resource: any = {};
  @Input('spec') spec: any = {};

  get matchingPaths(): any[] {
    if (this.spec && this.resource) {
      const paths = Object.keys(this.spec.paths)
        .map(key => Object({ path: key, methods: this.spec.paths[key] }));
      return paths.filter(path => path.methods['x-resource'] == this.resource.name);
    }
    return [];
  }

  get matchingMethods(): any[] {
    const paths = this.matchingPaths;
    if (paths.length) {
      const methods = paths.map(path => {
        return Object.keys(path.methods)
          .map(
          key => {
            return Object.assign({
              path: `#${path.path}#${key}`
            }, path.methods[key])
          })
          .filter(method => method.summary)
      });
      return [].concat.apply([], methods);
    }
    return [];
  }
}
