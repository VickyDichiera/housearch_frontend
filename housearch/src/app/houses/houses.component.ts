import { Component, OnDestroy } from '@angular/core';
import { Router }             from '@angular/router';
import { Observable }         from 'rxjs/Observable';
import { Subscription }       from 'rxjs/Subscription';

import { HousesService }      from './houses.service';

@Component({
  selector: 'houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss'],
  providers: [ HousesService ],
})
export class HousesComponent implements OnDestroy{
  houses: any[];
  title: string;
  currentPage: number;
  arrayTotalPages: any[];
  totalPages: number;
  subscription: Subscription;
  auxPage: number = 1;

  constructor(
    private housesService: HousesService,
    private router: Router
  ) {
    this.title = 'Houses here';
    this.subscription = housesService.houses$.subscribe(
     houses => {
       this.houses = houses.data;
       this.totalPages = houses.pages;
       this.arrayTotalPages = this.range(1, houses.pages);
       this.currentPage = this.auxPage;
     });

     this.housesService.publicGetHouses(this.currentPage);
  }
  ngOnDestroy() {
   this.subscription.unsubscribe();
  }

  getHouses(page){
    this.housesService.publicGetHouses(page);
    this.auxPage = page;
  }

  paginator(event, page){
    event.preventDefault();
    if(page > 0 && page < this.totalPages+1){
      this.getHouses(page);
    }
  }

  range(start, end, step = 1) {
    let array: number[] = [];
    const len = Math.floor((end - start) / step) + 1
    for(let i = 0; i < len; ++i) { array.push(i+1) }
    return array;
  }
}
