import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CountriesListComponent } from './countries-list';
import {CountryDetailComponent} from '@app/pages/countries/user-detail/country-detail.component';

const heroesRoutes: Routes = [
  { path: 'countries', component: CountriesListComponent},
  { path: 'country/:id', component: CountryDetailComponent },

];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class CountriesRoutingModule { }
