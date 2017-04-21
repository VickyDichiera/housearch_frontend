import { Injectable } from '@angular/core';
import { Http, Headers }       from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Subject }            from 'rxjs/Subject';
import { Router }      from '@angular/router';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../../environments/environment';


@Injectable()
export class HousesService {
  private backendUrl = environment.backendUrl;
  private housesUrl = this.backendUrl+'houses';
  public query: string;

  // Observable properties sources
  private houses$ = new Subject<any>();
  private house$ = new Subject<number>();

  houses:any;
  house:any;

  constructor(private http: Http, private router: Router) {
  }

  getHouses(): Observable<any> {
    return this.houses$.asObservable();
  }
  getHouse(): Observable<any>{
    return this.house$.asObservable();
  }
  fetchHouses(page, searchTerm=''): Observable<any[]> {
    return this.http.get(`${this.housesUrl}/?page=${page}&searchTerm=${searchTerm}`)
    .map(response => response.json())
    .catch(error => Observable.throw(error.json().error || 'Server error'));
  }
  publicGetHouses(page, serchterm =''){
    this.fetchHouses(page)
    .subscribe(
      houses => {
        this.houses = houses;
        this.houses$.next(houses);
      },
      error => console.log(error)
    );
  }
  fetchHouse(houseId): any{
    const url = `${this.housesUrl}/${houseId}`;
    return this.http.get(url)
      .map(response => {
        this.house = response.json();
        this.house$.next(this.house);
      })
      .catch(error => Observable.throw(error.json() || 'Server error'));
  }
}
