import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsideRoutingModule } from './inside-routing.module';
import { NavigationPageModule } from './navigation/navigation.module';
import { TabsPageModule } from '../tabs/tabs.module';
import { ListPageModule } from '../../pages/memory-book/list/list.module';
import { LogoutPageModule } from '../../pages/logout/logout.module';
import { MenuPageModule } from '../menu/menu.module';


@NgModule({
  declarations: [],
  imports: [
CommonModule,
    InsideRoutingModule,
    NavigationPageModule,
    TabsPageModule,
    LogoutPageModule,
    MenuPageModule
  ]
})
export class InsideModule { }
