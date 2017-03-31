import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-item',
  template: `
    <a [ngClass]="computeClasses()">{{section.label}}</a>
  `
})
export class SidebarItemComponent implements OnInit {

  constructor() { }

  @HostBinding('class')
  private classNames: string = '';

  @Input('section') section: any = {};

  computeClasses(): any {
    return {
      'sidebar-nav-heading': this.section.isHeading,
      'sidebar-nav-item': !this.section.isHeading
    };
  }

  ngOnInit() { }

}
