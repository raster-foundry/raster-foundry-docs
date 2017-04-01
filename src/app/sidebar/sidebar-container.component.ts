import { Component, HostBinding, Input } from '@angular/core';
import { SwaggerService } from '../services/swagger.service';

@Component({
  selector: 'app-sidebar-container',
  template: `
    <header>
      <div class="logo">
        <a href="#" class="icon">
          <img src="assets/images/raster-foundry-logo.png">
        </a>
        <a href="#" class="path">
          API
        </a>
      </div>
    </header>

    <nav class="sidebar-nav">
      <!-- Top Matter Navigation -->
      <app-sidebar-section>
        <app-sidebar-item *ngFor="let section of topMatter" [section]=section>
        </app-sidebar-item>
      </app-sidebar-section>

      <!-- Topics(tags) -->
      <app-sidebar-section title="Topics">
        <a class="sidebar-nav-item" *ngFor="let topic of topics">{{topic.name}}</a>
      </app-sidebar-section>

      <!-- Core Resources -->
      <app-sidebar-section title="Core Resources">
        <app-sidebar-resource-item *ngFor="let resource of coreResources"
                                   [resource]="resource"
                                   [spec]="spec"
        >
        </app-sidebar-resource-item>
      </app-sidebar-section>
    </nav>
  `,
  providers: [ SwaggerService ]
})

export class SidebarContainerComponent {

  constructor(private swaggerService: SwaggerService) { }

  @HostBinding('class')
  private classNames: string = 'sidebar column';

  @Input('spec') spec: any = { };

  get topMatter(): any[] {
    const topMatter: any = this.spec['x-top-matter']
    if (topMatter) {
      return topMatter.map(section => {
        const isHeading: boolean = section.level == 1;
        return {
          label: section.title,
          isHeading: isHeading
        };
      });
    }
    return [];
  }

  get topics(): any[] {
    return this.spec['tags'] || [];
  }

  get coreResources(): any[] {
    return this.spec['x-resources'] || [];
  }
}
