import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TopbarContainerComponent } from './topbar-container.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    TopbarContainerComponent
  ],
  declarations: [TopbarContainerComponent]
})
export class TopbarModule { }
