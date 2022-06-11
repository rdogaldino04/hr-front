import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationComponent } from './location.component';
import { LocationRoutingModule } from './location-routing.module';



@NgModule({
  declarations: [LocationComponent],
  imports: [
    CommonModule,
    LocationRoutingModule
  ]
})
export class LocationModule { }
