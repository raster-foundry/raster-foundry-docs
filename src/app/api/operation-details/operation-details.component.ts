import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'api-operation-details',
  templateUrl: './operation-details.component.html',
  styleUrls: ['./operation-details.component.scss']
})
export class OperationDetailsComponent implements OnInit {

  constructor() { }

  @Input('title') title: string = '';
  @Input('level') level: number = 1;

  @HostBinding('class.operation-details]')

  ngOnInit() {
  }

}
