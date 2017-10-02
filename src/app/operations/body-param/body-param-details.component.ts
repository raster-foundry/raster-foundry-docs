import { Component, HostBinding, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
@Component({
  selector: 'op-body-param-details',
  template: `
  <div class="param-detail-container" *ngIf="property">
    <div class="json-object-prop" *ngIf="getObjectParameterProperties(property).length">
      <button type="button" class="btn btn-outline"
              (click)="selectProperty(subProperty)"
              [ngClass]="{'active': selectedProperty.key === subProperty.key}"
              *ngFor="let subProperty of getObjectParameterProperties(property)">
        {{subProperty.key}} : {{subProperty.property.type}}
      </button>
    </div>
    <div class="json-object-prop"
         *ngIf="getObjectParameterProperties(property).length < 1">
      <button type="button" class="btn btn-outline">
        {{'Object'}}
      </button>
    </div>
    <textarea rows="4"></textarea>

  </div>
  `,
  styles: [
    '.param-detail-container {width: 100%; padding: .5em;}',
    'textarea {width: 100%; resize: vertical; min-height: 5em; margin-top: 0.5em;}'
  ]
})
export class BodyParamDetailsComponent implements OnInit {
  private selectedProperty: any = {};
  @Input('parameter') property: any = {};
  @Output() onChange: EventEmitter<any> = new EventEmitter;

  ngOnInit() {

  }

  getObjectParameterProperties(parameter) {
    if (parameter.properties) {
      let objectProps = Object.keys(parameter.properties).map((key) => {
        return {
          key: key,
          property: parameter.properties[key]
        }
      });
      return objectProps;
    }
    return [];
  }
  selectProperty(property) {
    this.selectedProperty = property;
  }
}
