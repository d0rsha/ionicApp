import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'tabs',
        loadChildren: '../tabs/tabs.module#TabsPageModule'
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
    redirectTo: 'inside/menu/list',
    pathMatch: 'prefix'
  },
  {
    path: 'menu',
    redirectTo: 'inside/menu/list',
    pathMatch: 'prefix'
  }
];

@NgModule({
  declarations: [],
  imports: [
  CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MenuRouterModule { }
