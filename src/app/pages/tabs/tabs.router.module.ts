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
            loadChildren: '../films/films.module#FilmsPageModule'
          },
          {
            path: ':id',
            loadChildren: '../films/details/details.module#DetailsPageModule'
          }
        ]
      },
      {
        path: 'people',
        children: [
          {
            path: '',
            loadChildren: '../people/people.module#PeoplePageModule'
          },
          {
            path: ':id',
            loadChildren: '../people/details/details.module#DetailsPageModule'
          }
        ]
      },
      {
        path: 'planets',
        children: [
          {
            path: '',
            loadChildren: '../planets/planets.module#PlanetsPageModule'
          },
          {
            path: ':id',
            loadChildren: '../planets/details/details.module#DetailsPageModule'
          }
        ]
      }/* ,
      {
        path: 'list',
        children: [
          {
            path: '',
            loadChildren: '../memory-book/list/list.module#ListPageModule'
          }
        ]
      } */
    ]
  },
  {
    path: '',
    redirectTo: 'films',
    //pathMatch: 'prefix'
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
