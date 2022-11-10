import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../country.service';
import { ITransformedCountry } from '../country/interfaces/country.interface';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService
  ) { }

  country!: ITransformedCountry;

  ngOnInit(): void {

    this.route.params.subscribe(params => {

      window.scrollTo(0, 0)

      if(params['countryCode']){

        this.countryService.getCountryByCode(params['countryCode']).subscribe(country => this.country = country);

        return

      }

      this.countryService.getCountryByName(params['countryName']).subscribe(country => this.country = country);

    })

  }

  getCountryByCode(code: string) {

    this.countryService.getCountryByCode(code).subscribe(country => this.country = country);

  }
  
}
