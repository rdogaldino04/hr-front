import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from '../header/header.component';
import { MenuModule } from '../shared/components/menu/menu.module';

@NgModule({
    declarations: [
        HeaderComponent
        //FooterComponent
    ],
    exports: [
        HeaderComponent
        //FooterComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MenuModule
    ]    
})
export class CoreModule { }