import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, take } from 'rxjs';
import { CountryService } from '../country.service';
import { ICountry } from '../country/country.interface';

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

  country!: ICountry;


  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;

    const countryName = routeParams.get('countryName') ?? '';

    this.countryService.getCountryByName(countryName).pipe(take(1)).subscribe((data: ICountry[]) => this.country = data[0]);
  
  }

}
