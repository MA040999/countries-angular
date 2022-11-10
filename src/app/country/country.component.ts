import { Component, Input, OnInit } from '@angular/core';
import { ICountry } from './interfaces/country.interface';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  constructor() { }

  @Input() country!: ICountry;

  ngOnInit(): void {
  }

}
