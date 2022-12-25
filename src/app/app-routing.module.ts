import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ConsumerComponent } from './consumer/consumer.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'admin',component: AdminComponent },
  { path: 'consumer', component: ConsumerComponent},
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
