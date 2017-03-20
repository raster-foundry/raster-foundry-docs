import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'api-operation-samples',
  templateUrl: './operation-samples.component.html',
  styleUrls: ['./operation-samples.component.scss']
})
export class OperationSamplesComponent implements OnInit {

  constructor() { }

  @HostBinding('class.operation-samples')

  ngOnInit() {
  }

}
