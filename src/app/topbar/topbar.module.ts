import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarContainerComponent } from './topbar-container.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    TopbarContainerComponent
  ],
  declarations: [TopbarContainerComponent]
})
export class TopbarModule { }
