import { Component } from '@angular/core';
import { Router }             from '@angular/router';
import { Observable }         from 'rxjs/Observable';

import { HousesService } from './houses.service';

@Component({
  selector: 'houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss'],
  providers: [ HousesService ],
})
export class HousesComponent {
  public houses: any[];
  public title: string;
  public currentPage: number = 1;
  public arrayTotalPages: any[];
  public totalPages: number;

  constructor(
    private housesService: HousesService,
    private router: Router
  ) {}

  ngOnInit(): void{
    this.title = 'Houses here';
    this.getHouses(this.currentPage);
  }
  getHouses(page){
    this.housesService.getHouses(page)
    .subscribe(
      data => {this.houses = data['data'],
      this.totalPages =  data['pages'],
      this.arrayTotalPages = this.range(1, data['pages']);
      this.currentPage = page;
    },
    error => console.log(error)
    );
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
