import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Route Configuration
const routes: Routes = [
  {
    path: 'people',
    loadChildren: './people/people.module#PeopleModule'
  },
  { path: '', redirectTo: 'people', pathMatch: 'full' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
