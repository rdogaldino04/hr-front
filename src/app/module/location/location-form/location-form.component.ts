import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LocationFilter } from 'src/app/model/filter/location-filter';

@Component({
    selector: 'app-location-form',
    templateUrl: './location-form.component.html'
})
export class LocationFormComponent implements OnInit {

    public formLocationFilter: FormGroup;
    @Output() search$ = new EventEmitter<LocationFilter>();

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.buildForm();
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

    public clean(): void {
        this.formLocationFilter.reset();
    }

    public onSubmit(): void {
        this.search$.emit(this.createLocationFilter());
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
