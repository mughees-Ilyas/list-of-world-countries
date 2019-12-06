import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';



// used to create fake backend

import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {CountriesModule} from '@app/pages/countries/countries.module';
import {NavbarModule} from '@app/components/navbar/navbar.module';

@NgModule({
    imports: [
        NgbModule,
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        CountriesModule,
        NavbarModule,
        appRoutingModule,
        LeafletModule.forRoot(),
    ],
    declarations: [
        AppComponent,
    ],

    bootstrap: [AppComponent]
})
export class AppModule { }
