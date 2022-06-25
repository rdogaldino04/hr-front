import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LocationListComponent } from './location-list.component';

@NgModule({
    declarations: [LocationListComponent],
    imports: [CommonModule],
    exports: [LocationListComponent]
})
export class LocationListModule {}
