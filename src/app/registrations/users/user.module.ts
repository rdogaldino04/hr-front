import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserRoutesModule } from './user.routing.module';
import { UserResolver } from './user.resolver';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VMessageModule,
    UserRoutesModule
  ],
  declarations: [
    UserComponent,
    UserListComponent
  ],
  providers: [
    UserResolver
  ]
})
export class UserModule { }
