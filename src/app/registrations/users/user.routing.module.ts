import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from 'src/app/core/user/login.guard';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {

    path: '',
    component: UserComponent,
    canActivate: [LoginGuard],
    data: {
      title: 'Users',
    },

  },
];

@NgModule({
  imports: [
      RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserRoutesModule { }
