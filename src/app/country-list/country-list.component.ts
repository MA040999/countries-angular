import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryService } from '../country.service';
import { ICountry } from '../country/interfaces/country.interface';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  constructor(
    private countryService: CountryService
  ) { }

  countries!: Observable<ICountry[]>;
  
  ngOnInit(): void {
    this.countries = this.countryService.getCountries();
  }

}
