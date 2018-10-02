import { TestBed, inject } from '@angular/core/testing';

import { PeopleService } from './people.service';
import { HttpClientModule } from '@angular/common/http';

describe('PeopleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [ PeopleService ]
    });
  });

  it('should be created', inject([PeopleService], (service: PeopleService) => {
    expect(service).toBeTruthy();
  }));
});
