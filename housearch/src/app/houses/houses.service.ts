import { Injectable } from '@angular/core';
import { Http, Headers }       from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Router }      from '@angular/router';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../../environments/environment';


@Injectable()
export class HousesService {
  private backendUrl = environment.backendUrl;
  private housesUrl = this.backendUrl+'houses';

  constructor(private http: Http, private router: Router) { }

  getHouses(page): Observable<any[]> {
    return this.http.get(`${this.housesUrl}/?page=${page}`)
      .map(response => response.json())
      .catch(error => Observable.throw(error.json().error || 'Server error'));
  }
  getHouse(houseId): any{
    const url = `${this.housesUrl}/${houseId}`;
    return this.http.get(url)
      .map(response => response.json())
      .catch(error => Observable.throw(error.json() || 'Server error'));
  }
}
