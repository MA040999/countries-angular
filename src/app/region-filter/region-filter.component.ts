import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-region-filter',
  templateUrl: './region-filter.component.html',
  styleUrls: ['./region-filter.component.css']
})
export class RegionFilterComponent implements OnInit {

  constructor() { }

  @Output() regionFilterEvent = new EventEmitter<string>();

  regions = [
    "Africa",
    "America",
    "Asia",
    "Europe",
    "Oceania",
  ]

  selectedRegion = "";

  ngOnInit(): void {
  }

  regionFilter(region: string) {

    if(region === this.selectedRegion) return

    this.selectedRegion = region;
    this.regionFilterEvent.emit(region)
  
  }

}
