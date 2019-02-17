import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'films',
        children: [
          {
            path: '',
            loadChildren: '../../pages/tabs/films/films.module#FilmsPageModule'
          },
          {
            path: ':id',
            loadChildren: '../../pages/tabs/films/details/details.module#DetailsPageModule'
          }
        ]
      },
      {
        path: 'people',
        children: [
          {
            path: '',
            loadChildren: '../../pages/tabs/people/people.module#PeoplePageModule'
          },
          {
            path: ':id',
            loadChildren: '../../pages/tabs/people/details/details.module#DetailsPageModule'
          }
        ]
      },
      {
        path: 'planets',
        children: [
          {
            path: '',
            loadChildren: '../../pages/tabs/planets/planets.module#PlanetsPageModule'
          },
          {
            path: ':id',
            loadChildren: '../../pages/tabs/planets/details/details.module#DetailsPageModule'
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: 'menu/tabs/films',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsRouterModule { }
