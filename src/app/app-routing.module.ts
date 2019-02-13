import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './components/menu/menu.module#MenuPageModule' },
 /* { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '*', redirectTo: 'list', pathMatch: 'full' },
  { path: 'pages', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'list', loadChildren: './pages/memory-book/list/list.module#ListPageModule' },
  { path: 'menu', loadChildren: './components/menu/menu.module#MenuPageModule' },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
