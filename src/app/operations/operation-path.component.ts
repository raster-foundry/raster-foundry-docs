import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-operation-path',
  template: `
    <pre class="definition"><code><span class="http_method {{methodType}}">{{methodType}}</span><span class="path">{{path}}</span></code></pre>
  `,
  styles: []
})
export class OperationPathComponent implements OnInit {

  constructor() { }

  @Input('methodType') methodType: string = '';
  @Input('path') path: string = '';

  ngOnInit() {
  }

}
