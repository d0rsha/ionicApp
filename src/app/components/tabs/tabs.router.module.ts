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
            loadChildren: '../../pages/films/films.module#FilmsPageModule'
          },
          {
            path: ':id',
            loadChildren: '../../pages/films/details/details.module#DetailsPageModule'
          }
        ]
      },
      {
        path: 'people',
        children: [
          {
            path: '',
            loadChildren: '../../pages/people/people.module#PeoplePageModule'
          },
          {
            path: ':id',
            loadChildren: '../../pages/people/details/details.module#DetailsPageModule'
          }
        ]
      },
      {
        path: 'planets',
        children: [
          {
            path: '',
            loadChildren: '../../pages/planets/planets.module#PlanetsPageModule'
          },
          {
            path: ':id',
            loadChildren: '../../pages/planets/details/details.module#DetailsPageModule'
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
