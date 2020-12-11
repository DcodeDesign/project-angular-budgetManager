import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { ExempleAngularMaterialComponent } from './components/exemple-angular-material/exemple-angular-material.component';

import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
// import {CostsComponent} from './components/costs/costs.component';
// import {IncomesComponent} from './components/incomes/incomes.component';

@NgModule({
  declarations: [
    AppComponent,
    ExempleAngularMaterialComponent,
    LoginComponent,
    DashboardComponent,
    /*CostsComponent,
    IncomesComponent*/
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
