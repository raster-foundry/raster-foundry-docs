import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavResourceListComponent } from './nav-resource-list/nav-resource-list.component';
import { NavResourceListItemComponent } from './nav-resource-list-item/nav-resource-list-item.component';
import { NavTopicsComponent } from './nav-topics/nav-topics.component';
import { NavTopMatterComponent } from './nav-top-matter/nav-top-matter.component';
import { TopMatterComponent } from './top-matter/top-matter.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavResourceListComponent, NavResourceListItemComponent, NavTopicsComponent, NavTopMatterComponent, TopMatterComponent]
})
export class ContentModule { }
