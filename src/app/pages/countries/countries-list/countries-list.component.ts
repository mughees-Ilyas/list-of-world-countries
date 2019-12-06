import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { country } from '@app/_models';
import { Router } from '@angular/router';

import { UserService } from '@app/_services';

@Component(
  {
    templateUrl: 'countries-list.component.html',
    styleUrls: ['countries-list.component.css']
  }

)
export class CountriesListComponent {
    loading = false;
    countries: country[];
    countriesStorage: country[];

    constructor(private userService: UserService, private router: Router,) { }

    ngOnInit() {
      // set loading true to set the spinner while we get the data
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(countries => {
            this.loading = false;
            this.countries = countries;
            this.countriesStorage = countries;
        });
    }
    byPopulation () {
        this.countries = this.countries.sort(function(a, b){return Number(a.population)-Number(b.population)})

    }
    byName () {
        this.countries = this.countries.sort((a, b) =>{
            let textA = a.name.toUpperCase();
            let textB = b.name.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        })
    }
    search(e) {
        this.countries = this.countriesStorage.filter(data => data.name.toUpperCase().includes(e.target.value.toUpperCase()));
        if (e.target.value === '') {
            this.countries = this.countriesStorage
        }

    }
}
