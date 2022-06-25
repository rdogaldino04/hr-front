import { Component, OnInit } from '@angular/core';
import { LocationFilter } from 'src/app/model/filter/location-filter';
import { Location } from 'src/app/model/location';
import { LocationService } from 'src/app/service/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  public locations: Location[] = [];

  constructor(private locationService: LocationService) {}

  ngOnInit(): void {}

  public onSearch(locationFilter: LocationFilter): void {
    this.locationService.findByFilter(locationFilter)
      .subscribe(locations => this.locations = locations);
  }

}
