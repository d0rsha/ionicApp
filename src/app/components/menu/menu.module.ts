import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
  path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'tabs',
        loadChildren: '../../pages/tabs/tabs.module#TabsPageModule'
      },
      {
        path: 'list',
        loadChildren: '../../pages/memory-book/list/list.module#ListPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/menu/list',
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
