import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleListComponent } from './people-list/people-list.component';
import { peopleRouting } from './people-routing.module';
import { PeopleService } from './shared/people.service';
import {
  MatButtonModule, MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatListModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import { PeopleDetailComponent } from './people-detail/people-detail.component';

@NgModule({
  imports: [
    CommonModule,
    peopleRouting,
    MatFormFieldModule,
    MatPaginatorModule,
    CdkTableModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatCardModule,
    MatListModule
  ],
  declarations: [PeopleListComponent, PeopleDetailComponent],
  providers: [PeopleService]
})
export class PeopleModule { }
