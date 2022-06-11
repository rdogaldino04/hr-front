import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LocationFilter } from 'src/app/model/filter/location-filter';
import { Location } from 'src/app/model/location';
import { LocationService } from 'src/app/service/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  public formLocationFilter: FormGroup;
  public locations: Location[] = [];

  constructor(
    private locationService: LocationService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.findByFilter();
  }

  private findByFilter(): void {
    this.locationService.findByFilter(this.createLocationFilter())
      .subscribe(locations => this.locations = locations);
  }

  private buildForm(): void {
    this.formLocationFilter = this.formBuilder.group({
      id: [undefined],
      streetAddress: [undefined],
      postalCode: [undefined],
      city: [null],
      stateProvince: [undefined]
    });
  }

  public onSubmit(): void {
    this.findByFilter();
  }

  private createLocationFilter(): LocationFilter  {
    return {
      streetAddress: this.formLocationFilter.get('streetAddress').value ? this.formLocationFilter.get('streetAddress').value : '',
      postalCode: this.formLocationFilter.get('postalCode').value ? this.formLocationFilter.get('postalCode').value : '',
      city: this.formLocationFilter.get('city').value ? this.formLocationFilter.get('city').value : '',
      stateProvince: this.formLocationFilter.get('stateProvince').value ? this.formLocationFilter.get('stateProvince').value : ''
    };
  }

}
