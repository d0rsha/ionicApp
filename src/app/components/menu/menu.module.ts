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
      },
      {
        path: 'list/:id',
        loadChildren: '../../pages/memory-book/list/memory-details/memory-details.module#MemoryDetailsPageModule'
      },

    ]
  },
  {
    path: '',
    redirectTo: '/menu/list',
    pathMatch: 'prefix'
  },
  {
    path: 'menu',
    redirectTo: '/menu/list',
    pathMatch: 'prefix'
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
export class MenuPageModule { }
