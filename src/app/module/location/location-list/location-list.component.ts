import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-location-list',
    templateUrl: './location-list.component.html'
})
export class LocationListComponent {

    @Input() public locations: Location[] = [];

}
