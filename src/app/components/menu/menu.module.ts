import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';
import { MenuRouterModule } from './menu.router.module';

const routes: Routes = [
  {
      path: '',
      component: MenuPage,
      redirectTo: 'inside/menu/list',
      pathMatch: 'full'
  }
];

@NgModule({
  imports: [
  CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MenuRouterModule
  ],
  declarations: [MenuPage]
})
export class MenuPageModule { }
