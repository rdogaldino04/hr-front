import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/user/user';
import { UserService } from '../../../core/user/user.service';
import { Router } from '@angular/router';
import { Pagination } from 'src/app/model/pagination';
import { UserFilter } from '../../../model/filter/user-filter';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$: Observable<User[]> = this.userService.getUsers();
  pagination$: Observable<Pagination>;
  paginationDefault = {
    _embedded: { users: [] },
    page: {
      size: 0,
      totalElements: 0,
      totalPages: 0,
      number: 0
    }
  } as Pagination;
  totalPages = 0;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const userFilter = { name: null, username: null } as UserFilter
    this.pagination$ = this.userService
      .getUsersPagination(userFilter)
      .pipe(tap((p: Pagination) => {
        this.totalPages = p.page.totalPages;
      }));
  }

  goNewUser(): void {
    this.router.navigate(['registrations', 'users', 'new']);
  }

  goUpdateUser(userId: number): void {
    this.router.navigate(['registrations', 'users', 'edit', userId]);
  }

  goPage(page: number): void {
    const userFilter = { name: null, username: null, page } as UserFilter
    this.pagination$ = this.userService.getUsersPagination(userFilter);
  }

  getPageNumbers(): number[] {
    const number = this.totalPages;
    const arr = Array.from({ length: number }, (_, index) => index + 1);
    return arr;
  }

}
