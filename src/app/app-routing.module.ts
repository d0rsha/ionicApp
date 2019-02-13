import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: '*', redirectTo: 'list', pathMatch: 'full' },
  { path: 'pages', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'list', loadChildren: './pages/memory-book/list/list.module#ListPageModule' },
  { path: 'captured-modal', loadChildren: './pages/memory-book/captured-modal/captured-modal.module#CapturedModalPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
