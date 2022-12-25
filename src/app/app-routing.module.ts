import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';
import { ConsumerComponent } from './consumer/consumer.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardConsumerComponent } from './dashboard-consumer/dashboard-consumer.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'admin',component: AdminComponent },
  { path: 'consumer', component: ConsumerComponent},
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full',},
  { path: 'dashboard-admin',component: DashboardAdminComponent },
  { path: 'dashboard-consumer',component: DashboardConsumerComponent },
  { path: 'admin-login', component: AdminLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
