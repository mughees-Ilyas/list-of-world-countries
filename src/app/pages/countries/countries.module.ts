import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';



import {CountryDetailComponent} from '@app/pages/countries/user-detail/country-detail.component';
import { CountriesListComponent } from './countries-list';
import { CountriesRoutingModule } from './countries-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CountriesRoutingModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
      LeafletModule
  ],
  declarations: [
    CountryDetailComponent,
      CountriesListComponent,
  ]
})
export class CountriesModule {}
