import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'li[sidebarItem]',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent implements OnInit {

  constructor() { }

  @Input('label') label: string = '';
  @Input('isHeading') isHeading: boolean = false;

  ngOnInit() {
  }

}
