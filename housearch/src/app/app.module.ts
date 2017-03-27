import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';

import { HousesComponent } from './houses/houses.component';
import { FavoritesComponent } from './houses/favorites/favorites.component';

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
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
