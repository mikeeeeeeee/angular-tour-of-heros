import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { BattleComponent } from './battle/battle.component';
import { OptionsComponent } from './options/options.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
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
