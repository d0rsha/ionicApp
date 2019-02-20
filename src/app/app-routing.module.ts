import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './components/guards/auth.guard';


const routes: Routes = [
  { path: '', loadChildren: './components/menu/menu.module#MenuPageModule', canActivate: [AuthGuard] },
  /*{ path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'inside', loadChildren: './components/inside/inside.module#InsideModule' },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
