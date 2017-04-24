import { Component, Input } from '@angular/core';
import { Router }             from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { HousesService } from '../houses.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [ HousesService ],
})
export class SearchComponent {
  page: number = 1;
  searchForm;

  constructor(
    private housesService: HousesService,
    private router: Router,
    public fb: FormBuilder,
  ) {}

  ngOnInit(): void{
    this.searchForm = this.fb.group({
      term: [""],
    });
   }

  search(event) {
    let term = this.searchForm.value.term
    this.housesService.publicGetHouses(this.page, term);
  }
}
