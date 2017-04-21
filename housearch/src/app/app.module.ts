import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';

import { HousesComponent } from './houses/houses.component';
import { FavoritesComponent } from './houses/favorites/favorites.component';
import { HousesService } from './houses/houses.service'
import { SearchComponent } from './houses/search/search.component'

const appRoutes : Routes = [
  {
    path: 'houses',
    component: HousesComponent,
  },{
    path: 'favorites',
    component: FavoritesComponent,
  },
  {
    path: '',
    redirectTo: '/houses',
    pathMatch: 'full'
  },
]

@NgModule({
  declarations: [
    AppComponent,
    HousesComponent,
    FavoritesComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes
    ),
  ],
  providers: [
    HousesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
