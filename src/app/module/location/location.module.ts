import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationComponent } from './location.component';
import { LocationRoutingModule } from './location-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationListModule } from './location-list/location-list.module';
import { LocationFormModule } from './location-form/location-form.module';



@NgModule({
  declarations: [LocationComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LocationRoutingModule,
    LocationListModule,
    LocationFormModule
  ]
})
export class LocationModule { }
