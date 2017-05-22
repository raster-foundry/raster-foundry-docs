import { Component, HostBinding, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-operation-body-parameter',
  templateUrl: './operation-body-parameter.html',
  styleUrls: ['./operation-body-parameter.scss'],
})
export class OperationBodyParameterComponent implements OnInit {

  private parametersJson: string;
  private errorMessage: string;
  showJson: boolean = false;

  constructor() { }

  ngOnInit() {
    this.onJsonChange(
      '{' +
        this.parameters.map((parameter) => this.combineSchemaProperties(parameter)).map(
          (parametersArray) => parametersArray.map(
            (parameter) => `\n  "${parameter.name}": ${parameter.example || '"' + parameter.type + '"'}`)
        ) + '\n}'
    );
  }

  @HostBinding('class')
  private classNames: string = 'parameter body';

  @Input('parameters') parameters: any[] = [{}];

  @Output() onChange: EventEmitter<any> = new EventEmitter;

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

    function concatPropsForItem(schemaItem) {
      if (schemaItem && schemaItem.allOf) {
        schemaItem.allOf.forEach(concatPropsForItem);
      } else if (schemaItem && schemaItem.properties){
        properties = properties.concat(
          Object.keys(schemaItem.properties)
            .map((key)=> {
              return Object.assign(schemaItem.properties[key], {name: key});
            }).filter((item) => !item.readOnly)
        );
      }
    }

    if (schema && schema.allOf || schema.properties) {
      concatPropsForItem(schema)
    } else if (schema.type === 'array') {
      properties = [parameter]
    }
    return properties
  }

  onJsonChange(jsonString) {
    this.parametersJson = jsonString;
    try {
      this.onChange.emit({value: JSON.stringify(JSON.parse(jsonString))})
      this.errorMessage = null;
    } catch(e) {
      if (e instanceof SyntaxError) {
        this.errorMessage = e.message;
      } else {
        throw e;
      }
    }
  }
}
