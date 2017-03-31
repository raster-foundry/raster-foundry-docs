import { Component, OnInit, HostBinding, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-operation-parameter',
  template: `
    <div class="parameter-details">
      <label class="parameter-name" for="ordering">{{parameter.name}}</label>
      <code class="parameter-type {{parameter.type}}">{{parameter.type}}</code>
    </div>
    <div class="parameter-input">
      <select class="form-control" *ngIf="shouldShowSelect" (change)="emitChange($event)">
        <option *ngFor="let option of parameter.items.enum">{{option}}</option>
      </select>
      <input type="text" class="form-control" placeholder="{{parameter.type}}" *ngIf="!shouldShowSelect" (change)="emitChange($event)" (keyup)="emitChange($event)">
      <div class="parameter-requirement">{{requirement}}</div>
    </div>
    <div class="parameter-description">{{parameter.description}}</div>
  `,
  styles: []
})
export class OperationParameterComponent implements OnInit {

  constructor() { }

  @HostBinding('class')
  private classNames: string = 'parameter';

  @Input('parameter') parameter: any = { };

  @Output() onChange: EventEmitter<any> = new EventEmitter;

  ngOnInit() { }

  get shouldShowSelect(): boolean {
    if (this.parameter.items && this.parameter.items.enum) {
      return Boolean(this.parameter.items.enum.length);
    }
    return false;
  }

  get requirement(): string {
    const required = this.parameter.required || false;
    return required ? 'required' : 'optional';
  }

  emitChange(event): void {
    this.onChange.emit(event);
  }
}
