import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleListComponent } from './people-list/people-list.component';

const peopleRoutes: Routes = [
  {
    path: 'people',
    component: PeopleListComponent
  }
];

export const peopleRouting: ModuleWithProviders = RouterModule.forChild(peopleRoutes);
