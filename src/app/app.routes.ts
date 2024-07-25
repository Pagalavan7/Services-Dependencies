import { Routes } from '@angular/router';
import { HomeComponent } from './header/home/home.component';
import { AdminComponent } from './header/admin/admin.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
];
