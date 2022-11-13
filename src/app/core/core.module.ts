import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from './header/header.component';
import { MenuModule } from '../shared/components/menu/menu.module';
import { LoadingModule } from '../shared/components/loading/loading.module';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { RequestInterceptor } from "./user/request.interceptor";
import { ShowIfLoggedModule } from "../shared/directives/show-if-logged/show-if-logged.module";

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
        MenuModule,
        LoadingModule,
        ShowIfLoggedModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true
        }
    ]    
})
export class CoreModule { }