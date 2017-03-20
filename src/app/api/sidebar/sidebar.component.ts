import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  @HostBinding('class.sidebar')

  @HostBinding('class.column')

  ngOnInit() {
  }

}
