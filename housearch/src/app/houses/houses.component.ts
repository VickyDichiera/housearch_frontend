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

  constructor(
    private housesService: HousesService,
    private router: Router
  ) {}

  ngOnInit(): void{
      this.title = 'Houses here';
      this.getHouses();
  }
  getHouses(){
    this.housesService.getHouses()
      .subscribe(
        data => {this.houses = data, console.log(data)},
        error => console.log(error)
      );
  }
}
