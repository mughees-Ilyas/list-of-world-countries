import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { country } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }
  /*
  * fucntion to get all the countries from backend
   */
    getAll() {
        return this.http.get<country[]>(`${environment.apiUrl}/all`);
    }
    /*
   * function to get single data for the country from backend
    */
    getSingle(data) {
        return this.http.get<country>(`${environment.apiUrl}/alpha/${data}`);
    }
}
