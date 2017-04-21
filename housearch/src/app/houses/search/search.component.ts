import { Component } from '@angular/core';
import { Router }             from '@angular/router';
import { Observable }         from 'rxjs/Observable';
import { Subject }            from 'rxjs/Subject';

import { HousesService } from '../houses.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [ HousesService ],
})
export class SearchComponent {
  page: number = 1;
  query: string = '';
  private searchTerm$ = new Subject<string>();

  constructor(
    private housesService: HousesService,
    private router: Router,
  ) {}

  ngOnInit(): void{

  }
  search(terms: string) {
  }
  getResults(query){
  
  }

}
