import { Injectable } from '@angular/core';
import { Http, Headers }       from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Subject }            from 'rxjs/Subject';
import { BehaviorSubject }            from 'rxjs/BehaviorSubject';
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
   private houses = new BehaviorSubject<any>({});
   private house = new BehaviorSubject<any>({});
   // Observable string streams
   houses$ = this.houses.asObservable();
   house$ = this.house.asObservable();

  constructor(private http: Http, private router: Router) {
    console.log('houses service!')
  }

  fetchHouses(page, searchTerm=''): Observable<any[]> {
    return this.http.get(`${this.housesUrl}/?page=${page}&searchTerm=${searchTerm}`)
    .map(response => response.json())
    .catch(error => Observable.throw(error.json().error || 'Server error'));
  }
  counter:number=0;
  publicGetHouses(page, searchTerm =''){
    console.log("gethouse counter: "+ this.counter);
    this.counter ++;
    this.fetchHouses(page, searchTerm)
    .subscribe(
      data => {
        this.houses.next(data);
      },
      error => console.log(error)
    );
  }
  fetchHouse(houseId): any{
    const url = `${this.housesUrl}/${houseId}`;
    return this.http.get(url)
      .map(data => {
        //this.house = response.json();
        this.house.next(data);
      })
      .catch(error => Observable.throw(error.json() || 'Server error'));
  }
}
