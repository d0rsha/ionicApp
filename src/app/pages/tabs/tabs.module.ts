import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';
import { TabsRouterModule } from './tabs.router.module';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    redirectTo: 'films',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TabsRouterModule,
  ],
  declarations: [TabsPage]
})
export class TabsPageModule { }
