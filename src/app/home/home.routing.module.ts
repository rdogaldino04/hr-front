import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { HomeComponent } from './home.component';
import { LoginGuard } from '../core/user/login.guard';

const routes: Route[] = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [LoginGuard],       
    }

]
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
