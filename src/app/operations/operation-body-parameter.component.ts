import { Component, HostBinding, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-operation-body-parameter',
  templateUrl: './operation-body-parameter.html',
  styleUrls: ['./operation-body-parameter.scss'],
})
export class OperationBodyParameterComponent implements OnInit {

  private showJson: boolean = false;

  constructor() { }

  ngOnInit() { }

  @HostBinding('class')
  private classNames: string = 'parameter body';

  @Input('parameters') parameters: any[] = [{}];

  @Output() onChange: EventEmitter<any> = new EventEmitter;

  emitChange(event): void {
    this.onChange.emit(event);
  }

  get parametersJson() {
    return '{' +
      this.parameters.map((parameter) => this.combineSchemaProperties(parameter)).map(
        (parametersArray) => parametersArray.map(
          (parameter) => `\n  "${parameter.name}": ${parameter.output || parameter.example || parameter.type}`)
      ) + '\n}';
  }

  isObjectParameter(parameter): boolean {
    return parameter.type === 'object' ||
      parameter.schema && !parameter.schema.type ||
      parameter.schema.type === 'object';
  }

  isArrayParameter(parameter): boolean {
    return parameter.type === 'array' || parameter.schema && parameter.schema.type === 'array';
  }

  getParameterProperties(parameter) {
    if (parameter.schema && parameter.schema.allOf) {
      return this.combineSchemaProperties(parameter);
    } else if (parameter.schema &&
               parameter.schema.type &&
               parameter.schema.type === 'array') {
      return [{name: parameter.name, type: `array: ${parameter.schema.items.type}`}]
    } else if (parameter.schema) {
      let schema = parameter.schema
      return Object.keys(schema.properties)
        .map((key)=> {
          return Object.assign(schema.properties[key], {name: key});
        }).filter((item) => !item.readOnly)
    }
  }

  combineSchemaProperties(parameter) {
    let schema = parameter.schema
    let properties: any[] = [];

    if (schema && schema.allOf ) {
      schema.allOf.forEach((schemaItem) => {
        properties = properties.concat(
          Object.keys(schemaItem.properties)
            .map((key)=> {
              return Object.assign(schemaItem.properties[key], {name: key});
            }).filter((item) => !item.readOnly)
        );
      });
    } else if (schema.properties){
        properties = properties.concat(
          Object.keys(schema.properties)
            .map((key)=> {
              return Object.assign(schema.properties[key], {name: key});
            }).filter((item) => !item.readOnly)
        );
    } else if (schema.type === 'array') {
      properties = [parameter]
    }
    return properties
  }
}
