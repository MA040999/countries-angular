import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICountry } from './country/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  restCountriesAPIBaseUrl = 'https://restcountries.com/v3.1';

  constructor(
    private http: HttpClient
  ) { }

  getCountries() {
    return this.http.get<ICountry[]>(this.restCountriesAPIBaseUrl + '/all?fields=name,capital,flags,region,population');
  }

  getCountryByName(name: string) {
    return this.http.get<ICountry[]>(this.restCountriesAPIBaseUrl + `/name/${name}?fullText=true&fields=name,capital,flags,region,population`);
  }
}
