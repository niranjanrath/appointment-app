import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ClientsComponent} from './clients/clients.component';
import {ProductsComponent} from './products/products.component';
import {UsersComponent} from './users/users.component';
import {VisitorsComponent} from './visitors/visitors.component';
import {AppointmentsComponent} from './appointments/appointments.component';
import {LoginComponent} from './login/login.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'home', component: DashboardComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'visitors', component: VisitorsComponent },
  { path: 'appointments', component: AppointmentsComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PagenotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
