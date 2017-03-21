import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor() { }

  @HostBinding('class.navbar')

  ngOnInit() {
  }

}
