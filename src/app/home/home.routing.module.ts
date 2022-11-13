import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { HomeComponent } from './home.component';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './singup/signup.component';
import { LoginGuard } from '../core/user/login.guard';

const routes: Route[] = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [LoginGuard],
            {
                path: '',
                component: SignInComponent,
                data: {
                    title: 'Sign in'
                }
            }, 
            { 
                path: 'signup',
                component: SignUpComponent,
                data: {
                    title: 'Sign up'
                }
            },
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
