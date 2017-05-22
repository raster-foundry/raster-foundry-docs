import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-item',
  template: `
    <a [href]="'#' + section.label"
       class={{labelClass}}>{{section.label}}</a>
  `
})
export class SidebarItemComponent {

  constructor() { }

  @HostBinding('class')
  private classNames: string = '';

  @Input('section') section: any = {};

  get labelClass(): string {
    return this.section.isHeading ? 'sidebar-nav-heading' : 'sidebar-nav-item';
  }
}
