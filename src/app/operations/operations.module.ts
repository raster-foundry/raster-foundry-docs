import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OperationsContainerComponent } from './operations-container.component';
import { OperationContainerComponent } from './operation-container.component';
import { OperationDetailsComponent } from './operation-details.component';
import { OperationSamplesComponent } from './operation-samples.component';
import { OperationResourceComponent } from './operation-resource.component';
import { OperationResourceMethodComponent } from './operation-resource-method.component';
import { OperationPathComponent } from './operation-path.component';
import { OperationParametersComponent } from './operation-parameters.component';
import { OperationSampleRequestComponent } from './operation-sample-request.component';
import { OperationQueryParameterComponent } from './operation-query-parameter.component';
import { OperationBodyParameterComponent } from './operation-body-parameter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    OperationsContainerComponent
  ],
  declarations: [OperationContainerComponent, OperationDetailsComponent, OperationSamplesComponent, OperationsContainerComponent, OperationResourceComponent, OperationResourceMethodComponent, OperationPathComponent, OperationParametersComponent, OperationSampleRequestComponent, OperationQueryParameterComponent, OperationBodyParameterComponent]
})
export class OperationsModule { }
