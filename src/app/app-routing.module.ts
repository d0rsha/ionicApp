import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'people', loadChildren: './pages/people/people.module#PeoplePageModule' },
  { path: 'planets', loadChildren: './pages/planets/planets.module#PlanetsPageModule' },
  { path: 'films', loadChildren: './pages/films/films.module#FilmsPageModule' },
  { path: 'details', loadChildren: './pages/films/details/details.module#DetailsPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
