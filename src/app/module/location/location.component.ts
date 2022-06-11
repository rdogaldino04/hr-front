import { Component, OnInit } from '@angular/core';
import { Location } from 'src/app/model/location';
import { LocationService } from 'src/app/service/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  public locations: Location[] = [];

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    this.locationService.findByFilter({city: 'roma'}).subscribe(locations => this.locations = locations);
  }

}
