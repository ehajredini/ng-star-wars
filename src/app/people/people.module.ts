import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleListComponent } from './people-list/people-list.component';
import { peopleRouting } from './people-routing.module';
import { PeopleService } from './shared/people.service';
import {
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSortModule
} from '@angular/material';
import { PeopleDetailComponent } from './people-detail/people-detail.component';

@NgModule({
  imports: [
    CommonModule,
    peopleRouting,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSortModule,
    MatCardModule,
    MatListModule
  ],
  declarations: [PeopleListComponent, PeopleDetailComponent],
  providers: [PeopleService]
})
export class PeopleModule { }
