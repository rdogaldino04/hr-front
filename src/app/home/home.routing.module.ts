import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { HomeComponent } from './home.component';
import { SignInComponent } from './signin/signin.component';

const routes: Route[] = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: '',
                component: SignInComponent
            }
        ]
    }

]
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
