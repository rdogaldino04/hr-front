import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/user/user';
import { UserService } from '../../../core/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$: Observable<User[]> = this.userService.getUsers();

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  goNewUser(): void {
    this.router.navigate(['registrations', 'users', 'new']);
  }

  goUpdateUser(userId: number): void {
    this.router.navigate(['registrations', 'users', 'edit', userId]);
  }

}
