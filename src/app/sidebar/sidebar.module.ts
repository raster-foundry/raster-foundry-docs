import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarContainerComponent } from './sidebar-container.component';
import { SidebarSectionComponent } from './sidebar-section.component';
import { SidebarResourceItemComponent } from './sidebar-resource-item.component';
import { SidebarItemComponent } from './sidebar-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SidebarContainerComponent
  ],
  declarations: [SidebarContainerComponent, SidebarSectionComponent, SidebarResourceItemComponent, SidebarItemComponent]
})
export class SidebarModule { }
