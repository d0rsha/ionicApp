import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsideRoutingModule } from './inside-routing.module';
import { NavigationPageModule } from './navigation/navigation.module';
import { TabsPageModule } from '../tabs/tabs.module';
import { ListPageModule } from '../../pages/memory-book/list/list.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InsideRoutingModule,
    NavigationPageModule,
    TabsPageModule,
    ListPageModule
  ]
})
export class InsideModule { }
