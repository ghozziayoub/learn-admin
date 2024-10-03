import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'categories-list',
    component: CategoriesListComponent,
  },
];
