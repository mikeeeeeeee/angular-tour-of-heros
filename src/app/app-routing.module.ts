import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { BattleComponent } from './battle/battle.component';
import { OptionsComponent } from './options/options.component';
import { TopMenuComponent } from './top-menu/top-menu.component';

const routes: Routes = [
  { path: '', redirectTo: '/top_menu', pathMatch: 'full' },
  { path: 'top_menu', component: TopMenuComponent},
  { path: 'options', component: OptionsComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'purchase_phase', component: PurchaseComponent },
  { path: 'battle_phase', component: BattleComponent }
];

@NgModule({
  // file:\\\プロトコル対応 forRoot(routes) → forRoot(routes,{useHash:true})
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
