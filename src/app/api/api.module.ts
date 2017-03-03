import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiPageComponent } from './page/page.component';
import { ApiRoutingModule } from './api-routing.module';

@NgModule({
  imports: [
      CommonModule,
      ApiRoutingModule,
  ],
  declarations: [ApiPageComponent]
})
export class ApiModule { }
