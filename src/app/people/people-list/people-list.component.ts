import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../shared/people.service';
import { People } from '../shared/people';
import { Sort } from '@angular/material';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  people: People[];
  sortedPeople: People[];
  selectedPerson: People;

  constructor(private peopleService: PeopleService) {
  }

  ngOnInit() {
    this.peopleService.getAll().subscribe(res => {
      this.people = res.results;
      this.sortedPeople = res.results.slice();
    });
  }

  selectPerson(person: People) {
    this.selectedPerson = person;
  }

  search(search: string) {
    this.peopleService.getAll(search).subscribe(res => {
      this.people = res.results;
    });
  }

  sortData(sort: Sort) {
    const data = this.people.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedPeople = data;
      return;
    }

    this.sortedPeople = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return this.compare(a.name, b.name, isAsc);
        default: return 0;
      }
    });
  }

  private compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
