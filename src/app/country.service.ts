import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICountry } from './country/interfaces/country.interface';
import { map } from 'rxjs';

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
    return this.http.get<ICountry[]>(this.restCountriesAPIBaseUrl + `/name/${name}?fullText=true&fields=name,capital,flags,region,population,subregion,tld,currencies,languages,borders`).pipe(map((data) => this.transformCountryResponse(data)));
  }

  getCountryByCode(code: string) {
    return this.http.get<ICountry[]>(this.restCountriesAPIBaseUrl + `/alpha/${code}`).pipe(map((data) => this.transformCountryResponse(data)));
  }

  private transformCountryResponse(response: ICountry[]) {
    const country = response[0];

    return {
      ...country,
      currencies: Object.keys(country.currencies).map((key) => country.currencies[key].name),
      languages: Object.values(country.languages),
      name: {
        ...country.name,
        nativeName: Object.values(country.name.nativeName)[0]
      } 
    } 
  }
}
