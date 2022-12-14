import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-country-search',
  templateUrl: './country-search.component.html',
  styleUrls: ['./country-search.component.css']
})
export class CountrySearchComponent implements OnInit {

  constructor() { }

  @Output() searchSubmit = new EventEmitter<string>();

  ngOnInit(): void {
  }

  searchFormSubmit(searchCountryName: string) {
    this.searchSubmit.emit(searchCountryName)
    return false
  }

}
