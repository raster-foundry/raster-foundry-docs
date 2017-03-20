import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'api-operation-section',
  templateUrl: './operation-section.component.html',
  styleUrls: ['./operation-section.component.scss']
})
export class OperationSectionComponent implements OnInit {

  constructor() { }

  @HostBinding('class.operation')

  ngOnInit() {
  }

}
