import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { People } from './people';
import { environment } from '../../../environments/environment';
import {ApiResponse} from '../../shared/api-response';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getAll(search = null): Observable<ApiResponse<People[]>> {
    const url = search ? `${environment.BASE_API_URL}/people?search=${search}` : `${environment.BASE_API_URL}/people/`;
    return this.http.get<ApiResponse<People[]>>(url);
  }

  getById(id: string): Observable<ApiResponse<People>> {
    return this.http.get<ApiResponse<People>>(`${environment.BASE_API_URL}/people/${id}/`);
  }

  getByUrl(url: string): Observable<any> {
    return this.http.get<ApiResponse<People>>(url);
  }

  getPlanet(url: string) {
    return this.http.get<any>(url);
  }
}
