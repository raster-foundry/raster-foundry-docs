import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  constructor() { }

  @HostBinding('class.operations')

  ngOnInit() {
  }

}
