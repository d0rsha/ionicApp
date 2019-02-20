import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationPage } from './navigation/navigation.page';
import { TabsPage } from '../tabs/tabs.page';
import { ListPage } from '../../pages/memory-book/list/list.page';
import { LogoutPage } from '../../pages/logout/logout.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: NavigationPage,
    children: [
      {
        path: 'home',
        outlet: 'home',
        component: TabsPage
      },
      {
        path: 'mem',
        outlet: 'mem',
        component: ListPage
      },
      {
        path: 'logout',
        outlet: 'logout',
        component: LogoutPage
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class InsideRoutingModule { }
