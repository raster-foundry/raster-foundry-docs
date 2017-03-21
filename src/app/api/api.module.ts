import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiPageComponent } from './page/page.component';
import { ApiRoutingModule } from './api-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarSectionComponent } from './sidebar-section/sidebar-section.component';
import { TopbarComponent } from './topbar/topbar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { OperationSectionComponent } from './operation-section/operation-section.component';
import { OperationDetailsComponent } from './operation-details/operation-details.component';
import { OperationSamplesComponent } from './operation-samples/operation-samples.component';
import { SidebarItemDirective } from './sidebar-item/sidebar-item.directive';
import { SidebarExpandableItemDirective } from './sidebar-expandable-item/sidebar-expandable-item.directive';

@NgModule({
  imports: [
      CommonModule,
      ApiRoutingModule,
  ],
  declarations: [ApiPageComponent, SidebarComponent, SidebarSectionComponent, TopbarComponent, MainContentComponent, OperationSectionComponent, OperationDetailsComponent, OperationSamplesComponent, SidebarItemDirective, SidebarExpandableItemDirective]
})
export class ApiModule { }
