import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'costs', loadChildren: () => import('./components/costs/costs.module').then(m => m.CostsModule) },
  { path: 'incomes', loadChildren: () => import('./components/incomes/incomes.module').then(m => m.IncomesModule) },
  { path: 'remainders', loadChildren: () => import('./components/remainders/remainders.module').then(m => m.RemaindersModule) },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
