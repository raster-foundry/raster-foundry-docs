import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[sidebarItem]'
})

export class SidebarItemDirective {

  @Input('level') level: number = 2;

  target: string = '';

  constructor() { }

}
