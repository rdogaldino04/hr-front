import { NgModule } from "@angular/core";
import { SignInComponent } from "./signin/signin.component";
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';

@NgModule({
    declarations: [ 
        SignInComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        HomeRoutingModule,
        ReactiveFormsModule,
        VMessageModule
    ]
    
})
export class HomeModule { }