import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationsContainerComponent } from './operations-container.component';
import { OperationContainerComponent } from './operation-container.component';
import { OperationDetailsComponent } from './operation-details.component';
import { OperationSamplesComponent } from './operation-samples.component';
import { OperationResourceComponent } from './operation-resource.component';
import { OperationPathComponent } from './operation-path.component';
import { OperationParametersComponent } from './operation-parameters.component';
import { OperationSampleRequestComponent } from './operation-sample-request.component';
import { OperationParameterComponent } from './operation-parameter.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    OperationsContainerComponent
  ],
  declarations: [OperationContainerComponent, OperationDetailsComponent, OperationSamplesComponent, OperationsContainerComponent, OperationResourceComponent, OperationPathComponent, OperationParametersComponent, OperationSampleRequestComponent, OperationParameterComponent]
})
export class OperationsModule { }
