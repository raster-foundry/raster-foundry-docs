import { Component, HostBinding, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-operation-query-parameter',
  template: `
    <div class="parameter-details">
      <label class="parameter-name" for="ordering">{{parameter.name}}</label>
      <code class="parameter-type {{parameter.type}}">{{parameter.type}}</code>
    </div>
    <div class="parameter-input">
      <select class="form-control"
              *ngIf="shouldShowSelect"
              (input)="emitChange($event)">
        <option *ngIf="requirement === 'optional'"></option>
        <option *ngFor="let option of parameter.items.enum">{{option}}</option>
      </select>

      <input type="text"
             *ngIf="!shouldShowSelect"
             class="form-control"
             placeholder="{{parameter.type}}"
             (input)="emitChange($event)">
      <div class="parameter-requirement">{{requirement}}</div>
    </div>
    <div class="parameter-description">{{parameter.description}}</div>
  `
})
export class OperationQueryParameterComponent {
  constructor() { }

  @HostBinding('class')
  private classNames: string = 'parameter';

  @Input('parameter') parameter: any = { };

  @Output() onChange: EventEmitter<any> = new EventEmitter;

  get shouldShowSelect(): boolean {
    if (this.parameter.items && this.parameter.items.enum) {
      return Boolean(this.parameter.items.enum.length);
    }
    return false;
  }

  get requirement(): string {
    return this.parameter.required ? 'required' : 'optional';
  }

  emitChange(event): void {
    this.onChange.emit({name: this.parameter.name, value: event.target.value, event: event});
  }
}
