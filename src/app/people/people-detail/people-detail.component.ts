import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { People } from '../shared/people';
import { PeopleService } from '../shared/people.service';
import { forkJoin } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Planet } from '../shared/planet';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.scss']
})
export class PeopleDetailComponent implements OnInit, OnChanges {
  @Input() person: People;
  planet: Planet;
  residents: People[];

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.getPlanet();
  }

  getPlanet() {
    if (this.person) {
      this.peopleService.getPlanet(this.person.homeworld)
        .pipe(switchMap((planet) => {
          this.planet = planet;
          if (planet.residents.length) {
            return forkJoin(
              planet.residents.map(resident => {
                return this.peopleService.getByUrl(resident);
              }));
          }
        })).subscribe(residents => {
          this.residents = <People[]>residents;
      });
    }
  }
}
