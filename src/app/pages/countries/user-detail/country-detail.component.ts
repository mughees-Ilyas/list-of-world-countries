import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap, NavigationStart } from '@angular/router';
import { country } from '@app/_models';
import { UserService } from '@app/_services';

import { latLng, tileLayer,circle } from 'leaflet';



@Component(
{
    templateUrl: 'country-detail.component.html',
    styleUrls: ['country-detail.component.css']
})
export class CountryDetailComponent {
    loading = false;
    country: country;
    id:string;
    options:object;
    lat:string;
    long:string;

    constructor(
      private userService: UserService,
      private route: ActivatedRoute,
      private router: Router,
    ) { }

    ngOnInit() {
        this.loading = true;
      this.route.paramMap.subscribe(params => {
        this.id = params.get("id")
      });
        this.route.queryParamMap.subscribe(params => {
            this.lat = params.get('lat');
            this.long = params.get('long');
        });
        this.userService.getSingle(this.id).pipe(first()).subscribe((country) => {
            this.loading = false;
            this.country = country;
        });


        this.options = {
            layers: [
                tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'),
                circle([ Number(this.lat), Number(this.long)], { radius: 70000 }),
            ],
            zoom: 6,
            center: latLng(Number(this.lat), Number(this.long))
        };
    }
/*
* get back to user lost page
 */
  getBack() {
    this.router.navigate(['/users']);
  }
}
