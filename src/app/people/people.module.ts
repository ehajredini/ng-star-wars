import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleListComponent } from './people-list/people-list.component';
import { peopleRouting } from './people-routing.module';

@NgModule({
  imports: [
    CommonModule,
    peopleRouting
  ],
  declarations: [PeopleListComponent]
})
export class PeopleModule { }
