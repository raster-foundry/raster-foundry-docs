import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHelpPageComponent } from './app-help-page/app-help-page.component';
import { AppHelpRoutingModule } from './app-help-routes.module';

@NgModule({
  imports: [
    CommonModule,
    AppHelpRoutingModule,
  ],
  declarations: [AppHelpPageComponent]
})
export class AppHelpModule { }
