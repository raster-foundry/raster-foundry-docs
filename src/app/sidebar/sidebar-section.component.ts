import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-section',
  template: `
    <a *ngIf="shouldShowTitle()" class="sidebar-nav-heading">{{title}}</a>
    <ng-content></ng-content>
  `
})
export class SidebarSectionComponent implements OnInit {

  constructor() { }

  @HostBinding('class')
  private classNames: string = 'sidebar-nav-items';

  @Input('title') title: string = '';

  shouldShowTitle(): boolean {
    return Boolean(this.title);
  }

  ngOnInit() {
  }

}
