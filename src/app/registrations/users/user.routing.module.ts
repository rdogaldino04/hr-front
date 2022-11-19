import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from 'src/app/core/user/login.guard';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { UserResolver } from './user.resolver';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
    data: {
      title: 'Users',
    }
  },
  {
    path: 'new',
    component: UserComponent,
    data: {
      title: 'New User',
    },
  },
  {
    path: 'edit/:id',
    component: UserComponent,
    data: {
      title: 'Edit User',
    },
    resolve: {
      user: UserResolver
    }
  }
];

@NgModule({
  imports: [
      RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserRoutesModule { }
