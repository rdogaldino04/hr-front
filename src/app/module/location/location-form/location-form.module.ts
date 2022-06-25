import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationFormComponent } from './location-form.component';

@NgModule({
    declarations: [LocationFormComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [LocationFormComponent]
})
export class LocationFormModule {}
